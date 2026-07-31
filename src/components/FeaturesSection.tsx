import { useEffect, useRef, useState } from 'react'

const FEATURES = [
  {
    title: '50 PRAVLJIC',
    description:
      'Tople zgodbe za lahno noč, ki spodbujajo domišljijo in ustvarjajo prostor za skupne trenutke pred spanjem.',
    video: '/pravljice.mp4',
    icon: '/1.png',
  },
  {
    title: '50 POBARVANK',
    description:
      'Pobarvanke, ki otroke umirijo in jim ponudijo miren, ustvarjalen odmor od zaslonov.',
    video: '/POBARVANKE.mp4',
    icon: '/2.png',
  },
  {
    title: '30 AKTIVNOSTI BREZ ZASLONOV',
    description:
      'Preproste igre in opravila za doma, ki otrokovo pozornost peljejo daleč stran od zaslonov.',
    video: '/aktivnosti.mp4',
    icon: '/3.png',
  },
  {
    title: '45 IZZIVOV PRIJAZNOSTI',
    description:
      'Majhni vsakodnevni izzivi, ki otroke učijo empatije, hvaležnosti in prijaznosti do drugih.',
    video: '/izzivi-prijaznosti.mp4',
    icon: '/5.png',
  },
  {
    title: '32 POGOVORNIH KARTIC',
    description:
      'Vprašanja, ki odprejo pristne pogovore in pomagajo družini preživeti več pristnega časa skupaj.',
    video: '/pogovorne-kartice.mp4',
    icon: '/6.png',
  },
  {
    title: '25 MISELNIH IN UČNIH IZZIVOV',
    description:
      'Miselni in učni izzivi, ki na igriv način krepijo logiko, spomin in željo po znanju.',
    video: '/miselniizzivi.mp4',
    icon: '/7.png',
  },
]

export default function FeaturesSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [revealed, setRevealed] = useState<boolean[]>(() => FEATURES.map(() => false))
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const activeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = cardRefs.current.findIndex((el) => el === entry.target)
            if (idx !== -1) setActiveIndex(idx)
          }
        })
      },
      { threshold: 0.6 },
    )

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const idx = cardRefs.current.findIndex((el) => el === entry.target)
          if (idx === -1) return
          setRevealed((prev) => {
            if (prev[idx]) return prev
            const next = [...prev]
            next[idx] = true
            return next
          })
        })
      },
      { threshold: 0.15 },
    )

    cardRefs.current.forEach((el) => {
      if (!el) return
      activeObserver.observe(el)
      revealObserver.observe(el)
    })

    return () => {
      activeObserver.disconnect()
      revealObserver.disconnect()
    }
  }, [])

  const scrollToCard = (index: number) => {
    cardRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <section className="relative bg-[#fbf4e8] px-5 md:px-10 lg:px-16 py-20 md:py-40 lg:py-48">
      <div className="grid lg:grid-cols-[400px_1fr] xl:grid-cols-[460px_1fr] gap-24 xl:gap-48">
        <div className="lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-between lg:py-32">
          <h2 className="text-black text-2xl sm:text-3xl lg:text-[46px] leading-[1.2] font-normal">
            Kaj najdete v priročniku?
          </h2>

          <div className="hidden lg:flex flex-col gap-2">
            {FEATURES.map((feature, index) => (
              <button
                key={feature.title}
                onClick={() => scrollToCard(index)}
                className={`text-left px-6 py-3.5 rounded-xl transition-colors text-base font-medium ${
                  activeIndex === index ? 'bg-[#b08b65]/20 text-black' : 'bg-[#b08b65]/20 text-black/40'
                }`}
              >
                {feature.title}
              </button>
            ))}
          </div>

          <div className="flex flex-col items-center lg:items-start gap-4 mt-6 lg:mt-0 text-center lg:text-left">
            <p className="text-black text-sm font-medium">
              Manj zaslonov. Več domišljije. Več skupnih trenutkov.
            </p>
            <a
              href="https://checkout.mailerlite.com/checkout/32932"
              target="_blank"
              rel="noopener noreferrer"
              className="self-center lg:self-start bg-[#b08b65] text-white text-base font-medium px-6 py-3 rounded-xl hover:bg-white hover:text-[#b08b65] transition-colors whitespace-nowrap"
            >
              KUPI ZDAJ: 15,80€
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-8 md:gap-12">
          {FEATURES.map((feature, index) => (
            <div
              key={feature.title}
              ref={(el) => {
                cardRefs.current[index] = el
              }}
              className={`bg-[#b08b65]/20 backdrop-blur-sm rounded-3xl p-6 md:p-10 flex flex-col gap-6 transition-all duration-700 ease-out ${
                revealed[index] ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'
              }`}
            >
              <div className="flex items-center gap-4">
                <img src={feature.icon} alt="" className="w-14 h-14 md:w-16 md:h-16 object-contain shrink-0" />
                <h3 className="text-black text-xl md:text-2xl font-medium">{feature.title}</h3>
              </div>
              <div className="aspect-video rounded-2xl overflow-hidden bg-[#b08b65]/30">
                <video
                  src={feature.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-black/60 font-medium text-sm md:text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

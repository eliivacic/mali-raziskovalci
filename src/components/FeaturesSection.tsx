import { useState } from 'react'

const FEATURES = [
  {
    title: '50 PRAVLJIC',
    description:
      'Kratke, tople zgodbe z nežnimi življenjskimi sporočili, ki spodbujajo domišljijo, pogovor in kakovosten skupni čas pred spanjem ali čez dan.',
    video: '/pravljice.mp4',
    icon: '/1.png',
  },
  {
    title: '50 POBARVANK',
    description:
      'Čudovite ilustracije za sproščeno ustvarjanje, razvijanje fine motorike, zbranosti in ustvarjalnosti – brez hitenja in brez zaslonov.',
    video: '/POBARVANKE.mp4',
    icon: '/2.png',
  },
  {
    title: '30 AKTIVNOSTI BREZ ZASLONOV',
    description:
      'Preproste ideje za igro doma ali na prostem, ki spodbujajo gibanje, raziskovanje, ustvarjalnost in pristno družinsko povezanost.',
    video: '/aktivnosti.mp4',
    icon: '/3.png',
  },
  {
    title: '45 IZZIVOV PRIJAZNOSTI',
    description:
      'Majhna dobra dejanja, ki otroka na igriv način učijo empatije, hvaležnosti, sodelovanja in prijaznosti do drugih.',
    video: '/izzivi-prijaznosti.mp4',
    icon: '/5.png',
  },
  {
    title: '32 POGOVORNIH KARTIC',
    description:
      'Premišljena vprašanja, ki odpirajo iskrene pogovore, krepijo medsebojno zaupanje in pomagajo bolje spoznati otrokove misli in občutke.',
    video: '/pogovorne-kartice.mp4',
    icon: '/6.png',
  },
  {
    title: '25 MISELNIH IN UČNIH IZZIVOV',
    description:
      'Zabavne naloge za razvijanje logičnega razmišljanja, koncentracije, opazovanja in samozavestnega reševanja problemov.',
    video: '/miselniizzivi.mp4',
    icon: '/7.png',
  },
]

export default function FeaturesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="relative bg-[#f3e6d3] px-5 md:px-10 lg:px-16 py-20 md:py-32">
      <div className="max-w-[1600px] mx-auto flex flex-col items-center gap-12">
        <h2 className="text-black text-2xl sm:text-3xl lg:text-5xl font-normal text-center">
          Kaj najdete v priročniku?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 md:gap-4 w-full">
          {FEATURES.map((feature, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={feature.title}
                className="group relative aspect-[4/5] rounded-3xl overflow-hidden bg-white shadow-sm border border-black/5"
              >
                <div className="absolute inset-0 flex flex-col items-center p-6">
                  <div className="flex-1 flex items-end justify-center">
                    <img
                      src={feature.icon}
                      alt=""
                      className="w-20 h-20 md:w-24 md:h-24 object-contain"
                    />
                  </div>
                  <div className="mt-3 flex flex-col items-center gap-3 w-full">
                    <h3 className="text-black text-base md:text-lg font-medium leading-tight text-center min-h-[2.5rem] md:min-h-[3.5rem] flex items-center justify-center line-clamp-2">
                      {feature.title}
                    </h3>
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="text-[#b08b65] text-sm font-semibold hover:underline"
                    >
                      Preberi več →
                    </button>
                  </div>
                </div>

                <div
                  className={`absolute inset-0 bg-[#b08b65]/95 flex items-center justify-center p-6 text-center transition-opacity duration-300 group-hover:opacity-100 ${
                    isOpen ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(null)}
                    aria-label="Zapri"
                    className="lg:hidden absolute top-3 right-3 w-7 h-7 flex items-center justify-center rounded-full bg-white/20 text-white text-sm hover:bg-white/30"
                  >
                    ✕
                  </button>
                  <p className="text-white text-sm md:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-black text-sm font-medium">
            Manj zaslonov. Več domišljije. Več skupnih trenutkov.
          </p>
          <a
            href="https://checkout.mailerlite.com/checkout/32932"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#b08b65] text-white text-base font-medium px-6 py-3 rounded-xl hover:bg-white hover:text-[#b08b65] transition-colors whitespace-nowrap"
          >
            KUPI ZDAJ: 15,80€
          </a>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-2 text-black/60 text-xs md:text-sm font-medium">
            <span className="flex items-center gap-2">🔒 Varno plačilo</span>
            <span className="flex items-center gap-2">⚡ Takojšnja dostava po e-pošti</span>
            <span className="flex items-center gap-2">📖 270+ strani vsebine</span>
          </div>
        </div>
      </div>
    </section>
  )
}

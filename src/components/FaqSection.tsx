import { useState } from 'react'

const FAQS = [
  {
    question: 'Kaj natančno vsebuje priročnik?',
    answer:
      'Priročnik obsega več kot 270 strani: 50 pravljic, 50 pobarvank, 30 aktivnosti brez zaslonov, 45 izzivov prijaznosti, 32 pogovornih kartic in 25 miselnih ter učnih izzivov.',
  },
  {
    question: 'V kakšni obliki prejmem priročnik?',
    answer:
      'Priročnik je v digitalni obliki (PDF). Takoj po nakupu ga prejmete na svoj e-poštni naslov, od koder si ga lahko prenesete in natisnete ali uporabljate na zaslonu.',
  },
  {
    question: 'Za katero starost otrok je primeren?',
    answer: 'Vsebine so zasnovane za otroke od 3. do 7. leta.',
  },
  {
    question: 'Ali potrebujem tiskalnik za uporabo?',
    answer:
      'Za pobarvanke in nekatere aktivnosti priporočamo tiskanje, ni pa nujno — pravljice, izzive prijaznosti in pogovorne kartice lahko uporabljate tudi neposredno na zaslonu telefona, tablice ali računalnika.',
  },
  {
    question: 'Kako poteka nakup in kdaj prejmem dostop?',
    answer:
      'Po kliku na gumb "Kupi zdaj" vas povežemo na varno spletno blagajno. Po zaključenem nakupu prejmete povezavo do priročnika na e-pošto v nekaj minutah.',
  },
  {
    question: 'Ali lahko priročnik uporablja več otrok hkrati?',
    answer:
      'Seveda — pobarvanke in delovne liste lahko po želji natisnete v več izvodih, ostale vsebine (pravljice, izzive, pogovorne kartice) pa lahko sorojenci uporabljajo skupaj.',
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="bg-[#fbf4e8] px-6 py-20 md:py-32">
      <div className="max-w-3xl mx-auto flex flex-col gap-10">
        <h2 className="text-black text-3xl sm:text-4xl md:text-5xl font-normal text-center">
          Pogosta vprašanja
        </h2>

        <div className="flex flex-col gap-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={faq.question}
                className="bg-[#b08b65]/10 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
                >
                  <span className="text-black text-base md:text-lg font-medium">
                    {faq.question}
                  </span>
                  <span
                    className={`shrink-0 text-[#b08b65] text-2xl leading-none transition-transform ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <p className="px-6 pb-5 text-black/70 text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

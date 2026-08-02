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
    answer: 'Vsebine so zasnovane za otroke od 3 do 10 let.',
  },
  {
    question: 'Ali potrebujem tiskalnik za uporabo?',
    answer:
      'Za pobarvanke in nekatere aktivnosti priporočamo tiskanje, ni pa nujno — pravljice, izzive prijaznosti in pogovorne kartice lahko uporabljate tudi neposredno na zaslonu telefona, tablice ali računalnika.',
  },
  {
    question: 'Kako poteka nakup in kdaj prejmem dostop?',
    answer: (
      <>
        Po kliku na gumb "Kupi zdaj" vas povežemo na varno spletno blagajno. Po zaključenem
        nakupu prejmete povezavo do priročnika v nekaj minutah. Če se povezava ne prikaže, nas
        kontaktirajte na{' '}
        <a href="mailto:info@maliraziskovalci.si" className="text-brand-text underline hover:no-underline">
          info@maliraziskovalci.si
        </a>
        .
      </>
    ),
  },
  {
    question: 'Ali lahko priročnik uporablja več otrok hkrati?',
    answer:
      'Seveda — pobarvanke in delovne liste lahko po želji natisnete v več izvodih, ostale vsebine (pravljice, izzive, pogovorne kartice) pa lahko sorojenci uporabljajo skupaj.',
  },
  {
    question: 'Ali je priročnik v slovenščini?',
    answer: 'Da, celoten priročnik je pripravljen v slovenščini.',
  },
  {
    question: 'Kako dolgo imam dostop do priročnika?',
    answer:
      'Priročnik je vaš za vedno — enkrat prenesena PDF datoteka ostane na vaši napravi brez časovne omejitve.',
  },
  {
    question: 'Ali je priročnik primeren tudi kot darilo?',
    answer:
      'Vsekakor! Po nakupu lahko povezavo do priročnika preprosto posredujete osebi, kateri ga želite podariti.',
  },
  {
    question: 'Kaj če nimam kreditne kartice za plačilo?',
    answer: (
      <>
        Brez skrbi — pišite nam na{' '}
        <a href="mailto:info@maliraziskovalci.si" className="text-brand-text underline hover:no-underline">
          info@maliraziskovalci.si
        </a>{' '}
        in vam bomo poslali predračun po e-pošti.
      </>
    ),
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const half = Math.ceil(FAQS.length / 2)
  const columns = [FAQS.slice(0, half), FAQS.slice(half)]

  const renderFaq = (faq: (typeof FAQS)[number], index: number) => {
    const isOpen = openIndex === index
    return (
      <div key={faq.question} className="bg-brand/10 rounded-2xl overflow-hidden">
        <button
          onClick={() => setOpenIndex(isOpen ? null : index)}
          className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
        >
          <span className="text-black text-base md:text-lg font-medium">{faq.question}</span>
          <span
            className={`shrink-0 text-brand-text text-2xl leading-none transition-transform ${
              isOpen ? 'rotate-45' : ''
            }`}
          >
            +
          </span>
        </button>
        <div
          className={`grid transition-[grid-template-rows] duration-[250ms] ease-[cubic-bezier(0.32,0.72,0,1)] ${
            isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
          }`}
        >
          <div className="overflow-hidden">
            <p
              className={`px-6 pb-5 text-black/70 text-sm md:text-base leading-relaxed transition-opacity duration-150 ${
                isOpen ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {faq.answer}
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section className="bg-cream px-6 py-20 md:py-32">
      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        <h2
          className="text-black text-3xl sm:text-4xl md:text-5xl text-center"
          style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic' }}
        >
          Pogosta vprašanja
        </h2>

        <div className="grid lg:grid-cols-2 gap-4 lg:gap-x-6">
          {columns.map((column, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-4">
              {column.map((faq, i) => renderFaq(faq, colIndex === 0 ? i : i + half))}
            </div>
          ))}
        </div>

        <p className="text-black/70 text-sm md:text-base text-center">
          Imate vprašanje?{' '}
          <a
            href="mailto:info@maliraziskovalci.si"
            className="text-brand-text font-semibold underline hover:no-underline"
          >
            Pišite nam na info@maliraziskovalci.si
          </a>
        </p>
      </div>
    </section>
  )
}

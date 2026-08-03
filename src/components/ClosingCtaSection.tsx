import BuyButton from './BuyButton'

export default function ClosingCtaSection() {
  return (
    <section className="relative px-6 py-20 md:py-28 overflow-hidden">
      <img
        src="/maliraziskovalci_ozadje.png"
        alt=""
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-brand-deep/85" />

      <div className="relative max-w-xl mx-auto flex flex-col items-center text-center gap-6">
        <h2
          className="text-white text-3xl sm:text-4xl md:text-5xl leading-tight"
          style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic' }}
        >
          Pripravljeni na več skupnih trenutkov?
        </h2>
        <p className="text-white text-base md:text-lg font-medium">
          270+ strani pravljic, pobarvank in aktivnosti — vse na enem mestu, za vedno vaše. Manj
          kot 6 centov na stran.
        </p>
        <BuyButton className="mt-2 bg-white text-brand-text text-base font-semibold px-8 py-3.5 rounded-xl hover:bg-black hover:text-white transition duration-150 ease-out active:scale-[0.97] whitespace-nowrap">
          KUPI ZDAJ: 15,80€
        </BuyButton>
      </div>
    </section>
  )
}

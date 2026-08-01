export default function ClosingCtaSection() {
  return (
    <section className="relative bg-[#b08b65] px-6 py-20 md:py-28 overflow-hidden">
      <img
        src="/1.png"
        alt=""
        className="hidden md:block absolute left-6 lg:left-16 bottom-0 w-32 lg:w-44 h-auto pointer-events-none select-none"
      />
      <img
        src="/2.png"
        alt=""
        className="hidden md:block absolute right-6 lg:right-16 bottom-0 w-28 lg:w-40 h-auto pointer-events-none select-none"
      />

      <div className="relative max-w-xl mx-auto flex flex-col items-center text-center gap-6">
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-normal leading-tight">
          Pripravljeni na več skupnih trenutkov?
        </h2>
        <p className="text-white/80 text-base md:text-lg font-medium">
          270+ strani pravljic, pobarvank in aktivnosti — vse na enem mestu, za vedno vaše.
        </p>
        <a
          href="https://checkout.mailerlite.com/checkout/32932"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 bg-white text-[#b08b65] text-base font-semibold px-8 py-3.5 rounded-xl hover:bg-black hover:text-white transition-colors whitespace-nowrap"
        >
          KUPI ZDAJ: 15,80€
        </a>
      </div>
    </section>
  )
}

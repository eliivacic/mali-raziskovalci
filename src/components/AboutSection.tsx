export default function AboutSection() {
  return (
    <section className="relative z-10 bg-[#fbf4e8] rounded-t-[25px] py-20 md:py-32 px-6">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-8">
        <img src="/product.png" alt="Izdelek" className="max-w-full h-auto" />

        <p className="text-black text-sm md:text-base font-medium leading-relaxed max-w-2xl">
          50 PRAVLJIC | 50 POBARVANK | 30 AKTIVNOSTI BREZ ZASLONOV
          <br />
          45 IZZIVOV PRIJAZNOSTI | 32 POGOVORNIH KARTIC | 25 MISELNIH IN UČNIH IZZIVOV
        </p>
      </div>

      <div className="max-w-6xl mx-auto flex items-center gap-2 my-16 md:my-24">
        <span className="w-2 h-2 rounded-full bg-[#D9C4AA]" />
        <span className="flex-1 h-[2px] bg-[#D9C4AA]" />
        <span className="w-2 h-2 rounded-full bg-[#D9C4AA]" />
      </div>

      <div className="max-w-6xl mx-auto flex justify-center">
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-[1.3] font-normal text-black text-center">
          <span className="font-bold">Otroštvo ni tekmovanje. Je raziskovanje.</span>
          <br />
          <br />
          V svetu, kjer dnevi hitro minevajo, želimo staršem ponuditi preproste ideje za več
          skupnih trenutkov.
          <br />
          <br />
          Mali raziskovalci niso le zbirka aktivnosti. So povabilo, da skupaj ustvarjate spomine,
          ki jih bodo otroci nosili s seboj vse življenje.
        </p>
      </div>

      <div className="flex justify-center mt-10">
        <a
          href="https://checkout.mailerlite.com/checkout/32932"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#b08b65] text-white text-base font-medium px-6 py-3 rounded-xl hover:bg-white hover:text-[#b08b65] transition-colors whitespace-nowrap"
        >
          KUPI ZDAJ: 15,80€
        </a>
      </div>

      <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-6 text-black/60 text-xs md:text-sm font-medium">
        <span className="flex items-center gap-2">🔒 Varno plačilo</span>
        <span className="flex items-center gap-2">⚡ Takojšnja dostava po e-pošti</span>
        <span className="flex items-center gap-2">📖 270+ strani vsebine</span>
      </div>
    </section>
  )
}

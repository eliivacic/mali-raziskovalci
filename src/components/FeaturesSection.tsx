const FEATURES = [
  {
    title: '50 PRAVLJIC',
    description:
      'Kratke, tople zgodbe z nežnimi življenjskimi sporočili, ki spodbujajo domišljijo, pogovor in kakovosten skupni čas pred spanjem ali čez dan.',
    icon: '/1.png',
  },
  {
    title: '50 POBARVANK',
    description:
      'Čudovite ilustracije za sproščeno ustvarjanje, razvijanje fine motorike, zbranosti in ustvarjalnosti – brez hitenja in brez zaslonov.',
    icon: '/2.png',
  },
  {
    title: '30 AKTIVNOSTI BREZ ZASLONOV',
    description:
      'Preproste ideje za igro doma ali na prostem, ki spodbujajo gibanje, raziskovanje, ustvarjalnost in pristno družinsko povezanost.',
    icon: '/3.png',
  },
  {
    title: '45 IZZIVOV PRIJAZNOSTI',
    description:
      'Majhna dobra dejanja, ki otroka na igriv način učijo empatije, hvaležnosti, sodelovanja in prijaznosti do drugih.',
    icon: '/5.png',
  },
  {
    title: '32 POGOVORNIH KARTIC',
    description:
      'Premišljena vprašanja, ki odpirajo iskrene pogovore, krepijo medsebojno zaupanje in pomagajo bolje spoznati otrokove misli in občutke.',
    icon: '/6.png',
  },
  {
    title: '25 MISELNIH IN UČNIH IZZIVOV',
    description:
      'Zabavne naloge za razvijanje logičnega razmišljanja, koncentracije, opazovanja in samozavestnega reševanja problemov.',
    icon: '/7.png',
  },
]

export default function FeaturesSection() {
  return (
    <section className="relative bg-[#f3e6d3] px-5 md:px-10 lg:px-16 py-20 md:py-32">
      <div className="max-w-[1600px] mx-auto flex flex-col items-center gap-12">
        <h2 className="text-black text-2xl sm:text-3xl lg:text-5xl font-normal text-center">
          Kaj najdete v priročniku?
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-6 gap-3 md:gap-4 w-full">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="relative rounded-3xl overflow-hidden bg-white shadow-sm border border-black/5 p-5 md:p-6 flex flex-col items-center text-center gap-3"
            >
              <img
                src={feature.icon}
                alt=""
                className="w-16 h-16 md:w-24 md:h-24 object-contain"
              />
              <h3 className="text-black text-sm md:text-lg font-medium leading-tight min-h-[2.2rem] md:min-h-[3.5rem] flex items-center justify-center">
                {feature.title}
              </h3>
              <p className="text-black/60 text-xs md:text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
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

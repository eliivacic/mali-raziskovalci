const TRAITS = [
  'Domišljija',
  'Ustvarjalnost',
  'Empatija',
  'Radovednost',
  'Samozavest',
  'Prijaznost',
  'Logično razmišljanje',
  'Fina motorika',
  'Pogovor',
  'Povezanost v družini',
]

export default function InspiresSection() {
  return (
    <section className="bg-brand py-4 md:py-5 overflow-hidden">
      <div className="flex items-center w-max animate-marquee">
        {[...TRAITS, ...TRAITS].map((trait, i) => (
          <span
            key={i}
            className="flex items-center gap-8 pr-8 text-white text-sm md:text-base font-semibold uppercase tracking-wide whitespace-nowrap"
          >
            {trait}
            <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
          </span>
        ))}
      </div>
    </section>
  )
}

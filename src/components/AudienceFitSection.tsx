import { Check, X } from 'lucide-react'

const FOR_YOU = [
  'Imate otroka med 3. in 10. letom in iščete alternativo zaslonom.',
  'Želite več skupnih trenutkov, a vam zmanjkuje idej, kako jih preživeti.',
  'Vam je všeč, da imate vse na enem mestu — pripravljeno, natisljivo, brez priprave.',
  'Cenite preprostost — brez aplikacij in prijav, le natisnete ali odprete na zaslonu.',
  'Želite otroka spodbuditi k domišljiji, empatiji in pogovoru, ne le k zabavi.',
]

const NOT_FOR_YOU = [
  'Iščete tiskano knjigo, ki pride po pošti — priročnik je digitalen (PDF).',
  'Vaš otrok je najstnik — vsebine so zasnovane za mlajše otroke.',
  'Iščete strukturiran učni program s testi — to je zbirka za igro in povezovanje, ne šolski učbenik.',
  'Nimate možnosti tiskanja niti uporabe zaslonov — nekateri deli so najlepši natisnjeni.',
  'Pričakujete fizično pošiljko takoj po naročilu — dostava je le po e-pošti.',
]

export default function AudienceFitSection() {
  return (
    <section className="bg-cream px-6 py-20 md:py-28">
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        <h2
          className="text-black text-3xl sm:text-4xl md:text-5xl text-center"
          style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic' }}
        >
          Za koga je priročnik?
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-tan rounded-3xl p-6 md:p-8 flex flex-col gap-4">
            <h3 className="text-black text-lg font-semibold">Za vas je, če:</h3>
            <ul className="flex flex-col gap-3">
              {FOR_YOU.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-brand-text text-white flex items-center justify-center">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span className="text-black/80 text-sm md:text-base leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-6 md:p-8 flex flex-col gap-4 border border-black/5">
            <h3 className="text-black text-lg font-semibold">Ni za vas, če:</h3>
            <ul className="flex flex-col gap-3">
              {NOT_FOR_YOU.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-black/10 text-black/50 flex items-center justify-center">
                    <X size={12} strokeWidth={3} />
                  </span>
                  <span className="text-black/60 text-sm md:text-base leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

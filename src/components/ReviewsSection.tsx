const REVIEWS = [
  {
    quote: 'Končno nekaj, kar otroka res pritegne.',
    body: 'Vsak dan izbereva eno aktivnost in vedno znova me preseneti, kako malo je potrebno za kakovostno preživet čas skupaj.',
    author: 'Nina, mama 4-letnika',
  },
  {
    quote: 'Najlepši del dneva je postal najin skupni čas.',
    body: 'Pravljice pred spanjem in pogovorne kartice so postale del naše večerne rutine. Zelo lepo zasnovan priročnik.',
    author: 'Maja, mama dveh otrok',
  },
  {
    quote: 'Preprosto, uporabno in zelo lepo oblikovano.',
    body: 'Všeč mi je, da lahko strani natisnem večkrat. Otroka se jih nikakor ne naveličata.',
    author: 'Andreja, mama 3- in 6-letnika',
  },
  {
    quote: 'Odlična alternativa zaslonom.',
    body: 'Ko zmanjka idej, samo odprem priročnik in vedno najdeva nekaj zanimivega. Toplo priporočam vsem staršem.',
    author: 'Tanja, mama 5-letnika',
  },
  {
    quote: 'Več pogovora, več smeha in več skupnih trenutkov.',
    body: 'Najbolj so me navdušile pogovorne kartice. Odprle so teme, o katerih se prej sploh nismo pogovarjali.',
    author: 'Petra, mama 7-letnice',
  },
  {
    quote: 'Otroka komaj čakata, katero aktivnost bova izbrala.',
    body: 'Priročnik nama je dal ogromno novih idej za ustvarjanje, igro in raziskovanje. Vreden vsakega evra.',
    author: 'Simona, mama 5-letnika',
  },
  {
    quote: 'To ni samo zbirka aktivnosti, ampak zbirka skupnih spominov.',
    body: 'Najbolj mi je všeč, da aktivnosti niso zapletene. Potrebuješ le nekaj minut časa in veliko dobre volje.',
    author: 'Katja, mama 4-letnice',
  },
]

function Stars() {
  return (
    <div className="flex gap-0.5 text-[#b08b65] text-sm" aria-hidden="true">
      {'★★★★★'.split('').map((star, i) => (
        <span key={i}>{star}</span>
      ))}
    </div>
  )
}

function ReviewCard({ review }: { review: (typeof REVIEWS)[number] }) {
  return (
    <div className="shrink-0 w-72 md:w-80 h-64 bg-[#fffaf2] rounded-2xl shadow-sm p-6 flex flex-col gap-3">
      <Stars />
      <p className="text-black text-base font-medium leading-snug line-clamp-2">
        "{review.quote}"
      </p>
      <p className="text-black/60 text-sm leading-relaxed line-clamp-4">{review.body}</p>
      <p className="text-[#b08b65] text-sm font-semibold mt-auto">– {review.author}</p>
    </div>
  )
}

export default function ReviewsSection() {
  return (
    <section className="bg-[#fbf4e8] py-20 md:py-28 overflow-hidden">
      <h2 className="text-black text-3xl sm:text-4xl md:text-5xl font-normal text-center px-6 mb-12">
        Kaj pravijo starši?
      </h2>

      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {[...REVIEWS, ...REVIEWS].map((review, i) => (
          <div key={i} className="pr-6">
            <ReviewCard review={review} />
          </div>
        ))}
      </div>
    </section>
  )
}

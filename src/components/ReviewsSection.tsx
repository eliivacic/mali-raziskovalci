const REVIEWS = [
  {
    quote: 'Končno nekaj, kar otroka res pritegne.',
    body: 'Vsak dan izbereva eno aktivnost in vedno znova me preseneti, kako malo je potrebno za kakovostno preživet čas skupaj.',
    author: 'Nina, mama 4-letnika',
    avatar: '/1.png',
  },
  {
    quote: 'Najlepši del dneva je postal najin skupni čas.',
    body: 'Pravljice pred spanjem in pogovorne kartice so postale del naše večerne rutine. Zelo lepo zasnovan priročnik.',
    author: 'Maja, mama dveh otrok',
    avatar: '/2.png',
  },
  {
    quote: 'Preprosto, uporabno in zelo lepo oblikovano.',
    body: 'Všeč mi je, da lahko strani natisnem večkrat. Otroka se jih nikakor ne naveličata.',
    author: 'Andreja, mama 3- in 6-letnika',
    avatar: '/3.png',
  },
  {
    quote: 'Odlična alternativa zaslonom.',
    body: 'Ko zmanjka idej, samo odprem priročnik in vedno najdeva nekaj zanimivega. Toplo priporočam vsem staršem.',
    author: 'Tanja, mama 5-letnika',
    avatar: '/5.png',
  },
  {
    quote: 'Več pogovora, več smeha in več skupnih trenutkov.',
    body: 'Najbolj so me navdušile pogovorne kartice. Odprle so teme, o katerih se prej sploh nismo pogovarjali.',
    author: 'Petra, mama 7-letnice',
    avatar: '/6.png',
  },
  {
    quote: 'Otroka komaj čakata, katero aktivnost bova izbrala.',
    body: 'Priročnik nama je dal ogromno novih idej za ustvarjanje, igro in raziskovanje. Vreden vsakega evra.',
    author: 'Simona, mama 5-letnika',
    avatar: '/7.png',
  },
  {
    quote: 'To ni samo zbirka aktivnosti, ampak zbirka skupnih spominov.',
    body: 'Najbolj mi je všeč, da aktivnosti niso zapletene. Potrebuješ le nekaj minut časa in veliko dobre volje.',
    author: 'Katja, mama 4-letnice',
    avatar: '/1.png',
  },
]

function Stars() {
  return (
    <div className="flex gap-0.5 text-brand-text text-sm" aria-hidden="true">
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
      <div className="mt-auto flex items-center gap-2">
        <img
          src={review.avatar}
          alt=""
          width={240}
          height={240}
          loading="lazy"
          className="w-8 h-8 rounded-full object-cover bg-tan"
        />
        <p className="text-brand-text text-sm font-semibold">{review.author}</p>
      </div>
    </div>
  )
}

export default function ReviewsSection() {
  return (
    <section className="bg-cream py-20 md:py-28 overflow-hidden">
      <h2
        className="text-black text-3xl sm:text-4xl md:text-5xl text-center px-6 mb-12"
        style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic' }}
      >
        Kaj pravijo starši?
      </h2>

      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none">
        {[...REVIEWS, ...REVIEWS].map((review, i) => (
          <div key={i} className="pr-6">
            <ReviewCard review={review} />
          </div>
        ))}
      </div>
    </section>
  )
}

import { useEffect, useState } from 'react'

const STORAGE_KEY = 'cookie-consent'

type Category = {
  key: 'funkcionalno' | 'analitika' | 'uspesnost' | 'oglas'
  title: string
  description: string
}

const CATEGORIES: Category[] = [
  {
    key: 'funkcionalno',
    title: 'Funkcionalno',
    description:
      'Funkcionalni piškotki pomagajo izvajati določene funkcionalnosti, kot so skupna raba vsebine spletnega mesta na platformah družbenih medijev, zbiranje povratnih informacij in druge funkcije tretjih oseb.',
  },
  {
    key: 'analitika',
    title: 'Analitika',
    description:
      'Analitični piškotki se uporabljajo za razumevanje interakcije obiskovalcev s spletno stranjo. Ti piškotki pomagajo zagotoviti informacije o meritvi število obiskovalcev, hitrost odskoka, prometni vir itd.',
  },
  {
    key: 'uspesnost',
    title: 'Uspešnost',
    description:
      'Piškotki uspešnosti se uporabljajo za razumevanje in analizo ključnih kazal uspešnosti spletne strani, ki pomagajo pri zagotavljanju boljše uporabniške izkušnje za obiskovalce.',
  },
  {
    key: 'oglas',
    title: 'Oglas',
    description:
      'Oglaševalski piškotki se uporabljajo za zagotavljanje obiskovalcev s prilagojenimi oglasi na podlagi strani, ki so jih obiskali prej, in za analizo učinkovitosti oglaševalske akcije.',
  },
]

type Preferences = Record<Category['key'], boolean>

const DEFAULT_PREFERENCES: Preferences = {
  funkcionalno: false,
  analitika: false,
  uspesnost: false,
  oglas: false,
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [openCategory, setOpenCategory] = useState<Category['key'] | null>(null)
  const [preferences, setPreferences] = useState<Preferences>(DEFAULT_PREFERENCES)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) {
      setVisible(true)
      return
    }
    try {
      setPreferences({ ...DEFAULT_PREFERENCES, ...JSON.parse(stored) })
    } catch {
      // ignore malformed stored value
    }
  }, [])

  const save = (prefs: Preferences) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs))
    setVisible(false)
    setShowPreferences(false)
  }

  const acceptAll = () =>
    save({ funkcionalno: true, analitika: true, uspesnost: true, oglas: true })

  const rejectAll = () => save(DEFAULT_PREFERENCES)

  const saveCurrent = () => save(preferences)

  return (
    <>
      {visible && (
        <div className="fixed bottom-20 left-4 right-4 sm:right-auto sm:max-w-sm z-[100] bg-[#fbf4e8] text-black rounded-2xl shadow-xl p-6 flex flex-col gap-4 opacity-100 translate-y-0 transition-all duration-300 ease-out starting:opacity-0 starting:translate-y-3">
          <p className="text-sm leading-relaxed">
            Uporabljamo piškotke, da izboljšamo tvojo izkušnjo na naši strani. Z nadaljnjo uporabo
            se strinjaš z našo{' '}
            <a href="#" className="underline hover:no-underline">
              politiko zasebnosti
            </a>
            .
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={acceptAll}
              className="flex-1 bg-[#b08b65] text-white text-sm font-medium px-4 py-2.5 rounded-xl hover:bg-black transition-colors whitespace-nowrap"
            >
              Sprejmi
            </button>
            <button
              onClick={rejectAll}
              className="flex-1 bg-transparent border border-[#b08b65] text-black text-sm font-medium px-4 py-2.5 rounded-xl hover:bg-[#b08b65]/10 transition-colors whitespace-nowrap"
            >
              Zavrni
            </button>
            <button
              onClick={() => setShowPreferences(true)}
              className="flex-1 bg-transparent text-black text-sm font-medium px-4 py-2.5 rounded-xl underline hover:no-underline whitespace-nowrap"
            >
              Prilagodi
            </button>
          </div>
        </div>
      )}

      {!visible && (
        <button
          onClick={() => setShowPreferences(true)}
          aria-label="Nastavitve piškotkov"
          title="Nastavitve piškotkov"
          className="fixed bottom-20 left-4 z-[100] w-12 h-12 rounded-full bg-[#b08b65] text-white text-2xl flex items-center justify-center shadow-lg hover:bg-black transition-colors"
        >
          🍪
        </button>
      )}

      {showPreferences && (
        <div className="fixed inset-0 z-[110] bg-black/50 flex items-center justify-center p-4 opacity-100 transition-opacity duration-200 ease-out starting:opacity-0">
          <div className="bg-[#fbf4e8] text-black rounded-2xl shadow-xl max-w-lg w-full max-h-[85vh] overflow-y-auto p-6 md:p-8 flex flex-col gap-6 opacity-100 scale-100 transition-all duration-[220ms] ease-out starting:opacity-0 starting:scale-[0.96]">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl md:text-2xl font-medium">Prilagodite nastavitve soglasja</h3>
              <button
                onClick={() => setShowPreferences(false)}
                aria-label="Zapri"
                className="shrink-0 w-8 h-8 flex items-center justify-center rounded-lg border border-[#b08b65] hover:bg-[#b08b65]/10"
              >
                ✕
              </button>
            </div>

            <p className="text-sm leading-relaxed text-black/70">
              Uporabljamo piškotke, da vam pomagamo pri učinkoviti navigaciji in izvajanju
              določenih funkcij. Spodaj boste našli podrobne informacije o vseh piškotkih pod
              vsako kategorijo soglasja.
            </p>

            <div className="flex flex-col divide-y divide-[#b08b65]/30">
              <div className="py-4 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Potrebno</span>
                  <span className="text-xs font-semibold text-[#8a6a49]">Vedno aktiven</span>
                </div>
                <p className="text-sm text-black/70 leading-relaxed">
                  Potrebni piškotki so ključni za osnovne funkcije spletne strani in spletna stran
                  brez njih ne bo delovala na svoj predviden način. Ti piškotki ne shranjujejo
                  nobenih osebnih podatkov, ki bi jih bilo mogoče identificirati.
                </p>
              </div>

              {CATEGORIES.map((category) => (
                <div key={category.key} className="py-4 flex flex-col gap-2">
                  <button
                    onClick={() =>
                      setOpenCategory((prev) => (prev === category.key ? null : category.key))
                    }
                    className="flex items-center justify-between w-full text-left"
                  >
                    <span className="font-semibold">{category.title}</span>
                    <span className="flex items-center gap-3">
                      <span
                        className={`w-9 h-5 rounded-full transition-colors relative ${
                          preferences[category.key] ? 'bg-[#b08b65]' : 'bg-black/20'
                        }`}
                        onClick={(e) => {
                          e.stopPropagation()
                          setPreferences((prev) => ({
                            ...prev,
                            [category.key]: !prev[category.key],
                          }))
                        }}
                      >
                        <span
                          className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-transform ${
                            preferences[category.key] ? 'translate-x-4' : 'translate-x-0.5'
                          }`}
                        />
                      </span>
                      <span
                        className={`transition-transform ${
                          openCategory === category.key ? 'rotate-90' : ''
                        }`}
                      >
                        ›
                      </span>
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-200 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                      openCategory === category.key ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p
                        className={`text-sm text-black/70 leading-relaxed transition-opacity duration-150 ${
                          openCategory === category.key ? 'opacity-100' : 'opacity-0'
                        }`}
                      >
                        {category.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={rejectAll}
                className="flex-1 bg-transparent border border-[#b08b65] text-black text-sm font-medium px-4 py-2.5 rounded-xl hover:bg-[#b08b65]/10 transition-colors"
              >
                Zavrni
              </button>
              <button
                onClick={saveCurrent}
                className="flex-1 bg-transparent border border-[#b08b65] text-black text-sm font-medium px-4 py-2.5 rounded-xl hover:bg-[#b08b65]/10 transition-colors"
              >
                Shrani moje nastavitve
              </button>
              <button
                onClick={acceptAll}
                className="flex-1 bg-[#b08b65] text-white text-sm font-medium px-4 py-2.5 rounded-xl hover:bg-black transition-colors"
              >
                Sprejmi vse
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

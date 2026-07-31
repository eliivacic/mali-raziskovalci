import Navbar from './components/Navbar'
import AboutSection from './components/AboutSection'
import FeaturesSection from './components/FeaturesSection'
import CookieBanner from './components/CookieBanner'

export default function App() {
  return (
    <>
      <section className="relative h-screen overflow-hidden mb-[-25px]">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="/The_brown_bear_white_rabbit_he_Kling_30__39033.mp4"
        />
        <div className="absolute inset-0 bg-black/20" />

        <Navbar />

        <div className="relative z-10 h-full flex flex-col justify-end items-center pb-12 md:pb-16 px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white leading-[1.15] tracking-tight text-center">
            <span className="block">Priročnik otroških</span>
            <span className="block">aktivnosti za najlepše</span>
            <span className="block">
              <em
                className="not-italic"
                style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic' }}
              >
                skupne spomine
              </em>
            </span>
          </h1>

          <p className="mt-6 text-white/80 text-base md:text-lg font-medium max-w-[420px] text-center">
            +270 STRANI skupnih aktivnosti
          </p>

          <div className="mt-8 bg-black/25 backdrop-blur-md rounded-xl flex items-center pl-10 pr-1 py-1 gap-10">
            <span className="text-white text-sm font-medium whitespace-nowrap">
              ZAČNITE USTVARJATI SPOMINE ❤️
            </span>
            <a
              href="https://checkout.mailerlite.com/checkout/32932"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-white/90 whitespace-nowrap"
            >
              KUPI ZDAJ: 15,80€
            </a>
          </div>
        </div>
      </section>

      <AboutSection />
      <FeaturesSection />

      <footer className="bg-[#fbf4e8] px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-black text-sm font-medium">
        <span>
          IZDELAVA:{' '}
          <a
            href="https://www.veloria.si"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline"
          >
            Kreativna agencija Veloria
          </a>
        </span>

        <div className="flex flex-wrap items-center gap-6">
          <a
            href="/Politika_piskotkov_MALI_RAZISKOVALCI.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            PIŠKOTKI
          </a>
          <a
            href="/Splosni_pogoji_poslovanja_MALI_RAZISKOVALCI.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            SPLOŠNI POGOJI POSLOVANJA
          </a>
          <a
            href="/Politika_zasebnosti_MALI_RAZISKOVALCI.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            POLITIKA ZASEBNOSTI
          </a>
        </div>
      </footer>

      <CookieBanner />
    </>
  )
}

export default function StickyBuyBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-brand px-4 md:px-8 py-3 flex items-center justify-center md:justify-between gap-4 shadow-[0_-4px_16px_rgba(0,0,0,0.15)]">
      <span className="text-white text-sm md:text-base font-medium hidden sm:block">
        Priročnik otroških aktivnosti — 15,80€
      </span>
      <span className="text-white text-sm font-medium sm:hidden">Priročnik: 15,80€</span>
      <a
        href="https://checkout.mailerlite.com/checkout/32932"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-brand-text text-sm md:text-base font-semibold px-5 py-2.5 rounded-xl hover:bg-black hover:text-white transition duration-150 ease-out active:scale-[0.97] whitespace-nowrap"
      >
        KUPI ZDAJ
      </a>
    </div>
  )
}

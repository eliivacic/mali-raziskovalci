import { useState } from 'react'
import { createPortal } from 'react-dom'
import { CheckCircle2, Copy, CreditCard, Landmark, X } from 'lucide-react'

const CARD_CHECKOUT_URL = 'https://checkout.mailerlite.com/checkout/32932'

const BANK_DETAILS = {
  holder: 'Veloria d.o.o.',
  address: 'Rakuševa ulica 8, 1000 Ljubljana',
  iban: 'SI56 1900 0000 0848 078',
  swift: 'SZKBSI2X',
  amount: '15,80 €',
}

function OrderSummary() {
  return (
    <div className="flex items-center gap-4 p-4 rounded-2xl bg-tan">
      <img
        src="/product.png"
        alt=""
        width={120}
        height={80}
        className="w-16 h-12 object-cover rounded-lg shrink-0"
      />
      <div className="flex-1">
        <p className="text-black text-sm font-semibold">Mali raziskovalci — priročnik</p>
        <p className="text-black/60 text-xs">Digitalni PDF · 270+ strani</p>
      </div>
      <p className="text-black text-base font-semibold shrink-0">15,80 €</p>
    </div>
  )
}

function CopyRow({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false)

  const copy = () => {
    navigator.clipboard.writeText(value)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="flex items-center justify-between gap-3 py-2 border-b border-black/10">
      <div>
        <p className="text-black/50 text-xs uppercase tracking-wide">{label}</p>
        <p className="text-black text-sm md:text-base font-medium">{value}</p>
      </div>
      <button
        onClick={copy}
        aria-label={`Kopiraj ${label}`}
        className="shrink-0 w-9 h-9 flex items-center justify-center rounded-lg border border-brand text-brand-text hover:bg-brand/10 transition-colors"
      >
        <Copy size={14} />
      </button>
      {copied && <span className="sr-only">Kopirano</span>}
    </div>
  )
}

function Field({
  id,
  label,
  type = 'text',
  value,
  onChange,
}: {
  id: string
  label: string
  type?: string
  value: string
  onChange: (value: string) => void
}) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-black/70 text-xs font-medium">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2.5 rounded-lg border border-black/15 bg-white text-sm text-black focus:outline-none focus:border-brand"
      />
    </div>
  )
}

export default function BuyButton({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(false)
  const [method, setMethod] = useState<'choose' | 'bank' | 'thanks'>('choose')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [sending, setSending] = useState(false)

  const close = () => {
    setOpen(false)
    setMethod('choose')
    setFirstName('')
    setLastName('')
    setEmail('')
  }

  const fullName = `${firstName} ${lastName}`.trim()
  const canSend = firstName.trim() && lastName.trim() && email.trim()

  const sendDetails = async () => {
    setSending(true)
    try {
      await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, email }),
      })
    } catch {
      // ignore — the request still reaches MailerLite server-side in most cases
    }
    setSending(false)
    setMethod('thanks')
  }

  return (
    <>
      <button onClick={() => setOpen(true)} className={className}>
        {children}
      </button>

      {open &&
        createPortal(
          <div className="fixed inset-0 z-[110] bg-black/50 flex items-center justify-center p-4 opacity-100 transition-opacity duration-200 ease-out starting:opacity-0">
          <div className="bg-cream text-black rounded-2xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 flex flex-col gap-5 opacity-100 scale-100 transition-all duration-[220ms] ease-out starting:opacity-0 starting:scale-[0.96]">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl md:text-2xl font-medium">
                {method === 'choose' && 'Zaključi naročilo'}
                {method === 'bank' && 'Plačilo z nakazilom'}
                {method === 'thanks' && 'Hvala!'}
              </h3>
              <button
                onClick={close}
                aria-label="Zapri"
                className="shrink-0 w-11 h-11 flex items-center justify-center rounded-lg border border-brand hover:bg-brand/10"
              >
                <X size={18} />
              </button>
            </div>

            {method !== 'thanks' && <OrderSummary />}

            {method === 'thanks' ? (
              <div className="flex flex-col items-center text-center gap-4 py-4">
                <span className="w-16 h-16 rounded-full bg-brand/15 text-brand-text flex items-center justify-center">
                  <CheckCircle2 size={36} />
                </span>
                <div>
                  <p className="text-black text-lg font-semibold">Naročilo je oddano</p>
                  <p className="text-black/60 text-sm leading-relaxed mt-1">
                    Podatke za nakazilo vam pošljemo tudi na email{' '}
                    <span className="font-medium text-black">{email}</span>. Priročnik prejmete v
                    24 urah po prejetem nakazilu.
                  </p>
                </div>
                <button
                  onClick={close}
                  className="mt-2 bg-brand text-white text-sm font-semibold px-6 py-2.5 rounded-xl hover:bg-black transition-colors"
                >
                  Zapri
                </button>
              </div>
            ) : method === 'choose' ? (
              <div className="flex flex-col gap-3">
                <p className="text-black/50 text-xs font-medium uppercase tracking-wide">
                  Izberite način plačila
                </p>

                <a
                  href={CARD_CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={close}
                  className="flex items-center gap-4 p-4 rounded-2xl border border-brand hover:bg-brand/10 transition-colors"
                >
                  <span className="shrink-0 w-11 h-11 rounded-full bg-brand text-white flex items-center justify-center">
                    <CreditCard size={20} />
                  </span>
                  <span className="text-left">
                    <span className="block text-black font-semibold">Plačilo s kartico</span>
                    <span className="block text-black/60 text-sm">
                      Takojšen dostop po plačilu
                    </span>
                  </span>
                </a>

                <button
                  onClick={() => setMethod('bank')}
                  className="flex items-center gap-4 p-4 rounded-2xl border border-brand hover:bg-brand/10 transition-colors text-left"
                >
                  <span className="shrink-0 w-11 h-11 rounded-full bg-brand text-white flex items-center justify-center">
                    <Landmark size={20} />
                  </span>
                  <span>
                    <span className="block text-black font-semibold">Plačilo z nakazilom</span>
                    <span className="block text-black/60 text-sm">Podatki za TRR nakazilo</span>
                  </span>
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-3">
                  <p className="text-black/50 text-xs font-medium uppercase tracking-wide">
                    Podatki za dostavo
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <Field id="firstName" label="Ime" value={firstName} onChange={setFirstName} />
                    <Field id="lastName" label="Priimek" value={lastName} onChange={setLastName} />
                  </div>
                  <Field id="email" label="Email" type="email" value={email} onChange={setEmail} />
                </div>

                <div className="flex flex-col gap-3">
                  <p className="text-black/50 text-xs font-medium uppercase tracking-wide">
                    Podatki za nakazilo
                  </p>
                  <div className="flex flex-col">
                    <CopyRow label="Prejemnik" value={BANK_DETAILS.holder} />
                    <CopyRow label="Naslov" value={BANK_DETAILS.address} />
                    <CopyRow label="IBAN" value={BANK_DETAILS.iban} />
                    <CopyRow label="BIC / SWIFT" value={BANK_DETAILS.swift} />
                    <CopyRow label="Znesek" value={BANK_DETAILS.amount} />
                    <CopyRow label="Sklic" value={fullName || 'Ime in priimek'} />
                  </div>
                </div>

                <button
                  onClick={sendDetails}
                  disabled={!canSend || sending}
                  className="bg-brand text-white text-base font-semibold px-4 py-3 rounded-xl hover:bg-black transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {sending ? 'Pošiljanje …' : 'Oddaj naročilo'}
                </button>

                <button
                  onClick={() => setMethod('choose')}
                  className="self-start text-brand-text text-sm font-semibold hover:underline"
                >
                  ← Nazaj na izbiro plačila
                </button>
              </div>
            )}
          </div>
        </div>,
          document.body,
        )}
    </>
  )
}

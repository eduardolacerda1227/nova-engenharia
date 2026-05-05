import { useState, type FormEvent } from 'react'
import { Loader2, Send } from 'lucide-react'
import { MotionSection } from '../components/MotionSection'
import { SectionHeading } from '../components/SectionHeading'
import { sendContactForm } from '../lib/sendContactForm'

type FieldErrors = Partial<Record<'name' | 'email' | 'phone' | 'message', string>>

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(
  name: string,
  email: string,
  phone: string,
  message: string,
): FieldErrors {
  const e: FieldErrors = {}
  const n = name.trim()
  if (n.length < 2) e.name = 'Informe seu nome completo.'
  if (!email.trim()) e.email = 'Informe um e-mail.'
  else if (!emailRe.test(email.trim())) e.email = 'E-mail inválido.'
  const digits = phone.replace(/\D/g, '')
  if (phone.trim() && digits.length < 10) e.phone = 'Telefone incompleto.'
  const m = message.trim()
  if (m.length < 10) e.message = 'Descreva sua necessidade (mínimo 10 caracteres).'
  return e
}

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<FieldErrors>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(ev: FormEvent) {
    ev.preventDefault()
    const next = validate(name, email, phone, message)
    setErrors(next)
    if (Object.keys(next).length > 0) {
      setStatus('idle')
      return
    }
    setStatus('sending')
    try {
      await sendContactForm({
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        message: message.trim(),
      })
      setStatus('success')
      setName('')
      setEmail('')
      setPhone('')
      setMessage('')
      setErrors({})
    } catch {
      setStatus('error')
    }
  }

  return (
    <MotionSection
      id="contato"
      className="scroll-mt-24 border-t border-nova-gold/15 bg-nova-950 py-20 sm:scroll-mt-28 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Fale conosco"
          title="Contato"
          subtitle="Envie sua mensagem: retornamos com uma proposta ou esclarecimentos em até um dia útil."
          align="center"
        />

        <div className="mx-auto max-w-xl rounded-2xl border border-nova-gold/20 bg-nova-850/30 p-6 shadow-gold-sm sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div>
              <label htmlFor="contact-name" className="block text-sm font-medium text-neutral-300">
                Nome
              </label>
              <input
                id="contact-name"
                name="name"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1.5 w-full rounded-md border border-white/10 bg-nova-950/80 px-4 py-3 text-neutral-100 outline-none ring-nova-gold/40 placeholder:text-neutral-600 focus:border-nova-gold/50 focus:ring-2"
                placeholder="Seu nome"
              />
              {errors.name ? (
                <p className="mt-1 text-sm text-red-400" role="alert">
                  {errors.name}
                </p>
              ) : null}
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-sm font-medium text-neutral-300">
                E-mail
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1.5 w-full rounded-md border border-white/10 bg-nova-950/80 px-4 py-3 text-neutral-100 outline-none ring-nova-gold/40 placeholder:text-neutral-600 focus:border-nova-gold/50 focus:ring-2"
                placeholder="voce@email.com"
              />
              {errors.email ? (
                <p className="mt-1 text-sm text-red-400" role="alert">
                  {errors.email}
                </p>
              ) : null}
            </div>
            <div>
              <label htmlFor="contact-phone" className="block text-sm font-medium text-neutral-300">
                Telefone
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-1.5 w-full rounded-md border border-white/10 bg-nova-950/80 px-4 py-3 text-neutral-100 outline-none ring-nova-gold/40 placeholder:text-neutral-600 focus:border-nova-gold/50 focus:ring-2"
                placeholder="Opcional"
              />
              {errors.phone ? (
                <p className="mt-1 text-sm text-red-400" role="alert">
                  {errors.phone}
                </p>
              ) : null}
            </div>
            <div>
              <label
                htmlFor="contact-message"
                className="block text-sm font-medium text-neutral-300"
              >
                Mensagem
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1.5 w-full resize-y rounded-md border border-white/10 bg-nova-950/80 px-4 py-3 text-neutral-100 outline-none ring-nova-gold/40 placeholder:text-neutral-600 focus:border-nova-gold/50 focus:ring-2"
                placeholder="Como podemos ajudar?"
              />
              {errors.message ? (
                <p className="mt-1 text-sm text-red-400" role="alert">
                  {errors.message}
                </p>
              ) : null}
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-nova-gold-dim to-nova-gold px-4 py-3 font-display text-sm font-semibold uppercase tracking-wide text-nova-950 transition enabled:hover:brightness-110 disabled:opacity-60"
            >
              {status === 'sending' ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                  Enviando…
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" aria-hidden />
                  Enviar mensagem
                </>
              )}
            </button>

            {status === 'success' ? (
              <p
                className="rounded-md border border-green-500/30 bg-green-500/10 px-4 py-3 text-center text-sm text-green-300"
                role="status"
              >
                Mensagem enviada com sucesso. Entraremos em contato em breve.
              </p>
            ) : null}
            {status === 'error' ? (
              <p className="rounded-md border border-red-500/40 bg-red-500/10 px-4 py-3 text-center text-sm text-red-300" role="alert">
                Não foi possível enviar agora. Tente novamente ou use o telefone na página.
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </MotionSection>
  )
}

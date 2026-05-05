import { Mail, MapPin, Phone, Share2 } from 'lucide-react'
import { Logo } from './Logo'
import { scrollToSection } from '../lib/scrollToSection'

const social = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/',
    icon: Share2,
  },
]

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-nova-gold/20 bg-nova-900">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div className="space-y-4">
          <Logo className="brightness-110" />
          <p className="max-w-sm text-sm leading-relaxed text-neutral-400">
            Engenharia civil com foco em segurança, prazo e soluções sob medida para o seu
            projeto.
          </p>
        </div>
        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-nova-gold">
            Contato
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-neutral-300">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-nova-gold" aria-hidden />
              <span>Av. Engenheiro, 1000 — Centro</span>
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-nova-gold" aria-hidden />
              <a className="hover:text-white" href="tel:+5500000000000">
                +55 (00) 00000-0000
              </a>
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-nova-gold" aria-hidden />
              <a className="hover:text-white" href="mailto:contato@novaengenharia.com.br">
                contato@novaengenharia.com.br
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-nova-gold">
            Redes sociais
          </h3>
          <ul className="mt-4 flex flex-wrap gap-3">
            {social.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-md border border-nova-gold/30 px-3 py-2 text-sm text-neutral-200 transition hover:border-nova-gold hover:text-nova-gold-bright"
                >
                  <Icon className="h-4 w-4" aria-hidden />
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => scrollToSection('contato')}
            className="mt-6 text-left text-sm font-medium text-nova-gold underline-offset-4 hover:underline"
          >
            Solicitar orçamento
          </button>
        </div>
      </div>
      <div className="border-t border-white/5 py-6 text-center text-xs text-neutral-500">
        © {year} Nova Engenharia. Todos os direitos reservados.
      </div>
    </footer>
  )
}

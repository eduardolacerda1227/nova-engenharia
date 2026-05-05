import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { scrollToSection } from '../lib/scrollToSection'

const nav = [
  { id: 'inicio', label: 'Início' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'servicos', label: 'Serviços' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'apresentacao', label: 'Apresentação' },
  { id: 'contato', label: 'Contato' },
] as const

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id: (typeof nav)[number]['id']) => {
    scrollToSection(id)
    setOpen(false)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? 'border-nova-gold/25 bg-nova-950/90 shadow-gold-sm backdrop-blur-md'
          : 'border-transparent bg-nova-950/70 backdrop-blur-sm'
      }`}
    >
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-end gap-4 px-4 sm:px-6 lg:px-8">
        <nav
          className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-1 lg:flex"
          aria-label="Principal"
        >
          {nav.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => go(item.id)}
              className="rounded-md px-3 py-2 font-display text-xs font-medium uppercase tracking-[0.2em] text-neutral-300 transition hover:text-nova-gold-bright"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-nova-gold/30 text-nova-gold lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-nova-gold/20 bg-nova-950/98 px-4 py-4 lg:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {nav.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => go(item.id)}
                className="rounded-md px-3 py-3 text-left font-display text-sm font-semibold uppercase tracking-[0.25em] text-neutral-200 hover:bg-nova-850/80 hover:text-nova-gold-bright"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  )
}

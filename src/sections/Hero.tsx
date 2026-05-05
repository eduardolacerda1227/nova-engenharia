import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { scrollToSection } from '../lib/scrollToSection'

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-svh items-center overflow-hidden pt-16"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-hero-radial bg-[length:24px_24px]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.35]"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1920&q=75)',
        }}
        role="presentation"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-nova-950/80 via-nova-950/92 to-nova-950" />

      <div className="relative z-[1] mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl space-y-6"
        >
          <p className="font-display text-xs font-semibold uppercase tracking-[0.4em] text-nova-gold">
            Engenharia civil
          </p>
          <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Soluções inteligentes em engenharia civil
          </h1>
          <p className="text-balance text-lg text-neutral-300 sm:text-xl">
            Projetos estruturais, gerenciamento de obras e consultoria com rigor técnico e
            compromisso com prazo e custo.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <button
              type="button"
              onClick={() => scrollToSection('contato')}
              className="group inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-nova-gold-dim via-nova-gold to-nova-gold-bright px-6 py-3 font-display text-sm font-semibold uppercase tracking-wide text-nova-950 shadow-gold transition hover:brightness-110"
            >
              Solicitar orçamento
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('servicos')}
              className="rounded-md border border-nova-gold/40 px-6 py-3 font-display text-sm font-semibold uppercase tracking-wide text-neutral-100 transition hover:border-nova-gold hover:text-nova-gold-bright"
            >
              Ver serviços
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

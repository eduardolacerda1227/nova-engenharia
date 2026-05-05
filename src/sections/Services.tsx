import {
  Building2,
  ClipboardList,
  FileCheck,
  Hammer,
} from 'lucide-react'
import { MotionSection } from '../components/MotionSection'
import { SectionHeading } from '../components/SectionHeading'

const services = [
  {
    icon: Building2,
    title: 'Projetos estruturais',
    description:
      'Dimensionamento, detalhamento e compatibilização com arquitetura e instalações.',
  },
  {
    icon: Hammer,
    title: 'Gerenciamento de obras',
    description:
      'Planejamento, fiscalização técnica e interface com fornecedores e clientes.',
  },
  {
    icon: ClipboardList,
    title: 'Consultoria técnica',
    description:
      'Pareceres, vistorias, perícias e suporte em decisões de engenharia.',
  },
  {
    icon: FileCheck,
    title: 'Regularização',
    description:
      'Adequações documentais e acompanhamento junto a órgãos e condomínios.',
  },
] as const

export function Services() {
  return (
    <MotionSection
      id="servicos"
      className="scroll-mt-24 border-t border-nova-gold/15 bg-[radial-gradient(ellipse_at_top,_rgba(201,162,39,0.08),_transparent_50%)] py-20 sm:scroll-mt-28 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="O que fazemos"
          title="Serviços"
          subtitle="Um portfólio integrado para cobrir desde o projeto até a conformidade legal."
          align="center"
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {services.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-xl border border-nova-gold/15 bg-nova-850/30 p-6 transition duration-300 hover:-translate-y-1 hover:border-nova-gold/50 hover:shadow-gold"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-nova-gold/10 blur-2xl" />
              </div>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-nova-gold/35 bg-nova-950/80 text-nova-gold transition group-hover:border-nova-gold group-hover:text-nova-gold-bright">
                <Icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  )
}

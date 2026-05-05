import { Award, Clock, Lightbulb } from 'lucide-react'
import { MotionSection } from '../components/MotionSection'
import { SectionHeading } from '../components/SectionHeading'

const pillars = [
  {
    title: 'Missão',
    text: 'Entregar soluções de engenharia seguras, econômicas e executáveis, alinhadas às necessidades de cada cliente.',
  },
  {
    title: 'Visão',
    text: 'Ser referência regional em qualidade técnica, inovação aplicada e relacionamento transparente em obras civis.',
  },
  {
    title: 'Valores',
    text: 'Ética, responsabilidade técnica, respeito às normas e trabalho colaborativo com empreiteiros e projetistas.',
  },
] as const

const highlights = [
  {
    icon: Award,
    title: 'Qualidade',
    text: 'Processos revisados e conformidade com ABNT e legislação vigente.',
  },
  {
    icon: Clock,
    title: 'Prazo',
    text: 'Cronogramas realistas, acompanhamento semanal e gestão de riscos.',
  },
  {
    icon: Lightbulb,
    title: 'Inovação',
    text: 'Ferramentas digitais e modelagem para reduzir retrabalho e custos.',
  },
] as const

export function About() {
  return (
    <MotionSection
      id="sobre"
      className="scroll-mt-24 border-t border-nova-gold/15 bg-nova-950 py-20 sm:scroll-mt-28 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Sobre nós"
          title="Engenharia com propósito"
          subtitle="A Nova Engenharia reúne experiência em projetos e obras para transformar desafios técnicos em resultados concretos — da concepção ao canteiro."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {pillars.map((p) => (
            <article
              key={p.title}
              className="rounded-xl border border-nova-gold/20 bg-nova-850/40 p-6 shadow-gold-sm backdrop-blur-sm"
            >
              <h3 className="font-display text-lg font-semibold text-nova-gold-bright">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-400">{p.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {highlights.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="flex gap-4 rounded-lg border border-white/5 bg-nova-900/50 p-5"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-nova-gold/35 text-nova-gold">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <h4 className="font-display font-semibold text-white">{title}</h4>
                <p className="mt-1 text-sm text-neutral-400">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MotionSection>
  )
}

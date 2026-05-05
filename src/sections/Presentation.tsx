import { BadgeCheck, GraduationCap, Briefcase } from 'lucide-react'
import { MotionSection } from '../components/MotionSection'
import { SectionHeading } from '../components/SectionHeading'

export function Presentation() {
  return (
    <MotionSection
      id="apresentacao"
      className="scroll-mt-24 border-t border-nova-gold/15 bg-gradient-to-b from-nova-900/60 to-nova-950 py-20 sm:scroll-mt-28 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Liderança"
          title="Apresentação"
          subtitle="Conheça quem conduz a visão técnica e estratégica da Nova Engenharia."
          align="center"
        />

        <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 lg:flex-row lg:items-start">
          <div className="relative shrink-0">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-nova-gold via-nova-gold-bright to-nova-gold-dim opacity-70 blur-sm" />
            <img
              src={`https://ui-avatars.com/api/?name=Paulo+Roberto+Bezerra&size=256&background=c9a227&color=0a0a0a&bold=true`}
              alt="Paulo Roberto Bezerra — placeholder"
              width={256}
              height={256}
              className="relative h-48 w-48 rounded-2xl border-2 border-nova-950 object-cover sm:h-56 sm:w-56"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="flex-1 space-y-5 text-center lg:text-left">
            <h3 className="font-display text-2xl font-bold text-white">Paulo Roberto Bezerra</h3>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-nova-gold">
              Engenheiro civil · CREA ativo
            </p>
            <p className="leading-relaxed text-neutral-400">
              Com mais de uma década de atuação em projetos estruturais e frentes de obra, combina
              formação sólida com visão prática de canteiro. Atua na interface entre projeto e
              execução, garantindo decisões técnicas claras e documentação robusta para construtoras,
              incorporadoras e clientes finais.
            </p>
            <ul className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
              <li className="inline-flex items-center gap-2 rounded-md border border-nova-gold/25 bg-nova-850/50 px-3 py-2 text-sm text-neutral-300">
                <GraduationCap className="h-4 w-4 text-nova-gold" aria-hidden />
                Graduação em Engenharia Civil
              </li>
              <li className="inline-flex items-center gap-2 rounded-md border border-nova-gold/25 bg-nova-850/50 px-3 py-2 text-sm text-neutral-300">
                <Briefcase className="h-4 w-4 text-nova-gold" aria-hidden />
                Experiência em projetos de médio e grande porte
              </li>
              <li className="inline-flex items-center gap-2 rounded-md border border-nova-gold/25 bg-nova-850/50 px-3 py-2 text-sm text-neutral-300">
                <BadgeCheck className="h-4 w-4 text-nova-gold" aria-hidden />
                ART e responsabilidade técnica documentadas
              </li>
            </ul>
          </div>
        </div>
      </div>
    </MotionSection>
  )
}

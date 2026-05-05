import { MotionSection } from '../components/MotionSection'
import { SectionHeading } from '../components/SectionHeading'
import { projects } from '../data/projects'

export function Projects() {
  return (
    <MotionSection
      id="projetos"
      className="scroll-mt-24 border-t border-nova-gold/15 bg-nova-950 py-20 sm:scroll-mt-28 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Portfólio"
          title="Projetos em destaque"
          subtitle="Seleção de entregas recentes. Novos cases podem ser adicionados facilmente à lista de dados do projeto."
        />

        <ul className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <li key={project.id}>
              <article className="group overflow-hidden rounded-xl border border-nova-gold/15 bg-nova-900/40 transition hover:border-nova-gold/40">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.imageSrc}
                    alt=""
                    width={project.imageWidth}
                    height={project.imageHeight}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-nova-950 via-transparent to-transparent opacity-90" />
                  <span className="absolute left-4 top-4 rounded-full border border-nova-gold/40 bg-nova-950/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-nova-gold-bright">
                    {project.category}
                  </span>
                </div>
                <div className="space-y-2 p-5">
                  <h3 className="font-display text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-400">{project.description}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </MotionSection>
  )
}

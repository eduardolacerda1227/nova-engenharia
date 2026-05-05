type SectionHeadingProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
}: SectionHeadingProps) {
  const isCenter = align === 'center'
  return (
    <div
      className={`mb-10 max-w-3xl space-y-3 ${isCenter ? 'mx-auto text-center' : ''}`}
    >
      {eyebrow ? (
        <p className="font-display text-xs font-semibold uppercase tracking-[0.35em] text-nova-gold">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="text-balance text-base leading-relaxed text-neutral-400 sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}

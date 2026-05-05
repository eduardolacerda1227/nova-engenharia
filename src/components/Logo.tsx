type LogoProps = {
  className?: string
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <img
      src={`${import.meta.env.BASE_URL}assets/logo.png`}
      width={200}
      height={64}
      className={`h-10 w-auto object-contain md:h-12 ${className}`}
      alt="Nova Engenharia"
      decoding="async"
    />
  )
}

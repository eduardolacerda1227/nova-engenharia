import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type MotionSectionProps = {
  id: string
  className?: string
  children: ReactNode
}

export function MotionSection({ id, className = '', children }: MotionSectionProps) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-12% 0px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  )
}

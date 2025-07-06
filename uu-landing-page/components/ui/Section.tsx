import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  background?: 'white' | 'gray' | 'primary' | 'gradient'
  padding?: 'default' | 'large' | 'small'
}

const Section = ({ 
  children, 
  className, 
  id,
  background = 'white',
  padding = 'default' 
}: SectionProps) => {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    primary: 'bg-primary text-white',
    gradient: 'bg-gradient-to-br from-primary to-primary-light text-white',
  }

  const paddings = {
    small: 'py-12 md:py-16',
    default: 'py-16 md:py-24 lg:py-32',
    large: 'py-24 md:py-32 lg:py-40',
  }

  return (
    <section 
      id={id}
      className={cn(
        backgrounds[background],
        paddings[padding],
        className
      )}
    >
      {children}
    </section>
  )
}

export default Section
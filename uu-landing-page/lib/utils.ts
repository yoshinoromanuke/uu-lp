import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Formatting utilities
export function formatNumber(num: number): string {
  return new Intl.NumberFormat('ja-JP').format(num)
}

export function formatPercentage(num: number): string {
  return `${num}%`
}

// Animation utilities
export function fadeInUp(delay: number = 0) {
  return {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay, ease: 'easeOut' }
  }
}

export function fadeIn(delay: number = 0) {
  return {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5, delay, ease: 'easeOut' }
  }
}

export function slideIn(direction: 'left' | 'right' = 'left', delay: number = 0) {
  const x = direction === 'left' ? -50 : 50
  return {
    initial: { opacity: 0, x },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5, delay, ease: 'easeOut' }
  }
}

// Scroll utilities
export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

// Validation utilities
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[0-9-+().\s]+$/
  return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10
}
'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

interface UseScrollAnimationOptions {
  threshold?: number
  triggerOnce?: boolean
  rootMargin?: string
}

export const useScrollAnimation = ({
  threshold = 0.1,
  triggerOnce = true,
  rootMargin = '-50px'
}: UseScrollAnimationOptions = {}) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
    rootMargin
  })

  return { ref, inView }
}

export const useCountAnimation = (
  end: number,
  duration: number = 2000,
  start: number = 0
) => {
  const [count, setCount] = useState(start)
  const countRef = useRef(start)
  const [isAnimating, setIsAnimating] = useState(false)

  const animate = () => {
    if (isAnimating) return
    
    setIsAnimating(true)
    const startTime = Date.now()
    const startValue = countRef.current

    const updateCount = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / duration, 1)
      
      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      
      const currentCount = Math.floor(startValue + (end - startValue) * easeOut)
      setCount(currentCount)
      countRef.current = currentCount

      if (progress < 1) {
        requestAnimationFrame(updateCount)
      } else {
        setIsAnimating(false)
      }
    }

    requestAnimationFrame(updateCount)
  }

  const reset = () => {
    setCount(start)
    countRef.current = start
    setIsAnimating(false)
  }

  return { count, animate, reset, isAnimating }
}
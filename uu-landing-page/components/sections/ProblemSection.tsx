'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { PROBLEM_POINTS } from '@/lib/constants'
import { cn } from '@/lib/utils'

const ProblemSection = () => {
  const { ref, inView } = useScrollAnimation()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <Section id="problems" background="white">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              こんな状況に心当たりはありませんか？
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              多くの成長企業が直面する課題。<br />
              これらを解決することが、次の成長への第一歩です。
            </motion.p>
          </div>

          {/* Problem List */}
          <div className="max-w-3xl mx-auto">
            {PROBLEM_POINTS.map((problem, index) => (
              <motion.div
                key={index}
                className={cn(
                  "group relative bg-gray-50 rounded-lg p-6 mb-4 cursor-pointer transition-all duration-300",
                  hoveredIndex === index && "bg-secondary/5 shadow-md transform -translate-y-1"
                )}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="flex items-start gap-4">
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300",
                    hoveredIndex === index 
                      ? "bg-secondary text-white" 
                      : "bg-gray-200 text-gray-400"
                  )}>
                    {hoveredIndex === index ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <span className="text-lg font-semibold">?</span>
                    )}
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed flex-1">
                    {problem}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <p className="text-xl text-gray-900 font-semibold mb-2">
              これらの課題、すべて解決できます
            </p>
            <p className="text-gray-600">
              実績のあるメソッドと実行支援で、確実な成長を実現します
            </p>
            
            {/* Arrow pointing down */}
            <motion.div
              className="mt-8"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <svg 
                className="w-8 h-8 text-secondary mx-auto" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  )
}

export default ProblemSection
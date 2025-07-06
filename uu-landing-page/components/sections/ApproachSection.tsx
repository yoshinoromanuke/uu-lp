'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { APPROACH_STEPS } from '@/lib/constants'
import { cn } from '@/lib/utils'

const ApproachSection = () => {
  const { ref, inView } = useScrollAnimation()

  return (
    <Section id="approach" background="gray">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              データドリブン × 実行支援 で成果を出す
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              再現性のある3ステップで、確実に成長を実現します
            </motion.p>
          </div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 hidden md:block" />

            {/* Steps */}
            {APPROACH_STEPS.map((step, index) => (
              <motion.div
                key={step.id}
                className="relative mb-12 last:mb-0"
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
              >
                <div className="flex items-start gap-6">
                  {/* Step Number */}
                  <div className={cn(
                    "relative z-10 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0",
                    index === 0 ? "bg-secondary" : 
                    index === 1 ? "bg-accent" : 
                    "bg-primary"
                  )}>
                    {step.id}
                    {/* Pulse Effect */}
                    <div className="absolute inset-0 rounded-full animate-ping opacity-20 bg-current" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white rounded-xl shadow-md p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                        {step.phase}
                      </h3>
                      <span className="text-sm md:text-base text-gray-500 mt-1 md:mt-0">
                        {step.duration}
                      </span>
                    </div>

                    <ul className="space-y-3">
                      {step.activities.map((activity, actIndex) => (
                        <li key={actIndex} className="flex items-start gap-3">
                          <svg 
                            className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                            />
                          </svg>
                          <span className="text-gray-700">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <p className="text-lg text-gray-700 font-medium">
              まずは現状分析から。無料相談で貴社の成長ポテンシャルを診断します
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  )
}

export default ApproachSection
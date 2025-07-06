'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import { useScrollAnimation, useCountAnimation } from '@/hooks/useScrollAnimation'
import { formatNumber, formatPercentage } from '@/lib/utils'
import { SUCCESS_METRICS } from '@/lib/constants'

const metrics = [
  {
    id: 1,
    label: '平均売上成長率',
    value: SUCCESS_METRICS.averageGrowthRate,
    suffix: '%',
    description: '支援企業の前年比成長率',
    color: 'text-accent',
  },
  {
    id: 2,
    label: '支援企業数',
    value: SUCCESS_METRICS.supportedCompanies,
    suffix: '社',
    description: 'シード〜シリーズB企業',
    color: 'text-secondary',
  },
  {
    id: 3,
    label: '累計創出売上',
    value: 30,
    suffix: '億円',
    description: '支援企業の売上増加額',
    color: 'text-primary',
  },
]

const MetricCard = ({ metric }: { metric: typeof metrics[0] }) => {
  const { ref, inView } = useScrollAnimation()
  const { count, animate } = useCountAnimation(metric.value)

  useEffect(() => {
    if (inView) {
      animate()
    }
  }, [inView, animate])

  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <div className={`text-5xl lg:text-6xl font-bold mb-2 ${metric.color}`}>
        {count}
        <span className="text-4xl lg:text-5xl">{metric.suffix}</span>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        {metric.label}
      </h3>
      <p className="text-gray-600">
        {metric.description}
      </p>
    </motion.div>
  )
}

const MetricsSection = () => {
  const { ref: sectionRef, inView: sectionInView } = useScrollAnimation()

  return (
    <Section id="metrics" background="gray" padding="default">
      <Container>
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0 }}
          animate={sectionInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={sectionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              確かな実績で証明される成果
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={sectionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              データと実行力で、すべての支援企業に成長をもたらしています
            </motion.p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.id}
                initial={{ opacity: 0, y: 50 }}
                animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <MetricCard metric={metric} />
              </motion.div>
            ))}
          </div>

          {/* Additional Trust Element */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={sectionInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <p className="text-sm text-gray-500">
              ※ 2023年度実績に基づく数値です
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  )
}

export default MetricsSection
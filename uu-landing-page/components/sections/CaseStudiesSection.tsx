'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { CASE_STUDIES } from '@/lib/constants'
import { cn } from '@/lib/utils'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

// Dynamic import for Bar chart to avoid SSR issues
const Bar = dynamic(() => import('react-chartjs-2').then(mod => mod.Bar), {
  ssr: false,
})

const CaseStudyCard = ({ study, isActive }: { study: typeof CASE_STUDIES[number], isActive: boolean }) => {
  const chartData = 'revenue' in study.results && study.results.revenue ? {
    labels: ['導入前', '導入後'],
    datasets: [
      {
        label: '成長率',
        data: [study.results.revenue.before, study.results.revenue.after],
        backgroundColor: ['#E2E8F0', '#10B981'],
        borderWidth: 0,
      },
    ],
  } : null

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context: any) => `${context.parsed.y}%`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 250,
        ticks: {
          callback: (value: any) => `${value}%`,
        },
      },
    },
  }

  return (
    <motion.div
      className={cn(
        "bg-white rounded-2xl p-6 md:p-8 transition-all duration-300",
        isActive ? "shadow-2xl" : "shadow-lg opacity-90"
      )}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: isActive ? 1 : 0.9, scale: isActive ? 1 : 0.95 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
            {study.category}
          </span>
          <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
            {study.stage}
          </span>
        </div>
      </div>

      {/* Challenge */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-gray-500 mb-2">課題</h4>
        <p className="text-gray-900 font-medium">{study.challenge}</p>
      </div>

      {/* Discovery */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-gray-500 mb-2">発見</h4>
        <p className="text-gray-700">{study.discovery}</p>
      </div>

      {/* Actions */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-gray-500 mb-2">実施施策</h4>
        <ul className="space-y-2">
          {study.actions.map((action, index) => (
            <li key={index} className="flex items-center gap-2 text-gray-700">
              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
              {action}
            </li>
          ))}
        </ul>
      </div>

      {/* Results */}
      <div className="border-t pt-6">
        <h4 className="text-sm font-semibold text-gray-500 mb-4">成果</h4>
        
        {/* Chart */}
        {chartData && (
          <div className="h-48 mb-4">
            <Bar data={chartData} options={chartOptions} />
          </div>
        )}
        
        {/* Result Text */}
        <p className="text-lg font-bold text-accent">
          {study.resultText}
        </p>
      </div>
    </motion.div>
  )
}

const CaseStudiesSection = () => {
  const { ref, inView } = useScrollAnimation()
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <Section id="case-studies" background="primary">
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
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              実績が証明する、確かな成果
            </motion.h2>
            <motion.p 
              className="text-lg text-white/80 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              様々な業界・フェーズの企業で、再現性のある成長を実現しています
            </motion.p>
          </div>

          {/* Case Studies Carousel */}
          <div className="relative">
            <div className="overflow-hidden">
              <motion.div 
                className="flex gap-6 transition-transform duration-500"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {CASE_STUDIES.map((study, index) => (
                  <div key={study.id} className="w-full flex-shrink-0">
                    <CaseStudyCard study={study} isActive={index === activeIndex} />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-2 mt-8">
              {CASE_STUDIES.map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    index === activeIndex 
                      ? "w-8 bg-white" 
                      : "bg-white/40 hover:bg-white/60"
                  )}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to case study ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 text-white/60 hover:text-white transition-colors"
              onClick={() => setActiveIndex((prev) => (prev - 1 + CASE_STUDIES.length) % CASE_STUDIES.length)}
              aria-label="Previous case study"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 text-white/60 hover:text-white transition-colors"
              onClick={() => setActiveIndex((prev) => (prev + 1) % CASE_STUDIES.length)}
              aria-label="Next case study"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}

export default CaseStudiesSection
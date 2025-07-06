'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { DIFFERENTIATORS } from '@/lib/constants'

const iconComponents = {
  implementation: (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  ),
  method: (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  phase: (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
    </svg>
  ),
}

const DifferentiatorsSection = () => {
  const { ref, inView } = useScrollAnimation()

  return (
    <Section id="differentiators" background="white">
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
              なぜUUが選ばれるのか
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              大手コンサルファームとは違う、実践的アプローチ
            </motion.p>
          </div>

          {/* Differentiators Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {DIFFERENTIATORS.map((diff, index) => (
              <motion.div
                key={diff.id}
                className="group"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <div className="bg-gray-50 rounded-2xl p-8 h-full hover:bg-white hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                  {/* Icon */}
                  <div className="w-20 h-20 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                    {iconComponents[diff.icon as keyof typeof iconComponents]}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {diff.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {diff.description}
                  </p>

                  {/* Details */}
                  <p className="text-sm text-gray-600">
                    {diff.details}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Comparison Table */}
          <motion.div
            className="mt-16 overflow-x-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <table className="w-full min-w-[640px] bg-white rounded-lg overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">比較項目</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-primary">UU</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600">大手コンサル</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600">ベンチャー系</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700">実行支援</td>
                  <td className="px-6 py-4 text-center text-2xl">◎</td>
                  <td className="px-6 py-4 text-center text-2xl text-gray-400">△</td>
                  <td className="px-6 py-4 text-center text-2xl text-gray-600">◯</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700">週次PDCA</td>
                  <td className="px-6 py-4 text-center text-2xl">◎</td>
                  <td className="px-6 py-4 text-center text-2xl text-gray-400">×</td>
                  <td className="px-6 py-4 text-center text-2xl text-gray-400">△</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700">料金</td>
                  <td className="px-6 py-4 text-center text-sm font-medium text-primary">月100-300万</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">月500万〜</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">月50-150万</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700">最低契約期間</td>
                  <td className="px-6 py-4 text-center text-sm font-medium text-primary">3ヶ月</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">6ヶ月</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">1ヶ月</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700">実務経験</td>
                  <td className="px-6 py-4 text-center text-2xl">◎</td>
                  <td className="px-6 py-4 text-center text-2xl text-gray-400">△</td>
                  <td className="px-6 py-4 text-center text-2xl text-gray-600">◯</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  )
}

export default DifferentiatorsSection
'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { PROFILE } from '@/lib/constants'

const ProfileSection = () => {
  const { ref, inView } = useScrollAnimation()

  return (
    <Section id="profile" background="gray">
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
              コンサルタントプロフィール
            </motion.h2>
          </div>

          {/* Profile Content */}
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="md:flex">
                {/* Profile Image */}
                <div className="md:w-1/3 bg-gradient-to-br from-primary to-primary-light p-8 flex items-center justify-center">
                  <div className="relative w-48 h-48 md:w-64 md:h-64">
                    <div className="absolute inset-0 bg-white rounded-full" />
                    <div className="absolute inset-2 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full flex items-center justify-center">
                      <svg className="w-24 h-24 md:w-32 md:h-32 text-primary/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Profile Info */}
                <div className="md:w-2/3 p-8 md:p-10">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {PROFILE.name}
                    </h3>
                    <p className="text-lg text-secondary font-medium mb-1">
                      {PROFILE.title}
                    </p>
                    <p className="text-gray-600">
                      {PROFILE.education}
                    </p>
                  </div>

                  {/* Experience List */}
                  <div className="space-y-3">
                    {PROFILE.experience.map((exp, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <p className="text-gray-700 leading-relaxed">{exp}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Achievements */}
                  <motion.div 
                    className="mt-8 pt-8 border-t border-gray-100"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-primary">3社</div>
                        <div className="text-sm text-gray-600">起業経験</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-secondary">2社</div>
                        <div className="text-sm text-gray-600">売却実績</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-accent">8社</div>
                        <div className="text-sm text-gray-600">支援実績</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Trust Elements */}
            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <p className="text-gray-600 mb-4">
                実際に事業を作り、成長させ、売却した経験から<br className="hidden md:inline" />
                机上の空論ではない実践的な支援を提供します
              </p>
              
              {/* Badges */}
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-white rounded-full text-sm text-gray-700 shadow-sm">
                  元スタートアップCTO
                </span>
                <span className="px-4 py-2 bg-white rounded-full text-sm text-gray-700 shadow-sm">
                  プロダクトマネージャー
                </span>
                <span className="px-4 py-2 bg-white rounded-full text-sm text-gray-700 shadow-sm">
                  グロースハッカー
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}

export default ProfileSection
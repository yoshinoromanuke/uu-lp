'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import ContactForm from '@/components/forms/ContactForm'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const CTASection = () => {
  const { ref, inView } = useScrollAnimation()
  const [showForm, setShowForm] = useState(false)

  return (
    <Section id="contact" background="gradient" padding="large">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {/* Urgency Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm font-medium">月3社限定 - 残り2枠</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            まずは30分の無料相談から
          </motion.h2>

          {/* Sub Text */}
          <motion.p 
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            貴社の現状をお聞きし、具体的な成長施策のアイデアをその場でご提案します。<br />
            オンライン対応可能、お気軽にご相談ください。
          </motion.p>

          {/* Benefits */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
              <svg className="w-8 h-8 mb-3 mx-auto text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="font-semibold mb-2">完全無料</h3>
              <p className="text-sm text-white/80">相談料・資料作成費なし</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
              <svg className="w-8 h-8 mb-3 mx-auto text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h3 className="font-semibold mb-2">即日対応</h3>
              <p className="text-sm text-white/80">最短で本日中に相談可能</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
              <svg className="w-8 h-8 mb-3 mx-auto text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="font-semibold mb-2">30分で完結</h3>
              <p className="text-sm text-white/80">効率的に要点をお伝え</p>
            </div>
          </motion.div>

          {/* CTA Button or Form */}
          {!showForm ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button 
                size="lg" 
                variant="secondary"
                className="min-w-[300px] text-lg py-6"
                onClick={() => setShowForm(true)}
              >
                無料相談を予約する
              </Button>
              
              <p className="text-sm text-white/60 mt-4">
                ※ 営業メールは一切送りません
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="max-w-2xl mx-auto"
            >
              <ContactForm onClose={() => setShowForm(false)} />
            </motion.div>
          )}

          {/* Trust Elements */}
          <motion.div
            className="mt-16 pt-16 border-t border-white/20"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <p className="text-white/60 mb-6">これまでの相談企業</p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="text-white/40">シード期スタートアップ 15社</div>
              <div className="text-white/40">シリーズA企業 8社</div>
              <div className="text-white/40">上場企業新規事業 5社</div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  )
}

export default CTASection
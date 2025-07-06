'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { fadeIn, fadeInUp } from '@/lib/utils'
import { SUCCESS_METRICS } from '@/lib/constants'

// A/B Test variants
const variants = {
  A: {
    mainCopy: '8社すべてで売上200%成長を実現',
    subCopy: '実行支援型グロースコンサルティング',
  },
  B: {
    mainCopy: '勝てる構造作りと顧客理解から事業成長を最大化します',
    subCopy: '起業3社・売却2社の経験と、8社への支援実績から導いた再現性あるグロースメソッドで、週1-2日の併走から確実な成長を実現します',
  },
}

const HeroSection = () => {
  const [variant, setVariant] = useState<'A' | 'B'>('B')
  
  // In production, this would be determined by an A/B testing service
  useEffect(() => {
    const selectedVariant = Math.random() > 0.5 ? 'A' : 'B'
    setVariant(selectedVariant)
  }, [])

  const scrollToNext = () => {
    const nextSection = document.getElementById('metrics')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary to-primary-light overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <Container className="relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Content */}
          <motion.div 
            className="text-center text-white"
            initial="initial"
            animate="animate"
          >
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm mb-6"
              {...fadeIn()}
            >
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span>月3社限定受付中</span>
            </motion.div>

            {/* Main Copy */}
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              {...fadeInUp(0.2)}
            >
              {variants[variant].mainCopy}
            </motion.h1>

            {/* Sub Copy */}
            <motion.p 
              className="text-lg md:text-xl lg:text-2xl leading-relaxed mb-8 text-white/90 max-w-3xl mx-auto"
              {...fadeInUp(0.4)}
            >
              {variants[variant].subCopy}
            </motion.p>

            {/* Metrics Badges */}
            <motion.div 
              className="flex flex-wrap justify-center gap-4 mb-10"
              {...fadeInUp(0.6)}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-2xl font-bold">{SUCCESS_METRICS.supportedCompanies}社</div>
                <div className="text-sm text-white/80">支援実績</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-2xl font-bold">{SUCCESS_METRICS.averageGrowthRate}%</div>
                <div className="text-sm text-white/80">平均成長率</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-2xl font-bold">30億円</div>
                <div className="text-sm text-white/80">創出売上</div>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              {...fadeInUp(0.8)}
            >
              <Button 
                size="lg" 
                variant="secondary"
                className="min-w-[200px]"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                無料相談を予約する
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="min-w-[200px] border-white text-white hover:bg-white hover:text-primary"
                onClick={() => window.open('#case-studies', '_self')}
              >
                成功事例を見る
              </Button>
            </motion.div>

            {/* Trust Elements */}
            <motion.div 
              className="text-center"
              {...fadeIn(1)}
            >
              <p className="text-sm text-white/60 mb-4">信頼される企業の成長パートナー</p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                {/* Client logos would go here */}
                <div className="text-white/80">シリーズA〜B スタートアップ</div>
                <div className="text-white/80">上場企業 新規事業部門</div>
                <div className="text-white/80">年商100億円以上 大企業</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToNext}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <svg 
            className="w-6 h-6 text-white/60" 
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
      </Container>
    </section>
  )
}

export default HeroSection
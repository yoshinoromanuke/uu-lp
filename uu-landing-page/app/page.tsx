import HeroSection from '@/components/sections/HeroSection'
import MetricsSection from '@/components/sections/MetricsSection'
import ProblemSection from '@/components/sections/ProblemSection'
import ApproachSection from '@/components/sections/ApproachSection'
import CaseStudiesSection from '@/components/sections/CaseStudiesSection'
import DifferentiatorsSection from '@/components/sections/DifferentiatorsSection'
import ProfileSection from '@/components/sections/ProfileSection'
import CTASection from '@/components/sections/CTASection'
import ScrollIndicator from '@/components/ui/ScrollIndicator'
import PageTracker from '@/components/analytics/PageTracker'

export default function Home() {
  return (
    <>
      <PageTracker />
      <ScrollIndicator />
      <HeroSection />
      <MetricsSection />
      <ProblemSection />
      <ApproachSection />
      <CaseStudiesSection />
      <DifferentiatorsSection />
      <ProfileSection />
      <CTASection />
    </>
  )
}
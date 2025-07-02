
import { Suspense, lazy } from "react"
import { motion } from "framer-motion"
import HeroSection from "../components/HeroSection"
import FooterBar from "../components/FooterBar"
import StatsCounter from "../components/StatsCounter"

// Lazy load sections for better performance
const WhyChooseUs = lazy(() => import("../section/WhyChooseUs"))
const LoanCalculator = lazy(() => import("../section/LoanCalculator"))
const OurServices = lazy(() => import("../section/OurServices"))
const TestimonialsSection = lazy(() => import("../section/TestimonialsSection"))
const TeamSection = lazy(() => import("../section/TeamSection"))
const FeaturedCausesSection = lazy(() => import("../section/FeaturedCausesSection"))
const CollaboratingPartnersSection = lazy(() => import("../section/CollaboratingPartnersSection"))
const FaqSection = lazy(() => import("../section/FaqSection"))



const SectionLoader = () => (
  <div className="flex justify-center items-center py-20">
    <div className="flex items-center gap-4">
      <div className="relative">
        <div className="w-8 h-8 border-4 border-emerald-200 rounded-full animate-spin"></div>
        <div className="absolute inset-0 w-8 h-8 border-4 border-emerald-600 rounded-full border-t-transparent animate-spin"></div>
      </div>
      <span className="text-gray-600 font-medium">Loading Akhuwat Islamic MicroFinance content...</span>
    </div>
  </div>
)

const LazySection = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    viewport={{ once: true, margin: "-100px" }}
  >
    <Suspense fallback={<SectionLoader />}>{children}</Suspense>
  </motion.div>
)

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section - Load immediately */}
      <HeroSection />
      <FooterBar />

      {/* Stats Counter */}
      <StatsCounter />

      {/* Lazy loaded sections with staggered animations */}
      <LazySection>
        <WhyChooseUs />
      </LazySection>

      <LazySection delay={0.1}>
        <OurServices />
      </LazySection>

      <LazySection delay={0.2}>
        <LoanCalculator />
      </LazySection>

      <LazySection delay={0.1}>
        <TestimonialsSection />
      </LazySection>

      <LazySection delay={0.2}>
        <FeaturedCausesSection />
      </LazySection>

      <LazySection delay={0.1}>
        <TeamSection />
      </LazySection>

      <LazySection delay={0.2}>
        <CollaboratingPartnersSection />
      </LazySection>

      <LazySection delay={0.1}>
        <FaqSection />
      </LazySection>
    </div>
  )
}

export default HomePage

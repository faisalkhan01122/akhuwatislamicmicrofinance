import HeroImgSection from "../components/HeroImgSection"
import FooterBar from "../components/FooterBar"
import AkhuwatScheme from "../section/AkhuwatScheme"
import LoanInt from "../section/LoanInt"
import OurServices from "../section/OurServices"
import LoanSection from "../section/LoanSection"
import LoanCardSection from "../section/LoanCardSection"
import AkhuwatLoanSection from "../section/AkhuwatLoanSection"
import AkhuwatTrustSection from "../section/AkhuwatTrustSection"
import ApplyLoanSteps from "../section/ApplyLoanSteps"
import LoanSchemeSection from "../section/LoanSchemeSection"
import TestimonialsSection from "../section/TestimonialsSection"
import FeaturedCausesSection from "../section/FeaturedCausesSection"

const LoanServicesPage = () => {
  return (
    <>
      <HeroImgSection
        imageUrl="/loan.webp"
        text="Akhuwat Loan Services"
      />
      <FooterBar />
      <AkhuwatScheme />
      <LoanInt />
      <OurServices />
      <TestimonialsSection/>
      <h1 className="text-3xl font-bold text-center pt-5 text-[#22C55E]">AKHUWAT LOAN HELPLINE NUMBER 2025</h1>
      {/* <AkhuwatScheme/> */}
      <LoanSection />
      <LoanCardSection />
      <AkhuwatLoanSection />
      <FeaturedCausesSection />
      <AkhuwatTrustSection />
      <ApplyLoanSteps />
      <LoanSchemeSection />
    </>
  )
}

export default LoanServicesPage

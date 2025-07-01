import { createBrowserRouter } from "react-router-dom"
import RootLayout from "./layout/RootLayout"
import HomePage from "./pages/HomePage"
import AboutUsPage from "./pages/AboutUsPage"
import ServicesPage from "./pages/ServicesPage"
import ImpactPage from "./pages/ImpactPage"
import LoanServicesPage from "./pages/LoanServicesPage"
import MicrofinanceLoansPage from "./pages/MicrofinanceLoansPage"
import PersonalLoansPage from "./pages/PersonalLoansPage"
import HealthcareLoansPage from "./pages/HealthcareLoansPage"
import EducationLoansPage from "./pages/EducationLoansPage"

import EmergencyLoansPage from "./pages/EmergencyLoansPage"
import ContactUsPage from "./pages/ContactUsPage"
import TermsConditionsPage from "./pages/TermsConditionsPage"
import DisclaimerPage from "./pages/DisclaimerPage"
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage"
import HousingLoansPage from "./pages/HousingLoansPage"
import BusinessLoansPage from "./pages/BusinessLoansPage"
import HelpCenterPage from "./pages/HelpCenterPage"
// import BusinessLoansPage from "./pages/BusinessLoansPage"
// import MicrofinanceLoansPage from "./pages/MicrofinanceLoansPage"
// import PersonalLoansPage from "./pages/PersonalLoansPage"
// import HealthcareLoansPage from "./pages/HealthcareLoansPage"
// import EducationLoansPage from "./pages/EducationLoansPage"
// import HousingLoansPage from "./pages/HousingLoansPage"
// import EmergencyLoansPage from "./pages/EmergencyLoansPage"
// import ContactUsPage from "./pages/ContactUsPage"
// import TermsConditionsPage from "./pages/TermsConditionsPage"
// import DisclaimerPage from "./pages/DisclaimerPage"
// import PrivacyPolicyPage from "./pages/PrivacyPolicyPage"
// import HelpCenterPage from "./pages/HelpCenterPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutUsPage />,
      },
      {
        path: "services",
        element: <ServicesPage />,
      },
      {
        path: "impact",
        element: <ImpactPage />,
      },
      {
        path: "loans",
        element: <LoanServicesPage />,
      },
      {
        path: "loans/business",
        element: <BusinessLoansPage />,
      },
      {
        path: "loans/microfinance",
        element: <MicrofinanceLoansPage />,
      },
      {
        path: "loans/personal",
        element: <PersonalLoansPage />,
      },
      {
        path: "loans/healthcare",
        element: <HealthcareLoansPage />,
      },
      {
        path: "loans/education",
        element: <EducationLoansPage />,
      },
      {
        path: "loans/housing",
        element: <HousingLoansPage />,
      },
      {
        path: "loans/emergency",
        element: <EmergencyLoansPage />,
      },
      {
        path: "contact-us",
        element: <ContactUsPage />,
      },
      {
        path: "terms-and-conditions",
        element: <TermsConditionsPage />,
      },
      {
        path: "disclaimer",
        element: <DisclaimerPage />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicyPage />,
      },
      {
        path: "help-center",
        element: <HelpCenterPage />,
      },
    ],
  },
])

export default router

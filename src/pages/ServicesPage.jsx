
import { motion } from "framer-motion"
import HeroImgSection from "../components/HeroImgSection"

import {
  FaBuilding,
  FaHome,
  FaUser,
  FaGraduationCap,
  FaMedkit,
  FaUsers,
  FaHandHoldingHeart ,
  FaArrowRight,
  FaCheckCircle,
  FaClock,
  FaShieldAlt,
} from "react-icons/fa"
import ModernCard from "../components/ModernCard"

const ServicesPage = () => {
  const services = [
    {
      title: "Business Loans",
      description:
        "Start or expand your business with our Sharia-compliant financing. From small shops to large enterprises, we support entrepreneurial dreams with flexible terms.",
      image: "/businessloanbanner.jpg",
      icon: FaBuilding,
      color: "from-blue-500 to-blue-600",
      features: ["Up to ₨25 Lacs", "No Collateral Required", "Quick 7-Day Approval", "Business Mentoring Support"],
      badge: "Most Popular",
      href: "/loan-services#business",
    },
    {
      title: "Housing Loans",
      description:
        "Build your dream home with our interest-free housing finance. Whether buying, building, or renovating, we make homeownership accessible.",
      image: "/hmloan.jpg",
      icon: FaHome,
      color: "from-green-500 to-green-600",
      features: ["Up to ₨50 Lacs", "Long-term Repayment", "Construction Support", "Legal Assistance"],
      href: "/loan-services#housing",
    },
    {
      title: "Personal Loans",
      description:
        "Meet your personal financial needs with dignity. From medical emergencies to family events, our loans provide immediate relief.",
      image: "/Personal-Loans.webp",
      icon: FaUser,
      color: "from-purple-500 to-purple-600",
      features: ["Up to ₨10 Lacs", "Emergency Support", "Fast Disbursement", "Flexible Terms"],
      href: "/loan-services#personal",
    },
    {
      title: "Education Loans",
      description:
        "Invest in your future with our education financing. From school fees to university expenses, we ensure education is accessible.",
      image: "/What-is-Education-Loan-1-1.png",
      icon: FaGraduationCap,
      color: "from-indigo-500 to-indigo-600",
      features: ["Full Fee Coverage", "Books & Materials", "Living Expenses", "Merit-based Support"],
      href: "/loan-services#education",
    },
    {
      title: "Microfinance Loans",
      description:
        "Empower small entrepreneurs and women with our microfinance solutions. Small loans that create big impacts in communities.",
      image: "/micr.jpg",
      icon: FaUsers,
      color: "from-orange-500 to-orange-600",
      features: ["₨50K to ₨5 Lacs", "Women Focused", "Group Lending", "Skill Development"],
      href: "/loan-services#microfinance",
    },
    {
      title: "Healthcare Loans",
      description:
        "Access quality healthcare without financial stress. Our medical loans cover treatments, surgeries, and ongoing healthcare needs.",
      image: "/Sharing-a-Home-Loan-Yes-or-No-to-a-Joint-Home-Loan.jpg",
      icon: FaMedkit,
      color: "from-red-500 to-red-600",
      features: ["Medical Emergencies", "Surgery Support", "Treatment Plans", "Family Coverage"],
      href: "/loan-services#healthcare",
    },
  ]

  return (
    <>
      <HeroImgSection imageUrl="/loan.webp" text="Akhuwat Network Services" />

      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="flex items-center justify-center gap-3 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center">
                <FaHandHoldingHeart  className="text-white text-xl" />
              </div>
              <span className="text-emerald-600 font-bold text-lg">Akhuwat Network Services</span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Comprehensive{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Financial Solutions
              </span>
            </motion.h2>

            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Discover our range of Sharia-compliant, interest-free financial services designed to empower individuals,
              families, and businesses across Pakistan.
            </motion.p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <ModernCard
                key={index}
                title={service.title}
                description={service.description}
                image={service.image}
                icon={service.icon}
                color={service.color}
                features={service.features}
                badge={service.badge}
                href={service.href}
                cta="Learn More"
              />
            ))}
          </div>

          {/* Key Benefits */}
          <motion.div
            className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative z-10">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Akhuwat Network?</h3>
                  <div className="space-y-4">
                    {[
                      {
                        icon: FaShieldAlt,
                        title: "100% Sharia Compliant",
                        desc: "All services follow Islamic principles",
                      },
                      { icon: FaClock, title: "Quick Processing", desc: "Fast approval within 7 working days" },
                      { icon: FaCheckCircle, title: "No Hidden Charges", desc: "Transparent and honest pricing" },
                      { icon: FaUsers, title: "Community Support", desc: "Building stronger communities together" },
                    ].map((benefit, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                          <benefit.icon className="text-xl" />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg">{benefit.title}</h4>
                          <p className="text-emerald-100">{benefit.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <motion.div
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-6"
                    whileHover={{ scale: 1.05 }}
                  >
                    <h4 className="text-2xl font-bold mb-4">Ready to Get Started?</h4>
                    <p className="text-emerald-100 mb-6">Join 4+ million beneficiaries who trust Akhuwat Network</p>
                    <motion.a
                      href="/loan-services"
                      className="inline-flex items-center gap-3 bg-white text-emerald-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Apply Now
                      <FaArrowRight />
                    </motion.a>
                  </motion.div>

                  <div className="text-center">
                    <p className="text-emerald-200 mb-2">Need Help? Call Us</p>
                    <a href="tel:+923281969250" className="text-2xl font-bold hover:text-emerald-200 transition-colors">
                      📞 +92 328 1969250
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default ServicesPage

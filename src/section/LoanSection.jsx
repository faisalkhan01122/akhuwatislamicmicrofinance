"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import {
  FaBuilding,
  FaUsers,
  FaUser,
  FaMedkit,
  FaGraduationCap,
  FaHome,
  FaShieldAlt,
  FaMosque,
  FaHandHoldingHeart,
  FaArrowRight,
  FaStar,
} from "react-icons/fa"

const LoanSection = () => {
  const loanTypes = [
    {
      id: 1,
      title: "Business Qarz-e-Hasna",
      arabicTitle: "قرض حسنة للأعمال",
      description: "Empower your halal business with Sharia-compliant financing up to ₨30 Lacs",
      amount: "₨50K - ₨30L",
      tenure: "6-36 months",
      icon: FaBuilding,
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-600",
      path: "/loans/business",
      features: ["Zero Interest", "Flexible Repayment", "Quick Approval", "Halal Business Only"],
      image: "/akhuwatfoundationbusinessloan.jpg",
      popular: true,
    },
    {
      id: 2,
      title: "Microfinance Solutions",
      arabicTitle: "الحلول المصرفية الصغيرة",
      description: "Small-scale financing for entrepreneurs and micro-businesses across Pakistan",
      amount: "₨50K - ₨5L",
      tenure: "12-24 months",
      icon: FaUsers,
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      path: "/loans/microfinance",
      features: ["Community Based", "Group Lending", "Skill Development", "Women Focused"],
      image: "/microfinance-solutions.jpg",
    },
    {
      id: 3,
      title: "Personal Finance",
      arabicTitle: "التمويل الشخصي",
      description: "Interest-free personal loans for urgent family needs and emergencies",
      amount: "₨25K - ₨15L",
      tenure: "6-24 months",
      icon: FaUser,
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
      path: "/loans/personal",
      features: ["No Guarantor", "Quick Processing", "Flexible Terms", "Family Support"],
      image: "/personal-finance.jpg",
    },
    {
      id: 4,
      title: "Healthcare Support",
      arabicTitle: "الدعم الصحي",
      description: "Medical emergency financing for treatments and healthcare needs",
      amount: "₨10K - ₨10L",
      tenure: "3-18 months",
      icon: FaMedkit,
      color: "from-red-500 to-pink-600",
      bgColor: "bg-red-50",
      textColor: "text-red-600",
      path: "/loans/healthcare",
      features: ["Emergency Support", "Medical Bills", "Treatment Funding", "Family Care"],
      image: "/healthcare-support.jpg",
    },
    {
      id: 5,
      title: "Education Funding",
      arabicTitle: "تمويل التعليم",
      description: "Complete Islamic and modern education support for deserving students",
      amount: "₨20K - ₨8L",
      tenure: "12-48 months",
      icon: FaGraduationCap,
      color: "from-indigo-500 to-blue-600",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-600",
      path: "/loans/education",
      features: ["Student Support", "Fee Payment", "Book Allowance", "Merit Based"],
      image: "/education-funding.jpg",
    },
    {
      id: 6,
      title: "Housing Finance",
      arabicTitle: "تمويل الإسكان",
      description: "Dream home financing with Islamic principles up to ₨50 Lacs",
      amount: "₨1L - ₨50L",
      tenure: "12-60 months",
      icon: FaHome,
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
      path: "/loans/housing",
      features: ["Home Purchase", "Construction", "Renovation", "Land Purchase"],
      image: "/housing-finance.jpg",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-emerald-50 relative overflow-hidden">
      {/* Background Islamic Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 border-4 border-emerald-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 border-2 border-teal-400 rounded-full animate-ping"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 border border-green-400 rounded-full animate-bounce"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex items-center justify-center gap-4 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <FaMosque className="text-4xl text-emerald-600" />
            <div className="text-center">
              <span className="text-emerald-600 font-bold text-xl block">Islamic Finance Solutions</span>
              <span className="text-gray-500 text-sm">100% Sharia Compliant</span>
            </div>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl font-black text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Interest-Free{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              Qarz-e-Hasna
            </span>{" "}
            Solutions
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Discover our comprehensive range of Islamic financial products designed to support every aspect of your life
            while maintaining complete Sharia compliance and zero interest.
          </motion.p>

          {/* Islamic Assurance Banner */}
          <motion.div
            className="inline-flex items-center gap-3 bg-emerald-50 border border-emerald-200 rounded-full px-6 py-3"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <FaShieldAlt className="text-emerald-600" />
            <span className="text-emerald-700 font-semibold">100% Halal • Zero Riba • Sharia Certified</span>
          </motion.div>
        </motion.div>

        {/* Loan Types Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {loanTypes.map((loan, index) => (
            <motion.div
              key={loan.id}
              className="group relative bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {/* Popular Badge */}
              {loan.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <FaStar className="w-3 h-3" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Header with Icon */}
              <div className={`bg-gradient-to-r ${loan.color} p-8 text-white relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-2 right-2 w-20 h-20 border-2 border-white rounded-full"></div>
                  <div className="absolute bottom-2 left-2 w-16 h-16 border border-white rounded-full"></div>
                </div>

                <div className="relative z-10">
                  <loan.icon className="text-4xl mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{loan.title}</h3>
                  <p className="text-lg opacity-90 mb-4">{loan.arabicTitle}</p>

                  {/* Amount & Tenure */}
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-2xl font-black">{loan.amount}</div>
                      <div className="text-sm opacity-80">Amount Range</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold">{loan.tenure}</div>
                      <div className="text-sm opacity-80">Repayment</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">{loan.description}</p>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wide">Key Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {loan.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <Link
                  to={loan.path}
                  className={`group/btn w-full flex items-center justify-center gap-3 ${loan.bgColor} ${loan.textColor} font-bold py-4 rounded-2xl hover:shadow-lg transition-all duration-300`}
                >
                  Learn More
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-12 text-white text-center relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 border-4 border-white rounded-full -translate-y-48 translate-x-48"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 border-2 border-white rounded-full translate-y-40 -translate-x-40"></div>
          </div>

          <div className="relative z-10">
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-bold mb-4">Ready to Start Your Islamic Finance Journey?</h3>
              <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
                Join millions of Pakistanis who have transformed their lives through our interest-free, Sharia-compliant
                financial solutions.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="https://wa.me/923354571620"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-emerald-600 font-bold px-8 py-4 rounded-full hover:bg-emerald-50 transition-all duration-300 flex items-center gap-3 shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaHandHoldingHeart className="text-xl" />
                Apply for Qarz-e-Hasna
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                >
                  →
                </motion.span>
              </motion.a>

              <motion.a
                href="tel:+923354571620"
                className="bg-white/10 border-2 border-white/30 text-white font-bold px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-300 flex items-center gap-3 backdrop-blur-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                📞 Call Now: +92 335 4571 620
              </motion.a>
            </motion.div>

            {/* Islamic Assurance */}
            <motion.div
              className="mt-8 flex items-center justify-center gap-6 text-emerald-100"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2">
                <FaShieldAlt />
                <span className="text-sm">Sharia Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <FaMosque />
                <span className="text-sm">100% Halal</span>
              </div>
              <div className="flex items-center gap-2">
                <FaHandHoldingHeart />
                <span className="text-sm">Zero Interest</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default LoanSection

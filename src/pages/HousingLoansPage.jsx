"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import {
  FaHome,
  FaArrowRight,
  FaMoneyBillWave,
  FaShieldAlt,
  FaClock,
  FaHandshake,
  FaPhone,
  FaCheckCircle,
  FaHammer,
  FaTools,
  FaPaintRoller,
} from "react-icons/fa"

const HousingLoansPage = () => {
  const [loanAmount, setLoanAmount] = useState(1000000)
  const [loanTerm, setLoanTerm] = useState(60)

  const loanFeatures = [
    {
      icon: FaMoneyBillWave,
      title: "Up to ₨50 Lacs",
      description: "Substantial housing finance for your dream home",
      color: "text-emerald-600",
    },
    {
      icon: FaShieldAlt,
      title: "0% Interest Rate",
      description: "Completely interest-free housing loans",
      color: "text-blue-600",
    },
    {
      icon: FaClock,
      title: "Up to 10 Years",
      description: "Extended repayment terms for affordability",
      color: "text-purple-600",
    },
    {
      icon: FaHandshake,
      title: "Flexible Options",
      description: "Customized solutions for different housing needs",
      color: "text-orange-600",
    },
  ]

  const housingCategories = [
    {
      icon: FaHome,
      title: "Home Purchase",
      description: "Buy your dream home with our purchase financing",
      examples: ["New House Purchase", "Resale Property", "Plot + Construction", "Ready Possession"],
      loanRange: "₨10L - ₨50L",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: FaHammer,
      title: "Home Construction",
      description: "Build your custom home from the ground up",
      examples: ["New Construction", "Foundation to Finish", "Phased Construction", "Self-Build Projects"],
      loanRange: "₨5L - ₨40L",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: FaTools,
      title: "Home Renovation",
      description: "Upgrade and improve your existing property",
      examples: ["Kitchen Renovation", "Bathroom Upgrade", "Room Addition", "Complete Makeover"],
      loanRange: "₨2L - ₨15L",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: FaPaintRoller,
      title: "Home Improvement",
      description: "Enhance your home's comfort and value",
      examples: ["Interior Design", "Flooring", "Electrical Work", "Plumbing Upgrade"],
      loanRange: "₨1L - ₨10L",
      color: "from-orange-500 to-red-600",
    },
  ]

  const calculateMonthlyPayment = () => {
    return Math.round(loanAmount / loanTerm)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-emerald-50">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-400 rounded-full animate-float blur-3xl"></div>
          <div className="absolute bottom-32 right-20 w-80 h-80 bg-blue-400 rounded-full animate-float-reverse blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <motion.div
                className="flex items-center gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center shadow-2xl">
                  <FaHome className="text-white text-2xl" />
                </div>
                <div>
                  <span className="text-emerald-600 font-bold text-xl block">Akhuwat Network</span>
                  <span className="text-gray-500 text-sm">Housing Finance Solutions</span>
                </div>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-7xl font-black text-gray-900 mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Housing{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                  Loans
                </span>
              </motion.h1>

              <motion.p
                className="text-2xl text-gray-600 mb-10 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Turn your dream of homeownership into reality with our Sharia-compliant, interest-free housing loans.
                Whether buying, building, or renovating, we're here to help you create your perfect home.
              </motion.p>

              <motion.div
                className="grid grid-cols-2 gap-6 mb-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                {loanFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <feature.icon className={`text-3xl ${feature.color} mb-3`} />
                    <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <motion.a
                href="https://wa.me/923281969250"
  target="_blank"
  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-10 py-5 rounded-full font-bold text-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Apply Now
                  <FaArrowRight />
                </motion.a>

                <motion.button
                  className="bg-white/80 backdrop-blur-sm border-2 border-emerald-600 text-emerald-600 px-10 py-5 rounded-full font-bold text-xl hover:bg-emerald-50 transition-all duration-300 flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaPhone />
                  Call: +92 328 1969250
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img src="https://propakistani.pk/wp-content/uploads/2024/08/housing-.jpg" alt="Housing Loans" className="w-full h-96 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                <motion.div
                  className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-center">
                    <div className="text-3xl font-black text-emerald-600 mb-2">₨50L</div>
                    <div className="text-sm text-gray-600 font-semibold">Maximum Loan</div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-center">
                    <div className="text-3xl font-black text-blue-600 mb-2">10</div>
                    <div className="text-sm text-gray-600 font-semibold">Years Term</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Housing Categories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-black text-gray-900 mb-8">
              Housing{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Solutions
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive financing options for all your housing needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {housingCategories.map((category, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className={`bg-gradient-to-r ${category.color} p-8 text-white text-center`}>
                  <category.icon className="text-4xl mb-4 mx-auto" />
                  <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                  <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    <FaMoneyBillWave className="text-xs" />
                    {category.loanRange}
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="space-y-2">
                    {category.examples.map((example, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <FaCheckCircle className="text-emerald-500 text-xs" />
                        <span>{example}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-emerald-600 to-teal-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-48 translate-x-48"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full translate-y-40 -translate-x-40"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-8">Build Your Dream Home Today</h2>
            <p className="text-2xl text-emerald-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Don't wait to own your dream home. Apply for our interest-free housing loan and take the first step
              towards homeownership with Akhuwat's trusted financing solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a 
              href="https://wa.me/923281969250"
  target="_blank"
  rel="noopener noreferrer"
                className="bg-white text-emerald-600 px-12 py-6 rounded-full font-bold text-xl hover:bg-gray-100 transition-all duration-300 shadow-2xl flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaHome />
                Apply for Housing Loan
              </motion.a>

              <motion.button
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-12 py-6 rounded-full font-bold text-xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPhone />
                Call: +92 328 1969250
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HousingLoansPage

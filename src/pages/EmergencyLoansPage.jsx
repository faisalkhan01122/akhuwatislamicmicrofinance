"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import {
  FaExclamationTriangle,
  FaArrowRight,
  FaMoneyBillWave,
  FaShieldAlt,
  FaClock,
  FaHandshake,
  FaPhone,
  FaCheckCircle,
  FaHeartbeat,
  FaFire,
  FaCarCrash,
  FaCloudRain,
} from "react-icons/fa"

const EmergencyLoansPage = () => {
  const [loanAmount, setLoanAmount] = useState(200000)
  const [loanTerm, setLoanTerm] = useState(12)

  const loanFeatures = [
    {
      icon: FaMoneyBillWave,
      title: "Up to ₨5 Lacs",
      description: "Quick emergency funding when you need it most",
      color: "text-red-600",
    },
    {
      icon: FaShieldAlt,
      title: "0% Interest Rate",
      description: "Interest-free emergency assistance",
      color: "text-emerald-600",
    },
    {
      icon: FaClock,
      title: "Same Day Approval",
      description: "Emergency loans processed within hours",
      color: "text-orange-600",
    },
    {
      icon: FaHandshake,
      title: "Minimal Documentation",
      description: "Simplified process for urgent situations",
      color: "text-blue-600",
    },
  ]

  const emergencyCategories = [
    {
      icon: FaHeartbeat,
      title: "Medical Emergency",
      description: "Urgent medical treatments and hospital expenses",
      examples: ["Emergency Surgery", "ICU Treatment", "Ambulance Services", "Critical Care"],
      loanRange: "₨50K - ₨5L",
      color: "from-red-500 to-pink-600",
    },
    {
      icon: FaFire,
      title: "Natural Disasters",
      description: "Recovery assistance for natural calamities",
      examples: ["Flood Damage", "Earthquake Recovery", "Fire Damage", "Storm Repairs"],
      loanRange: "₨1L - ₨5L",
      color: "from-orange-500 to-red-600",
    },
    {
      icon: FaCarCrash,
      title: "Accident Recovery",
      description: "Support for accident-related expenses",
      examples: ["Vehicle Repair", "Property Damage", "Medical Bills", "Legal Expenses"],
      loanRange: "₨25K - ₨3L",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: FaCloudRain,
      title: "Family Crisis",
      description: "Financial support during family emergencies",
      examples: ["Sudden Death", "Job Loss", "Family Emergency", "Urgent Travel"],
      loanRange: "₨30K - ₨2L",
      color: "from-purple-500 to-pink-600",
    },
  ]

  const calculateMonthlyPayment = () => {
    return Math.round(loanAmount / loanTerm)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-red-50">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-96 h-96 bg-red-400 rounded-full animate-float blur-3xl"></div>
          <div className="absolute bottom-32 right-20 w-80 h-80 bg-orange-400 rounded-full animate-float-reverse blur-3xl"></div>
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
                <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-orange-600 rounded-full flex items-center justify-center shadow-2xl">
                  <FaExclamationTriangle className="text-white text-2xl" />
                </div>
                <div>
                  <span className="text-red-600 font-bold text-xl block">Akhuwat Network</span>
                  <span className="text-gray-500 text-sm">Emergency Financial Assistance</span>
                </div>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-7xl font-black text-gray-900 mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Emergency{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Loans</span>
              </motion.h1>

              <motion.p
                className="text-2xl text-gray-600 mb-10 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                When life throws unexpected challenges, we're here to help. Get immediate financial assistance with our
                fast-track emergency loans. Same-day approval for urgent situations.
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
                  className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-10 py-5 rounded-full font-bold text-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Apply Now
                  <FaArrowRight />
                </motion.a>

                <motion.button
                  className="bg-white/80 backdrop-blur-sm border-2 border-red-600 text-red-600 px-10 py-5 rounded-full font-bold text-xl hover:bg-red-50 transition-all duration-300 flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaPhone />
                  Emergency: +92 328 1969250
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
                <img src="https://www.idfcfirstbank.com/content/dam/idfcfirstbank/images/blog/personal-loan/top-reasons-to-get-an-emergency-loan-717x404.jpg" alt="Emergency Loans" className="w-full h-96 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                <motion.div
                  className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-center">
                    <div className="text-3xl font-black text-red-600 mb-2">₨5L</div>
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
                    <div className="text-3xl font-black text-orange-600 mb-2">24hr</div>
                    <div className="text-sm text-gray-600 font-semibold">Processing</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency Categories */}
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
              Emergency{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                Categories
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Fast financial assistance for various emergency situations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {emergencyCategories.map((category, index) => (
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
      <section className="py-24 bg-gradient-to-r from-red-600 to-orange-600 text-white relative overflow-hidden">
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
            <h2 className="text-5xl md:text-6xl font-black mb-8">Need Emergency Help?</h2>
            <p className="text-2xl text-red-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Don't face emergencies alone. Our emergency loan service is available 24/7 to provide immediate financial
              assistance when you need it most. Apply now for same-day approval.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
              href="https://wa.me/923281969250"
  target="_blank"
  rel="noopener noreferrer"
                className="bg-white text-red-600 px-12 py-6 rounded-full font-bold text-xl hover:bg-gray-100 transition-all duration-300 shadow-2xl flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaExclamationTriangle />
                Apply for Emergency Loan
              </motion.a>

              <motion.button
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-12 py-6 rounded-full font-bold text-xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPhone />
                Emergency: +92 328 1969250
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default EmergencyLoansPage

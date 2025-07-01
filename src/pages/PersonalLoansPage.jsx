"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import {
  FaUser,
  FaArrowRight,
  FaMoneyBillWave,
  FaShieldAlt,
  FaClock,
  FaHandshake,
  FaPhone,
  FaCalculator,
  FaCheckCircle,
  FaHeart,
  FaGraduationCap,
  FaHome,
  FaCar,
  FaRing,
  FaMedkit,
} from "react-icons/fa"

const PersonalLoansPage = () => {
  const [loanAmount, setLoanAmount] = useState(200000)
  const [loanTerm, setLoanTerm] = useState(18)

  const loanFeatures = [
    {
      icon: FaMoneyBillWave,
      title: "Up to ₨10 Lacs",
      description: "Substantial personal financing for your needs",
      color: "text-blue-600",
    },
    {
      icon: FaShieldAlt,
      title: "0% Interest Rate",
      description: "Completely interest-free personal loans",
      color: "text-emerald-600",
    },
    {
      icon: FaClock,
      title: "Quick 3-Day Approval",
      description: "Fast processing for urgent personal needs",
      color: "text-purple-600",
    },
    {
      icon: FaHandshake,
      title: "Flexible Terms",
      description: "Customized repayment plans up to 5 years",
      color: "text-orange-600",
    },
  ]

  const loanPurposes = [
    {
      icon: FaRing,
      title: "Wedding Expenses",
      description: "Make your special day memorable without financial stress",
      loanRange: "₨2L - ₨8L",
      color: "from-pink-500 to-rose-600",
    },
    {
      icon: FaMedkit,
      title: "Medical Treatment",
      description: "Access quality healthcare for you and your family",
      loanRange: "₨50K - ₨5L",
      color: "from-red-500 to-pink-600",
    },
    {
      icon: FaGraduationCap,
      title: "Higher Education",
      description: "Invest in education for a brighter future",
      loanRange: "₨1L - ₨6L",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: FaHome,
      title: "Home Renovation",
      description: "Improve your living space and comfort",
      loanRange: "₨1.5L - ₨7L",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: FaCar,
      title: "Vehicle Purchase",
      description: "Buy a car or motorcycle for transportation",
      loanRange: "₨3L - ₨10L",
      color: "from-purple-500 to-indigo-600",
    },
    {
      icon: FaHeart,
      title: "Family Events",
      description: "Celebrate life's important moments",
      loanRange: "₨75K - ₨4L",
      color: "from-orange-500 to-red-600",
    },
  ]

  const eligibilityCriteria = [
    "Pakistani citizen aged 21-65 years",
    "Stable monthly income (minimum ₨25,000)",
    "Valid CNIC and proof of residence",
    "Bank statements for last 6 months",
    "Two guarantors with valid CNICs",
    "Clean credit history preferred",
  ]

  const calculateMonthlyPayment = () => {
    return Math.round(loanAmount / loanTerm)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400 rounded-full animate-float blur-3xl"></div>
          <div className="absolute bottom-32 right-20 w-80 h-80 bg-purple-400 rounded-full animate-float-reverse blur-3xl"></div>
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
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                  <FaUser className="text-white text-2xl" />
                </div>
                <div>
                  <span className="text-blue-600 font-bold text-xl block">Akhuwat Network</span>
                  <span className="text-gray-500 text-sm">Personal Finance Solutions</span>
                </div>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-7xl font-black text-gray-900 mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Personal{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Loans
                </span>
              </motion.h1>

              <motion.p
                className="text-2xl text-gray-600 mb-10 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Fulfill your personal dreams and handle life's important moments with our Sharia-compliant,
                interest-free personal loans. From weddings to education, we're here to support you.
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
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-full font-bold text-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Apply Now
                  <FaArrowRight />
                </motion.a>

                <motion.button
                  className="bg-white/80 backdrop-blur-sm border-2 border-blue-600 text-blue-600 px-10 py-5 rounded-full font-bold text-xl hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-3"
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
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCmeqPTRZkSDQTQhob2ep1kXqpacYQyjRJkg&s" alt="Personal Loans" className="w-full h-96 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                <motion.div
                  className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-center">
                    <div className="text-3xl font-black text-blue-600 mb-2">₨10L</div>
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
                    <div className="text-3xl font-black text-emerald-600 mb-2">3</div>
                    <div className="text-sm text-gray-600 font-semibold">Days Approval</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Loan Calculator */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-black text-gray-900 mb-8">
              Personal Loan{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Calculator
              </span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-8">
                <FaCalculator className="text-3xl text-blue-600" />
                <h3 className="text-3xl font-bold text-gray-900">Calculate Your Loan</h3>
              </div>

              <div className="space-y-8">
                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-4">
                    Loan Amount: ₨{loanAmount.toLocaleString()}
                  </label>
                  <input
                    type="range"
                    min="50000"
                    max="1000000"
                    step="25000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number.parseInt(e.target.value))}
                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>₨50K</span>
                    <span>₨10L</span>
                  </div>
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-4">Loan Term: {loanTerm} months</label>
                  <input
                    type="range"
                    min="6"
                    max="60"
                    step="6"
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(Number.parseInt(e.target.value))}
                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>6 months</span>
                    <span>60 months</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-3xl shadow-2xl p-12 border border-gray-100"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Loan Summary</h3>

              <div className="space-y-6">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
                  <span className="text-lg font-semibold text-gray-700">Loan Amount</span>
                  <span className="text-2xl font-bold text-blue-600">₨{loanAmount.toLocaleString()}</span>
                </div>

                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
                  <span className="text-lg font-semibold text-gray-700">Interest Rate</span>
                  <span className="text-2xl font-bold text-emerald-600">0%</span>
                </div>

                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
                  <span className="text-lg font-semibold text-gray-700">Loan Term</span>
                  <span className="text-2xl font-bold text-purple-600">{loanTerm} months</span>
                </div>

                <div className="flex justify-between items-center p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white">
                  <span className="text-lg font-semibold">Monthly Payment</span>
                  <span className="text-3xl font-black">₨{calculateMonthlyPayment().toLocaleString()}</span>
                </div>

                <div className="text-center pt-6">
                  <motion.a
                  href="https://wa.me/923281969250"
  target="_blank"
  rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 mx-auto"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Apply for This Loan
                    <FaArrowRight />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Loan Purposes */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-black text-gray-900 mb-8">
              What Can You{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Finance?
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our personal loans cover a wide range of life's important moments and needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loanPurposes.map((purpose, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className={`bg-gradient-to-r ${purpose.color} p-8 text-white text-center`}>
                  <purpose.icon className="text-4xl mb-4 mx-auto" />
                  <h3 className="text-2xl font-bold mb-2">{purpose.title}</h3>
                  <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    <FaMoneyBillWave className="text-xs" />
                    {purpose.loanRange}
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed">{purpose.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-black text-gray-900 mb-8">
              Eligibility{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Criteria
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Simple requirements to qualify for your personal loan
            </p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {eligibilityCriteria.map((criteria, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 bg-white rounded-2xl p-6 shadow-lg"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <FaCheckCircle className="text-emerald-500 text-xl flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{criteria}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white relative overflow-hidden">
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
            <h2 className="text-5xl md:text-6xl font-black mb-8">Make Your Dreams Reality</h2>
            <p className="text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Don't let financial constraints hold you back from life's important moments. Apply for an interest-free
              personal loan today and take the next step towards your goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
              href="https://wa.me/923281969250"
  target="_blank"
  rel="noopener noreferrer"
                className="bg-white text-blue-600 px-12 py-6 rounded-full font-bold text-xl hover:bg-gray-100 transition-all duration-300 shadow-2xl flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaUser />
                Apply for Personal Loan
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

export default PersonalLoansPage

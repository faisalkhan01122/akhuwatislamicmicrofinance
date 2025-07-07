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
  FaMosque,
  FaQuran,
  FaHandsHelping,
} from "react-icons/fa"

const PersonalLoansPage = () => {
  const [loanAmount, setLoanAmount] = useState(200000)
  const [loanTerm, setLoanTerm] = useState(18)

  const loanFeatures = [
    {
      icon: FaQuran,
      title: "Qard-e-Hasan",
      description: "Interest-free loans following Islamic principles",
      color: "text-green-600",
    },
    {
      icon: FaMosque,
      title: "Mosque-Based",
      description: "Transparent disbursement in mosque settings",
      color: "text-blue-600",
    },
    {
      icon: FaClock,
      title: "Quick Approval",
      description: "Fast processing within 3-5 working days",
      color: "text-purple-600",
    },
    {
      icon: FaHandsHelping,
      title: "Community Support",
      description: "Group-based lending with social responsibility",
      color: "text-amber-600",
    },
  ]

  const loanPurposes = [
    {
      icon: FaRing,
      title: "Marriage Support",
      description: "Halal financing for wedding expenses",
      loanRange: "₨2L - ₨8L",
      examples: ["Wedding ceremony", "Dowry", "Marriage essentials"],
      color: "from-pink-500 to-rose-600",
    },
    {
      icon: FaMedkit,
      title: "Medical Treatment",
      description: "Healthcare financing for you and family",
      loanRange: "₨50K - ₨5L",
      examples: ["Hospital bills", "Surgeries", "Medicines"],
      color: "from-red-500 to-pink-600",
    },
    {
      icon: FaGraduationCap,
      title: "Education",
      description: "Invest in Islamic and secular education",
      loanRange: "₨1L - ₨6L",
      examples: ["School fees", "University tuition", "Vocational training"],
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: FaHome,
      title: "Home Needs",
      description: "Improve your family's living conditions",
      loanRange: "₨1.5L - ₨7L",
      examples: ["Renovation", "Furniture", "Utilities"],
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: FaCar,
      title: "Transportation",
      description: "Vehicle purchase for livelihood",
      loanRange: "₨3L - ₨10L",
      examples: ["Motorcycle", "Car", "Work vehicle"],
      color: "from-purple-500 to-indigo-600",
    },
    {
      icon: FaHeart,
      title: "Family Needs",
      description: "Support for essential family requirements",
      loanRange: "₨75K - ₨4L",
      examples: ["Essential items", "Family events", "Debt relief"],
      color: "from-amber-500 to-orange-600",
    },
  ]

  const eligibilityCriteria = [
    "Pakistani Muslim aged 21-65 years",
    "Minimum monthly income ₨25,000",
    "Valid CNIC and proof of residence",
    "Two Muslim guarantors with CNICs",
    "Commitment to Islamic values",
    "Clean credit history preferred",
  ]

  const calculateMonthlyPayment = () => {
    return Math.round(loanAmount / loanTerm)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-green-50">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-[url('/islamic-pattern.jpg')] bg-opacity-5">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400 rounded-full animate-float blur-3xl"></div>
          <div className="absolute bottom-32 right-20 w-80 h-80 bg-green-400 rounded-full animate-float-reverse blur-3xl"></div>
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
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center shadow-2xl">
                  <FaMosque className="text-white text-2xl" />
                </div>
                <div>
                  <span className="text-green-600 font-bold text-xl block">Akhuwat Islamic Finance</span>
                  <span className="text-gray-600 text-sm">Qard-e-Hasan Personal Solutions</span>
                </div>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-7xl font-black text-gray-900 mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Islamic{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                  Personal Finance
                </span>
              </motion.h1>

              <motion.p
                className="text-2xl text-gray-600 mb-10 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Fulfill your personal needs and life goals through our Sharia-compliant, interest-free Qard-e-Hasan.
                Ethical financing that aligns with your Islamic values.
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
                  href="https://wa.me/923354571620"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-10 py-5 rounded-full font-bold text-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Apply Now
                  <FaArrowRight />
                </motion.a>

                <motion.button
                  className="bg-white/80 backdrop-blur-sm border-2 border-green-600 text-green-600 px-10 py-5 rounded-full font-bold text-xl hover:bg-green-50 transition-all duration-300 flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaPhone />
                  Call: +92 335 4571 620
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-green-600">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVpboX42Wx4A57AI3Wo4oVHBQx-sHo-EwT6Q&s" alt="Islamic Personal Finance" className="w-full h-96 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                <motion.div
                  className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-center">
                    <div className="text-3xl font-black text-green-600 mb-2">₨10L</div>
                    <div className="text-sm text-gray-600 font-semibold">Maximum Qard</div>
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
                    <div className="text-3xl font-black text-blue-600 mb-2">0%</div>
                    <div className="text-sm text-gray-600 font-semibold">Interest-Free</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Islamic Values Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Islamic Principles</span> Behind Our Model
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Akhuwat operates on the Quranic concept of Qard-e-Hasan (benevolent loan)
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-green-100 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaQuran className="text-green-600 text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quranic Foundation</h3>
              <p className="text-gray-600">
                "Who is it that would loan Allah a goodly loan so He may multiply it for him many times over?" (2:245)
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaHandsHelping className="text-blue-600 text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Brotherhood</h3>
              <p className="text-gray-600">
                "The believers are but brothers" (49:10) - We treat all applicants as family in need
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-amber-100 text-center">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaMosque className="text-amber-600 text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mosque-Based</h3>
              <p className="text-gray-600">
                Loans are disbursed in mosques to maintain transparency and Islamic environment
              </p>
            </div>
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
              Qard-e-Hasan{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                Calculator
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Calculate your interest-free personal finance repayment schedule
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-12 border border-green-200"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-8">
                <FaCalculator className="text-3xl text-green-600" />
                <h3 className="text-3xl font-bold text-gray-900">Calculate Your Qard</h3>
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
                  <label className="block text-lg font-semibold text-gray-700 mb-4">Repayment Term: {loanTerm} months</label>
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
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Repayment Summary</h3>

              <div className="space-y-6">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
                  <span className="text-lg font-semibold text-gray-700">Qard Amount</span>
                  <span className="text-2xl font-bold text-green-600">₨{loanAmount.toLocaleString()}</span>
                </div>

                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
                  <span className="text-lg font-semibold text-gray-700">Profit Rate</span>
                  <span className="text-2xl font-bold text-green-600">0%</span>
                </div>

                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
                  <span className="text-lg font-semibold text-gray-700">Repayment Term</span>
                  <span className="text-2xl font-bold text-blue-600">{loanTerm} months</span>
                </div>

                <div className="flex justify-between items-center p-6 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl text-white">
                  <span className="text-lg font-semibold">Monthly Payment</span>
                  <span className="text-3xl font-black">₨{calculateMonthlyPayment().toLocaleString()}</span>
                </div>

                <div className="text-center pt-6">
                  <motion.a
                    href="https://wa.me/923354571620"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 mx-auto"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Apply Now
                    <FaArrowRight />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Loan Purposes */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-black text-gray-900 mb-8">
              Halal{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                Purposes
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our Qard-e-Hasan covers various personal needs while maintaining Islamic principles
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
                  <p className="text-gray-600 mb-4">{purpose.description}</p>
                  <div className="space-y-2">
                    {purpose.examples.map((example, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <FaCheckCircle className="text-green-500 text-xs" />
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                Criteria
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Requirements to qualify for Qard-e-Hasan personal finance
            </p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-12 border border-green-200"
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
                  <FaCheckCircle className="text-green-500 text-xl flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{criteria}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-green-600 to-blue-600 text-white relative overflow-hidden">
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
            <h2 className="text-5xl md:text-6xl font-black mb-8">Begin Your Ethical Financial Journey</h2>
            <p className="text-2xl text-green-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Don't compromise your Islamic values for financial needs. Apply for our Qard-e-Hasan personal finance
              solution today and fulfill your needs the halal way.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                href="https://wa.me/923354571620"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-green-600 px-12 py-6 rounded-full font-bold text-xl hover:bg-gray-100 transition-all duration-300 shadow-2xl flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaMosque />
                Apply Now
              </motion.a>

              <motion.a
             href="tel:+923354571620"
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-12 py-6 rounded-full font-bold text-xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPhone />
                Call: +92 335 4571 620
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default PersonalLoansPage
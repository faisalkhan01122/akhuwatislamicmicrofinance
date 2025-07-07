"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import {
  FaUsers,
  FaArrowRight,
  FaMoneyBillWave,
  FaLightbulb,
  FaPhone,
  FaFemale,
  FaHandHoldingHeart,
  FaGraduationCap,
  FaHome,
  FaShoppingCart,
  FaCheckCircle,
  FaCalculator,
  FaMosque,
  FaHandsHelping,
  FaQuran,
} from "react-icons/fa"

const MicrofinanceLoansPage = () => {
  const [loanAmount, setLoanAmount] = useState(100000)
  const [loanTerm, setLoanTerm] = useState(12)

  const loanFeatures = [
    {
      icon: FaQuran,
      title: "Interest-Free",
      description: "Sharia-compliant Qard-e-Hasan loans with zero interest",
      color: "text-green-600",
    },
    {
      icon: FaMosque,
      title: "Islamic Values",
      description: "Ethical financing based on Islamic principles of brotherhood",
      color: "text-blue-600",
    },
    {
      icon: FaHandsHelping,
      title: "Community Support",
      description: "Group-based lending with social responsibility",
      color: "text-emerald-600",
    },
    {
      icon: FaLightbulb,
      title: "Capacity Building",
      description: "Training programs for sustainable livelihoods",
      color: "text-amber-600",
    },
  ]

  const loanPurposes = [
    {
      icon: FaShoppingCart,
      title: "Small Business",
      description: "Start or expand your halal business venture",
      examples: ["Retail Shop", "Home-based Business", "Agriculture", "Food Business"],
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: FaHome,
      title: "Housing Needs",
      description: "Improve your family's living conditions",
      examples: ["Home Renovation", "Bathroom Construction", "Roof Repair", "Utilities"],
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: FaGraduationCap,
      title: "Education",
      description: "Invest in Islamic and secular education",
      examples: ["School Fees", "Vocational Training", "Islamic Studies", "Books"],
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: FaHandHoldingHeart,
      title: "Social Needs",
      description: "Support for essential family requirements",
      examples: ["Medical Expenses", "Marriage Support", "Debt Relief", "Essential Items"],
      color: "from-amber-500 to-orange-600",
    },
  ]

  const specialPrograms = [
    {
      title: "Women Empowerment",
      description: "Special programs for women entrepreneurs and homemakers",
      benefits: ["Lower loan requirements", "Female-only centers", "Business training", "Mentorship"],
      loanRange: "₨25K - ₨3L",
      icon: FaFemale
    },
    {
      title: "Rural Development",
      description: "Support for agricultural and village-based livelihoods",
      benefits: ["Farm equipment loans", "Livestock financing", "Irrigation support", "Market access"],
      loanRange: "₨50K - ₨5L",
      icon: FaHome
    },
    {
      title: "Youth Entrepreneurship",
      description: "Opportunities for young Muslim entrepreneurs",
      benefits: ["Startup support", "Skill development", "Mentorship", "Networking"],
      loanRange: "₨30K - ₨4L",
      icon: FaUsers
    },
  ]

  const calculateMonthlyPayment = () => {
    return Math.round(loanAmount / loanTerm)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-green-50">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-[url('')] bg-opacity-5">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-96 h-96 bg-green-400 rounded-full animate-float blur-3xl"></div>
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
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center shadow-2xl">
                  <FaMosque className="text-white text-2xl" />
                </div>
                <div>
                  <span className="text-green-600 font-bold text-xl block">Akhuwat Islamic Microfinance</span>
                  <span className="text-gray-600 text-sm">Qard-e-Hasan based solutions</span>
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
                  Microfinance
                </span>
              </motion.h1>

              <motion.p
                className="text-2xl text-gray-600 mb-10 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Interest-free loans following Islamic principles to empower communities. Providing ethical financial solutions to uplift the underprivileged across Pakistan.
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
                  href="/contact-us"
                  // target="_blank"
                  // rel="noopener noreferrer"
                  className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-10 py-5 rounded-full font-bold text-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Apply Now
                  <FaArrowRight />
                </motion.a>

                <motion.a
                href="tel:+923354571620"
                  className="bg-white/80 backdrop-blur-sm border-2 border-green-600 text-green-600 px-10 py-5 rounded-full font-bold text-xl hover:bg-green-50 transition-all duration-300 flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaPhone />
                  Call: +92 328 1969250
                </motion.a>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-green-600">
                <img src="https://alhudacibe.com/img01/pressrelease/pressrelease124.jpg" alt="Akhuwat Microfinance" className="w-full h-96 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                <motion.div
                  className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-center">
                    <div className="text-3xl font-black text-green-600 mb-2">₨5L</div>
                    <div className="text-sm text-gray-600 font-semibold">Maximum Qard-e-Hasan</div>
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
              Akhuwat operates on the Islamic concept of Qard-e-Hasan (benevolent loan) following Quranic injunctions
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
                Loans are disbursed in mosques to maintain transparency and community involvement
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
              Calculate your interest-free loan repayment schedule
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
                    min="25000"
                    max="500000"
                    step="25000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number.parseInt(e.target.value))}
                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>₨25K</span>
                    <span>₨5L</span>
                  </div>
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-4">Repayment Term: {loanTerm} months</label>
                  <input
                    type="range"
                    min="6"
                    max="36"
                    step="6"
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(Number.parseInt(e.target.value))}
                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>6 months</span>
                    <span>36 months</span>
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
                  <span className="text-lg font-semibold text-gray-700">Loan Amount</span>
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
                    href="/contact-us"
                    // target="_blank"
                    // rel="noopener noreferrer"
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
              Sharia-compliant financing solutions for various personal and business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  <h3 className="text-2xl font-bold">{purpose.title}</h3>
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

      {/* Special Programs */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <FaHandsHelping className="text-5xl text-blue-600" />
              <div>
                <h2 className="text-5xl font-black text-gray-900">
                  Our{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                    Special Programs
                  </span>
                </h2>
                <p className="text-lg text-gray-600">Targeted initiatives for specific community needs</p>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {specialPrograms.map((program, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 shadow-xl border border-green-100 hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <program.icon className="text-white text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{program.title}</h3>
                  <p className="text-gray-600">{program.description}</p>
                  <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mt-4">
                    <FaMoneyBillWave className="text-xs" />
                    {program.loanRange}
                  </div>
                </div>

                <div className="space-y-3">
                  {program.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <FaCheckCircle className="text-green-500 text-sm flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
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
              Join over 5 million Pakistanis who have transformed their lives through our interest-free Islamic microfinance model. 
              Small loans, big dreams, lasting impact - all in accordance with Islamic principles.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                href="/contact-us"
                // target="_blank"
                // rel="noopener noreferrer"
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

export default MicrofinanceLoansPage
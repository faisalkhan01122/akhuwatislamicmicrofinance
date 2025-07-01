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
} from "react-icons/fa"

const MicrofinanceLoansPage = () => {
  const [loanAmount, setLoanAmount] = useState(100000)
  const [loanTerm, setLoanTerm] = useState(12)

  const loanFeatures = [
    {
      icon: FaMoneyBillWave,
      title: "₨50K to ₨5 Lacs",
      description: "Flexible loan amounts for small businesses and personal needs",
      color: "text-emerald-600",
    },
    {
      icon: FaFemale,
      title: "Women-Focused",
      description: "Special programs for women entrepreneurs and homemakers",
      color: "text-pink-600",
    },
    {
      icon: FaUsers,
      title: "Group Lending",
      description: "Community-based lending approach with peer support",
      color: "text-blue-600",
    },
    {
      icon: FaLightbulb,
      title: "Skill Development",
      description: "Training and mentorship programs included",
      color: "text-purple-600",
    },
  ]

  const loanPurposes = [
    {
      icon: FaShoppingCart,
      title: "Small Business",
      description: "Start or expand your small business venture",
      examples: ["Street Vending", "Home-based Business", "Handicrafts", "Food Stalls"],
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: FaHome,
      title: "Home Improvement",
      description: "Improve your living conditions and home infrastructure",
      examples: ["Bathroom Construction", "Kitchen Renovation", "Roof Repair", "Water Connection"],
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: FaGraduationCap,
      title: "Education",
      description: "Invest in education for yourself or your children",
      examples: ["School Fees", "Vocational Training", "Computer Courses", "Skill Development"],
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: FaHandHoldingHeart,
      title: "Emergency Needs",
      description: "Address urgent financial requirements",
      examples: ["Medical Expenses", "Family Events", "Debt Consolidation", "Urgent Repairs"],
      color: "from-orange-500 to-red-600",
    },
  ]

  const womenPrograms = [
    {
      title: "Women Entrepreneur Program",
      description: "Special support for women starting their own businesses",
      benefits: ["Lower loan requirements", "Flexible repayment", "Business training", "Mentorship support"],
      loanRange: "₨25K - ₨3L",
    },
    {
      title: "Homemaker Support",
      description: "Financial assistance for home-based income generation",
      benefits: ["Home-based business loans", "Skill development", "Market linkage", "Family support"],
      loanRange: "₨15K - ₨2L",
    },
    {
      title: "Education Support",
      description: "Educational loans for women and their children",
      benefits: ["Education fee support", "Vocational training", "Computer literacy", "Career guidance"],
      loanRange: "₨10K - ₨1.5L",
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
          <div className="absolute bottom-32 right-20 w-80 h-80 bg-pink-400 rounded-full animate-float-reverse blur-3xl"></div>
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
                  <FaUsers className="text-white text-2xl" />
                </div>
                <div>
                  <span className="text-emerald-600 font-bold text-xl block">Akhuwat Network</span>
                  <span className="text-gray-500 text-sm">Microfinance Solutions</span>
                </div>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-7xl font-black text-gray-900 mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Microfinance{" "}
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
                Empowering small entrepreneurs and women with accessible microfinance solutions. Small loans that create
                massive impacts in communities across Pakistan.
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
                <img src="/micr.jpg" alt="Microfinance Loans" className="w-full h-96 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                <motion.div
                  className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-center">
                    <div className="text-3xl font-black text-emerald-600 mb-2">₨5L</div>
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
                    <div className="text-3xl font-black text-pink-600 mb-2">70%</div>
                    <div className="text-sm text-gray-600 font-semibold">Women Borrowers</div>
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
              Microfinance{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Calculator
              </span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-12"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-8">
                <FaCalculator className="text-3xl text-emerald-600" />
                <h3 className="text-3xl font-bold text-gray-900">Calculate Your Loan</h3>
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
                  <label className="block text-lg font-semibold text-gray-700 mb-4">Loan Term: {loanTerm} months</label>
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
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Loan Summary</h3>

              <div className="space-y-6">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
                  <span className="text-lg font-semibold text-gray-700">Loan Amount</span>
                  <span className="text-2xl font-bold text-emerald-600">₨{loanAmount.toLocaleString()}</span>
                </div>

                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
                  <span className="text-lg font-semibold text-gray-700">Interest Rate</span>
                  <span className="text-2xl font-bold text-emerald-600">0%</span>
                </div>

                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
                  <span className="text-lg font-semibold text-gray-700">Loan Term</span>
                  <span className="text-2xl font-bold text-purple-600">{loanTerm} months</span>
                </div>

                <div className="flex justify-between items-center p-6 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl text-white">
                  <span className="text-lg font-semibold">Monthly Payment</span>
                  <span className="text-3xl font-black">₨{calculateMonthlyPayment().toLocaleString()}</span>
                </div>

                <div className="text-center pt-6">
                  <motion.a 
                  href="https://wa.me/923281969250"
  target="_blank"
  rel="noopener noreferrer"
                    className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 mx-auto"
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
      <section className="py-24 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-black text-gray-900 mb-8">
              Loan{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Purposes
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Flexible microfinance solutions for various personal and business needs
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

      {/* Women Programs */}
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
              <FaFemale className="text-5xl text-pink-600" />
              <div>
                <h2 className="text-5xl font-black text-gray-900">
                  Women{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600">
                    Empowerment
                  </span>
                </h2>
                <p className="text-lg text-gray-600">Special programs designed for women</p>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {womenPrograms.map((program, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8 shadow-xl border border-pink-100 hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaFemale className="text-white text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{program.title}</h3>
                  <p className="text-gray-600">{program.description}</p>
                  <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-semibold mt-4">
                    <FaMoneyBillWave className="text-xs" />
                    {program.loanRange}
                  </div>
                </div>

                <div className="space-y-3">
                  {program.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <FaCheckCircle className="text-pink-500 text-sm flex-shrink-0" />
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
            <h2 className="text-5xl md:text-6xl font-black mb-8">Start Your Journey Today</h2>
            <p className="text-2xl text-emerald-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Join thousands of entrepreneurs and families who have transformed their lives with our microfinance
              solutions. Small loans, big dreams, lasting impact.
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
                <FaUsers />
                Apply for Microfinance
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

export default MicrofinanceLoansPage

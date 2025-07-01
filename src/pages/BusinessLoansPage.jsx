"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import {
  FaBuilding,
  FaArrowRight,
  FaCheckCircle,
  FaShieldAlt,
  FaClock,
  FaUsers,
  FaMoneyBillWave,
  FaHandshake,
  FaChartLine,
  FaPhone,
  FaEnvelope,
  FaCalculator,
  FaFileAlt,
} from "react-icons/fa"

const BusinessLoansPage = () => {
  const [loanAmount, setLoanAmount] = useState(500000)
  const [loanTerm, setLoanTerm] = useState(12)

  const loanFeatures = [
    {
      icon: FaMoneyBillWave,
      title: "Up to ₨30 Lacs",
      description: "Substantial funding for business growth and expansion",
      color: "text-emerald-600",
    },
    {
      icon: FaShieldAlt,
      title: "0% Interest Rate",
      description: "Completely interest-free, Sharia-compliant financing",
      color: "text-blue-600",
    },
    {
      icon: FaClock,
      title: "Quick 5-Day Approval",
      description: "Fast processing with minimal documentation",
      color: "text-purple-600",
    },
    {
      icon: FaUsers,
      title: "No Collateral Required",
      description: "Trust-based lending with guarantor system",
      color: "text-orange-600",
    },
  ]

  const businessTypes = [
    {
      title: "Retail & Trading",
      description: "Shops, stores, wholesale, and retail businesses",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=200&fit=crop",
      examples: ["General Stores", "Clothing Shops", "Electronics", "Wholesale Trading"],
      loanRange: "₨50K - ₨15L",
    },
    {
      title: "Manufacturing",
      description: "Small to medium manufacturing units and production",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop",
      examples: ["Textile Units", "Food Processing", "Handicrafts", "Small Industries"],
      loanRange: "₨1L - ₨30L",
    },
    {
      title: "Services",
      description: "Service-based businesses and professional services",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop",
      examples: ["Restaurants", "Transport", "IT Services", "Healthcare"],
      loanRange: "₨75K - ₨20L",
    },
    {
      title: "Agriculture",
      description: "Farming, livestock, and agricultural businesses",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=300&h=200&fit=crop",
      examples: ["Crop Farming", "Livestock", "Dairy", "Poultry"],
      loanRange: "₨1L - ₨25L",
    },
  ]

  const applicationSteps = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "Discuss your business needs with our expert team",
      icon: FaHandshake,
      duration: "30 minutes",
    },
    {
      step: 2,
      title: "Document Submission",
      description: "Submit required documents and business plan",
      icon: FaFileAlt,
      duration: "1 day",
    },
    {
      step: 3,
      title: "Business Assessment",
      description: "Our team evaluates your business potential",
      icon: FaChartLine,
      duration: "2-3 days",
    },
    {
      step: 4,
      title: "Approval & Disbursement",
      description: "Loan approval and fund disbursement",
      icon: FaCheckCircle,
      duration: "1-2 days",
    },
  ]

  const requirements = [
    "Valid CNIC and business registration",
    "Business plan and financial projections",
    "Bank statements (last 6 months)",
    "Two guarantors with valid CNICs",
    "Business location verification",
    "Community recommendation letter",
  ]

  const calculateMonthlyPayment = () => {
    return Math.round(loanAmount / loanTerm)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400 rounded-full animate-float blur-3xl"></div>
          <div className="absolute bottom-32 right-20 w-80 h-80 bg-emerald-400 rounded-full animate-float-reverse blur-3xl"></div>
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
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl">
                  <FaBuilding className="text-white text-2xl" />
                </div>
                <div>
                  <span className="text-blue-600 font-bold text-xl block">Akhuwat Network</span>
                  <span className="text-gray-500 text-sm">Business Financing Solutions</span>
                </div>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-7xl font-black text-gray-900 mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Business{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Loans
                </span>
              </motion.h1>

              <motion.p
                className="text-2xl text-gray-600 mb-10 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Scale your business with our Sharia-compliant, interest-free financing solutions. From startups to
                established enterprises, we provide the capital you need to grow.
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
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-5 rounded-full font-bold text-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3"
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
                <img src="/businessloanbanner.jpg" alt="Business Loans" className="w-full h-96 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                <motion.div
                  className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-center">
                    <div className="text-3xl font-black text-blue-600 mb-2">₨30L</div>
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
                    <div className="text-3xl font-black text-emerald-600 mb-2">0%</div>
                    <div className="text-sm text-gray-600 font-semibold">Interest Rate</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Loan Calculator Section */}
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
              Loan{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Calculator
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Calculate your monthly payments with our interest-free loan calculator
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12"
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
                    max="3000000"
                    step="50000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number.parseInt(e.target.value))}
                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>₨50K</span>
                    <span>₨30L</span>
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

                <div className="flex justify-between items-center p-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl text-white">
                  <span className="text-lg font-semibold">Monthly Payment</span>
                  <span className="text-3xl font-black">₨{calculateMonthlyPayment().toLocaleString()}</span>
                </div>

                <div className="text-center pt-6">
                  <p className="text-gray-600 mb-6">
                    No interest, no hidden fees, no processing charges - just simple, transparent repayment.
                  </p>
                  <motion.a
                  href="https://wa.me/923281969250"
  target="_blank"
  rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3"
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

      {/* Business Types Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-black text-gray-900 mb-8">
              Business{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Categories
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We support diverse business sectors with tailored financing solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessTypes.map((type, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={type.image || "/placeholder.svg"} alt={type.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{type.title}</h3>
                    <p className="text-sm text-blue-200">{type.loanRange}</p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <div className="space-y-2">
                    {type.examples.map((example, i) => (
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

      {/* Application Process */}
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
              Application{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Process
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Simple 4-step process to get your business loan approved in just 5 days
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {applicationSteps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.div className="relative mb-8" whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto shadow-2xl">
                    <step.icon className="text-white text-3xl" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.step}
                  </div>
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{step.description}</p>
                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
                  <FaClock className="text-xs" />
                  {step.duration}
                </div>

                {index < applicationSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full">
                    <FaArrowRight className="text-blue-300 text-2xl" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Requirements Section */}
          <motion.div
            className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Required Documents</h3>
              <p className="text-lg text-gray-600">Simple documentation for quick processing</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {requirements.map((requirement, index) => (
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
                  <span className="text-gray-700 font-medium">{requirement}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-600 text-white relative overflow-hidden">
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
            <h2 className="text-5xl md:text-6xl font-black mb-8">Ready to Grow Your Business?</h2>
            <p className="text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Join thousands of successful entrepreneurs who have transformed their businesses with Akhuwat's
              interest-free financing solutions.
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
                <FaBuilding />
                Apply for Business Loan
              </motion.a>

              <motion.a
              href="https://wa.me/923281969250"
  target="_blank"
  rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-12 py-6 rounded-full font-bold text-xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope />
                Get Free Consultation
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default BusinessLoansPage

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
  FaHandHoldingHeart,
  FaHandshake,
  FaChartLine,
  FaPhone,
  FaEnvelope,
  FaCalculator,
  FaFileAlt,
  FaMosque
} from "react-icons/fa"
import { FaBookQuran } from "react-icons/fa6";

const BusinessLoansPage = () => {
  const [loanAmount, setLoanAmount] = useState(500000)
  const [loanTerm, setLoanTerm] = useState(12)

  const loanFeatures = [
    {
      icon: FaBookQuran,
      title: "Up to ₨30 Lacs",
      description: "Shariah-compliant financing for business growth",
      color: "text-emerald-600",
      verse: "Quran 2:245"
    },
    {
      icon: FaShieldAlt,
      title: "0% Riba",
      description: "Completely interest-free, halal financing",
      color: "text-blue-600",
      verse: "Quran 2:275"
    },
    {
      icon: FaClock,
      title: "5-Day Approval",
      description: "Fast processing with Islamic documentation",
      color: "text-purple-600",
      verse: "Hadith"
    },
    {
      icon: FaUsers,
      title: "No Collateral",
      description: "Trust-based system with Islamic guarantors",
      color: "text-amber-600",
      verse: "Quran 5:1"
    },
  ]

  const businessTypes = [
    {
      title: "Retail & Trading",
      description: "Halal businesses following Islamic commercial principles",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-ofhHejBcJoIi-5xpt4s-5fStvJmuSbn--A&s",
      examples: ["Halal Groceries", "Islamic Clothing", "Bookstores", "General Trading"],
      loanRange: "₨50K - ₨15L",
      islamicPrinciple: "Permissible trade in Islam"
    },
    {
      title: "Islamic Manufacturing",
      description: "Production units adhering to Shariah guidelines",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQxi6bqvQh_HPHogtYQv0IMxj-OSxhwdXdqQ&s",
      examples: ["Halal Food Processing", "Islamic Textiles", "Educational Materials", "Handicrafts"],
      loanRange: "₨1L - ₨30L",
      islamicPrinciple: "Halal means of production"
    },
    {
      title: "Islamic Services",
      description: "Service providers operating under Islamic ethics",
      image: "https://www.funeralpartners.co.uk/wp-content/uploads/2020/04/muslim-funerals.jpg",
      examples: ["Halal Restaurants", "Islamic Education", "IT Services", "Healthcare"],
      loanRange: "₨75K - ₨20L",
      islamicPrinciple: "Ethical services in Islam"
    },
    {
      title: "Islamic Agriculture",
      description: "Farming following Islamic environmental ethics",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8bEKt9u2AyGePQscvSNreOUU4pflcJTmdKw&s",
      examples: ["Organic Farming", "Halal Livestock", "Dairy Production", "Date Farming"],
      loanRange: "₨1L - ₨25L",
      islamicPrinciple: "Stewardship of land"
    },
  ]

  const applicationSteps = [
    {
      step: 1,
      title: "Islamic Consultation",
      description: "Discuss your halal business needs with our scholars",
      icon: FaMosque,
      duration: "30 minutes",
      verse: "Quran 16:43"
    },
    {
      step: 2,
      title: "Shariah Documentation",
      description: "Submit Islamic business plan and documents",
      icon: FaBookQuran,
      duration: "1 day",
      verse: "Hadith"
    },
    {
      step: 3,
      title: "Islamic Assessment",
      description: "Evaluation by our Shariah committee",
      icon: FaShieldAlt,
      duration: "2-3 days",
      verse: "Quran 5:2"
    },
    {
      step: 4,
      title: "Approval & Disbursement",
      description: "Qard-e-Hasna contract signing and funds",
      icon: FaHandHoldingHeart,
      duration: "1-2 days",
      verse: "Quran 2:282"
    },
  ]

  const requirements = [
    "Valid CNIC and halal business registration",
    "Islamic business plan with financial projections",
    "Bank statements (last 6 months)",
    "Two Muslim guarantors with CNICs",
    "Business location verification",
    "Mosque recommendation letter"
  ]

  const calculateMonthlyPayment = () => {
    return Math.round(loanAmount / loanTerm)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-emerald-50">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Islamic Pattern Background */}
        <div className="absolute inset-0 opacity-5 bg-[url('https://static.vecteezy.com/system/resources/previews/014/664/051/non_2x/islamic-ornament-persian-motiff-3d-ramadan-islamic-round-pattern-elements-geometric-circular-ornamental-arabic-symbol-gold-background-vector.jpg')]"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              {/* Islamic Header */}
              <motion.div
                className="flex items-center gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-green-600 rounded-full flex items-center justify-center shadow-2xl">
                  <span className="text-white text-xl font-arabic">ق</span>
                </div>
                <div>
                  <span className="text-emerald-600 font-bold text-xl block font-arabic">قرض الحسنة</span>
                  <span className="text-gray-500 text-sm">Shariah-Compliant Business Financing</span>
                </div>
              </motion.div>

              <motion.h1
                className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-amber-600">
                  Islamic Business Qard-e-Hasna
                </span>
              </motion.h1>

              <motion.p
                className="text-xl text-gray-600 mb-10 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                "Who is it that would loan Allah a goodly loan so He may multiply it for him many times over?" (Quran 2:245). 
                Grow your halal business with our riba-free financing based on Islamic principles of Qard-e-Hasna.
              </motion.p>

              {/* Islamic Features Grid */}
              <motion.div
                className="grid grid-cols-2 gap-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                {loanFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200"
                    whileHover={{ scale: 1.03, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <feature.icon className={`text-3xl ${feature.color} mb-3`} />
                    <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{feature.description}</p>
                    <p className="text-xs text-emerald-600 italic">"{feature.verse}"</p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-6 mt-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <motion.a
                  href="https://wa.me/923354571620"
                target="_blank"
                rel="noopener noreferrer"
                  className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-8 py-4 rounded-lg font-bold hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaHandHoldingHeart />
                  Apply Now
                  <FaArrowRight />
                </motion.a>

                <motion.a
                href="https://wa.me/923354571620"
                target="_blank"
                rel="noopener noreferrer"
                  className="bg-white/80 backdrop-blur-sm border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-lg font-bold hover:bg-emerald-50 transition-all duration-300 flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaPhone />
                  Islamic Consultation
                </motion.a>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="relative overflow-hidden rounded-xl shadow-2xl border-2 border-emerald-500/20">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlgR1S8Y53hofdUzB2ZcFNtEiAVjrwjfuW7g&s" alt="Islamic Business Finance" className="w-full h-96 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                <motion.div
                  className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-2xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="text-center">
                    <div className="text-2xl font-black text-emerald-600 mb-1">₨30L</div>
                    <div className="text-sm text-gray-600 font-semibold">Maximum Qard-e-Hasna</div>
                    <div className="text-xs text-emerald-600 mt-1">"Cooperate in righteousness" (Quran 5:2)</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Islamic Loan Calculator Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
              Islamic <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-amber-600">Qard-e-Hasna Calculator</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              "Document your debts" (Hadith). Calculate your halal repayment plan.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-10 border border-emerald-100"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-8">
                <FaCalculator className="text-3xl text-emerald-600" />
                <h3 className="text-2xl font-bold text-gray-900">Calculate Your Qard-e-Hasna</h3>
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
              className="bg-white rounded-xl shadow-lg p-10 border border-gray-200"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Islamic Repayment Summary</h3>

              <div className="space-y-6">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                  <span className="text-lg font-semibold text-gray-700">Qard-e-Hasna Amount</span>
                  <span className="text-xl font-bold text-emerald-600">₨{loanAmount.toLocaleString()}</span>
                </div>

                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                  <span className="text-lg font-semibold text-gray-700">Riba Rate</span>
                  <span className="text-xl font-bold text-red-600">0%</span>
                </div>

                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                  <span className="text-lg font-semibold text-gray-700">Repayment Term</span>
                  <span className="text-xl font-bold text-purple-600">{loanTerm} months</span>
                </div>

                <div className="flex justify-between items-center p-6 bg-gradient-to-r from-emerald-600 to-green-600 rounded-xl text-white">
                  <span className="text-lg font-semibold">Monthly Payment</span>
                  <span className="text-2xl font-black">₨{calculateMonthlyPayment().toLocaleString()}</span>
                </div>

                <div className="text-center pt-6">
                  <p className="text-gray-600 mb-6">
                    No riba, no hidden fees - just simple Islamic repayment of principal amount only.
                  </p>
                  <motion.a
                    href="https://wa.me/923354571620"
                target="_blank"
                rel="noopener noreferrer"
                    className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-8 py-4 rounded-lg font-bold hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3"
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

      {/* Halal Business Types Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-amber-600">Halal Business Categories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              "Eat from what is good and lawful" (Quran 2:172). We support Shariah-compliant businesses.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessTypes.map((type, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={type.image} alt={type.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-bold">{type.title}</h3>
                    <p className="text-xs text-emerald-200">{type.loanRange}</p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <div className="bg-amber-50 border-l-4 border-amber-500 p-2 mb-4 rounded-r text-sm italic">
                    "{type.islamicPrinciple}"
                  </div>
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

      {/* Islamic Application Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
              Islamic <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-amber-600">Application Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              "The truthful and trustworthy businessman will be with the prophets" (Hadith)
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
                  <div className="w-20 h-20 bg-gradient-to-r from-emerald-600 to-green-600 rounded-full flex items-center justify-center mx-auto shadow-2xl">
                    <step.icon className="text-white text-2xl" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.step}
                  </div>
                </motion.div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{step.description}</p>
                <div className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-xs font-semibold inline-flex items-center gap-1">
                  <FaClock className="text-xs" />
                  {step.duration}
                </div>
                <div className="text-xs text-amber-600 italic mt-2">"{step.verse}"</div>

                {index < applicationSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full">
                    <FaArrowRight className="text-emerald-300 text-xl" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Islamic Requirements Section */}
          <motion.div
            className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-10 border border-emerald-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Shariah Requirements</h3>
              <p className="text-lg text-gray-600">Documentation for halal business financing</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {requirements.map((requirement, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-md"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <FaCheckCircle className="text-emerald-500 text-lg flex-shrink-0 mt-1" />
                  <span className="text-gray-700 font-medium">{requirement}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Islamic CTA Section */}
      <section className="py-24 bg-gradient-to-r from-emerald-700 to-green-600 text-white relative overflow-hidden">
        {/* Islamic Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://static.vecteezy.com/system/resources/previews/014/664/051/non_2x/islamic-ornament-persian-motiff-3d-ramadan-islamic-round-pattern-elements-geometric-circular-ornamental-arabic-symbol-gold-background-vector.jpg')]"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-serif">"Allah will deprive usury of all blessing" (Quran 2:276)</h2>
            <p className="text-xl text-emerald-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Choose the halal path for your business growth with our Islamic Qard-e-Hasna program, free from riba and fully Shariah-compliant.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                href="https://wa.me/923354571620"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-emerald-700 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaHandHoldingHeart />
                Apply Now
              </motion.a>

              <motion.a
                href="/contact-us"
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaBookQuran />
                Shariah Consultation
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default BusinessLoansPage
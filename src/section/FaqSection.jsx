"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  FaQuestionCircle,
  FaChevronDown,
  FaLightbulb,
  FaHandsHelping,
  FaShieldAlt,
  FaMoneyBillWave,
  FaClock,
  FaUsers,
} from "react-icons/fa"

const faqCategories = [
  { id: "general", label: "General", icon: FaQuestionCircle },
  { id: "loans", label: "Loans", icon: FaMoneyBillWave },
  { id: "process", label: "Process", icon: FaClock },
  { id: "eligibility", label: "Eligibility", icon: FaUsers },
]

const faqs = [
  {
    id: 1,
    category: "general",
    question: "What is Akhuwat Network and how does it work?",
    answer:
      "Akhuwat Network is Pakistan's largest microfinance organization providing interest-free loans based on Islamic principles. We operate on the concept of Qarz-e-Hasna (benevolent loan) where borrowers receive financial assistance without any interest charges. Our model is built on trust, compassion, and community support, having served over 4.5 million families since 2001.",
    icon: FaHandsHelping,
    color: "from-emerald-600 to-teal-700",
  },
  {
    id: 2,
    category: "loans",
    question: "What types of loans does Akhuwat offer?",
    answer:
      "We offer comprehensive loan services including Business Loans (up to ₨30 lacs), Microfinance Loans (₨50K-₨5 lacs), Personal Loans (up to ₨15 lacs), Healthcare Loans, Education Loans, Housing Loans (up to ₨50 lacs), and Emergency Loans. All loans are 100% interest-free and Sharia-compliant.",
    icon: FaMoneyBillWave,
    color: "from-blue-600 to-indigo-700",
  },
  {
    id: 3,
    category: "process",
    question: "How long does the loan approval process take?",
    answer:
      "Our streamlined approval process typically takes 5-7 working days from application submission to loan disbursement. For emergency loans, we can process applications within 24-48 hours. The timeline may vary based on loan amount, documentation completeness, and verification requirements.",
    icon: FaClock,
    color: "from-purple-600 to-pink-700",
  },
  {
    id: 4,
    category: "eligibility",
    question: "Who is eligible for Akhuwat loans?",
    answer:
      "Pakistani citizens aged 18-65 with a valid CNIC, proof of income or business activity, and two guarantors are eligible. We particularly focus on supporting women entrepreneurs, small business owners, students, and economically disadvantaged individuals. No collateral is required for most loan categories.",
    icon: FaUsers,
    color: "from-orange-600 to-red-700",
  },
  {
    id: 5,
    category: "general",
    question: "Why are Akhuwat loans interest-free?",
    answer:
      "Akhuwat operates on Islamic principles where charging interest (riba) is prohibited. Our interest-free model is sustained through donations, zakat, and voluntary contributions from beneficiaries and supporters. This approach ensures that borrowers can focus on growing their businesses without the burden of interest payments.",
    icon: FaShieldAlt,
    color: "from-green-600 to-emerald-700",
  },
  {
    id: 6,
    category: "loans",
    question: "What is the maximum loan amount I can get?",
    answer:
      "Loan amounts vary by category: Business Loans up to ₨30 lacs, Housing Loans up to ₨50 lacs, Personal Loans up to ₨15 lacs, Microfinance Loans ₨50K-₨5 lacs, and Education/Healthcare loans based on actual requirements. The final amount depends on your repayment capacity and business needs.",
    icon: FaMoneyBillWave,
    color: "from-teal-600 to-cyan-700",
  },
  {
    id: 7,
    category: "process",
    question: "What documents are required for loan application?",
    answer:
      "Required documents include: Valid CNIC, Proof of income/business registration, Bank statements (last 6 months), Business plan (for business loans), Two guarantors with CNICs, Utility bills for address verification, and specific documents based on loan type (e.g., medical reports for healthcare loans).",
    icon: FaClock,
    color: "from-indigo-600 to-purple-700",
  },
  {
    id: 8,
    category: "eligibility",
    question: "Can women apply for loans independently?",
    answer:
      "Akhuwat strongly encourages women's financial empowerment. Women can apply for all loan categories independently. We have special women-focused programs with additional support including business training, mentorship, and flexible repayment terms. Over 60% of our beneficiaries are women entrepreneurs.",
    icon: FaUsers,
    color: "from-pink-600 to-rose-700",
  },
  {
    id: 9,
    category: "general",
    question: "How does Akhuwat ensure loan repayment without interest?",
    answer:
      "Our model is built on trust, community support, and moral obligation. We provide financial literacy training, business mentorship, and ongoing support to ensure borrower success. The guarantor system and community-based approach create a support network that encourages timely repayment while maintaining dignity.",
    icon: FaHandsHelping,
    color: "from-yellow-600 to-orange-700",
  },
  {
    id: 10,
    category: "loans",
    question: "Can I apply for multiple loans simultaneously?",
    answer:
      "Generally, we recommend completing one loan cycle before applying for another to ensure manageable debt levels. However, in special circumstances (like emergency healthcare needs while having an existing business loan), we may consider multiple loans based on your repayment capacity and specific situation.",
    icon: FaMoneyBillWave,
    color: "from-red-600 to-pink-700",
  },
]

const FaqSection = () => {
  const [activeCategory, setActiveCategory] = useState("general")
  const [openFaq, setOpenFaq] = useState(null)

  const filteredFaqs = faqs.filter((faq) => faq.category === activeCategory)

  const toggleFaq = (faqId) => {
    setOpenFaq(openFaq === faqId ? null : faqId)
  }

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400 rounded-full animate-float blur-3xl"></div>
        <div className="absolute bottom-32 right-20 w-80 h-80 bg-emerald-400 rounded-full animate-float-reverse blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-400 rounded-full animate-pulse blur-2xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex items-center justify-center gap-4 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl">
              <FaLightbulb className="text-white text-2xl" />
            </div>
            <div className="text-left">
              <span className="text-blue-600 font-bold text-xl block">Akhuwat USA</span>
              <span className="text-gray-500 text-sm">Frequently Asked Questions</span>
            </div>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-7xl font-black text-gray-900 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Got{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Questions?
            </span>
          </motion.h2>

          <motion.p
            className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Find answers to the most common questions about our interest-free loan programs and services
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {faqCategories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 border border-gray-200"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <category.icon className="w-4 h-4" />
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-6">
          {filteredFaqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="w-full p-8 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                onClick={() => toggleFaq(faq.id)}
                whileHover={{ x: 5 }}
              >
                <div className="flex items-center gap-6">
                  <div
                    className={`w-14 h-14 bg-gradient-to-r ${faq.color} rounded-full flex items-center justify-center flex-shrink-0`}
                  >
                    <faq.icon className="text-white text-xl" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 pr-4">{faq.question}</h3>
                </div>
                <motion.div
                  animate={{ rotate: openFaq === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <FaChevronDown className="w-6 h-6 text-gray-400" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openFaq === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8">
                      <div className="pl-20">
                        <motion.p
                          className="text-gray-600 text-lg leading-relaxed"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1, duration: 0.3 }}
                        >
                          {faq.answer}
                        </motion.p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 md:p-16 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-48 translate-x-48"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full translate-y-40 -translate-x-40"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-4xl md:text-6xl font-black mb-6">Still Have Questions?</h3>
              <p className="text-2xl text-blue-100 mb-10 max-w-4xl mx-auto leading-relaxed">
                Our dedicated support team is here to help you understand our programs and guide you through the
                application process.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.a
                  href="/help-center"
                  className="bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition-all duration-300 shadow-2xl flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaQuestionCircle />
                  Visit Help Center
                </motion.a>

                <motion.a
                  href="tel:+923281969250"
                  className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  📞 Call: +92 328 1969250
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FaqSection

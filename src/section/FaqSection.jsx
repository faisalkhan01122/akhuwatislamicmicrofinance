"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  FaQuestionCircle,
  FaChevronDown,
  FaHandHoldingUsd,
  FaClock,
  FaUserTie,
  FaHandshake,
  FaUniversity,
  FaHospital,
  FaHome,
  FaGraduationCap,
} from "react-icons/fa"
import { FaBookQuran } from "react-icons/fa6";

const faqCategories = [
  { id: "general", label: "General", icon: FaQuestionCircle },
  { id: "qard-e-hasna", label: "Qard-e-Hasna", icon: FaHandHoldingUsd },
  { id: "process", label: "Application", icon: FaClock },
  { id: "eligibility", label: "Eligibility", icon: FaUserTie },
]

const faqs = [
  {
    id: 1,
    category: "general",
    question: "What is Akhuwat's Islamic microfinance model?",
    answer:
      "Akhuwat operates on the Islamic principle of Qard-e-Hasna (benevolent loans) as mentioned in Quran 2:245. We provide interest-free financial assistance following Shariah principles, eliminating riba (interest) from all transactions. Our model is sustained through Zakat, Sadaqah, and voluntary contributions, having served over 5.5 million families since 2001.",
    icon: FaBookQuran,
    color: "from-green-600 to-emerald-800",
    verse: "Quran 2:245: 'Who is it that would loan Allah a goodly loan...'"
  },
  {
    id: 2,
    category: "qard-e-hasna",
    question: "What types of Shariah-compliant loans does Akhuwat offer?",
    answer:
      "We offer fully halal financial solutions including: Business Loans (up to ₨3M), Microenterprise Loans (₨50K-₨500K), Education Loans, Healthcare Loans, Islamic Housing Finance (up to ₨5M), and Emergency Relief Loans. All financing follows Islamic contracts like Qard-e-Hasna (interest-free loans) and Diminishing Musharakah (for housing).",
    icon: FaHandHoldingUsd,
    color: "from-blue-600 to-indigo-800",
    verse: "Quran 2:275: 'Allah has permitted trade and forbidden riba'"
  },
  {
    id: 3,
    category: "process",
    question: "What is the Islamic approval process for loans?",
    answer:
      "Our Shariah-compliant process takes 5-7 days: 1) Application with Islamic declaration, 2) Shariah review by our scholars, 3) Field verification, 4) Approval by local mosque committee, 5) Disbursement with Islamic contract signing. Emergency loans follow the same process but within 24-48 hours.",
    icon: FaClock,
    color: "from-amber-600 to-orange-800",
    verse: "Hadith: 'The truthful and trustworthy businessman will be with the prophets'"
  },
  {
    id: 4,
    category: "eligibility",
    question: "Who is eligible for Islamic financing from Akhuwat?",
    answer:
      "Eligibility criteria based on Islamic principles: Muslim adults (18+) with valid CNIC, halal income source, two Muslim guarantors, and genuine need. We prioritize orphans, widows, and marginalized communities following the Sunnah of helping the most vulnerable.",
    icon: FaUserTie,
    color: "from-purple-600 to-violet-800",
    verse: "Hadith: 'The upper hand (giving) is better than the lower hand (receiving)'"
  },
  {
    id: 5,
    category: "general",
    question: "How does Akhuwat ensure Shariah compliance?",
    answer:
      "Our Shariah Board comprising renowned Islamic scholars oversees all operations. We: 1) Prohibit all forms of riba, 2) Avoid gharar (uncertainty) in contracts, 3) Screen businesses for halal compliance, 4) Use mosque-based disbursements, and 5) Conduct annual Shariah audits.",
    icon: FaBookQuran,
    color: "from-green-600 to-emerald-800",
    verse: "Quran 5:1: 'Fulfill all contracts'"
  },
  {
    id: 6,
    category: "qard-e-hasna",
    question: "What is the Islamic basis for your housing finance?",
    answer:
      "Our Diminishing Musharakah model follows Islamic principles: 1) Joint ownership between Akhuwat and client, 2) Client gradually purchases Akhuwat's share, 3) No interest charged - only actual ownership transfer costs, 4) Rent paid only on Akhuwat's share until full ownership.",
    icon: FaHome,
    color: "from-blue-600 to-indigo-800",
    verse: "Hadith: 'Whoever builds a mosque for Allah, Allah will build for him a house in Paradise'"
  },
  {
    id: 7,
    category: "process",
    question: "What Islamic documents are required for application?",
    answer:
      "Required documents include: 1) CNIC with Islamic declaration, 2) Proof of halal income, 3) Two Muslim guarantors, 4) Business details (for enterprise loans), 5) Property documents (for housing), 6) Educational/medical proofs (for specific loans), and 7) Mosque recommendation letter.",
    icon: FaClock,
    color: "from-amber-600 to-orange-800",
    verse: "Hadith: 'Document your debts'"
  },
  {
    id: 8,
    category: "eligibility",
    question: "Do you have special Islamic programs for women?",
    answer:
      "Yes, following Quranic injunctions about women's financial rights, we offer: 1) Women-only loan centers, 2) Hijab-friendly business training, 3) Home-based enterprise financing, 4) Islamic inheritance guidance, and 5) Female field officers. Over 65% of our beneficiaries are women maintaining Islamic values.",
    icon: FaUserTie,
    color: "from-pink-600 to-rose-800",
    verse: "Quran 4:32: 'For men is a share of what they earn, and for women is a share of what they earn'"
  },
  {
    id: 9,
    category: "general",
    question: "How can I support Akhuwat Islamically?",
    answer:
      "You can contribute through: 1) Zakat (fulfilling your 2.5% obligation), 2) Sadaqah (voluntary charity), 3) Qard-e-Hasna (interest-free loans to Akhuwat), 4) Waqf (endowment), or 5) Volunteering. All donations are Shariah-certified and eligible for Islamic tax benefits.",
    icon: FaHandshake,
    color: "from-teal-600 to-cyan-800",
    verse: "Quran 2:261: 'The example of those who spend their wealth in the way of Allah...'"
  },
  {
    id: 10,
    category: "qard-e-hasna",
    question: "What makes Akhuwat's education loans Shariah-compliant?",
    answer:
      "Our education financing follows Islamic principles by: 1) No interest charged, 2) Funding only Islamic-approved institutions, 3) Flexible repayment after graduation, 4) Scholarship options from Zakat funds, and 5) Moral obligation rather than legal enforcement of repayment.",
    icon: FaGraduationCap,
    color: "from-blue-600 to-indigo-800",
    verse: "Hadith: 'Seeking knowledge is obligatory upon every Muslim'"
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
    <section className="py-24 bg-gradient-to-br from-amber-50 via-white to-emerald-50 relative overflow-hidden">
      {/* Islamic Pattern Background */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://static.vecteezy.com/system/resources/previews/014/664/051/non_2x/islamic-ornament-persian-motiff-3d-ramadan-islamic-round-pattern-elements-geometric-circular-ornamental-arabic-symbol-gold-background-vector.jpg')]"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Islamic Inspired Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex flex-col items-center justify-center gap-2 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-emerald-800 text-3xl mb-2 font-arabic">بسم الله الرحمن الرحيم</div>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-emerald-600 rounded-full"></div>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-serif"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Islamic <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-amber-600">Q&A</span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            "Ask the people of knowledge if you do not know" (Quran 16:43). Find answers about our Shariah-compliant microfinance solutions.
          </motion.p>
        </motion.div>

        {/* Category Filter with Islamic Style */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {faqCategories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-3 px-5 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-emerald-700 to-amber-600 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-amber-50 hover:text-emerald-700 border border-gray-200"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <category.icon className="w-5 h-5" />
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* FAQ List with Islamic Design */}
        <div className="space-y-5">
          {filteredFaqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Islamic Decorative Element */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-emerald-600"></div>

              <motion.button
                className="w-full p-6 text-left flex items-center justify-between hover:bg-amber-50 transition-colors duration-300"
                onClick={() => toggleFaq(faq.id)}
                whileHover={{ x: 5 }}
              >
                <div className="flex items-center gap-5">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${faq.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                  >
                    <faq.icon className="text-white text-lg" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 pr-4">{faq.question}</h3>
                </div>
                <motion.div
                  animate={{ rotate: openFaq === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <FaChevronDown className="w-5 h-5 text-gray-400" />
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
                    <div className="px-6 pb-6">
                      <div className="pl-17">
                        {/* Quran/Hadith Verse */}
                        <div className="bg-emerald-50 border-r-4 border-emerald-600 p-3 mb-4 rounded-l-lg">
                          <p className="text-sm font-medium text-emerald-800">"{faq.verse}"</p>
                        </div>
                        
                        <motion.p
                          className="text-gray-600 leading-relaxed"
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

        {/* Islamic Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-emerald-700 to-amber-600 rounded-xl p-10 text-white relative overflow-hidden border-2 border-white shadow-2xl">
            {/* Islamic Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYCfEhf1kIY9CaPG2Woik1S5fVMi1GFDuIkg&s')]"></div>

            <div className="relative z-10">
              <motion.div
                className="flex items-center justify-center gap-3 mb-6"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <FaBookQuran className="text-3xl text-emerald-200" />
                <span className="text-emerald-200 font-bold text-xl">Need Islamic Guidance?</span>
              </motion.div>

              <motion.h3
                className="text-3xl md:text-4xl font-bold mb-6 font-serif"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                "If you are grateful, I will surely increase you [in favor]" (Quran 14:7)
              </motion.h3>

              <motion.p
                className="text-emerald-100 mb-8 text-lg leading-relaxed max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Our Islamic scholars are available to answer your questions about Shariah-compliant financing, Zakat eligibility, and how to participate in this Sadaqah Jariyah.
              </motion.p>

              <motion.div
                className="flex flex-wrap justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.a
                  href="/contact-us"
                  className="bg-white text-emerald-700 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaHandshake />
                  Ask a Scholar
                </motion.a>

                <motion.a
                  href="tel:+923354571620"
                  className="bg-white/10 backdrop-blur-sm border border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaUniversity />
                  Islamic Finance Help
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FaqSection
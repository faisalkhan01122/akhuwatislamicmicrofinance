"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import {
  FaQuran,
  FaMosque,
  FaUserTie,
  FaMapMarkerAlt,
  FaHandsHelping,
  FaMoneyBillWave,
  FaStar,
  FaQuoteLeft,
} from "react-icons/fa"

const testimonials = [
  {
    id: 1,
    name: "Ayesha Siddiqua",
    role: "Tailor & Entrepreneur",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    text: "Akhuwat's Qarz-e-Hasna gave me a chance to run my tailoring business without falling into debt. Now, I support other women in my community through skill development.",
    rating: 5,
    location: "Rawalpindi, Punjab",
    loanType: "Qarz-e-Hasna",
    amount: "₨150,000",
    category: "qarz",
  },
  {
    id: 2,
    name: "Imran Haider",
    role: "Student",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&h=150&fit=crop&crop=face",
    text: "I pursued my Islamic finance degree with Akhuwat’s education support. Zero-interest loans gave me peace of mind and I now work to promote Halal economic models.",
    rating: 5,
    location: "Lahore, Punjab",
    loanType: "Education Support",
    amount: "₨300,000",
    category: "education",
  },
  {
    id: 3,
    name: "Bilquis Bano",
    role: "Widow & Caregiver",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    text: "During my husband’s illness, Akhuwat’s healthcare aid was our only hope. We received Shariah-compliant financial help with dignity.",
    rating: 5,
    location: "Hyderabad, Sindh",
    loanType: "Healthcare Relief",
    amount: "₨200,000",
    category: "healthcare",
  },
  // {
  //   id: 4,
  //   name: "Kashif Mehmood",
  //   role: "Shopkeeper",
  //   image: "https://images.unsplash.com/photo-1589578527966-b5b85f055a3d?w=150&h=150&fit=crop&crop=face",
  //   text: "From street vendor to shop owner – all thanks to Akhuwat’s business upliftment model. Interest-free loans changed everything.",
  //   rating: 5,
  //   location: "Gujranwala, Punjab",
  //   loanType: "Small Business Loan",
  //   amount: "₨100,000",
  //   category: "business",
  // },
  // {
  //   id: 5,
  //   name: "Rabia Nasir",
  //   role: "Homeowner",
  //   image: "https://images.unsplash.com/photo-1603415526960-f8f80d5c81d7?w=150&h=150&fit=crop&crop=face",
  //   text: "We built our house through Akhuwat's housing finance. It's not just a roof, it's a symbol of faith-based finance empowering the poor.",
  //   rating: 5,
  //   location: "Bahawalpur, Punjab",
  //   loanType: "Islamic Housing Fund",
  //   amount: "₨500,000",
  //   category: "housing",
  // },
]

const categories = [
  { id: "all", label: "All Stories", icon: FaQuran },
  { id: "qarz", label: "Qarz-e-Hasna", icon: FaHandsHelping },
  { id: "education", label: "Education", icon: FaUserTie },
  { id: "healthcare", label: "Healthcare", icon: FaMosque },
  { id: "business", label: "Business", icon: FaMoneyBillWave },
  { id: "housing", label: "Housing", icon: FaMapMarkerAlt },
]

const TestimonialsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all")
  const filtered = activeCategory === "all" ? testimonials : testimonials.filter(t => t.category === activeCategory)

  return (
    <section className="py-24 bg-gradient-to-br from-emerald-50 to-teal-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-emerald-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-teal-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl md:text-6xl font-extrabold text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Empowered by <span className="text-emerald-600">Faith</span>, Inspired by <span className="text-teal-600">Community</span>
          </motion.h2>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            Read real success stories of those uplifted through Akhuwat’s Islamic microfinance.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((c, i) => (
            <motion.button
              key={c.id}
              onClick={() => setActiveCategory(c.id)}
              className={`px-5 py-2 rounded-full flex items-center gap-2 text-sm font-medium border transition-all duration-300 ${
                activeCategory === c.id
                  ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white"
                  : "bg-white text-gray-700 border-gray-200 hover:bg-emerald-50"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <c.icon className="w-4 h-4" />
              {c.label}
            </motion.button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence>
            {filtered.map((t, index) => (
              <motion.div
                key={t.id}
                className="bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center text-center relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-24 h-24 object-cover rounded-full border-4 border-emerald-200 mb-4"
                />
                <h4 className="text-lg font-bold text-gray-900">{t.name}</h4>
                <p className="text-sm text-emerald-600 font-medium">{t.role}</p>
                <p className="text-gray-600 text-sm mt-2">{t.location}</p>
                <p className="text-sm text-gray-700 mt-4 italic">"{t.text}"</p>
                <div className="mt-4 flex gap-1">
                  {Array(t.rating)
                    .fill(0)
                    .map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 w-4 h-4" />
                    ))}
                </div>
                <div className="bg-emerald-50 text-emerald-700 px-3 py-1 mt-4 rounded-full text-xs font-semibold">
                  {t.loanType} — {t.amount}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection

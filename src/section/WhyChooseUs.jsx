"use client"

import { motion } from "framer-motion"
import {
  FaShieldAlt,
  FaHandHoldingHeart,
  FaClock,
  FaUsers,
  FaGlobe,
  FaCheckCircle,
  FaAward,
  FaHeart,
} from "react-icons/fa"

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: FaShieldAlt,
      title: "Shariah-Compliant Loans",
      description:
        "Our loans are completely Riba-free and structured according to Islamic finance principles.",
      color: "from-emerald-600 to-teal-600",
      stats: "15+ Years",
    },
    {
      icon: FaHandHoldingHeart,
      title: "Empowering Communities",
      description: "We foster community support through interest-free lending and shared responsibility.",
      color: "from-rose-500 to-pink-600",
      stats: "4.5M+ Beneficiaries",
    },
    {
      icon: FaClock,
      title: "Swift Process",
      description: "Fast, transparent application system with disbursal within 7 days.",
      color: "from-purple-500 to-fuchsia-600",
      stats: "7 Days",
    },
    {
      icon: FaUsers,
      title: "No Collateral Needed",
      description:
        "Our trust-based model removes the need for guarantors or physical assets.",
      color: "from-yellow-500 to-orange-600",
      stats: "Trust Based",
    },
    {
      icon: FaGlobe,
      title: "Nationwide Presence",
      description: "Over 800 branches operating across all major cities and rural regions.",
      color: "from-sky-500 to-blue-600",
      stats: "800+ Branches",
    },
    {
      icon: FaAward,
      title: "Globally Recognized",
      description: "Award-winning institution acknowledged for transparency and social impact.",
      color: "from-cyan-500 to-indigo-600",
      stats: "2M+ Ventures",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center items-center gap-4 mb-4">
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-4 rounded-full">
              <FaHeart className="text-white text-2xl" />
            </div>
            <h2 className="text-2xl font-semibold text-emerald-600">Why Akhuwat?</h2>
          </div>
          <h3 className="text-4xl font-bold text-gray-800">
            A Trusted Partner in Ethical Finance
          </h3>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Akhuwat believes in empowering society through compassion, community participation,
            and interest-free financing for a better Pakistan.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-8 rounded-3xl shadow-xl border border-emerald-100 relative overflow-hidden group hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-10 group-hover:opacity-20 transition`} />
              <div className="absolute top-4 right-4 bg-emerald-100 text-emerald-700 text-xs px-3 py-1 rounded-full font-semibold">
                {reason.stats}
              </div>
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${reason.color} text-white flex items-center justify-center text-2xl mb-4`}>
                <reason.icon />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors">
                {reason.title}
              </h4>
              <p className="text-gray-600 mb-4">{reason.description}</p>
              <div className="flex items-center gap-2 text-emerald-600 text-sm">
                <FaCheckCircle className="w-4 h-4" />
                <span>Verified by Communities</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
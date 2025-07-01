"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  FaPlay,
  FaMosque,
  FaHandHoldingHeart,
  FaShieldAlt,
  FaUsers,
  FaGlobe,
  FaStar,
  FaArrowRight,
} from "react-icons/fa"

const slides = [
  {
    id: 1,
    headline: "Interest-Free Islamic Microfinance",
    subheadline: "Qarz-e-Hasna for Every Pakistani",
    text: "Pakistan's largest Islamic microfinance organization providing Sharia-compliant, interest-free loans to empower communities and eliminate poverty through brotherhood.",
    image: "/akhuwatfoundationbusinessloan3.jpg",
    features: [
      { icon: FaUsers, label: "4.5M+ Lives Transformed", color: "text-emerald-600" },
      { icon: FaMosque, label: "100% Halal Finance", color: "text-blue-600" },
    ],
    theme: "from-emerald-500 to-teal-600",
    stats: { amount: "₨50B+", label: "Disbursed" },
  },
  {
    id: 2,
    headline: "Empowering Pakistani Entrepreneurs",
    subheadline: "Halal Business Growth Solutions",
    text: "Supporting small and medium enterprises with Sharia-compliant financing that honors Islamic principles while fueling economic growth across Pakistan.",
    image: "/akhuwatfoundationbusinessloan.jpg",
    features: [
      { icon: FaGlobe, label: "850+ Service Centers", color: "text-purple-600" },
      { icon: FaShieldAlt, label: "Zero Interest Guarantee", color: "text-orange-600" },
    ],
    theme: "from-blue-500 to-indigo-700",
    stats: { amount: "2.3M+", label: "Businesses Funded" },
  },
  {
    id: 3,
    headline: "Islamic Education Financing",
    subheadline: "Knowledge Without Financial Barriers",
    text: "Investing in Pakistan's future through interest-free education loans that make quality Islamic and modern education accessible to every deserving student.",
    image: "/What-is-Education-Loan-1-1.png",
    features: [
      { icon: FaHandHoldingHeart, label: "500K+ Students Helped", color: "text-red-600" },
      { icon: FaStar, label: "96% Success Rate", color: "text-yellow-600" },
    ],
    theme: "from-purple-500 to-pink-600",
    stats: { amount: "300+", label: "Partner Institutions" },
  },
]

const HeroSection = () => {
  const [index, setIndex] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const current = slides[index]

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background with Islamic Pattern Overlay */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2 }}
        >
          <img
            src={current.image || "/placeholder.svg"}
            alt="Islamic Microfinance"
            className="w-full h-full object-cover"
          />
          {/* Enhanced Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-black/70" />
          <div className={`absolute inset-0 bg-gradient-to-r ${current.theme} opacity-20 mix-blend-multiply`} />

          {/* Islamic Geometric Pattern Overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-96 h-96 border-4 border-white rounded-full"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 border-2 border-white rounded-full"></div>
            <div className="absolute top-1/2 left-1/4 w-64 h-64 border border-white rounded-full"></div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-32 flex flex-col lg:flex-row items-center justify-between gap-16 min-h-screen">
        {/* Left Content */}
        <motion.div
          className="text-white lg:w-3/5"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Islamic Greeting */}
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <FaMosque className="text-emerald-400 text-2xl" />
            <span className="text-emerald-300 font-semibold text-lg">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</span>
          </motion.div>

          {/* Main Headlines */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-4">
              <motion.span
                className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                {current.headline}
              </motion.span>
            </h1>
            <motion.h2
              className="text-2xl md:text-3xl font-bold text-emerald-200 mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              {current.subheadline}
            </motion.h2>
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {current.text}
          </motion.p>

          {/* Feature Highlights */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            {current.features.map((feature, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/20"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                transition={{ duration: 0.3 }}
              >
                <div className={`p-3 rounded-full bg-white/20 ${feature.color}`}>
                  <feature.icon className="text-2xl text-white" />
                </div>
                <div>
                  <span className="text-white font-bold text-lg block">{feature.label}</span>
                  <span className="text-emerald-200 text-sm">Alhamdulillah</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <motion.a
              href="https://wa.me/923281969250"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold px-8 py-4 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center gap-3"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaHandHoldingHeart className="text-xl" />
              Apply for Qarz-e-Hasna
              <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
                <FaArrowRight />
              </motion.div>
            </motion.a>

            <motion.button
              onClick={() => setShowModal(true)}
              className="group bg-white/10 hover:bg-white/20 border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-full backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-3"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPlay className="text-lg" />
              Watch Our Story
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Content - Stats Card */}
        <motion.div
          className="lg:w-2/5"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="bg-white/10 border border-white/20 backdrop-blur-xl rounded-3xl p-8 shadow-2xl">
            {/* Islamic Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">ا</span>
              </div>
              <h3 className="text-white text-2xl font-bold mb-2">Akhuwat Impact</h3>
              <p className="text-emerald-200 text-sm">Serving Pakistan Since 2001</p>
            </div>

            {/* Key Stats */}
            <div className="space-y-6">
              <div className="text-center p-6 bg-white/10 rounded-2xl border border-white/20">
                <div className="text-4xl font-black text-emerald-400 mb-2">{current.stats.amount}</div>
                <div className="text-white font-semibold">{current.stats.label}</div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white/10 rounded-2xl">
                  <div className="text-2xl font-bold text-white mb-1">0%</div>
                  <div className="text-emerald-200 text-sm">Interest Rate</div>
                </div>
                <div className="text-center p-4 bg-white/10 rounded-2xl">
                  <div className="text-2xl font-bold text-white mb-1">100%</div>
                  <div className="text-emerald-200 text-sm">Halal Finance</div>
                </div>
              </div>

              {/* Islamic Principles */}
              <div className="space-y-3">
                <h4 className="text-white font-bold text-center mb-4">Our Islamic Values</h4>
                {[
                  "✓ Complete Sharia Compliance",
                  "✓ Zero Interest (Riba-Free)",
                  "✓ Community Brotherhood",
                  "✓ Transparent Operations",
                ].map((principle, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-3 text-emerald-200 text-sm"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 + i * 0.1 }}
                  >
                    <FaShieldAlt className="text-emerald-400" />
                    <span>{principle}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4 z-20">
        {slides.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === i ? "bg-emerald-400 shadow-lg" : "bg-white/50 hover:bg-white/70"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white text-xl transition-all duration-200"
              >
                ×
              </button>
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/CkNYmST2olo?autoplay=1"
                  title="Akhuwat Story"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default HeroSection

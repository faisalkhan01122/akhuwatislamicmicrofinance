"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  FaPlay,
  FaMosque,
  FaHandHoldingHeart,
  FaUsers,
  FaGlobe,
  FaStar,
  FaArrowRight,
  FaUniversity,
  FaHome,
  FaQuran,
  FaPrayingHands,
} from "react-icons/fa"
import { FaBookQuran, FaHandshake } from "react-icons/fa6"

const slides = [
  {
    id: 1,
    headline: "Qard-e-Hasna Microfinance",
    subheadline: "Revolutionizing Finance with Islamic Principles",
    text: "As the world's largest Islamic microfinance institution, Akhuwat provides interest-free loans to empower communities while strictly adhering to Quranic principles of brotherhood and mutual assistance.",
    image: "/akhuwat-foundation.jpg",
    features: [
      { icon: FaUsers, label: "5.5M+ Lives Impacted", color: "text-emerald-400", verse: "Quran 2:245 - 'Who is it that would loan Allah a goodly loan...'" },
      { icon: FaHandshake, label: "100% Interest-Free", color: "text-amber-400", verse: "Quran 2:275 - 'Allah has permitted trade and forbidden usury'" },
    ],
    theme: "from-emerald-700 to-green-900",
    stats: { amount: "₨500B+", label: "Disbursed in Qard-e-Hasna" },
    arabicText: "القرض الحسن",
    arabicVerse: "مَّن ذَا الَّذِي يُقْرِضُ اللَّهَ قَرْضًا حَسَنًا"
  },
  {
    id: 2,
    headline: "Islamic Business Solutions",
    subheadline: "Halal Financing for Entrepreneurs",
    text: "We support Muslim entrepreneurs with Sharia-compliant financing models that honor Islamic commercial ethics while fostering sustainable economic growth.",
    image: "/akhuwat-business.jpg",
    features: [
      { icon: FaGlobe, label: "850+ Branches", color: "text-blue-400", verse: "Hadith - 'The truthful, trustworthy merchant will be with the prophets'" },
      { icon: FaStar, label: "Zero Riba Guarantee", color: "text-purple-400", verse: "Quran 3:130 - 'Do not consume usury, doubled and multiplied'" },
    ],
    theme: "from-blue-700 to-indigo-900",
    stats: { amount: "2.5M+", label: "Businesses Supported" },
    arabicText: "تمويل الأعمال الحلال",
    arabicVerse: "وَأَحَلَّ اللَّهُ الْبَيْعَ وَحَرَّمَ الرِّبَا"
  },
  {
    id: 3,
    headline: "Islamic Education Financing",
    subheadline: "Knowledge Without Compromise",
    text: "Our interest-free education loans make quality Islamic and modern education accessible while preserving the sanctity of seeking knowledge without usury.",
    image: "/akhuwat-education.jpg",
    features: [
      { icon: FaUniversity, label: "600K+ Students", color: "text-amber-400", verse: "Hadith - 'Seeking knowledge is obligatory for every Muslim'" },
      { icon: FaHome, label: "Family Support", color: "text-teal-400", verse: "Quran 2:233 - 'No soul shall have imposed upon it except according to its capacity'" },
    ],
    theme: "from-amber-700 to-orange-900",
    stats: { amount: "350+", label: "Partner Institutions" },
    arabicText: "تمويل التعليم الإسلامي",
    arabicVerse: "طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ"
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
    <section className="relative w-full min-h-screen overflow-hidden bg-gray-900">
      {/* Islamic Pattern Background Layer */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/islamic-pattern.png')]"></div>
      
      {/* Main Slider */}
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
            src={current.image}
            alt="Akhuwat Microfinance"
            className="w-full h-full object-cover object-center"
          />
          {/* Enhanced Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />
          <div className={`absolute inset-0 bg-gradient-to-r ${current.theme} opacity-30 mix-blend-overlay`} />
        </motion.div>
      </AnimatePresence>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col lg:flex-row items-center justify-between gap-12 min-h-screen">
        
        {/* Left Content */}
        <motion.div
          className="text-white lg:w-1/2"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Islamic Header */}
          <motion.div
            className="flex items-center gap-3 mb-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="p-2 bg-emerald-600/30 rounded-lg backdrop-blur-sm border border-emerald-500/30">
              <FaMosque className="text-emerald-300 text-xl" />
            </div>
            <span className="text-emerald-300 font-semibold text-lg font-arabic tracking-wider">
              بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
            </span>
          </motion.div>

          {/* Arabic Verse */}
          <motion.div
            className="mb-6 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-emerald-300 font-arabic text-right leading-relaxed">
              {current.arabicVerse}
            </h2>
          </motion.div>

          {/* Main Headlines */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              <motion.span
                className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-emerald-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                {current.headline}
              </motion.span>
            </h1>
            <motion.h2
              className="text-2xl md:text-3xl font-semibold text-emerald-200 mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              {current.subheadline}
            </motion.h2>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {current.text}
          </motion.p>

          {/* Feature Highlights */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            {current.features.map((feature, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-4 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20 hover:border-emerald-400/50 transition-all"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`p-3 rounded-lg ${feature.color} bg-white/10 mt-1`}>
                  <feature.icon className="text-xl" />
                </div>
                <div>
                  <span className="text-white font-bold text-lg block mb-1">{feature.label}</span>
                  <span className="text-emerald-200 text-sm italic">"{feature.verse}"</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <motion.a
              href="/contact-us"
              className="group relative overflow-hidden bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-700 hover:to-green-800 text-white font-bold px-8 py-4 rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center gap-3"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <FaHandHoldingHeart className="text-xl" />
                Apply for Qard-e-Hasna
                <motion.div 
                  animate={{ x: [0, 5, 0] }} 
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="ml-1"
                >
                  <FaArrowRight />
                </motion.div>
              </span>
              <span className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-10"></span>
            </motion.a>

            <motion.button
              onClick={() => setShowModal(true)}
              className="group relative overflow-hidden bg-white/10 hover:bg-white/20 border border-white/30 hover:border-emerald-400/50 text-white px-8 py-4 rounded-lg backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-3"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <FaPlay className="text-lg" />
                Our Islamic Model
              </span>
              <span className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-5"></span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Content - Islamic Stats Card */}
        <motion.div
          className="lg:w-2/5 w-full"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/20 overflow-hidden">
            {/* Islamic Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/islamic-pattern.png')] opacity-5"></div>
            
            {/* Islamic Header */}
            <div className="relative text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <FaQuran className="text-white text-3xl" />
              </div>
              <h3 className="text-white text-3xl font-bold mb-2">Akhuwat Impact</h3>
              <p className="text-emerald-300 text-sm font-arabic tracking-wider">خدمتِ خلق منذ 2001</p>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
            </div>

            {/* Key Islamic Stats */}
            <div className="relative space-y-6">
              <div className="text-center p-6 bg-gradient-to-br from-emerald-700/40 to-green-800/40 rounded-xl border border-emerald-500/30 backdrop-blur-sm">
                <div className="text-5xl font-black text-white mb-2">{current.stats.amount}</div>
                <div className="text-emerald-200 font-semibold text-lg">{current.stats.label}</div>
                <div className="text-white/70 text-xs mt-2 font-arabic">قرض حسن</div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-5 bg-gradient-to-br from-blue-700/40 to-indigo-800/40 rounded-xl border border-blue-500/30 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-white mb-1">0%</div>
                  <div className="text-blue-200 text-sm">Riba</div>
                  <div className="text-white/50 text-xs mt-1 font-arabic">ربا</div>
                </div>
                <div className="text-center p-5 bg-gradient-to-br from-amber-700/40 to-orange-800/40 rounded-xl border border-amber-500/30 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-white mb-1">100%</div>
                  <div className="text-amber-200 text-sm">Halal</div>
                  <div className="text-white/50 text-xs mt-1 font-arabic">حلال</div>
                </div>
              </div>

              {/* Islamic Principles */}
              <div className="space-y-4">
                <h4 className="text-white font-bold text-center text-xl mb-4 pb-2 relative">
                  <span className="relative z-10 px-4 bg-gradient-to-r from-transparent via-white/10 to-transparent">
                    Our Islamic Principles
                  </span>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
                </h4>
                {[
                  { text: "Quranic Qard-e-Hasna", verse: "2:245", icon: FaBookQuran },
                  { text: "Riba-Free Finance", verse: "2:275", icon: FaPrayingHands },
                  { text: "Zakat & Sadaqah", verse: "9:60", icon: FaHandHoldingHeart },
                  { text: "Community Brotherhood", verse: "49:10", icon: FaUsers },
                ].map((principle, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-4 text-white text-sm bg-gradient-to-r from-white/5 to-white/10 p-4 rounded-lg border border-white/10 hover:border-emerald-400/30 transition-all"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 + i * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <principle.icon className={`text-xl ${i % 2 === 0 ? 'text-emerald-400' : 'text-amber-400'}`} />
                    <span className="flex-1">{principle.text}</span>
                    <span className="bg-black/30 px-2 py-1 rounded text-amber-300 text-xs">Quran {principle.verse}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 relative ${
              index === i ? "bg-emerald-400 shadow-emerald-400/50" : "bg-white/50 hover:bg-white/70"
            }`}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.8 }}
          >
            {index === i && (
              <motion.span
                className="absolute inset-0 border-2 border-emerald-400 rounded-full"
                initial={{ scale: 1.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.button>
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
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-2xl border border-emerald-500/30"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white text-xl transition-all duration-200 backdrop-blur-sm"
              >
                ×
              </button>
              <div className="aspect-video bg-black">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/CkNYmST2olo?autoplay=1"
                  title="Akhuwat Islamic Microfinance"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="bg-gradient-to-r from-emerald-800 to-green-700 p-4 text-center border-t border-emerald-500/30">
                <h3 className="text-white font-bold text-lg">Akhuwat: An Islamic Solution to Poverty</h3>
                <p className="text-emerald-200 text-sm mt-1">Watch our journey of serving the Ummah</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Quran Verse */}
      <motion.div
        className="absolute bottom-8 right-8 hidden lg:block"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 max-w-xs">
          <p className="text-emerald-300 text-sm italic mb-2">"Who is it that would loan Allah a goodly loan so He may multiply it for him many times over?"</p>
          <p className="text-white/70 text-right text-xs">- Quran 2:245</p>
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection
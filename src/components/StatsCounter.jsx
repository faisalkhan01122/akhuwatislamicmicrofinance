"use client"

import { useState, useEffect } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef } from "react"
import {
  FaUsers,
  FaHandHoldingHeart,
  FaBuilding,
  FaGlobe,
  FaMosque,
  FaShieldAlt,
  FaStar,
  FaHeart,
  FaQuran,
  FaHandshake,
  FaDonate,
  FaPray
} from "react-icons/fa"
import { GiMoneyStack } from "react-icons/gi"

const StatsCounter = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [activeTab, setActiveTab] = useState("impact")

  const stats = {
    impact: [
      {
        id: 1,
        number: 4500000,
        suffix: "+",
        label: "Lives Transformed",
        subLabel: "Through Qard-e-Hasan",
        icon: FaUsers,
        color: "from-emerald-400 to-teal-500",
        bgColor: "bg-emerald-50",
        arabicText: "تحويل حياة",
        duration: 2000
      },
      {
        id: 2,
        number: 85,
        suffix: "B+",
        prefix: "₨",
        label: "Interest-Free Loans",
        subLabel: "Disbursed Nationwide",
        icon: GiMoneyStack,
        color: "from-blue-400 to-indigo-500",
        bgColor: "bg-blue-50",
        arabicText: "قروض حسنة",
        duration: 2200
      },
      {
        id: 3,
        number: 850,
        suffix: "+",
        label: "Service Centers",
        subLabel: "Across Pakistan",
        icon: FaBuilding,
        color: "from-purple-400 to-fuchsia-500",
        bgColor: "bg-purple-50",
        arabicText: "مراكز الخدمة",
        duration: 1800
      },
      {
        id: 4,
        number: 23,
        suffix: "+",
        label: "Years of Service",
        subLabel: "Since 2001",
        icon: FaGlobe,
        color: "from-amber-400 to-orange-500",
        bgColor: "bg-amber-50",
        arabicText: "سنوات الخدمة",
        duration: 1500
      }
    ],
    principles: [
      {
        id: 5,
        number: 100,
        suffix: "%",
        label: "Sharia Compliance",
        subLabel: "Fully Islamic Model",
        icon: FaQuran,
        color: "from-green-400 to-emerald-500",
        bgColor: "bg-green-50",
        arabicText: "متوافق مع الشريعة",
        duration: 1600
      },
      {
        id: 6,
        number: 0,
        suffix: "%",
        label: "Interest Charged",
        subLabel: "Pure Qard-e-Hasan",
        icon: FaHandshake,
        color: "from-sky-400 to-cyan-500",
        bgColor: "bg-sky-50",
        arabicText: "قرض حسن",
        duration: 1400
      },
      {
        id: 7,
        number: 100,
        suffix: "%",
        label: "Repayment Rate",
        subLabel: "Community Trust",
        icon: FaDonate,
        color: "from-violet-400 to-purple-500",
        bgColor: "bg-violet-50",
        arabicText: "معدل السداد",
        duration: 1800
      },
      {
        id: 8,
        number: 5,
        suffix: "x",
        label: "Poverty Reduction",
        subLabel: "Impact Multiplier",
        icon: FaPray,
        color: "from-rose-400 to-pink-500",
        bgColor: "bg-rose-50",
        arabicText: "تخفيف الفقر",
        duration: 2000
      }
    ]
  }

  const achievements = [
    { 
      icon: FaMosque, 
      text: "Sharia Certified", 
      description: "Approved by Islamic scholars",
      color: "text-emerald-500",
      bg: "bg-emerald-500/10"
    },
    { 
      icon: FaShieldAlt, 
      text: "Zero Interest", 
      description: "Pure Qard-e-Hasan model",
      color: "text-blue-500",
      bg: "bg-blue-500/10"
    },
    { 
      icon: FaStar, 
      text: "Pakistan's Largest", 
      description: "Islamic microfinance network",
      color: "text-purple-500",
      bg: "bg-purple-500/10"
    },
    { 
      icon: FaHeart, 
      text: "Community Based", 
      description: "Mosque-centered approach",
      color: "text-rose-500",
      bg: "bg-rose-500/10"
    }
  ]

  const Counter = ({ number, duration = 2000, prefix = "", suffix = "" }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (!isInView) return

      let startTime = null
      const startValue = 0
      const endValue = number

      const animate = (currentTime) => {
        if (startTime === null) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / duration, 1)

        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const currentCount = Math.floor(easeOutQuart * (endValue - startValue) + startValue)

        setCount(currentCount)

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }

      requestAnimationFrame(animate)
    }, [isInView, number, duration])

    return (
      <span className="font-black">
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </span>
    )
  }

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-teal-50 relative overflow-hidden">
      {/* Islamic Pattern Background */}
      <div className="absolute inset-0 opacity-5 [background-image:url('https://static.vecteezy.com/system/resources/previews/014/664/051/non_2x/islamic-ornament-persian-motiff-3d-ramadan-islamic-round-pattern-elements-geometric-circular-ornamental-arabic-symbol-gold-background-vector.jpg')]"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-200/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-200/20 rounded-full filter blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
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
            <div className="w-20 h-20 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg transform rotate-12">
              <FaHandHoldingHeart className="text-white text-3xl" />
            </div>
            <div className="text-center mt-4">
              <span className="text-emerald-600 font-bold text-lg block">بسم الله الرحمن الرحيم</span>
              <span className="text-gray-600 text-sm">Our Impact Through Islamic Finance</span>
            </div>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Revolutionizing <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">Microfinance</span> <br />
            Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Qard-e-Hasan</span>
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Akhuwat has established Pakistan's largest Islamic microfinance network by implementing the prophetic tradition of 
            interest-free loans (Qard-e-Hasan) to alleviate poverty with dignity.
          </motion.p>

          {/* Quranic Verse */}
          <motion.div
            className="mt-12 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-2xl text-emerald-600 font-semibold mb-2 text-right leading-relaxed">
              "مَّثَلُ ٱلَّذِينَ يُنفِقُونَ أَمْوَٰلَهُمْ فِى سَبِيلِ ٱللَّهِ كَمَثَلِ حَبَّةٍ أَنۢبَتَتْ سَبْعَ سَنَابِلَ فِى كُلِّ سُنۢبُلَةٍۢ مِّا۟ئَةُ حَبَّةٍۢ ۗ وَٱللَّهُ يُضَـٰعِفُ لِمَن يَشَآءُ ۗ وَٱللَّهُ وَٰسِعٌ عَلِيمٌ"
            </p>
            <p className="text-sm text-gray-600 italic">
              "The example of those who spend their wealth in the way of Allah is like a seed of grain that grows seven 
              ears; in every ear there are a hundred grains. And Allah multiplies for whom He wills." (Quran 2:261)
            </p>
          </motion.div>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex bg-white p-1 rounded-xl shadow-sm border border-gray-200">
            <button
              onClick={() => setActiveTab("impact")}
              className={`px-6 py-3 text-sm font-medium rounded-lg transition-all duration-300 ${
                activeTab === "impact" 
                  ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Our Impact
            </button>
            <button
              onClick={() => setActiveTab("principles")}
              className={`px-6 py-3 text-sm font-medium rounded-lg transition-all duration-300 ${
                activeTab === "principles" 
                  ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Islamic Principles
            </button>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {stats[activeTab].map((stat, index) => (
              <motion.div
                key={stat.id}
                className=" relative bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 overflow-hidden"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
                
                {/* Animated Border */}
                <div className={`absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                  <div className="w-full h-full bg-white rounded-[15px]"></div>
                </div>

                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-6 shadow-md`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <stat.icon className="text-2xl text-white" />
                </motion.div>

                {/* Number */}
                <motion.div
                  className="text-3xl md:text-4xl font-bold text-gray-900 mb-3"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.8, type: "spring", bounce: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Counter 
                    number={stat.number} 
                    prefix={stat.prefix} 
                    suffix={stat.suffix} 
                    duration={stat.duration} 
                  />
                </motion.div>

                {/* Labels */}
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-gray-800">{stat.label}</h3>
                  <p className="text-emerald-600 text-sm font-medium">{stat.subLabel}</p>
                  <p className="text-gray-500 text-xs mt-2">{stat.arabicText}</p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                  <div className="w-8 h-8 border-2 border-emerald-300 rounded-full"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Achievements Section */}
        <motion.div
          className="bg-white rounded-3xl shadow-xl overflow-hidden mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2">
            <div className="p-10 bg-gradient-to-br from-emerald-50 to-teal-50">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Akhuwat Stands Apart</h3>
              <p className="text-gray-600 mb-6">
                Our unique model combines Islamic finance principles with community empowerment, creating sustainable change 
                through the prophetic tradition of Qard-e-Hasan.
              </p>
              
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    className={`flex items-start gap-4 p-4 rounded-xl ${achievement.bg} border border-transparent hover:border-${achievement.color.split('text-')[1]}/20 transition-all`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className={`p-3 rounded-lg ${achievement.bg}`}>
                      <achievement.icon className={`text-xl ${achievement.color}`} />
                    </div>
                    <div>
                      <h4 className={`font-bold ${achievement.color}`}>{achievement.text}</h4>
                      <p className="text-gray-600 text-sm">{achievement.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="p-10 bg-gradient-to-br from-gray-50 to-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Islamic Methodology</h3>
              <p className="text-gray-600 mb-6">
                Akhuwat's approach is rooted in Islamic values of brotherhood, compassion, and social justice.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                      <span className="text-emerald-500">1</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Mosque-Based Centers</h4>
                    <p className="text-gray-600 text-sm">
                      Operating from mosques to strengthen community bonds and ensure transparency.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                      <span className="text-blue-500">2</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Interest-Free Loans</h4>
                    <p className="text-gray-600 text-sm">
                      Pure Qard-e-Hasan model with no hidden charges or fees.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center">
                      <span className="text-purple-500">3</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Social Collateral</h4>
                    <p className="text-gray-600 text-sm">
                      Trust-based system replacing traditional collateral requirements.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center">
                      <span className="text-amber-500">4</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Entrepreneurship Focus</h4>
                    <p className="text-gray-600 text-sm">
                      Empowering recipients to start sustainable businesses.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Join the <span className="text-emerald-600">Qard-e-Hasan</span> Movement
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you need financial assistance or want to contribute to this Islamic social welfare system, 
              Akhuwat provides Sharia-compliant solutions.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.a
             href="https://wa.me/923281969250"
                target="_blank"
                rel="noopener noreferrer"
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 flex items-center gap-3 group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaHandHoldingHeart className="text-xl" />
              Apply Now
              <motion.span 
                className="group-hover:translate-x-1 transition-transform"
                initial={{ x: 0 }}
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>

            <motion.a
              href="tel:+923281969250"
              className="bg-white border-2 border-gray-200 hover:border-emerald-500 text-gray-700 hover:text-emerald-600 font-bold px-8 py-4 rounded-xl transition-all duration-300 flex items-center gap-3"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              📞 Call: +92 32 8196 9250 
            </motion.a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="mt-12 pt-8 border-t border-gray-200 flex flex-wrap items-center justify-center gap-6 text-gray-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2">
              <FaMosque className="text-emerald-500" />
              <span className="text-sm">Sharia Advisory Board</span>
            </div>
            <div className="flex items-center gap-2">
              <FaShieldAlt className="text-blue-500" />
              <span className="text-sm">Transparent Operations</span>
            </div>
            <div className="flex items-center gap-2">
              <FaQuran className="text-amber-500" />
              <span className="text-sm">Islamic Values</span>
            </div>
            <div className="flex items-center gap-2">
              <FaHandshake className="text-purple-500" />
              <span className="text-sm">Community Trust</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default StatsCounter
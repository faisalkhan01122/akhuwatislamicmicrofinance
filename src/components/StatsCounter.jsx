"use client"

import { useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
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
} from "react-icons/fa"

const StatsCounter = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const stats = [
    {
      id: 1,
      number: 4500000,
      suffix: "+",
      label: "Lives Transformed",
      subLabel: "Families Empowered",
      icon: FaUsers,
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50",
      arabicText: "الحياة المتحولة",
    },
    {
      id: 2,
      number: 50,
      suffix: "B+",
      prefix: "₨",
      label: "Interest-Free Disbursed",
      subLabel: "Halal Finance",
      icon: FaHandHoldingHeart,
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50",
      arabicText: "التمويل الحلال",
    },
    {
      id: 3,
      number: 850,
      suffix: "+",
      label: "Service Centers",
      subLabel: "Nationwide Reach",
      icon: FaBuilding,
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50",
      arabicText: "مراكز الخدمة",
    },
    {
      id: 4,
      number: 23,
      suffix: "+",
      label: "Years of Service",
      subLabel: "Since 2001",
      icon: FaGlobe,
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50",
      arabicText: "سنوات الخدمة",
    },
  ]

  const achievements = [
    { icon: FaMosque, text: "100% Sharia Compliant", color: "text-emerald-600" },
    { icon: FaShieldAlt, text: "Zero Interest Guarantee", color: "text-blue-600" },
    { icon: FaStar, text: "Pakistan's Largest", color: "text-purple-600" },
    { icon: FaHeart, text: "Community Focused", color: "text-red-600" },
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
    <section className="py-24 bg-gradient-to-br from-gray-900 via-emerald-900 to-teal-900 relative overflow-hidden">
      {/* Background Islamic Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 border-4 border-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 border-2 border-white rounded-full animate-ping"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 border border-white rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 right-1/3 w-48 h-48 border border-white rounded-full"></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-teal-600/20"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex items-center justify-center gap-4 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full flex items-center justify-center shadow-2xl">
              <span className="text-white text-2xl font-bold">ا</span>
            </div>
            <div className="text-left">
              <span className="text-emerald-300 font-bold text-xl block">Alhamdulillah</span>
              <span className="text-gray-300 text-sm">Our Impact by Allah's Grace</span>
            </div>
          </motion.div>

          <motion.h2
            className="text-2xl md:text-3xl font-black text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Transforming Pakistan Through{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              Islamic Finance
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            By the grace of Allah, Akhuwat has become Pakistan's largest Islamic microfinance organization, touching
            millions of lives through interest-free, Sharia-compliant financial services.
          </motion.p>

          {/* Arabic Verse */}
          <motion.div
            className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-2xl text-emerald-300 font-semibold mb-2 text-right">وَمَن تَصَدَّقَ بِصَدَقَةٍ مِّن طَيِّبٍ</p>
            <p className="text-sm text-gray-300 italic">"And whoever gives charity from good earnings" - Hadith</p>
          </motion.div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              className="group relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 text-center hover:bg-white/15 transition-all duration-500"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}
              ></div>

              {/* Icon */}
              <motion.div
                className={`w-20 h-20 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <stat.icon className="text-3xl text-white" />
              </motion.div>

              {/* Number */}
              <motion.div
                className="text-xl md:text-3xl font-black text-white mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.8, type: "spring", bounce: 0.5 }}
                viewport={{ once: true }}
              >
                <Counter number={stat.number} prefix={stat.prefix} suffix={stat.suffix} duration={2000 + index * 200} />
              </motion.div>

              {/* Labels */}
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">{stat.label}</h3>
                <p className="text-emerald-300 text-sm font-semibold">{stat.subLabel}</p>
                <p className="text-gray-400 text-xs">{stat.arabicText}</p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 opacity-20">
                <div className="w-8 h-8 border-2 border-white rounded-full"></div>
              </div>
              <div className="absolute bottom-4 left-4 opacity-20">
                <div className="w-6 h-6 border border-white rounded-full"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements Banner */}
        <motion.div
          className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-2">Our Islamic Commitments</h3>
            <p className="text-emerald-300">Principles that guide every aspect of our work</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4 bg-white/10 rounded-2xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`p-3 rounded-full bg-white/20 ${achievement.color}`}>
                  <achievement.icon className="text-xl text-white" />
                </div>
                <div>
                  <span className="text-white font-semibold text-sm block leading-tight">{achievement.text}</span>
                </div>
              </motion.div>
            ))}
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
            className="mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold text-white mb-4">Join the Islamic Finance Revolution</h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Be part of Pakistan's largest interest-free microfinance movement. Transform your life through
              Sharia-compliant financial solutions.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="https://wa.me/923281969250"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold px-8 py-4 rounded-full shadow-2xl transition-all duration-300 flex items-center gap-3"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaHandHoldingHeart className="text-xl" />
              Start Your Qarz-e-Hasna Journey
              <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
                →
              </motion.span>
            </motion.a>

            <motion.a
              href="tel:+923281969250"
              className="bg-white/10 border-2 border-white/30 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-full backdrop-blur-sm transition-all duration-300 flex items-center gap-3"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              📞 Call: +92 328 1969250
            </motion.a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="mt-12 flex items-center justify-center gap-8 text-emerald-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2">
              <FaShieldAlt />
              <span className="text-sm">Sharia Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMosque />
              <span className="text-sm">100% Halal</span>
            </div>
            <div className="flex items-center gap-2">
              <FaHeart />
              <span className="text-sm">Zero Interest</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default StatsCounter

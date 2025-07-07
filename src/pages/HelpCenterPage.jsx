"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import {
  FaMosque,
  FaHandHoldingUsd,
  FaUniversity,
  FaSearch,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
  FaArrowRight,
  FaHandsHelping
} from "react-icons/fa"
import { FaBookQuran } from "react-icons/fa6";

import { RiRefund2Fill } from "react-icons/ri"
import { BsFillCalendar2CheckFill } from "react-icons/bs"

const HelpCenterPage = () => {
 
  const helpCategories = [
    { 
      id: "qard", 
      label: "Qard-e-Hasana", 
      icon: FaHandHoldingUsd, 
      count: 18,
      description: "Learn about interest-free loans in Islam"
    },
    { 
      id: "application", 
      label: "Application Process", 
      icon: BsFillCalendar2CheckFill, 
      count: 12,
      description: "Step-by-step Sharia-compliant application"
    },
    { 
      id: "repayment", 
      label: "Repayment Guidance", 
      icon: RiRefund2Fill, 
      count: 9,
      description: "Fulfilling your Islamic financial obligation"
    },
    { 
      id: "education", 
      label: "Islamic Education", 
      icon: FaBookQuran, 
      count: 15,
      description: "Financial wisdom from Quran and Sunnah"
    },
    { 
      id: "community", 
      label: "Community Support", 
      icon: FaMosque, 
      count: 7,
      description: "Mosque-based assistance programs"
    },
    { 
      id: "institutions", 
      label: "Islamic Institutions", 
      icon: FaUniversity, 
      count: 5,
      description: "Partner religious schools and centers"
    },
  ]

  const contactMethods = [
    {
      icon: FaPhone,
      title: "Telephone Support",
      description: "Speak with our Islamic finance advisors",
      contact: "+92 328 196 9250",
      hours: "24/7 according to need",
      color: "from-green-600 to-emerald-700",
      islamicNote: "Available even during prayer breaks"
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp Assistance",
      description: "Get quick responses via messaging",
      contact: "+92 328 196 9250",
      hours: "Response within 1 hour",
      color: "from-teal-600 to-green-700",
      islamicNote: "Share Islamic financial resources"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Visit Our Centers",
      description: "Meet at your nearest mosque center",
      contact: "1,200+ Mosque Locations",
      hours: "After Fajr to Isha prayers",
      color: "from-blue-600 to-indigo-700",
      islamicNote: "Imams available for consultation"
    },
    {
      icon: FaHandsHelping,
      title: "Brotherhood Support",
      description: "Volunteer assistance network",
      contact: "Request a Visit",
      hours: "Community volunteers on call",
      color: "from-amber-600 to-orange-600",
      islamicNote: "Sunnah of helping fellow Muslims"
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-emerald-50">
      {/* Islamic Hero Section */}
      <section className="relative py-24 overflow-hidden bg-[url('/islamic-pattern-bg.png')] bg-cover">
        <div className="absolute inset-0 bg-emerald-900/90"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="flex flex-col items-center justify-center gap-2 mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="text-4xl text-emerald-300 mb-2" style={{ fontFamily: 'Traditional Arabic' }}>مرحبا بكم</div>
              <div className="w-20 h-1 bg-amber-400 mb-4"></div>
              <div className="text-xl text-emerald-200">Akhuwat Islamic Help Center</div>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Seeking <span className="text-amber-300">Islamic</span> Financial Guidance?
            </motion.h1>

            <motion.p
              className="text-2xl text-emerald-100 max-w-4xl mx-auto leading-relaxed mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              "Whoever relieves a Muslim of a burden from the burdens of the worldly life, Allah will relieve him of a burden from the burdens on the Day of Judgment" (Tirmidhi)
            </motion.p>

            {/* Islamic Search Bar */}
            {/* <motion.div
              className="max-w-2xl mx-auto relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="relative">
                <div className="absolute left-6 top-1/2 transform -translate-y-1/2 text-emerald-300 text-xl">
                  <FaSearch />
                </div>
                <input
                  type="text"
                  placeholder="Ask about Qard-e-Hasana, Islamic loans, or financial help..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-16 pr-6 py-5 text-lg rounded-full border-2 border-emerald-300/30 focus:border-amber-400 focus:outline-none bg-white/10 backdrop-blur-sm text-white placeholder-emerald-200 shadow-lg"
                />
                <motion.button
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Search
                </motion.button>
              </div>
              <p className="text-emerald-200 text-sm mt-3 text-right">Type your question in English or Urdu</p>
            </motion.div> */}
          </motion.div>

          {/* Islamic Contact Methods */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-emerald-300/20 hover:border-amber-400/50 transition-all duration-500 text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md`}
                >
                  <method.icon className="text-white text-xl" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                <p className="text-emerald-200 text-sm mb-3">{method.description}</p>
                <div className="text-lg font-bold text-amber-300 mb-2">{method.contact}</div>
                <div className="text-sm text-emerald-200/80 mb-3">{method.hours}</div>
                <div className="text-xs text-emerald-200/60 mb-5 italic">{method.islamicNote}</div>
                <motion.a
                href="https://wa.me/923354571620"
                target="_blank"
                rel="noopener noreferrer"
                  className={`mt-4 w-full py-2 px-4  rounded-lg text-white font-medium bg-gradient-to-r ${method.color} hover:shadow-lg transition-all duration-300 text-sm`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Contact Now
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Islamic Help Categories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-emerald-600 text-3xl mb-4" style={{ fontFamily: 'Traditional Arabic' }}>المواضيع المساعدة</div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Islamic <span className="text-emerald-600">Help</span> Topics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              "The believers in their mutual kindness, compassion and sympathy are just like one body" (Bukhari)
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {helpCategories.map((category, index) => (
              <motion.div
                key={category.id}
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-500 group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-5 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-700 rounded-xl flex items-center justify-center shadow-md group-hover:rotate-12 transition-transform`}>
                    <category.icon className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{category.label}</h3>
                    <span className="text-sm text-emerald-600">{category.count} Islamic resources</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  {category.description}
                </p>

                <motion.a
                href="/about"
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3 text-sm"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Explore Islamic Articles
                  <FaArrowRight className="text-xs" />
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Islamic Assistance */}
      <section className="py-24 bg-[url('/mosque-bg.jpg')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-emerald-900/90"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-amber-300 text-3xl mb-4" style={{ fontFamily: 'Traditional Arabic' }}>مساعدة عاجلة</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Urgent Islamic Financial Need?</h2>
            <p className="text-xl text-emerald-200 mb-12 max-w-3xl mx-auto leading-relaxed">
              "If anyone relieves a Muslim of his worldly distress, Allah will relieve him of his distress on the Day of Resurrection" (Muslim)
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a

                href="tel:+923354571620"
                className="bg-amber-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-amber-600 transition-all duration-300 shadow-xl flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPhone />
                Emergency Islamic Line
              </motion.a>

              <motion.a
                href="https://wa.me/923354571620"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 backdrop-blur-sm border border-amber-400 text-white px-8 py-4 rounded-lg font-bold hover:bg-white/30 transition-all duration-300 flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaWhatsapp />
                WhatsApp Imam
              </motion.a>
            </div>

            <div className="mt-12 pt-8 border-t border-emerald-300/20">
              <h3 className="text-xl text-amber-300 mb-4">After Hours Mosque Assistance</h3>
              <p className="text-emerald-200 max-w-2xl mx-auto">
                Visit your local mosque and ask for the Akhuwat representative. Our volunteers are available after Isha prayers for urgent needs.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quranic Closing */}
      <section className="py-16 bg-gradient-to-r from-emerald-800 to-teal-900 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-white text-4xl mb-6" style={{ fontFamily: 'Traditional Arabic' }}>
            وَتَعَاوَنُوا۟ عَلَى ٱلْبِرِّ وَٱلتَّقْوَىٰ ۖ وَلَا تَعَاوَنُوا۟ عَلَى ٱلْإِثْمِ وَٱلْعُدْوَٰنِ
          </div>
          <p className="text-xl text-emerald-200 mb-8">
            "And cooperate in righteousness and piety, but do not cooperate in sin and aggression" (Quran 5:2)
          </p>
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/contact-us"
              className="bg-amber-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-amber-600 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn Islamic Finance
            </motion.a>
            <motion.a
              href="/contact-us"
              className="bg-white/10 border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Volunteer as Service
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HelpCenterPage
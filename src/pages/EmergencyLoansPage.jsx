"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import {
  FaExclamationTriangle,
  FaArrowRight,
  FaMoneyBillWave,
  FaShieldAlt,
  FaClock,
  FaHandshake,
  FaPhone,
  FaCheckCircle,
  FaHeartbeat,
  FaFire,
  FaCarCrash,
  FaCloudRain,
  FaMosque,
  FaQuran,
  FaHandsHelping,
} from "react-icons/fa"

const IslamicEmergencySupportPage = () => {
  const [supportAmount, setSupportAmount] = useState(200000)
  const [repaymentTerm, setRepaymentTerm] = useState(12)

  const supportFeatures = [
    {
      icon: FaQuran,
      title: "Qard-e-Hasan",
      description: "Interest-free emergency support following Islamic principles",
      color: "text-green-600",
    },
    {
      icon: FaMosque,
      title: "Mosque-Based",
      description: "Community-driven emergency assistance",
      color: "text-blue-600",
    },
    {
      icon: FaClock,
      title: "Same Day Approval",
      description: "Urgent cases processed within hours",
      color: "text-orange-600",
    },
    {
      icon: FaHandsHelping,
      title: "Minimal Requirements",
      description: "Simplified process for urgent situations",
      color: "text-purple-600",
    },
  ]

  const emergencyTypes = [
    {
      icon: FaHeartbeat,
      title: "Medical Emergencies",
      description: "Support for urgent healthcare needs",
      examples: ["Emergency Surgery", "ICU Treatment", "Critical Medications", "Ambulance Services"],
      supportRange: "₨50K - ₨5L",
      color: "from-red-500 to-pink-600",
    },
    {
      icon: FaFire,
      title: "Natural Calamities",
      description: "Assistance after disasters",
      examples: ["Flood Relief", "Earthquake Support", "Fire Recovery", "Storm Damage"],
      supportRange: "₨1L - ₨5L",
      color: "from-orange-500 to-red-600",
    },
    {
      icon: FaCarCrash,
      title: "Accidents",
      description: "Help for accident victims",
      examples: ["Medical Expenses", "Vehicle Repair", "Temporary Shelter", "Essential Needs"],
      supportRange: "₨25K - ₨3L",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: FaCloudRain,
      title: "Family Crises",
      description: "Support during family emergencies",
      examples: ["Sudden Bereavement", "Job Loss", "Essential Travel", "Basic Necessities"],
      supportRange: "₨30K - ₨2L",
      color: "from-purple-500 to-pink-600",
    },
  ]

  const islamicPrinciples = [
    "Helping those in distress is an Islamic duty",
    "No interest (riba) involved in support",
    "Community-based approval process",
    "Priority given to most vulnerable",
    "Transparent mosque-based system",
    "Repayment flexibility based on circumstances"
  ]

  const calculateMonthlyPayment = () => {
    return Math.round(supportAmount / repaymentTerm)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-green-50">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-[url('/islamic-pattern.jpg')] bg-opacity-5">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-96 h-96 bg-green-400 rounded-full animate-float blur-3xl"></div>
          <div className="absolute bottom-32 right-20 w-80 h-80 bg-blue-400 rounded-full animate-float-reverse blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <motion.div
                className="flex items-center gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center shadow-2xl">
                  <FaMosque className="text-white text-2xl" />
                </div>
                <div>
                  <span className="text-green-600 font-bold text-xl block">Akhuwat Islamic Emergency Support</span>
                  <span className="text-gray-600 text-sm">Qard-e-Hasan for Urgent Needs</span>
                </div>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-7xl font-black text-gray-900 mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Islamic{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                  Emergency Support
                </span>
              </motion.h1>

              <motion.p
                className="text-2xl text-gray-600 mb-10 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                "Whoever relieves a Muslim of a burden from the burdens of the world, Allah will relieve him of a burden from the burdens on the Day of Judgment" (Hadith). Our interest-free emergency support helps you through crises while maintaining Islamic values.
              </motion.p>

              <motion.div
                className="grid grid-cols-2 gap-6 mb-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                {supportFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <feature.icon className={`text-3xl ${feature.color} mb-3`} />
                    <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <motion.a
                  href="https://wa.me/923354571620"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-green-600 text-nowrap to-blue-600 text-white px-10 py-5 rounded-full font-bold text-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Apply Now
                  <FaArrowRight />
                </motion.a>

                <motion.a 
                href="tel:+923354571620"
                  className="bg-white/80 backdrop-blur-sm text-nowrap border-2 border-green-600 text-green-600 px-10 py-5 rounded-full font-bold text-xl hover:bg-green-50 transition-all duration-300 flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaPhone />
                  Emergency: +92 335 4571 620
                </motion.a>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-green-600">
                <img src="https://media.istockphoto.com/id/1458178579/photo/man-use-calling-sos-emergency-by-phone-call-phone-emergency-application-from-smartphone.jpg?s=612x612&w=0&k=20&c=zeELeMfiPbD33O2V6v7YrNsBtsJRoeLF_XK7Vil7oug=" alt="Islamic Emergency Support" className="w-full h-96 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                <motion.div
                  className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-center">
                    <div className="text-3xl font-black text-green-600 mb-2">₨5L</div>
                    <div className="text-sm text-gray-600 font-semibold">Maximum Qard</div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-center">
                    <div className="text-3xl font-black text-blue-600 mb-2">0%</div>
                    <div className="text-sm text-gray-600 font-semibold">Interest-Free</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Islamic Values Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Islamic Principles</span> of Emergency Support
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our emergency assistance is grounded in Islamic teachings about helping those in need
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-green-100 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaQuran className="text-green-600 text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quranic Foundation</h3>
              <p className="text-gray-600">
                "And they give food, in spite of their love for it, to the needy, the orphan, and the captive" (Quran 76:8)
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaHandsHelping className="text-blue-600 text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Responsibility</h3>
              <p className="text-gray-600">
                "The believers in their mutual kindness, compassion and sympathy are like one body" (Hadith)
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-amber-100 text-center">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaMosque className="text-amber-600 text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mosque-Based Assistance</h3>
              <p className="text-gray-600">
                Emergency support is coordinated through local mosques for transparency and community involvement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Types */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-black text-gray-900 mb-8">
              Emergency{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                Support Types
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Islamic financial assistance for various urgent situations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {emergencyTypes.map((type, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className={`bg-gradient-to-r ${type.color} p-8 text-white text-center`}>
                  <type.icon className="text-4xl mb-4 mx-auto" />
                  <h3 className="text-2xl font-bold mb-2">{type.title}</h3>
                  <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    <FaMoneyBillWave className="text-xs" />
                    {type.supportRange}
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <div className="space-y-2">
                    {type.examples.map((example, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <FaCheckCircle className="text-green-500 text-xs" />
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

      {/* Islamic Principles */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-black text-gray-900 mb-8">
              Sharia{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                Compliance
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our emergency support strictly adheres to Islamic financial principles
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-3xl shadow-2xl p-12 border border-gray-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {islamicPrinciples.map((principle, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 shadow-lg border border-green-100"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <FaCheckCircle className="text-green-500 text-xl flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{principle}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-green-600 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-48 translate-x-48"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full translate-y-40 -translate-x-40"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-8">Need Emergency Assistance?</h2>
            <p className="text-2xl text-green-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              "Whoever relieves a difficulty for a believer in this world, Allah will relieve a difficulty for him in the Hereafter" (Hadith). Don't face emergencies alone - our Islamic emergency support is here to help.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                href="https://wa.me/923354571620"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-green-600 px-12 py-6 rounded-full font-bold text-xl hover:bg-gray-100 transition-all duration-300 shadow-2xl flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaExclamationTriangle />
                Apply for Emergency Support
              </motion.a>

              <motion.a
              href="tel:+923354571620"
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-12 py-6 rounded-full font-bold text-xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPhone />
                Emergency: +92 335 4571 620
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default IslamicEmergencySupportPage
"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import {
  FaHeartbeat,
  FaArrowRight,
  FaMoneyBillWave,
  FaShieldAlt,
  FaClock,
  FaHandshake,
  FaPhone,
  FaCheckCircle,
  FaHospital,
  FaPills,
  FaUserMd,
  FaAmbulance,
  FaStethoscope,
  FaWheelchair,
  FaMosque,
  FaQuran,
  FaHandsHelping,
} from "react-icons/fa"

const HealthcareSupportPage = () => {
  const [loanAmount, setLoanAmount] = useState(300000)
  const [loanTerm, setLoanTerm] = useState(24)

  const loanFeatures = [
    {
      icon: FaQuran,
      title: "Qard-e-Hasan",
      description: "Interest-free medical financing following Islamic principles",
      color: "text-green-600",
    },
    {
      icon: FaMosque,
      title: "Mosque-Based Support",
      description: "Community-driven healthcare assistance",
      color: "text-blue-600",
    },
    {
      icon: FaClock,
      title: "Emergency 24hr Approval",
      description: "Urgent medical cases processed immediately",
      color: "text-red-600",
    },
    {
      icon: FaHandsHelping,
      title: "Direct Hospital Payment",
      description: "We pay directly to healthcare providers",
      color: "text-purple-600",
    },
  ]

  const medicalCategories = [
    {
      icon: FaHospital,
      title: "Surgical Procedures",
      description: "Major and minor surgical interventions",
      examples: ["Cardiac Surgery", "Orthopedic Procedures", "General Surgery", "Emergency Operations"],
      loanRange: "₨2L - ₨15L",
      color: "from-red-500 to-pink-600",
    },
    {
      icon: FaStethoscope,
      title: "Chronic Illness Care",
      description: "Long-term medical treatment plans",
      examples: ["Cancer Treatment", "Diabetes Management", "Cardiac Care", "Renal Treatment"],
      loanRange: "₨1L - ₨10L",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: FaUserMd,
      title: "Specialist Consultations",
      description: "Expert medical opinions and diagnostics",
      examples: ["Cardiology", "Neurology", "Oncology", "Specialized Tests"],
      loanRange: "₨25K - ₨3L",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: FaWheelchair,
      title: "Rehabilitation Services",
      description: "Therapy and recovery programs",
      examples: ["Physiotherapy", "Speech Therapy", "Occupational Therapy", "Medical Equipment"],
      loanRange: "₨50K - ₨5L",
      color: "from-purple-500 to-indigo-600",
    },
    {
      icon: FaPills,
      title: "Medications & Pharmacy",
      description: "Essential medicines and medical supplies",
      examples: ["Chronic Medications", "Specialty Drugs", "Medical Supplies", "Health Essentials"],
      loanRange: "₨15K - ₨2L",
      color: "from-amber-500 to-orange-600",
    },
    {
      icon: FaAmbulance,
      title: "Emergency Healthcare",
      description: "Critical medical interventions",
      examples: ["Emergency Room", "Ambulance Services", "ICU Treatment", "Trauma Care"],
      loanRange: "₨1L - ₨8L",
      color: "from-yellow-500 to-orange-600",
    },
  ]

  const partnerHospitals = [
    "Shaukat Khanum Memorial Cancer Hospital",
    "Aga Khan University Hospital",
    "Pakistan Kidney & Liver Institute",
    "Children's Hospital Lahore",
    "National Institute of Cardiovascular Diseases",
    "Mayo Hospital Lahore",
    "Jinnah Hospital Lahore",
    "Services Institute of Medical Sciences",
  ]

  const calculateMonthlyPayment = () => {
    return Math.round(loanAmount / loanTerm)
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
                  <FaHeartbeat className="text-white text-2xl" />
                </div>
                <div>
                  <span className="text-green-600 font-bold text-xl block">Akhuwat Islamic Healthcare</span>
                  <span className="text-gray-600 text-sm">Qard-e-Hasan Medical Support</span>
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
                  Healthcare Support
                </span>
              </motion.h1>

              <motion.p
                className="text-2xl text-gray-600 mb-10 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Your right to healthcare shouldn't be compromised by financial constraints. Access Sharia-compliant,
                interest-free medical financing through our Qard-e-Hasan program. Compassionate care rooted in Islamic
                values.
              </motion.p>

              <motion.div
                className="grid grid-cols-2 gap-6 mb-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                {loanFeatures.map((feature, index) => (
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
                  className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-10 py-5 text-nowrap rounded-full font-bold text-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Apply Now
                  <FaArrowRight />
                </motion.a>

                <motion.a
                href="tel:+923354571620"
                  className="bg-white/80 backdrop-blur-sm border-2 border-green-600 text-green-600 px-10 py-5 text-nowrap rounded-full font-bold text-xl hover:bg-green-50 transition-all duration-300 flex items-center justify-center gap-3"
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
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr3-jc53sVS0vRcM9wwiUBTvGJdDTIKrzUUw&s" alt="Islamic Healthcare Support" className="w-full h-96 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                <motion.div
                  className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-center">
                    <div className="text-3xl font-black text-green-600 mb-2">₨15L</div>
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Islamic Principles</span> of Healthcare
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our healthcare support is grounded in Islamic teachings about preserving life
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-green-100 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaQuran className="text-green-600 text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Preservation of Life</h3>
              <p className="text-gray-600">
                "Whoever saves a life, it will be as if they saved all of humanity" (Quran 5:32)
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mosque-Based Healing</h3>
              <p className="text-gray-600">
                "Seek treatment, for Allah has not created a disease without creating a cure" (Hadith)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Categories */}
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
              Healthcare{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                Support Areas
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive medical financing for various healthcare needs in accordance with Islamic principles
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {medicalCategories.map((category, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className={`bg-gradient-to-r ${category.color} p-8 text-white text-center`}>
                  <category.icon className="text-4xl mb-4 mx-auto" />
                  <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                  <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    <FaMoneyBillWave className="text-xs" />
                    {category.loanRange}
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="space-y-2">
                    {category.examples.map((example, i) => (
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

      {/* Partner Hospitals */}
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
              Partner{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Healthcare Providers</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We collaborate with leading Islamic healthcare institutions across Pakistan
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-3xl shadow-2xl p-12 border border-gray-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {partnerHospitals.map((hospital, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 shadow-lg border border-green-100"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <FaHospital className="text-green-500 text-xl flex-shrink-0" />
                  <span className="text-gray-700 font-medium text-sm">{hospital}</span>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-gray-600 mb-6">
                We work with 200+ Islamic healthcare providers across Pakistan for seamless treatment financing
              </p>
              <motion.a
                href="/about"
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 mx-auto"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaHospital />
                View All Healthcare Partners
              </motion.a>
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
            <h2 className="text-5xl md:text-6xl font-black mb-8">Your Health is Our Islamic Duty</h2>
            <p className="text-2xl text-green-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Don't let financial constraints prevent you from receiving quality healthcare. Our Qard-e-Hasan medical
              support ensures you get the treatment you need while upholding Islamic values.
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
                <FaHeartbeat />
                Apply for Healthcare Support
              </motion.a>

              <motion.a
              href="tel:+923354571620"
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-12 py-6 rounded-full font-bold text-xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPhone />
                Emergency: +92 328 1969250
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HealthcareSupportPage
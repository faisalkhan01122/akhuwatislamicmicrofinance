"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import {
  FaQuestionCircle,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaSearch,
  FaHeadset,
  FaComments,
  FaBook,
  FaArrowRight,
} from "react-icons/fa"

const HelpCenterPage = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")

  const helpCategories = [
    { id: "all", label: "All Topics", icon: FaBook, count: 45 },
    { id: "loans", label: "Loan Information", icon: FaQuestionCircle, count: 15 },
    { id: "application", label: "Application Process", icon: FaComments, count: 12 },
    { id: "account", label: "Account Management", icon: FaHeadset, count: 8 },
    { id: "payments", label: "Payments & Repayment", icon: FaClock, count: 10 },
  ]

  const contactMethods = [
    {
      icon: FaPhone,
      title: "Phone Support",
      description: "Speak with our experts",
      contact: "+92 328 1969250",
      hours: "24/7 Available",
      color: "from-blue-600 to-indigo-600",
    },
    {
      icon: FaEnvelope,
      title: "Email Support",
      description: "Get detailed assistance",
      contact: "support@akhuwat.org",
      hours: "Response within 24 hours",
      color: "from-emerald-600 to-teal-600",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Visit Office",
      description: "Meet us in person",
      contact: "850+ Service Centers",
      hours: "Mon-Sat: 9AM-6PM",
      color: "from-purple-600 to-pink-600",
    },
    {
      icon: FaComments,
      title: "Live Chat",
      description: "Instant messaging support",
      contact: "Start Chat",
      hours: "Available 24/7",
      color: "from-orange-600 to-red-600",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400 rounded-full animate-float blur-3xl"></div>
          <div className="absolute bottom-32 right-20 w-80 h-80 bg-emerald-400 rounded-full animate-float-reverse blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="flex items-center justify-center gap-4 mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl">
                <FaHeadset className="text-white text-2xl" />
              </div>
              <div className="text-left">
                <span className="text-blue-600 font-bold text-xl block">Akhuwat Network</span>
                <span className="text-gray-500 text-sm">Help & Support Center</span>
              </div>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-black text-gray-900 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              How can we{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                help you?
              </span>
            </motion.h1>

            <motion.p
              className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Find answers to your questions, get support, and learn more about our services
            </motion.p>

            {/* Search Bar */}
            <motion.div
              className="max-w-2xl mx-auto relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="relative">
                <FaSearch className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
                <input
                  type="text"
                  placeholder="Search for help articles, FAQs, or topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-16 pr-6 py-6 text-lg rounded-full border-2 border-gray-200 focus:border-blue-500 focus:outline-none bg-white/80 backdrop-blur-sm shadow-lg"
                />
                <motion.button
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Search
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* Quick Contact Methods */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-500 text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}
                >
                  <method.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <div className="text-lg font-bold text-blue-600 mb-2">{method.contact}</div>
                <div className="text-sm text-gray-500">{method.hours}</div>
                <motion.button
                  className={`mt-6 w-full py-3 rounded-full text-white font-bold bg-gradient-to-r ${method.color} hover:shadow-lg transition-all duration-300`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Now
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-black text-gray-900 mb-8">
              Browse{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Help Topics
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Find detailed information organized by category
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {helpCategories.slice(1).map((category, index) => (
              <motion.div
                key={category.id}
                className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                    <category.icon className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{category.label}</h3>
                    <span className="text-sm text-gray-500">{category.count} articles</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  Comprehensive guides and answers for {category.label.toLowerCase()}
                </p>

                <motion.button
                  className="w-full py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Articles
                  <FaArrowRight />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-600 text-white relative overflow-hidden">
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
            <h2 className="text-5xl md:text-6xl font-black mb-8">Need Immediate Help?</h2>
            <p className="text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Our support team is available 24/7 to assist you with urgent matters and emergency loan requests.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                href="tel:+923281969250"
                className="bg-white text-blue-600 px-12 py-6 rounded-full font-bold text-xl hover:bg-gray-100 transition-all duration-300 shadow-2xl flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPhone />
                Call Emergency Line
              </motion.a>

              <motion.a
               href="https://wa.me/923281969250"
  target="_blank"
  rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-12 py-6 rounded-full font-bold text-xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaComments />
                Start Live Chat
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HelpCenterPage

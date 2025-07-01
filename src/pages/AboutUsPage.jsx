"use client"

import { motion } from "framer-motion"
import { FaHeart, FaUsers, FaGlobe, FaHandshake, FaAward, FaChartLine, FaShieldAlt, FaLightbulb } from "react-icons/fa"

const AboutUsPage = () => {
  const stats = [
    { number: "4M+", label: "Lives Transformed", icon: FaUsers, color: "text-blue-600" },
    { number: "₨50B+", label: "Disbursed", icon: FaChartLine, color: "text-emerald-600" },
    { number: "850+", label: "Branches", icon: FaGlobe, color: "text-purple-600" },
    { number: "25+", label: "Years Experience", icon: FaAward, color: "text-orange-600" },
  ]

  const values = [
    {
      icon: FaHeart,
      title: "Compassion",
      description: "We serve with empathy and understanding, treating every individual with dignity and respect.",
      color: "from-red-500 to-pink-600",
    },
    {
      icon: FaShieldAlt,
      title: "Trust",
      description: "Built on Islamic principles of honesty and transparency in all our financial dealings.",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: FaUsers,
      title: "Community",
      description: "Strengthening communities through collective support and shared responsibility.",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: FaLightbulb,
      title: "Innovation",
      description: "Pioneering new approaches to poverty alleviation and financial inclusion.",
      color: "from-yellow-500 to-orange-600",
    },
  ]

  const milestones = [
    {
      year: "2001",
      title: "Foundation Established",
      description: "Dr. Amjad Saqib founded Akhuwat with a vision of interest-free microfinance",
    },
    {
      year: "2005",
      title: "First 1000 Loans",
      description: "Reached our first milestone of 1000 successful loan disbursements",
    },
    { year: "2010", title: "National Expansion", description: "Expanded operations across all provinces of Pakistan" },
    {
      year: "2015",
      title: "International Recognition",
      description: "Received global recognition for innovative microfinance model",
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Launched digital platforms for seamless loan processing",
    },
    {
      year: "2024",
      title: "4 Million Milestone",
      description: "Transformed over 4 million lives through interest-free financing",
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
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <motion.div
                className="flex items-center gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl">
                  <FaHeart className="text-white text-2xl" />
                </div>
                <div>
                  <span className="text-blue-600 font-bold text-xl block">Akhuwat Network</span>
                  <span className="text-gray-500 text-sm">Transforming Lives Since 2001</span>
                </div>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-7xl font-black text-gray-900 mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                About{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Us</span>
              </motion.h1>

              <motion.p
                className="text-2xl text-gray-600 mb-10 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Akhuwat is Pakistan's largest interest-free microfinance organization, dedicated to alleviating poverty
                through Islamic principles of brotherhood and compassion.
              </motion.p>

              {/* Stats Grid */}
              <motion.div
                className="grid grid-cols-2 gap-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200 text-center"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <stat.icon className={`text-3xl ${stat.color} mb-3 mx-auto`} />
                    <div className="text-3xl font-black text-gray-900 mb-2">{stat.number}</div>
                    <div className="text-sm text-gray-600 font-semibold">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img src="https://wpassets.graana.com/blog/wp-content/uploads/2023/03/Akhuat.jpg" alt="About Akhuwat" className="w-full h-96 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                <motion.div
                  className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-center">
                    <div className="text-3xl font-black text-blue-600 mb-2">2001</div>
                    <div className="text-sm text-gray-600 font-semibold">Founded</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
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
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Purpose
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mb-8">
                <FaLightbulb className="text-white text-2xl" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                To alleviate poverty by providing interest-free microfinance services based on Islamic principles,
                fostering economic empowerment and social development in underserved communities.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Interest-free financial services</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Community-based lending model</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Sustainable poverty alleviation</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-12"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center mb-8">
                <FaGlobe className="text-white text-2xl" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A poverty-free world where every individual has access to dignified financial services and opportunities
                for economic growth, built on the foundation of Islamic brotherhood and mutual support.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  <span className="text-gray-700">Global poverty elimination</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  <span className="text-gray-700">Financial inclusion for all</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  <span className="text-gray-700">Sustainable development</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-black text-gray-900 mb-8">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Values</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The principles that guide our mission and shape our approach to serving communities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className={`bg-gradient-to-r ${value.color} p-8 text-white text-center`}>
                  <value.icon className="text-4xl mb-4 mx-auto" />
                  <h3 className="text-2xl font-bold">{value.title}</h3>
                </div>
                <div className="p-8">
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
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
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Journey
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Key milestones in our mission to transform lives through interest-free microfinance
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full"></div>

            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                    <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                      <div className="text-3xl font-black text-blue-600 mb-4">{milestone.year}</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{milestone.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
            <h2 className="text-5xl md:text-6xl font-black mb-8">Join Our Mission</h2>
            <p className="text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Be part of the movement that's transforming lives and building stronger communities through the power of
              interest-free microfinance.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
              href="contact-us"
                className="bg-white text-blue-600 px-12 py-6 rounded-full font-bold text-xl hover:bg-gray-100 transition-all duration-300 shadow-2xl flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaHandshake />
                Partner With Us
              </motion.a>

              <motion.a
              href="contact-us"
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-12 py-6 rounded-full font-bold text-xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaUsers />
                Apply for Loan
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutUsPage

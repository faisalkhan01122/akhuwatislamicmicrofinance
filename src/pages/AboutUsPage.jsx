"use client"

import { motion } from "framer-motion"
import { 
  FaHeart, 
  FaUsers, 
  FaGlobe, 
  FaHandshake, 
  FaAward, 
  FaChartLine, 
  FaShieldAlt, 
  FaLightbulb,
  FaMosque,
  FaHandHoldingHeart,
  FaUniversity
} from "react-icons/fa"
import { FaBookQuran } from "react-icons/fa6";

const AboutUsPage = () => {
  const stats = [
    { number: "5.5M+", label: "Lives Transformed", icon: FaUsers, color: "text-emerald-600", verse: "Quran 2:245" },
    { number: "₨500B+", label: "Qard-e-Hasna", icon: FaBookQuran, color: "text-blue-600", verse: "Quran 2:275" },
    { number: "850+", label: "Islamic Centers", icon: FaMosque, color: "text-purple-600", verse: "Hadith" },
    { number: "20+", label: "Years Serving Ummah", icon: FaAward, color: "text-amber-600", verse: "Quran 14:7" },
  ]

  const values = [
    {
      icon: FaBookQuran,
      title: "Quranic Principles",
      description: "Following Islamic teachings of Qard-e-Hasna (benevolent loans) and prohibition of Riba (interest)",
      color: "from-green-600 to-emerald-800",
      verse: "Quran 2:275"
    },
    {
      icon: FaShieldAlt,
      title: "Shariah Compliance",
      description: "All financial operations strictly adhere to Islamic banking principles",
      color: "from-blue-600 to-indigo-800",
      verse: "Quran 5:1"
    },
    {
      icon: FaHandHoldingHeart,
      title: "Sadaqah & Zakat",
      description: "Channeling Islamic charity to empower the most vulnerable",
      color: "from-amber-600 to-orange-800",
      verse: "Quran 9:60"
    },
    {
      icon: FaUsers,
      title: "Ummah Brotherhood",
      description: "Building communities based on Islamic values of mutual support",
      color: "from-purple-600 to-violet-800",
      verse: "Hadith"
    },
  ]

  const milestones = [
    {
      year: "2001",
      title: "Islamic Foundation",
      description: "Dr. Amjad Saqib established Akhuwat based on Quranic principles of Qard-e-Hasna",
      verse: "Quran 2:245"
    },
    {
      year: "2005",
      title: "First Mosque-Based Center",
      description: "Launched our first branch in a mosque, reinforcing Islamic community finance",
      verse: "Hadith"
    },
    { 
      year: "2010", 
      title: "National Expansion", 
      description: "Expanded to all provinces with approval from Islamic scholars", 
      verse: "Quran 49:13" 
    },
    {
      year: "2015",
      title: "Global Recognition",
      description: "Received Islamic Finance Award for innovative Shariah-compliant model",
      verse: "Quran 3:110"
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Launched halal fintech solutions while maintaining Shariah compliance",
      verse: "Hadith"
    },
    {
      year: "2024",
      title: "5.5 Million Beneficiaries",
      description: "Alhamdulillah, transformed lives through Islamic microfinance",
      verse: "Quran 16:97"
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-emerald-50">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Islamic Pattern Background */}
        <div className="absolute inset-0 opacity-5 bg-[url('https://static.vecteezy.com/system/resources/previews/014/664/051/non_2x/islamic-ornament-persian-motiff-3d-ramadan-islamic-round-pattern-elements-geometric-circular-ornamental-arabic-symbol-gold-background-vector.jpg')]"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              {/* Islamic Header */}
              <motion.div
                className="flex items-center gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-green-600 rounded-full flex items-center justify-center shadow-2xl">
                  <span className="text-white text-xl font-arabic">ا</span>
                </div>
                <div>
                  <span className="text-emerald-600 font-bold text-xl block font-arabic">أخوات</span>
                  <span className="text-gray-500 text-sm">Serving Ummah Since 2001</span>
                </div>
              </motion.div>

              <motion.h1
                className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-amber-600">
                  Our Islamic Mission
                </span>
              </motion.h1>

              <motion.p
                className="text-xl text-gray-600 mb-10 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                "Who is it that would loan Allah a goodly loan so He may multiply it for him many times over?" (Quran 2:245). 
                Akhuwat is Pakistan's largest Islamic microfinance organization providing riba-free financial solutions based on Quranic principles.
              </motion.p>

              {/* Islamic Stats Grid */}
              <motion.div
                className="grid grid-cols-2 gap-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200 text-center"
                    whileHover={{ scale: 1.03, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <stat.icon className={`text-3xl ${stat.color} mb-3 mx-auto`} />
                    <div className="text-3xl font-black text-gray-900 mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-600 font-semibold mb-1">{stat.label}</div>
                    <div className="text-xs text-emerald-600 italic">"{stat.verse}"</div>
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
              <div className="relative overflow-hidden rounded-xl shadow-2xl border-2 border-emerald-500/20">
                <img src="https://aktsharedaccounts.blob.core.windows.net/donation/campaigns/small/111081685529267c1dfrkv4dsfbkqqr3y1pyksy3m0plgwxbo8oxm8g.jpg" alt="Akhuwat Islamic Center" className="w-full h-96 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                <motion.div
                  className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-2xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="text-center">
                    <div className="text-3xl font-black text-emerald-600 mb-1">2001</div>
                    <div className="text-sm text-gray-600 font-semibold">Founded on Islamic Principles</div>
                    <div className="text-xs text-emerald-600 mt-1">"Cooperate in righteousness" (Quran 5:2)</div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-amber-600">Islamic Purpose</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              "Hold firmly to the rope of Allah all together and do not become divided" (Quran 3:103)
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Islamic Mission */}
            <motion.div
              className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-10 border border-emerald-100"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-green-600 rounded-full flex items-center justify-center mb-8">
                <FaBookQuran className="text-white text-2xl" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Islamic Mission</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                To establish Quranic economic justice through interest-free microfinance, eliminating riba from financial systems while uplifting the Ummah.
              </p>
              <ul className="space-y-3">
                {[
                  "Quranic Qard-e-Hasna (benevolent loans)",
                  "Shariah-compliant operations",
                  "Zakat and Sadaqah distribution",
                  "Islamic financial education"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Islamic Vision */}
            <motion.div
              className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-10 border border-amber-100"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full flex items-center justify-center mb-8">
                <FaMosque className="text-white text-2xl" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Islamic Vision</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A world where Muslims have access to halal financial systems, free from riba, built on Islamic principles of brotherhood and mutual support.
              </p>
              <ul className="space-y-3">
                {[
                  "Global Islamic microfinance network",
                  "Mosque-based financial centers",
                  "Shariah-compliant digital finance",
                  "Sustainable Islamic economy"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Islamic Values Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-amber-600">Islamic Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              "The best among you are those who are best to people" (Hadith)
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className={`bg-gradient-to-r ${value.color} p-8 text-white text-center`}>
                  <value.icon className="text-3xl mb-4 mx-auto" />
                  <h3 className="text-xl font-bold">{value.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed mb-4">{value.description}</p>
                  <div className="bg-emerald-50 border-l-4 border-emerald-600 p-2 rounded-r text-sm italic">
                    "{value.verse}"
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Islamic Timeline Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-amber-600">Islamic Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              "And say: My Lord, increase me in knowledge" (Quran 20:114)
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-600 to-amber-600 rounded-full"></div>

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
                    <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300">
                      <div className="text-2xl font-black text-emerald-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-3">{milestone.description}</p>
                      <div className="text-sm text-amber-600 italic">"{milestone.verse}"</div>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="w-6 h-6 bg-gradient-to-r from-emerald-600 to-amber-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Islamic CTA Section */}
      <section className="py-24 bg-gradient-to-r from-emerald-700 to-amber-600 text-white relative overflow-hidden">
        {/* Islamic Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://static.vecteezy.com/system/resources/previews/014/664/051/non_2x/islamic-ornament-persian-motiff-3d-ramadan-islamic-round-pattern-elements-geometric-circular-ornamental-arabic-symbol-gold-background-vector.jpg')]"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-serif">"Who is it that would loan Allah a goodly loan?" (Quran 2:245)</h2>
            <p className="text-xl text-emerald-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Join our Islamic mission to establish riba-free financial systems and empower the Ummah through Quranic principles of Qard-e-Hasna.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                href="https://wa.me/923354571620"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-emerald-700 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaHandHoldingHeart />
                Apply Now
              </motion.a>

              <motion.a
                href="https://wa.me/923354571620"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaBookQuran />
             Read More
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutUsPage
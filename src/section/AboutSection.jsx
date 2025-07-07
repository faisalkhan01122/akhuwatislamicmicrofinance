"use client"

import { motion } from "framer-motion"
import { FaMosque, FaHandHoldingHeart, FaUsers, FaShieldAlt, FaHeart, FaBookOpen } from "react-icons/fa"

const AboutSection = () => {
  const islamicValues = [
    {
      icon: FaMosque,
      title: "Sharia Compliance",
      description:
        "All our financial services strictly adhere to Islamic principles, ensuring complete Halal transactions.",
      color: "from-emerald-500 to-teal-600",
      arabicText: "الشريعة الإسلامية",
    },
    {
      icon: FaHandHoldingHeart,
      title: "Qarz-e-Hasna",
      description: "Interest-free loans based on Islamic concept of benevolent lending for community welfare.",
      color: "from-blue-500 to-indigo-600",
      arabicText: "قرض حسنة",
    },
    {
      icon: FaUsers,
      title: "Ummah Brotherhood",
      description: "Building strong community bonds through mutual support and collective responsibility.",
      color: "from-purple-500 to-pink-600",
      arabicText: "أخوة الأمة",
    },
    {
      icon: FaShieldAlt,
      title: "Amanah (Trust)",
      description: "Maintaining the highest standards of trust and transparency in all our dealings.",
      color: "from-orange-500 to-red-600",
      arabicText: "أمانة",
    },
  ]

  const achievements = [
    { number: "4.5M+", label: "Lives Transformed", subtext: "Families Empowered" },
    { number: "₨50B+", label: "Interest-Free Disbursed", subtext: "Halal Finance" },
    { number: "850+", label: "Service Centers", subtext: "Nationwide Reach" },
    { number: "23+", label: "Years of Service", subtext: "Since 2001" },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-emerald-50 relative overflow-hidden">
      {/* Islamic Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 border-4 border-emerald-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 border-2 border-teal-400 rounded-full animate-ping"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 border border-green-400 rounded-full animate-bounce"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
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
            <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center shadow-2xl">
              <span className="text-white text-2xl font-bold">ا</span>
            </div>
            <div className="text-left">
              <span className="text-emerald-600 font-bold text-xl block">About Akhuwat</span>
              <span className="text-gray-500 text-sm">Pakistan's Leading Islamic Microfinance</span>
            </div>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl font-black text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Empowering Pakistan Through{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              Islamic Finance
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Since 2001, Akhuwat has been Pakistan's largest Islamic microfinance organization, providing
            Sharia-compliant, interest-free financial services to empower communities and eliminate poverty through the
            principles of Islamic brotherhood.
          </motion.p>

          {/* Arabic Verse */}
          <motion.div
            className="mt-8 p-6 bg-emerald-50 rounded-2xl border border-emerald-100 max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-2xl text-emerald-800 font-semibold mb-2 text-right">
              وَمَن أَحْيَاهَا فَكَأَنَّمَا أَحْيَا النَّاسَ جَمِيعًا
            </p>
            <p className="text-sm text-gray-600 italic">
              "And whoever saves a life, it is as if he has saved all of mankind" - Quran 5:32
            </p>
          </motion.div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Islamic Mission</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Akhuwat operates on the fundamental Islamic principle of <strong>Qarz-e-Hasna</strong>
                  (benevolent loan), providing interest-free microfinance to the underprivileged. Our mission is rooted
                  in the Quranic teachings of helping fellow Muslims and building a society based on justice,
                  compassion, and mutual support.
                </p>

                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                  <div className="flex items-center gap-3 mb-3">
                    <FaBookOpen className="text-blue-600 text-xl" />
                    <h4 className="font-bold text-blue-900">Our Founding Principle</h4>
                  </div>
                  <p className="text-blue-800 italic">
                    "The believer is not one who eats his fill while his neighbor goes hungry." - Prophet Muhammad
                    (PBUH)
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Why Choose Islamic Finance?</h4>
                <ul className="space-y-3">
                  {[
                    "Complete elimination of Riba (interest)",
                    "Ethical and transparent financial practices",
                    "Community-based support system",
                    "Wealth redistribution for social justice",
                  ].map((point, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span className="text-gray-700">{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://wpassets.graana.com/blog/wp-content/uploads/2023/03/Akhuat.jpg"
                alt="Akhuwat Islamic Microfinance"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

              {/* Floating Stats */}
              <motion.div
                className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <div className="text-2xl font-black text-emerald-600">2001</div>
                  <div className="text-sm text-gray-600">Established</div>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <div className="text-2xl font-black text-blue-600">100%</div>
                  <div className="text-sm text-gray-600">Halal</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Islamic Values Grid */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Our Islamic{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Values
              </span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every aspect of our work is guided by Islamic principles and values
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {islamicValues.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className={`bg-gradient-to-r ${value.color} p-8 text-white text-center relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-2 right-2 w-20 h-20 border-2 border-white rounded-full"></div>
                    <div className="absolute bottom-2 left-2 w-16 h-16 border border-white rounded-full"></div>
                  </div>
                  <value.icon className="text-4xl mb-4 mx-auto relative z-10" />
                  <h4 className="text-xl font-bold mb-2 relative z-10">{value.title}</h4>
                  <p className="text-lg font-semibold opacity-90 relative z-10">{value.arabicText}</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed text-center">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-12 text-white relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 border-4 border-white rounded-full -translate-y-48 translate-x-48"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 border-2 border-white rounded-full translate-y-40 -translate-x-40"></div>
          </div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold mb-4">Alhamdulillah - Our Achievements</h3>
              <p className="text-xl text-emerald-100">
                By Allah's grace, we have transformed millions of lives across Pakistan
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="text-4xl font-black mb-2"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                  >
                    {achievement.number}
                  </motion.div>
                  <div className="text-lg font-bold mb-1">{achievement.label}</div>
                  <div className="text-emerald-200 text-sm">{achievement.subtext}</div>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-xl mb-6 text-emerald-100">
                Join us in our mission to create a poverty-free Pakistan through Islamic finance
              </p>
              <motion.a
                href="https://wa.me/923354571620"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-emerald-600 font-bold px-8 py-4 rounded-full hover:bg-emerald-50 transition-all duration-300 shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaHeart className="text-red-500" />
                Start Your Qarz-e-Hasna Journey
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                >
                  →
                </motion.span>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection

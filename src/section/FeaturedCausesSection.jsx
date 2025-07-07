"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import {
  FaHandsHelping,
  FaGraduationCap,
  FaHome,
  FaMosque,
  FaHandHoldingHeart,
  FaUsers,
  FaArrowRight,
  FaDonate,
  FaStar,
  FaLeaf,
  FaBriefcaseMedical
} from "react-icons/fa"
import { FaBookQuran } from "react-icons/fa6";

import { Link } from "react-router-dom"

const causes = [
  {
    id: 1,
    title: "Qarz-e-Hasna Microfinance",
    category: "Islamic Finance",
    description: "Our interest-free loan program based on the Islamic principle of Qarz-e-Hasna (benevolent loan) has transformed over 5 million lives. Support our mission to eradicate riba (interest) from financial systems while alleviating poverty.",
    image: "https://images.unsplash.com/photo-1601599561213-832382fd07ba?w=800&h=600&fit=crop",
    icon: <FaHandsHelping />,
    color: "from-green-600 to-emerald-800",
    raised: "PKR 250 Billion",
    goal: "PKR 500 Billion",
    progress: 50,
    donors: "1.2 Million",
    impact: "5.5 Million families empowered",
    islamicPrinciple: "Based on Quran 2:245 - 'Who is it that would loan Allah a goodly loan...'"
  },
  {
    id: 2,
    title: "Mushahida Islamic Schools",
    category: "Islamic Education",
    description: "Establishing quality Islamic education with modern curriculum for underprivileged children. Our schools combine Quranic teachings with STEM education to create balanced Muslim citizens.",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&h=600&fit=crop",
    icon: <FaBookQuran />,
    color: "from-blue-600 to-indigo-800",
    raised: "PKR 1.2 Billion",
    goal: "PKR 3 Billion",
    progress: 40,
    donors: "85,000",
    impact: "150,000 students educated",
    islamicPrinciple: "Seeking knowledge is obligatory for every Muslim (Hadith)"
  },
  {
    id: 3,
    title: "Islamic Health Centers",
    category: "Healthcare",
    description: "Providing affordable healthcare with Islamic medical ethics. Our centers offer halal treatment options and spiritual counseling alongside medical care.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
    icon: <FaBriefcaseMedical />,
    color: "from-red-600 to-rose-800",
    raised: "PKR 850 Million",
    goal: "PKR 2 Billion",
    progress: 42,
    donors: "62,000",
    impact: "2.3 Million patients treated",
    islamicPrinciple: "The best charity is to provide water (Hadith)"
  },
  {
    id: 4,
    title: "Masjid-ul-Mustafa",
    category: "Mosque Construction",
    description: "Building community mosques that serve as centers for worship, education and social services. Each mosque becomes a hub for Islamic revival in its community.",
    image: "https://royalorchard.pk/wp-content/uploads/2022/12/IMG_5254-scaled.jpg",
    icon: <FaMosque />,
    color: "from-yellow-600 to-amber-800",
    raised: "PKR 650 Million",
    goal: "PKR 1.5 Billion",
    progress: 43,
    donors: "45,000",
    impact: "250 mosques constructed",
    islamicPrinciple: "Whoever builds a mosque for Allah, Allah will build for him a house in Paradise (Hadith)"
  },
  {
    id: 5,
    title: "Islamic Sustainable Farming",
    category: "Agriculture",
    description: "Promoting Zabiha-compliant halal farming practices that follow Islamic environmental ethics. Supporting Muslim farmers with interest-free agricultural loans.",
    image: "https://www.greenprophet.com/wp-content/uploads/islamic-era-farming-scaled.jpg",
    icon: <FaLeaf />,
    color: "from-lime-600 to-green-800",
    raised: "PKR 320 Million",
    goal: "PKR 800 Million",
    progress: 40,
    donors: "28,000",
    impact: "12,500 farming families supported",
    islamicPrinciple: "The earth is green and beautiful, and Allah has appointed you as stewards over it (Hadith)"
  },
  {
    id: 6,
    title: "Orphan Care Program",
    category: "Social Welfare",
    description: "Comprehensive care for orphans following the Sunnah of the Prophet (PBUH). Providing housing, education, and emotional support while preserving their Islamic identity.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop",
    icon: <FaHandHoldingHeart />,
    color: "from-purple-600 to-violet-800",
    raised: "PKR 750 Million",
    goal: "PKR 1.2 Billion",
    progress: 62,
    donors: "95,000",
    impact: "35,000 orphans sponsored",
    islamicPrinciple: "I and the caretaker of the orphan will be like this in Paradise (showing two fingers) (Hadith)"
  }
]

const categories = [
  { id: "all", label: "All Causes", icon: FaStar },
  { id: "Islamic Finance", label: "Qarz-e-Hasna", icon: FaHandsHelping },
  { id: "Islamic Education", label: "Education", icon: FaBookQuran },
  { id: "Healthcare", label: "Medical", icon: FaBriefcaseMedical },
  { id: "Mosque Construction", label: "Mosques", icon: FaMosque },
  { id: "Social Welfare", label: "Welfare", icon: FaHandHoldingHeart },
]

const FeaturedCausesSection = () => {
  const [activeCategory, setActiveCategory] = useState("all")
  const [hoveredCard, setHoveredCard] = useState(null)

  const filteredCauses = activeCategory === "all" ? causes : causes.filter((cause) => cause.category === activeCategory)

  return (
    <section className="py-24 bg-gradient-to-br from-amber-50 via-white to-emerald-50 relative overflow-hidden">
      {/* Islamic Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-200 rounded-full opacity-20 animate-float blur-3xl"></div>
        <div className="absolute bottom-32 right-20 w-80 h-80 bg-blue-200 rounded-full opacity-20 animate-float-reverse blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-amber-200 rounded-full opacity-20 animate-pulse blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Islamic Inspired Header */}
        <motion.div
          className="text-center mb-20"
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
            <div className="text-emerald-800 text-3xl mb-2 font-arabic">بسم الله الرحمن الرحيم</div>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-emerald-600 rounded-full"></div>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-serif"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-amber-600">
              Sadaqah Jariyah
            </span>{" "}
            Opportunities
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            "The example of those who spend their wealth in the Way of Allah is like that of a grain that sprouts seven 
            ears, in every ear a hundred grains..." (Quran 2:261)
          </motion.p>
        </motion.div>

        {/* Category Filter with Islamic Style */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-3 px-5 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-emerald-700 to-amber-600 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-amber-50 hover:text-emerald-700 border border-gray-200"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <category.icon className="w-5 h-5" />
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Causes Grid with Islamic Design */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredCauses.map((cause, index) => (
            <motion.div
              key={cause.id}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-emerald-200 relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              {/* Islamic Decorative Element */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-500 to-emerald-600"></div>

              {/* Image Container */}
              <div className="relative overflow-hidden h-60">
                <motion.img
                  src={cause.image}
                  alt={cause.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  animate={hoveredCard === index ? { scale: 1.1 } : { scale: 1 }}
                />

                {/* Islamic Principle Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/70 text-white text-sm p-3 rounded-lg">
                  {cause.islamicPrinciple}
                </div>

                {/* Icon Overlay */}
                <motion.div
                  className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-r ${cause.color} rounded-lg flex items-center justify-center text-white text-xl transform translate-x-16 group-hover:translate-x-0 transition-transform duration-500 shadow-lg`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {cause.icon}
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <motion.h3
                  className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  {cause.title}
                </motion.h3>

                <p className="text-gray-600 mb-5 leading-relaxed">{cause.description}</p>

                {/* Progress Section */}
                <div className="mb-5">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span className="font-semibold">Raised: {cause.raised}</span>
                    <span className="font-semibold">Goal: {cause.goal}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className={`h-2 rounded-full bg-gradient-to-r ${cause.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${cause.progress}%` }}
                      transition={{ duration: 1.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                  <div className="text-right mt-1 text-xs font-medium text-gray-500">{cause.progress}% of target</div>
                </div>

                {/* Impact Stats */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="text-center bg-amber-50 rounded-lg p-3">
                    <div className="text-lg font-bold text-emerald-700">{cause.donors}</div>
                    <div className="text-xs text-gray-600">Generous Donors</div>
                  </div>
                  <div className="text-center bg-emerald-50 rounded-lg p-3">
                    <div className="text-sm font-bold text-gray-800">{cause.impact}</div>
                  </div>
                </div>

                {/* Donate Button */}
                <motion.button
                  className={`w-full py-3 rounded-lg text-white font-semibold bg-gradient-to-r ${cause.color} hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2 group/btn`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaHandHoldingHeart className="w-4 h-4" />
                  <Link to={'/contact-us'}>Apply Now</Link>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <FaArrowRight className="w-3 h-3" />
                  </motion.div>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Islamic Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-emerald-700 to-amber-600 rounded-xl p-10 text-white relative overflow-hidden border-2 border-white shadow-2xl">
            {/* Islamic Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://static.vecteezy.com/system/resources/previews/014/664/051/non_2x/islamic-ornament-persian-motiff-3d-ramadan-islamic-round-pattern-elements-geometric-circular-ornamental-arabic-symbol-gold-background-vector.jpg')]"></div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-5xl font-bold mb-6 font-serif">"The believer's shade on the Day of Judgment will be his charity." (Hadith)</h3>
              
              <div className="flex flex-col sm:flex-row gap-5 justify-center mt-10">
                <motion.a
                  href="https://wa.me/923354571620"
                target="_blank"
                rel="noopener noreferrer"
                  className="bg-white text-emerald-700 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaDonate />
                 Apply Now
                </motion.a>

                <motion.a
                  href="/about"
                  className="bg-white/10 backdrop-blur-sm border border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaStar />
                  Explore Sadaqah Projects
                </motion.a>
              </div>

              <div className="mt-10 text-emerald-100 text-sm">
                <p>"Those who spend their wealth in the way of Allah and do not follow up their spending 
                by stressing their benevolence and causing hurt, will find their reward secure with their Lord..." (Quran 2:262)</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedCausesSection
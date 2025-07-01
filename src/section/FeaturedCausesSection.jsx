"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import {
  FaHeart,
  FaGraduationCap,
  FaHome,
  FaHandsHelping,
  FaLaptop,
  FaMedkit,
  FaUsers,
  FaArrowRight,
  FaDonate,
  FaGlobe,
  FaStar,
} from "react-icons/fa"
import { Link } from "react-router-dom"

const causes = [
  {
    id: 1,
    title: "Interest-Free Microfinance Revolution",
    category: "Microfinance",
    description:
      "Akhuwat believes in charity backed by compassion and brotherhood. Our microfinance program has transformed millions of lives through interest-free loans, creating sustainable livelihoods and breaking the cycle of poverty.",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop",
    icon: <FaHandsHelping />,
    color: "from-emerald-600 to-teal-700",
    raised: "₨125M",
    goal: "₨200M",
    progress: 62,
    donors: "15,420",
    impact: "2.3M families empowered",
  },
  {
    id: 2,
    title: "Education for Every Child",
    category: "Education",
    description:
      "Breaking the chains of illiteracy among the underprivileged. Our comprehensive education program provides free schooling, scholarships, and skill development to create a brighter future for Pakistan.",
    image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=300&fit=crop",
    icon: <FaGraduationCap />,
    color: "from-blue-600 to-indigo-700",
    raised: "₨85M",
    goal: "₨150M",
    progress: 57,
    donors: "12,850",
    impact: "750K students supported",
  },
  {
    id: 3,
    title: "Mushahhida Girls School Excellence",
    category: "Education",
    description:
      "Our flagship girls' school has become a beacon of hope, providing world-class education to underprivileged girls. We're committed to educating 2.5 million girls and creating future leaders.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=300&fit=crop",
    icon: <FaGraduationCap />,
    color: "from-purple-600 to-pink-700",
    raised: "₨95M",
    goal: "₨120M",
    progress: 79,
    donors: "8,640",
    impact: "50K girls educated",
  },
  {
    id: 4,
    title: "Dignity Through Clothing",
    category: "Welfare",
    description:
      "Our Clothes Bank provides dignified service for the needy to receive quality clothing with honor and care. Donors contribute pre-loved clothes, creating a sustainable cycle of giving.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=300&fit=crop",
    icon: <FaHeart />,
    color: "from-orange-600 to-red-700",
    raised: "₨35M",
    goal: "₨60M",
    progress: 58,
    donors: "9,230",
    impact: "500K people clothed",
  },
  {
    id: 5,
    title: "Digital Skills & IT Training",
    category: "Technology",
    description:
      "Empowering youth with cutting-edge IT and vocational skills. Our technology centers provide accessible, quality education that opens doors to new opportunities in the digital economy.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
    icon: <FaLaptop />,
    color: "from-teal-600 to-cyan-700",
    raised: "₨65M",
    goal: "₨100M",
    progress: 65,
    donors: "7,890",
    impact: "25K youth trained",
  },
  {
    id: 6,
    title: "Healthcare for All",
    category: "Healthcare",
    description:
      "Providing accessible, high-quality healthcare to underserved communities. Our medical centers and mobile clinics ensure that financial constraints don't prevent access to essential healthcare.",
    image: "https://www.citysearch.pk/UF/Companies/11460/heath-care-services.jpg",
    icon: <FaMedkit />,
    color: "from-red-600 to-pink-700",
    raised: "₨75M",
    goal: "₨130M",
    progress: 58,
    donors: "11,200",
    impact: "1M patients treated",
  },
  {
    id: 7,
    title: "Affordable Housing Initiative",
    category: "Housing",
    description:
      "Making homeownership dreams a reality through our Islamic housing finance program. Helping families build their dream homes with dignity and financial support.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop",
    icon: <FaHome />,
    color: "from-indigo-600 to-purple-700",
    raised: "₨180M",
    goal: "₨250M",
    progress: 72,
    donors: "6,540",
    impact: "15K homes built",
  },
  {
    id: 8,
    title: "Emergency Relief & Disaster Response",
    category: "Emergency",
    description:
      "Rapid response support for communities affected by natural disasters and emergencies. Our relief teams provide immediate assistance and long-term rehabilitation support.",
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400&h=300&fit=crop",
    icon: <FaHandsHelping />,
    color: "from-yellow-600 to-orange-700",
    raised: "₨45M",
    goal: "₨80M",
    progress: 56,
    donors: "13,670",
    impact: "200K people helped",
  },
  {
    id: 9,
    title: "Women Empowerment Program",
    category: "Empowerment",
    description:
      "Supporting women entrepreneurs with business training, microfinance, and mentorship. Empowering women to become financially independent and community leaders.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop",
    icon: <FaUsers />,
    color: "from-pink-600 to-rose-700",
    raised: "₨55M",
    goal: "₨90M",
    progress: 61,
    donors: "10,340",
    impact: "100K women empowered",
  },
]

const categories = [
  { id: "all", label: "All Causes", icon: FaGlobe },
  { id: "Microfinance", label: "Microfinance", icon: FaHandsHelping },
  { id: "Education", label: "Education", icon: FaGraduationCap },
  { id: "Healthcare", label: "Healthcare", icon: FaMedkit },
  { id: "Housing", label: "Housing", icon: FaHome },
  { id: "Emergency", label: "Emergency", icon: FaHeart },
]

const FeaturedCausesSection = () => {
  const [activeCategory, setActiveCategory] = useState("all")
  const [hoveredCard, setHoveredCard] = useState(null)

  const filteredCauses = activeCategory === "all" ? causes : causes.filter((cause) => cause.category === activeCategory)

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-emerald-50 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-400 rounded-full animate-float blur-3xl"></div>
        <div className="absolute bottom-32 right-20 w-80 h-80 bg-blue-400 rounded-full animate-float-reverse blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-400 rounded-full animate-pulse blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex items-center justify-center gap-4 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center shadow-2xl">
              <FaDonate className="text-white text-2xl" />
            </div>
            <div className="text-left">
              <span className="text-emerald-600 font-bold text-xl block">Akhuwat USA Featured Causes</span>
              <span className="text-gray-500 text-sm">Making a Global Impact</span>
            </div>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-7xl font-black text-gray-900 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            You can make a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              huge difference
            </span>
            <br />
            <span className="text-4xl md:text-5xl text-gray-600">by donating just a little</span>
          </motion.h2>

          <motion.p
            className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Join millions of donors worldwide in creating lasting change through our impactful programs
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 border border-gray-200"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <category.icon className="w-4 h-4" />
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Causes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {filteredCauses.map((cause, index) => (
            <motion.div
              key={cause.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-emerald-200"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -15 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-56">
                <motion.img
                  src={cause.image}
                  alt={cause.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  animate={hoveredCard === index ? { scale: 1.1 } : { scale: 1 }}
                />

                {/* Category Badge */}
                <div
                  className={`absolute top-4 left-4 px-4 py-2 rounded-full text-white text-sm font-bold bg-gradient-to-r ${cause.color}`}
                >
                  {cause.category}
                </div>

                {/* Icon Overlay */}
                <motion.div
                  className={`absolute top-4 right-4 w-14 h-14 bg-gradient-to-r ${cause.color} rounded-full flex items-center justify-center text-white text-2xl transform translate-x-16 group-hover:translate-x-0 transition-transform duration-500`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {cause.icon}
                </motion.div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Content */}
              <div className="p-8">
                <motion.h3
                  className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  {cause.title}
                </motion.h3>

                <p className="text-gray-600 mb-6 leading-relaxed">{cause.description}</p>

                {/* Progress Section */}
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-gray-600 mb-3">
                    <span className="font-semibold">Raised: {cause.raised}</span>
                    <span className="font-semibold">Goal: {cause.goal}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <motion.div
                      className={`h-3 rounded-full bg-gradient-to-r ${cause.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${cause.progress}%` }}
                      transition={{ duration: 1.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                  <div className="text-center mt-2 text-sm font-semibold text-gray-700">{cause.progress}% Complete</div>
                </div>

                {/* Impact Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center bg-gray-50 rounded-2xl p-4">
                    <div className="text-2xl font-bold text-emerald-600">{cause.donors}</div>
                    <div className="text-xs text-gray-600">Donors</div>
                  </div>
                  <div className="text-center bg-gray-50 rounded-2xl p-4">
                    <div className="text-sm font-bold text-blue-600">{cause.impact}</div>
                  </div>
                </div>

                {/* Donate Button */}
                <motion.button
                  className={`w-full py-4 rounded-2xl text-white font-bold text-lg bg-gradient-to-r ${cause.color} hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group/btn`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaHeart className="w-5 h-5" />
                  <Link to={'/contact-us'}>Donate Now</Link>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <FaArrowRight className="w-4 h-4" />
                  </motion.div>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-12 md:p-16 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-48 translate-x-48"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full translate-y-40 -translate-x-40"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-4xl md:text-6xl font-black mb-6">Ready to Make an Impact?</h3>
              <p className="text-2xl text-emerald-100 mb-10 max-w-4xl mx-auto leading-relaxed">
                Every donation, no matter how small, creates ripples of change that transform lives and communities.
                Join our mission to build a poverty-free world.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.a 
                href="/contact-us"
                  className="bg-white text-emerald-600 px-10 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition-all duration-300 shadow-2xl flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaDonate />
                  Start Donating Today
                </motion.a>

                <motion.button
                  className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaStar />
                  View All Causes
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedCausesSection

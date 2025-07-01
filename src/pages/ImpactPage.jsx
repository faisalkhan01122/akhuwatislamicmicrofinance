"use client"

import { motion } from "framer-motion"
import HeroImgSection from "../components/HeroImgSection"
import StatsCounter from "../components/StatsCounter"
import { FaUsers, FaGraduationCap, FaBuilding, FaHeart, FaGlobe } from "react-icons/fa"

const ImpactPage = () => {
  const impactStories = [
    {
      title: "Empowering Women Entrepreneurs",
      description:
        "Fatima Khan from Karachi started her tailoring business with a ₨200,000 interest-free loan from Akhuwat. Today, she employs 15 women and has transformed her community.",
      image: "https://assets.entrepreneur.com/content/3x2/2000/20170324044343-executive-461652-1920.jpeg",
      stats: { beneficiaries: "2.1M+", category: "Women Entrepreneurs" },
      color: "from-pink-500 to-rose-600",
    },
    {
      title: "Breaking Educational Barriers",
      description:
        "Through our education loans, Ahmed Ali completed his engineering degree and now works at a leading tech company, supporting other students in his village.",
      image: "/What-is-Education-Loan-1-1.png",
      stats: { beneficiaries: "500K+", category: "Students Supported" },
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "Building Sustainable Businesses",
      description:
        "Muhammad Hassan expanded his small grocery store into a chain of 5 outlets across Punjab, creating jobs for 50+ people in his community.",
      image: "/businessloanbanner.jpg",
      stats: { beneficiaries: "2M+", category: "Businesses Funded" },
      color: "from-green-500 to-emerald-600",
    },
  ]

  const globalImpact = [
    {
      icon: FaUsers,
      title: "Lives Transformed",
      value: "4.2M+",
      description: "Families empowered through our programs",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: FaBuilding,
      title: "Businesses Created",
      value: "2M+",
      description: "Entrepreneurial ventures supported",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: FaGraduationCap,
      title: "Students Educated",
      value: "500K+",
      description: "Educational dreams fulfilled",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: FaGlobe,
      title: "Communities Served",
      value: "15K+",
      description: "Villages and cities reached",
      color: "from-orange-500 to-red-600",
    },
  ]

  return (
    <>
      <HeroImgSection imageUrl="/Our-Mission.jpg" text="Our Global Impact" />

      <StatsCounter />

      {/* Impact Stories */}
      <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Stories of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Transformation
              </span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Real stories from real people whose lives have been transformed through Akhuwat Network's interest-free
              financial solutions.
            </motion.p>
          </motion.div>

          {/* Stories Grid */}
          <div className="space-y-16">
            {impactStories.map((story, index) => (
              <motion.div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* Image */}
                <motion.div
                  className={`relative overflow-hidden rounded-3xl shadow-2xl ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src={story.image || "/placeholder.svg"} alt={story.title} className="w-full h-80 object-cover" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${story.color} opacity-20`}></div>

                  {/* Stats Overlay */}
                  <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4">
                    <div className={`text-2xl font-bold bg-gradient-to-r ${story.color} bg-clip-text text-transparent`}>
                      {story.stats.beneficiaries}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">{story.stats.category}</div>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${story.color} rounded-2xl flex items-center justify-center`}
                  >
                    <FaHeart className="text-white text-xl" />
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900">{story.title}</h3>

                  <p className="text-lg text-gray-600 leading-relaxed">{story.description}</p>

                  <motion.button
                    className={`bg-gradient-to-r ${story.color} text-white px-8 py-4 rounded-full font-bold hover:shadow-lg transition-all duration-300`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Read Full Story
                  </motion.button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Impact Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 bg-white rounded-full animate-pulse blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-white rounded-full animate-ping blur-xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Global Impact</h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Since 2001, Akhuwat Network has been creating lasting change across Pakistan and beyond.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {globalImpact.map((impact, index) => (
              <motion.div
                key={index}
                className="text-center bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-r ${impact.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <impact.icon className="text-2xl text-white" />
                </motion.div>

                <motion.div
                  className="text-4xl font-bold mb-2"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                >
                  {impact.value}
                </motion.div>

                <h3 className="text-xl font-bold mb-2">{impact.title}</h3>
                <p className="text-emerald-100">{impact.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6">Be Part of This Impact</h3>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Join millions of Pakistanis who are building a better future through ethical finance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/loans"
                className="bg-white text-emerald-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Apply for Loan
              </motion.a>
              <motion.a
                href="/about-us"
                className="bg-white/10 border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default ImpactPage

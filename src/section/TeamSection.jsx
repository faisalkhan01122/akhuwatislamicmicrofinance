"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import {
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaAward,
  FaUsers,
  FaHeart,
  FaGlobe,
} from "react-icons/fa"

const teamMembers = [
  {
    id: 1,
    name: "Dr. Amjad Saqib",
    role: "Founder & Executive Director",
    image: "/images.jpg",
    bio: "Visionary leader who founded Akhuwat with the mission to eliminate poverty through interest-free microfinance. A pioneer in Islamic banking and social entrepreneurship.",
    achievements: ["Founded Akhuwat in 2001", "Served 4.5M+ families", "Zero-interest pioneer"],
    location: "Lahore, Pakistan",
    experience: "25+ Years",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "amjad@akhuwat.org",
      phone: "+92-42-111-253-928",
    },
    color: "from-emerald-600 to-teal-700",
  },
  {
    id: 2,
    name: "Mr. Azhar Hameed",
    role: "Global President",
    image: "/Blog2.jpg",
    bio: "Leading global operations and strategic partnerships to expand Akhuwat's reach worldwide. Expert in international development and microfinance.",
    achievements: ["Global expansion leader", "Strategic partnerships", "International development"],
    location: "Islamabad, Pakistan",
    experience: "20+ Years",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "azhar@akhuwat.org",
      phone: "+92-51-111-253-928",
    },
    color: "from-blue-600 to-indigo-700",
  },
  {
    id: 3,
    name: "Dr. Nauman Mufti",
    role: "President Operations",
    image: "/numan.jpg",
    bio: "Overseeing organizational development and ensuring sustainable growth of our programs. Specialist in operational excellence and program management.",
    achievements: ["Operational excellence", "Program management", "Sustainable growth"],
    location: "Karachi, Pakistan",
    experience: "18+ Years",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "nauman@akhuwat.org",
      phone: "+92-21-111-253-928",
    },
    color: "from-purple-600 to-pink-700",
  },
  {
    id: 4,
    name: "Mr. Asim Ashary",
    role: "Director Programs",
    image: "/yuman-p-300x300.jpg",
    bio: "Managing operational excellence and program implementation across all regions. Expert in field operations and community engagement.",
    achievements: ["Program implementation", "Community engagement", "Field operations"],
    location: "Faisalabad, Pakistan",
    experience: "15+ Years",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "asim@akhuwat.org",
      phone: "+92-41-111-253-928",
    },
    color: "from-orange-600 to-red-700",
  },
  {
    id: 5,
    name: "Ms. Fatima Sheikh",
    role: "Director Women Empowerment",
    image: "https://indianliberals.in/wp-content/uploads/2022/01/fs.png",
    bio: "Leading women empowerment initiatives and microfinance programs specifically designed for female entrepreneurs across Pakistan.",
    achievements: ["Women empowerment", "Female entrepreneurship", "Microfinance specialist"],
    location: "Multan, Pakistan",
    experience: "12+ Years",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "fatima@akhuwat.org",
      phone: "+92-61-111-253-928",
    },
    color: "from-pink-600 to-rose-700",
  },
  {
    id: 6,
    name: "Mr. Hassan Ali",
    role: "Director Technology",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQFy_RQNjG4Z_A/profile-displayphoto-shrink_200_200/B4DZXmxvEuHkAg-/0/1743333552897?e=2147483647&v=beta&t=5L_gaOMDuSIWp0t4ALcW4kAJPy3AfWz9CdfVHOBZGP4",
    bio: "Driving digital transformation and technology innovation to enhance service delivery and operational efficiency across all Akhuwat programs.",
    achievements: ["Digital transformation", "Technology innovation", "System optimization"],
    location: "Lahore, Pakistan",
    experience: "10+ Years",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "hassan@akhuwat.org",
      phone: "+92-42-111-253-929",
    },
    color: "from-teal-600 to-cyan-700",
  },
]

const TeamSection = () => {
  const [hoveredMember, setHoveredMember] = useState(null)

  return (
    <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-emerald-50 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-96 h-96 bg-emerald-400 rounded-full animate-float blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-400 rounded-full animate-float-reverse blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-400 rounded-full animate-pulse blur-2xl"></div>
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
              <FaUsers className="text-white text-2xl" />
            </div>
            <div className="text-left">
              <span className="text-emerald-600 font-bold text-xl block">Akhuwat USA</span>
              <span className="text-gray-500 text-sm">Leadership Team</span>
            </div>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-7xl font-black text-gray-900 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              Leadership Team
            </span>
          </motion.h2>

          <motion.p
            className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Meet the visionary leaders working tirelessly to eliminate poverty and empower communities through
            innovative microfinance solutions
          </motion.p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-200 transition-all duration-500"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-center transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

                  <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {[{ icon: FaLinkedin, link: member.social.linkedin }, { icon: FaTwitter, link: member.social.twitter }, { icon: FaEnvelope, link: `mailto:${member.social.email}` }, { icon: FaPhone, link: `tel:${member.social.phone}` }].map((social, i) => (
                      <a
                        key={i}
                        href={social.link}
                        className="w-10 h-10 bg-white/90 text-gray-700 hover:text-emerald-600 rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-all duration-300"
                      >
                        <social.icon className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-emerald-600 font-semibold text-sm mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">
                    {member.bio}
                  </p>
                  <div className="text-sm text-gray-500 mb-2 flex items-center gap-2">
                    <FaMapMarkerAlt className="text-emerald-500" />
                    <span>{member.location}</span>
                  </div>
                  <div className="text-sm text-gray-500 mb-4 flex items-center gap-2">
                    <FaEnvelope className="text-blue-500" />
                    <a href={`mailto:${member.social.email}`} className="hover:text-blue-600">
                      {member.social.email}
                    </a>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                      <FaAward className="text-yellow-500" /> Achievements
                    </h4>
                    <ul className="space-y-1 list-disc list-inside text-gray-600 text-sm">
                      {member.achievements.map((a, i) => (
                        <li key={i}>{a}</li>
                      ))}
                    </ul>
                  </div>

                  <motion.a
                    href={`mailto:${member.social.email}`}
                    className={`inline-flex items-center justify-center w-full py-2.5 px-5 text-white font-semibold rounded-xl shadow-md bg-gradient-to-r ${member.color} hover:opacity-90 transition duration-300`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaEnvelope className="mr-2" /> Connect
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>

        {/* Enhanced Join Mission Section */}
        <motion.div
          className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-12 md:p-16 text-white relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-48 translate-x-48"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full translate-y-40 -translate-x-40"></div>
          </div>

          <div className="relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <motion.div
                  className="flex items-center gap-3 mb-6"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <FaHeart className="text-3xl text-emerald-200" />
                  <span className="text-emerald-200 font-bold text-xl">Join Our Mission</span>
                </motion.div>

                <motion.h3
                  className="text-4xl md:text-5xl font-black mb-6"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Help deserving students break the chains of poverty
                </motion.h3>

                <motion.p
                  className="text-emerald-100 mb-8 text-xl leading-relaxed"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Akhuwat's vision of a poverty-free society hinges on addressing its root cause: illiteracy among the
                  impoverished. Join our team in providing free, high-quality education and creating limitless
                  possibilities.
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <motion.a
                  href="/contact-us"
                    className="bg-white text-emerald-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all duration-300 shadow-lg flex items-center justify-center gap-3"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaHeart />
                    Donate Now
                  </motion.a>

                  <motion.a
                  href="/about"
                    className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-3"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaUsers />
                    Join Our Team
                  </motion.a>
                </motion.div>
              </div>

              {/* Stats */}
              <motion.div
                className="grid grid-cols-2 gap-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {[
                  { number: "4.5M+", label: "Lives Transformed", icon: FaUsers },
                  { number: "850+", label: "Service Centers", icon: FaGlobe },
                  { number: "₨500B+", label: "Disbursed", icon: FaHeart },
                  { number: "20+", label: "Years Experience", icon: FaAward },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="text-white text-xl" />
                    </div>
                    <div className="text-3xl font-black text-white mb-2">{stat.number}</div>
                    <div className="text-emerald-200 font-semibold">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TeamSection

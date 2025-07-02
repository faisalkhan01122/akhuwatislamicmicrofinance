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
  FaHandHoldingHeart,
  FaMosque,

  FaLeaf,
} from "react-icons/fa"
import { FaBookQuran } from "react-icons/fa6";

const teamMembers = [
  {
    id: 1,
    name: "Dr. Amjad Saqib",
    title: "Founder & Executive Director",
    image: "/images.jpg",
    bio: "Visionary Islamic scholar and economist who established Akhuwat based on Quranic principles of Qarz-e-Hasna (interest-free loans). His work has been recognized globally as a model for Islamic microfinance.",
    achievements: [
      "Pioneered largest Islamic microfinance network",
      "Served 5.5M+ families with interest-free loans",
      "Recipient of Sitara-e-Imtiaz (Star of Excellence)"
    ],
    location: "Lahore, Pakistan",
    experience: "25+ years in Islamic finance",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "amjad@akhuwat.org",
      phone: "+92-42-111-253-928",
    },
    color: "from-green-600 to-emerald-800",
    islamicQuote: "The example of those who spend their wealth in the Way of Allah is like a grain of corn..."
  },
  {
    id: 2,
    name: "Sheikh Azhar Hameed",
    title: "Global President",
    image: "/Blog2.jpg",
    bio: "Islamic finance expert leading Akhuwat's international expansion. Specializes in implementing Quranic economic principles in diverse cultural contexts.",
    achievements: [
      "Established 5 international branches",
      "Developed Islamic microfinance curriculum",
      "Advisor to OIC on poverty alleviation"
    ],
    location: "Islamabad, Pakistan",
    experience: "20+ years in Islamic banking",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "azhar@akhuwat.org",
      phone: "+92-51-111-253-928",
    },
    color: "from-blue-600 to-indigo-800",
    islamicQuote: "Allah will deprive usury of all blessing, but will give increase for charity..."
  },
  {
    id: 3,
    name: "Dr. Noman Mufti",
    title: "President Operations",
    image: "/numan.jpg",
    bio: "Islamic scholar and operations specialist ensuring all programs comply with Shariah principles while maintaining operational excellence.",
    achievements: [
      "Developed Shariah-compliant operations framework",
      "Oversaw expansion to 800+ branches",
      "Recipient of Islamic Finance Award"
    ],
    location: "Karachi, Pakistan",
    experience: "18+ years in Islamic NGOs",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "noman@akhuwat.org",
      phone: "+92-21-111-253-928",
    },
    color: "from-amber-600 to-orange-800",
    islamicQuote: "The believer's shade on Judgment Day will be his charity..."
  },
  // {
  //   id: 4,
  //   name: "Hafiz Asim Ashary",
  //   title: "Director of Programs",
  //   image: "/yuman-p-300x300.jpg",
  //   bio: "Quran hafiz and community development expert who oversees implementation of all Islamic welfare programs including mosques, education and healthcare.",
  //   achievements: [
  //     "Established 250+ mosque complexes",
  //     "Developed Islamic education curriculum",
  //     "Implemented Zakat distribution system"
  //   ],
  //   location: "Faisalabad, Pakistan",
  //   experience: "15+ years in Islamic social work",
  //   social: {
  //     linkedin: "#",
  //     twitter: "#",
  //     email: "asim@akhuwat.org",
  //     phone: "+92-41-111-253-928",
  //   },
  //   color: "from-purple-600 to-violet-800",
  //   islamicQuote: "Whoever relieves a believer's distress, Allah will relieve his distress on Judgment Day..."
  // },
  // {
  //   id: 5,
  //   name: "Sister Fatima Sheikh",
  //   title: "Director Women's Programs",
  //   image: "https://indianliberals.in/wp-content/uploads/2022/01/fs.png",
  //   bio: "Specialist in Islamic women's empowerment, developing programs that enable Muslim women to become financially independent while maintaining Islamic values.",
  //   achievements: [
  //     "Estunched 50+ women's Islamic centers",
  //     "Trained 100,000+ women in halal income",
  //     "Developed hijab-friendly workplaces"
  //   ],
  //   location: "Multan, Pakistan",
  //   experience: "12+ years in Islamic women's welfare",
  //   social: {
  //     linkedin: "#",
  //     twitter: "#",
  //     email: "fatima@akhuwat.org",
  //     phone: "+92-61-111-253-928",
  //   },
  //   color: "from-pink-600 to-rose-800",
  //   islamicQuote: "The best among you are those who are best to their women..."
  // },
  // {
  //   id: 6,
  //   name: "Eng. Hassan Ali",
  //   title: "Director Technology",
  //   image: "https://media.licdn.com/dms/image/v2/D4D03AQFy_RQNjG4Z_A/profile-displayphoto-shrink_200_200/B4DZXmxvEuHkAg-/0/1743333552897?e=2147483647&v=beta&t=5L_gaOMDuSIWp0t4ALcW4kAJPy3AfWz9CdfVHOBZGP4",
  //   bio: "Develops Islamic fintech solutions to expand access to Shariah-compliant financial services through digital platforms.",
  //   achievements: [
  //     "Developed Islamic finance app",
  //     "Digital Zakat collection system",
  //     "Blockchain for transparent Sadaqah"
  //   ],
  //   location: "Lahore, Pakistan",
  //   experience: "10+ years in Islamic tech",
  //   social: {
  //     linkedin: "#",
  //     twitter: "#",
  //     email: "hassan@akhuwat.org",
  //     phone: "+92-42-111-253-929",
  //   },
  //   color: "from-teal-600 to-cyan-800",
  //   islamicQuote: "Allah loves those who are skillful in their work..."
  // },
]

const TeamSection = () => {
  const [hoveredMember, setHoveredMember] = useState(null)

  return (
    <section className="py-24 bg-gradient-to-br from-amber-50 via-white to-emerald-50 relative overflow-hidden">
      {/* Islamic Pattern Background */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://static.vecteezy.com/system/resources/previews/014/664/051/non_2x/islamic-ornament-persian-motiff-3d-ramadan-islamic-round-pattern-elements-geometric-circular-ornamental-arabic-symbol-gold-background-vector.jpg')]"></div>
      
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
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-amber-600">Islamic Leadership</span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            "The leaders of a people are their servants" (Hadith). Meet the scholars and practitioners guiding Akhuwat's mission to establish Quranic economic justice.
          </motion.p>
        </motion.div>

        {/* Team Grid with Islamic Design */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-200 transition-all duration-500"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {/* Islamic Decorative Element */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-500 to-emerald-600"></div>

              {/* Image Container */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

                {/* Social Links */}
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

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-emerald-700 font-semibold text-sm mb-3">
                  {member.title}
                </p>
                
                {/* Islamic Quote */}
                <div className="bg-amber-50 border-l-4 border-amber-500 p-3 mb-4 rounded-r">
                  <p className="text-sm italic text-gray-700">"{member.islamicQuote}"</p>
                </div>
                
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
                    <FaAward className="text-amber-500" /> Islamic Achievements
                  </h4>
                  <ul className="space-y-1 list-disc list-inside text-gray-600 text-sm">
                    {member.achievements.map((a, i) => (
                      <li key={i}>{a}</li>
                    ))}
                  </ul>
                </div>

                <motion.a
                  href={`mailto:${member.social.email}`}
                  className={`inline-flex items-center justify-center w-full py-2.5 px-5 text-white font-semibold rounded-lg shadow-md bg-gradient-to-r ${member.color} hover:opacity-90 transition duration-300`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaHandHoldingHeart className="mr-2" /> Connect
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Islamic Call to Action */}
        <motion.div
          className="bg-gradient-to-r from-emerald-700 to-amber-600 rounded-xl p-10 text-white relative overflow-hidden border-2 border-white shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Islamic Pattern */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://static.vecteezy.com/system/resources/previews/014/664/051/non_2x/islamic-ornament-persian-motiff-3d-ramadan-islamic-round-pattern-elements-geometric-circular-ornamental-arabic-symbol-gold-background-vector.jpg')]"></div>

          <div className="relative z-10">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* Content */}
              <div>
                <motion.div
                  className="flex items-center gap-3 mb-6"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <FaMosque className="text-3xl text-emerald-200" />
                  <span className="text-emerald-200 font-bold text-xl">Join Our Islamic Mission</span>
                </motion.div>

                <motion.h3
                  className="text-3xl md:text-4xl font-bold mb-6 font-serif"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  "The believer's shade on Judgment Day will be his charity" (Hadith)
                </motion.h3>

                <motion.p
                  className="text-emerald-100 mb-8 text-lg leading-relaxed"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Akhuwat's vision of establishing Quranic economic justice depends on your support. Your Zakat and Sadaqah help us provide interest-free loans, Islamic education, and dignified livelihoods according to Shariah principles.
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
                    className="bg-white text-emerald-700 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg flex items-center justify-center gap-3"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaBookQuran />
                    Connect Now
                  </motion.a>

                  <motion.a
                    href="/contact-us"
                    className="bg-white/10 backdrop-blur-sm border border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-3"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaUsers />
                    Volunteer Service
                  </motion.a>
                </motion.div>
              </div>

              {/* Islamic Impact Stats */}
              <motion.div
                className="grid grid-cols-2 gap-5"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {[
                  { number: "5.5M+", label: "Families Served", icon: FaUsers, verse: "Quran 2:245" },
                  { number: "850+", label: "Mosque Centers", icon: FaMosque, verse: "Hadith" },
                  { number: "₨500B+", label: "Qarz-e-Hasna", icon: FaHandHoldingHeart, verse: "Quran 2:275" },
                  { number: "20+", label: "Years Serving Ummah", icon: FaLeaf, verse: "Quran 14:7" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="text-white text-lg" />
                    </div>
                    <div className="text-2xl font-black text-white mb-1">{stat.number}</div>
                    <div className="text-emerald-200 font-semibold text-sm mb-1">{stat.label}</div>
                    <div className="text-emerald-100 text-xs">{stat.verse}</div>
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
"use client"

import { motion } from "framer-motion"
import HeroImgSection from "../components/HeroImgSection"
import StatsCounter from "../components/StatsCounter"
import { FaUsers, FaMosque, FaHandHoldingHeart,  FaGlobe } from "react-icons/fa"
import { RiPlantLine } from "react-icons/ri"
import { BsHouseHeart } from "react-icons/bs"
import { FaBookQuran } from "react-icons/fa6";

const ImpactPage = () => {
  const impactStories = [
    {
      title: "Ummah's Economic Empowerment",
      description:
        "Through Qard-e-Hasana (benevolent loans), Sister Aisha from Lahore established a modest tailoring business, now employing 12 widows in her community. 'Akhuwat helped me fulfill both my economic needs and Islamic duty of helping others,' she shares.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-z9IqzTY4LJ0suLWQ1EceLPmpDxGDlpSX0JVacCP9t7wXAtPak4r5u4CC2bljsvSsJnc&usqp=CAU",
      stats: { beneficiaries: "2.5M+", category: "Sadaqah Jariyah Projects" },
      color: "from-green-600 to-emerald-800",
      ayah: "“Who is it that would loan Allah a goodly loan so He may multiply it for him many times over?” (Quran 2:245)"
    },
    {
      title: "Preserving Islamic Education",
      description:
        "Brother Yusuf completed his Islamic studies degree through our education loans and now teaches at a local madrasa. 'This interest-free support allowed me to seek knowledge without compromising my faith,' he explains.",
      image: "https://hirafoundation.com/wp-content/uploads/2025/05/Importance-of-Islamic-Education-600x400.jpg",
      stats: { beneficiaries: "750K+", category: "Students Supported" },
      color: "from-blue-600 to-indigo-800",
      ayah: "“Allah will raise those who have believed among you and those who were given knowledge by degrees.” (Quran 58:11)"
    },
    {
      title: "Halal Business Growth",
      description:
        "Brother Ibrahim transformed his small halal grocery into a thriving business with 8 locations. 'Akhuwat's model aligns completely with Islamic principles - no riba, just pure brotherhood,' he states.",
      image: "https://halalfoundation.org/wp-content/uploads/2024/10/halal-grocery-1080x600.jpg",
      stats: { beneficiaries: "3M+", category: "Halal Businesses" },
      color: "from-amber-600 to-orange-700",
      ayah: "“Allah has permitted trade and forbidden usury.” (Quran 2:275)"
    },
  ]

  const globalImpact = [
    {
      icon: FaHandHoldingHeart,
      title: "Qard-e-Hasana Given",
      value: "6.8M+",
      description: "Interest-free loans following Sunnah",
      color: "from-green-600 to-teal-700",
    },
    {
      icon: FaMosque,
      title: "Mosques Supported",
      value: "1.2K+",
      description: "Places of worship and community",
      color: "from-blue-600 to-indigo-700",
    },
    {
      icon: FaBookQuran,
      title: "Islamic Graduates",
      value: "850K+",
      description: "Students of sacred knowledge",
      color: "from-amber-600 to-orange-600",
    },
    {
      icon: RiPlantLine,
      title: "Sustainable Projects",
      value: "15K+",
      description: "Eco-friendly Islamic initiatives",
      color: "from-emerald-600 to-green-700",
    },
    {
      icon: BsHouseHeart,
      title: "Homes Built",
      value: "320K+",
      description: "Islamic housing solutions",
      color: "from-purple-600 to-violet-700",
    },
    {
      icon: FaUsers,
      title: "Families Lifted",
      value: "8.2M+",
      description: "From poverty with dignity",
      color: "from-rose-600 to-pink-700",
    },
  ]

  return (
    <>
      <HeroImgSection 
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvr2-rU4Y_9uB7l5myAGpmrHG7CEkXP2wAEg&s" 
        text="Divine Impact Through Islamic Finance" 
        overlayText="In the way of Allah we transform lives"
      />

      {/* Quranic Introduction */}
      <section className="py-16 bg-gradient-to-b from-white to-emerald-50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="text-emerald-600 text-4xl mb-4" style={{ fontFamily: 'Traditional Arabic' }}>بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-emerald-600">Islamic</span> Impact Through <span className="text-amber-600">Qard-e-Hasana</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              "The parable of those who spend their wealth in the Way of Allah is that of a grain of corn that sprouts seven ears, and in every ear there are a hundred grains." (Quran 2:261)
            </p>
          </motion.div>

          <StatsCounter />
        </div>
      </section>

      {/* Impact Stories with Islamic Design */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Islamic Style Header */}
          <motion.div
            className="text-center mb-16 relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-8xl opacity-5 text-emerald-600" style={{ fontFamily: 'Traditional Arabic' }}>أخوات</div>
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Stories of <span className="text-emerald-600">Islamic</span> Transformation
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Witness how the Prophetic model of Qard-e-Hasana is reviving the economic spirit of the Ummah
            </motion.p>
          </motion.div>

          {/* Stories with Islamic Elements */}
          <div className="space-y-20">
            {impactStories.map((story, index) => (
              <motion.div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* Image with Islamic border */}
                <motion.div
                  className={`relative overflow-hidden rounded-2xl shadow-lg ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 border-4 border-emerald-500/20 rounded-2xl pointer-events-none"></div>
                  <img 
                    src={story.image} 
                    alt={story.title} 
                    className="w-full h-96 object-cover" 
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${story.color} opacity-30`}></div>

                  {/* Islamic Stats Overlay */}
                  <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-md border border-emerald-100">
                    <div className={`text-2xl font-bold bg-gradient-to-r ${story.color} bg-clip-text text-transparent`}>
                      {story.stats.beneficiaries}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">{story.stats.category}</div>
                  </div>
                </motion.div>

                {/* Content with Islamic design */}
                <motion.div
                  className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${story.color} rounded-xl flex items-center justify-center`}>
                      <FaHandHoldingHeart className="text-white text-xl" />
                    </div>
                    <div className="text-emerald-600 font-arabic text-sm">{story.ayah}</div>
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900">{story.title}</h3>

                  <p className="text-lg text-gray-600 leading-relaxed">{story.description}</p>

                  <div className="flex gap-4">
                    <motion.a
                      href="/about"
                      className={`bg-gradient-to-r ${story.color} text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center gap-2`}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Read Full Story
                    </motion.a>
                    <motion.a
                      href="https://wa.me/923354571620"
                target="_blank"
                rel="noopener noreferrer"
                      className="bg-white border border-emerald-600 text-emerald-600 px-6 py-3 rounded-lg font-medium hover:bg-emerald-50 transition-all duration-300 flex items-center gap-2"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Support Similar Projects
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Impact Section with Islamic Patterns */}
      <section className="py-20 bg-gradient-to-br from-emerald-800 to-teal-900 text-white relative overflow-hidden">
        {/* Islamic geometric pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('/islamic-pattern.png')] bg-repeat"></div>
        
        {/* Floating mosque silhouette */}
        <div className="absolute top-20 right-20 opacity-5">
          <FaMosque className="text-9xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Ummah's Impact</h2>
            <p className="text-xl text-emerald-200 max-w-3xl mx-auto">
              "The believer's shade on the Day of Judgment will be his charity." (Tirmidhi)
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {globalImpact.map((impact, index) => (
              <motion.div
                key={index}
                className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-emerald-400 transition-all"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-r ${impact.color} rounded-xl flex items-center justify-center mx-auto mb-6`}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                >
                  <impact.icon className="text-2xl text-white" />
                </motion.div>

                <motion.div
                  className="text-4xl font-bold mb-2 font-arabic"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: index * 0.3 }}
                >
                  {impact.value}
                </motion.div>

                <h3 className="text-xl font-bold mb-2">{impact.title}</h3>
                <p className="text-emerald-200">{impact.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Islamic Call to Action */}
          <motion.div
            className="text-center mt-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="text-emerald-300 mb-4 text-lg">"The example of those who spend their wealth in the way of Allah..." (Quran 2:261)</div>
            <h3 className="text-3xl font-bold mb-6">Join This Sadaqah Jariyah</h3>
            <p className="text-xl text-emerald-200 mb-8 max-w-2xl mx-auto">
              Your contribution becomes an ongoing charity that continues to benefit the Ummah.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
               href="https://wa.me/923354571620"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-700 transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Apply Now
              </motion.a>
              <motion.a
                href="/contact-us"
                className="bg-emerald-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-emerald-800 transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Volunteer Service
              </motion.a>
              <motion.a
               href="https://wa.me/923354571620"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Make Dua for Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quranic Closing */}
      <section className="py-16 bg-amber-50 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-emerald-600 text-3xl mb-6" style={{ fontFamily: 'Traditional Arabic' }}>
            وَمَا تُقَدِّمُوا لِأَنفُسِكُم مِّنْ خَيْرٍ تَجِدُوهُ عِندَ اللَّهِ
          </div>
          <p className="text-xl text-gray-700 mb-6">
            "Whatever good you put forward for yourselves - you will find it with Allah." (Quran 2:110)
          </p>
          <motion.a
            href="/about"
            className="inline-block bg-gradient-to-r from-emerald-600 to-teal-700 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn About Our Islamic Model
          </motion.a>
        </div>
      </section>
    </>
  )
}

export default ImpactPage
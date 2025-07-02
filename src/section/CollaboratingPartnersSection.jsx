"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import {
  FaHandshake,
  FaMosque,
  FaUniversity,
  FaHospital,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa"
import { FaBookQuran } from "react-icons/fa6";

const partners = [
  {
    id: 1,
    name: "ISNA",
    fullName: "Islamic Society of North America",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSu87jHTPeb7IM5R7FU5L0P4N1AaYCOWAoyg&s",
    description: "Promoting Islamic values and supporting Qard-e-Hasna initiatives across North America",
    islamicPrinciple: "Cooperate in righteousness and piety"
  },
  {
    id: 2,
    name: "IIFA",
    fullName: "International Islamic Finance Association",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsrnRUCPSSdaY2sD3FdPdwaN83GeKLQ7QF3A&s",
    description: "Advancing Shariah-compliant microfinance solutions globally",
    islamicPrinciple: "Prohibiting Riba (interest) in all transactions"
  },
  {
    id: 3,
    name: "Al-Khair Foundation",
    fullName: "Al-Khair Islamic Foundation",
    logo: "https://alkhair.org/wp-content/uploads/2017/02/AKF.jpg",
    description: "Implementing Islamic relief and development programs worldwide",
    islamicPrinciple: "Sadaqah that endures benefits forever"
  },
  {
    id: 4,
    name: "ICNA Relief",
    fullName: "Islamic Circle of North America Relief",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRviwfPAYSEgiUub9gDxPwmFZoaz5fK23Vang&s",
    description: "Providing Islamic social services and interest-free loans",
    islamicPrinciple: "Charity extinguishes sins as water extinguishes fire"
  },
  {
    id: 5,
    name: "Islamic Development Bank",
    fullName: "IsDB Group",
    logo: "https://cdn.britannica.com/11/142711-004-9E7D4F73/headquarters-Islamic-Development-Bank-Jiddah-Saudi-Arabia.jpg",
    description: "Funding development projects according to Islamic principles",
    islamicPrinciple: "Economic empowerment of the Ummah"
  },
  {
    id: 6,
    name: "Muslim Hands",
    fullName: "Muslim Hands International",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPdlenFMHxcjW4je3ypZzWsBpIbWUIr2znfg&s",
    description: "Implementing Zakat-compliant poverty alleviation programs",
    islamicPrinciple: "The upper hand (giving) is better than the lower hand (receiving)"
  },
  {
    id: 7,
    name: "Awqaf SA",
    fullName: "Awqaf Foundation of South Africa",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWG4XpRDww2aZlJby9R-fs88zBu7A4czHbTQ&s",
    description: "Managing Islamic endowments for sustainable development",
    islamicPrinciple: "Perpetual charity (Sadaqah Jariyah)"
  },
  {
    id: 8,
    name: "IFE",
    fullName: "Islamic Foundation for Education",
    logo: "https://abi.edu.pk/wp-content/uploads/2024/10/blog.jpeg",
    description: "Providing Islamic education with modern knowledge",
    islamicPrinciple: "Seeking knowledge is obligatory upon every Muslim"
  }
]

const CollaboratingPartnersSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const partnersPerSlide = 4
  const totalSlides = Math.ceil(partners.length / partnersPerSlide)

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlaying, totalSlides])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  return (
    <section className="py-24 bg-gradient-to-br from-amber-50 via-white to-emerald-50 relative overflow-hidden">
      {/* Islamic Pattern Background */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYCfEhf1kIY9CaPG2Woik1S5fVMi1GFDuIkg&s')]"></div>
      
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
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-amber-600">Islamic Partners</span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            "Cooperate in righteousness and piety, but do not cooperate in sin and aggression" (Quran 5:2). 
            Meet the organizations helping us implement Quranic economic principles worldwide.
          </motion.p>
        </motion.div>

        {/* Partners Carousel with Islamic Design */}
        <div
          className="relative mb-20"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="overflow-hidden rounded-xl">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                    {partners
                      .slice(slideIndex * partnersPerSlide, (slideIndex + 1) * partnersPerSlide)
                      .map((partner) => (
                        <motion.div
                          key={partner.id}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                          className="relative group bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 text-center overflow-hidden"
                        >
                          {/* Islamic Decorative Element */}
                          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-emerald-600"></div>
                          
                          <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
                          
                          <div className="relative z-10">
                            <div className="flex justify-center items-center h-24 mb-4">
                              <img
                                src={partner.logo}
                                alt={partner.name}
                                className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition duration-300"
                              />
                            </div>
                            
                            <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-emerald-700 transition-colors duration-300">
                              {partner.name}
                            </h3>
                            
                            <div className="bg-amber-50 border-l-4 border-amber-500 p-2 mb-3 rounded-r text-sm italic">
                              "{partner.islamicPrinciple}"
                            </div>
                            
                            <p className="text-sm text-gray-600 mb-2 min-h-[48px]">
                              {partner.description}
                            </p>
                            
                            <p className="text-xs text-emerald-700 font-medium">
                              {partner.fullName}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-gray-200 rounded-full shadow hover:shadow-lg flex items-center justify-center text-gray-600 hover:text-emerald-600"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-gray-200 rounded-full shadow hover:shadow-lg flex items-center justify-center text-gray-600 hover:text-emerald-600"
          >
            <FaChevronRight />
          </button>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-emerald-600 w-8" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
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

          <div className="relative z-10 text-center">
            <motion.div
              className="flex items-center justify-center gap-3 mb-6"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <FaHandshake className="text-3xl text-emerald-200" />
              <span className="text-emerald-200 font-bold text-xl">Become an Islamic Partner</span>
            </motion.div>

            <motion.h3
              className="text-3xl md:text-4xl font-bold mb-6 font-serif"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              "Hold firmly to the rope of Allah all together and do not become divided" (Quran 3:103)
            </motion.h3>

            <motion.p
              className="text-emerald-100 mb-8 text-lg leading-relaxed max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Join our network of Islamic organizations working to establish Quranic economic justice through interest-free microfinance, Zakat distribution, and Sadaqah Jariyah projects.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="/contact-us"
                className="bg-white text-emerald-700 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaMosque />
                For Islamic Organizations
              </motion.a>

              <motion.a
                href="/contact-us"
                className="bg-white/10 backdrop-blur-sm border border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaBookQuran />
                For Zakat Institutions
              </motion.a>

              <motion.a
                href="/contact-us"
                className="bg-white/10 backdrop-blur-sm border border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaUniversity />
                For Islamic Schools
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CollaboratingPartnersSection
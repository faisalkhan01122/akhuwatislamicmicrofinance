

// import "./AkhuwatScheme.css" // Assuming you have a CSS file for styles
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const features = [
  { icon: "✅", title: "Interest-Free", desc: "100% Sharia-compliant loans" },
  { icon: "👥", title: "Community-Based", desc: "Supporting local communities" },
  { icon: "❤️", title: "Social Welfare", desc: "Prioritizing people over profit" },
  { icon: "📈", title: "Quick Approval", desc: "Fast processing and disbursement" },
]

const AkhuwatScheme = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-green-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 bg-green-400 rounded-full animate-float"></div>
        <div className="absolute bottom-32 right-20 w-32 h-32 bg-blue-400 rounded-full animate-float-reverse"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-purple-400 rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: isSmallScreen ? 0 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl hover-lift">
              <motion.img
                src="https://i.postimg.cc/xCChTh36/akhuwatfoundationhome.jpg"
                alt="Akhuwat Scheme"
                className="w-full h-[400px] sm:h-[500px] object-contain"
                whileHover={isSmallScreen ? {} : { scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

              <motion.div
                className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg glass"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={isSmallScreen ? {} : { scale: 1.1 }}
              >
                <div className="text-center">
                  <motion.div
                    className="text-2xl font-bold text-green-600"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    50L+
                  </motion.div>
                  <div className="text-sm text-gray-600">Max Loan Amount</div>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg glass"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={isSmallScreen ? {} : { scale: 1.1 }}
              >
                <div className="text-center">
                  <motion.div
                    className="text-2xl font-bold text-green-600"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                  >
                    0%
                  </motion.div>
                  <div className="text-sm text-gray-600">Interest Rate</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: isSmallScreen ? 0 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Akhuwat Loan
                <motion.span
                  className="block text-green-600 gradient-text"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Scheme 2025
                </motion.span>
              </motion.h2>

              <motion.p
                className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Akhuwat Loan Service stands out as a unique loan provider in Pakistan, offering ethical, interest-free
                loans (Qarz-e-Hasna) designed to uplift those in need. Unlike conventional banks, Akhuwat prioritizes
                social welfare over profit.
              </motion.p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-xl hover:bg-green-50 transition-colors duration-300 hover-lift"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={isSmallScreen ? {} : { scale: 1.05 }}
                >
                  <motion.div
                    className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-xl"
                    whileHover={isSmallScreen ? {} : { rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.a
              href="https://wa.me/923354571620"
  target="_blank"
  rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-glow"
                whileHover={isSmallScreen ? {} : { scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Apply Now
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AkhuwatScheme

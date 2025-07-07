
"use client"
import { motion } from "framer-motion"

const LoanInt = () => {
  const features = [
    { icon: "💰", title: "Up to 50 Lacs", desc: "Maximum loan amount" },
    { icon: "🛡️", title: "0% Interest", desc: "Completely interest-free" },
    { icon: "⚡", title: "Quick Approval", desc: "Fast processing" },
  ]

  return (
    <section className="bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We provide{" "}
            <span className="text-green-600 relative gradient-text">
              interest-free loans
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-1 bg-green-400 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              />
            </span>{" "}
            up to{" "}
            <motion.span
              className="text-emerald-600 font-extrabold text-4xl md:text-6xl block mt-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              50 Lacs PKR
            </motion.span>
          </motion.h2>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <motion.div className="text-4xl mb-4 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Animated Counter */}
          <motion.div
            className="mt-16 bg-white rounded-2xl p-8 shadow-lg max-w-md mx-auto hover-lift"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Loans Approved This Year</h3>
            <motion.div
              className="text-4xl font-bold text-green-600 gradient-text"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              viewport={{ once: true }}
            >
              89,982+
            </motion.div>
            <p className="text-sm text-gray-500 mt-2">And counting...</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default LoanInt

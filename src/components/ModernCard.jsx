"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const ModernCard = ({
  title,
  description,
  image,
  icon: Icon,
  color = "from-emerald-500 to-teal-600",
  features = [],
  cta = "Learn More",
  href = "#",
  badge = null,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <motion.div
      className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-emerald-200"
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Badge */}
      {badge && (
        <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
          {badge}
        </div>
      )}

      {/* Image Container */}
      <div className="relative overflow-hidden h-48">
        {!imageLoaded && (
          <div className="w-full h-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse"></div>
        )}
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
            imageLoaded ? "opacity-100" : "opacity-0 absolute"
          }`}
          onLoad={() => setImageLoaded(true)}
        />

        {/* Gradient Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t ${color} opacity-0 group-hover:opacity-80 transition-opacity duration-500`}
        />

        {/* Icon Overlay */}
        {Icon && (
          <motion.div
            className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 transform translate-x-12 group-hover:translate-x-0 transition-transform duration-500"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <Icon className={`text-2xl bg-gradient-to-r ${color} bg-clip-text text-transparent`} />
          </motion.div>
        )}

        {/* Hover CTA */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <motion.a
            href={href}
            className="bg-white text-gray-900 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors duration-300 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {cta} →
          </motion.a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <motion.h3
          className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300"
          whileHover={{ x: 5 }}
        >
          {title}
        </motion.h3>

        <p className="text-gray-600 mb-4 leading-relaxed text-sm">{description}</p>

        {/* Features List */}
        {features.length > 0 && (
          <div className="space-y-2 mb-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 text-sm"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-gray-600">{feature}</span>
              </motion.div>
            ))}
          </div>
        )}

        {/* Action Button */}
        <motion.a
          href={href}
          className={`inline-flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r ${color} font-bold group/btn cursor-pointer`}
          whileHover={{ x: 5 }}
        >
          {cta}
          <motion.div
            className={`w-6 h-6 bg-gradient-to-r ${color} rounded-full flex items-center justify-center text-white text-xs`}
            whileHover={{ x: 3 }}
          >
            →
          </motion.div>
        </motion.a>
      </div>

      {/* Bottom Accent */}
      <div
        className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      ></div>
    </motion.div>
  )
}

export default ModernCard

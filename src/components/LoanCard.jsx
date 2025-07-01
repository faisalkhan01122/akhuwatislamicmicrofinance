import { motion } from "framer-motion"

const LoanCard = ({ img, title, description, linkText, linkUrl }) => {
  return (
    <motion.div
      className="relative bg-white/70 h-auto md:h-[70vh] backdrop-blur-md shadow-lg rounded-2xl overflow-hidden group hover:shadow-2xl transition duration-300"
      whileHover={{ scale: 1.03 }}
    >
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-60 object-bottom transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>

        {linkText && (
          <motion.a
            href={linkUrl}
            className="inline-block px-5 py-2 rounded-full bg-green-600 text-white font-medium hover:bg-green-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {linkText}
          </motion.a>
        )}
      </div>

      {/* Bottom Shape */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-bl-2xl rounded-br-2xl" />
    </motion.div>
  )
}

export default LoanCard

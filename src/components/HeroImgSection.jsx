
import { motion } from "framer-motion"

const HeroImgSection = ({ imageUrl, text }) => {
  return (
    <section className="relative w-full h-[100vh]  md:h-[80vh] overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="relative w-full h-full ">
          <img
            src={imageUrl || "/placeholder.svg?height=500&width=1200"}
            alt="Hero Background"
            className="w-full h-full  object-bottom"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/70"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
        </div>
      </motion.div>

      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-8 w-3 h-3 bg-green-400 rounded-full opacity-60"
          animate={{ y: [0, -15, 0], scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 right-12 w-4 h-4 bg-emerald-400 rounded-full opacity-40"
          animate={{ y: [0, 20, 0], scale: [1, 0.8, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {text}
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Empowering communities through interest-free financial solutions
          </motion.p>

          <motion.div
            className="flex items-center justify-center space-x-4 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <motion.div
              className="w-12 h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1 }}
            />
            <motion.div
              className="w-3 h-3 bg-green-400 rounded-full"
              animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
            <motion.div
              className="w-12 h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1 }}
            />
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <motion.button
              className="group bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold px-5 py-2 md:px-8 md:py-3 rounded-full shadow-2xl transition-all duration-300 relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Explore Services</span>
            </motion.button>
            <motion.a
              href="tel:+923354571620"
              className="group bg-white/10 hover:bg-white/20 border-2 border-white/30 hover:border-white/50 text-white px-4 py-1 md:px-8 md:py-3 rounded-full backdrop-blur-md transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-xl">📞</span>
              <span className="font-semibold">Contact Us</span>
            </motion.a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden z-20">
        <motion.svg
          className="w-full h-12 md:h-16"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        >
          <motion.path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28c70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08c36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="white"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
          />
        </motion.svg>
      </div>
    </section>
  )
}

export default HeroImgSection

// Assuming you have a CSS file for styles
import { motion } from "framer-motion"

const AkhuwatTrustSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-white via-gray-50 to-green-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-400 rounded-full animate-float"></div>
        <div className="absolute bottom-32 right-20 w-24 h-24 bg-blue-400 rounded-full animate-float-reverse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <motion.div
              className="text-sm font-semibold text-gray-500 mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              People's Trust on Akhuwat Foundation Loan
            </motion.div>

            <div className="w-full bg-gray-200 h-8 rounded-full relative overflow-hidden shadow-inner">
              <motion.div
                className="bg-gradient-to-r from-green-500 to-emerald-600 h-full rounded-full transition-all duration-1000 shadow-lg"
                initial={{ width: 0 }}
                whileInView={{ width: "97%" }}
                transition={{ duration: 2, delay: 0.5 }}
                viewport={{ once: true }}
              ></motion.div>
              <div className="absolute inset-0 flex justify-center items-center font-bold text-white text-lg">97%</div>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-[#22C55E] mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Akhuwat Loan
            </motion.h1>

            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Progressing from a historical and philosophical discourse towards a pragmatic model of poverty
                alleviation, Akhuwat was founded by Dr. Amjad Saqib in 2001. Prior to establishing Akhuwat, he served in
                the Civil Services of Pakistan in the District Management Group (DMG).
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">While serving as the General Manager</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                While serving as the General Manager of the Punjab Rural Support Program (PRSP) he had witnessed the
                devastating impact of poverty and was committed to dedicate the rest of his life to alleviate the
                suffering of the poor. He once took his friends to visit a village, Jia Bagga, to study the impact of
                intervention by PRSP.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl hover-lift">
              <img
                src="/Our-Mission.jpg"
                alt="Akhuwat Foundation"
                className="w-full h-[500px] object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

              <motion.div
                className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
                <p className="text-gray-600">
                  Empowering communities through interest-free financial solutions and sustainable development programs.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AkhuwatTrustSection

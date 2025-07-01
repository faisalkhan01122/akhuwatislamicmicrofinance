// Importing CSS for styles
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { FaHandshake, FaMoneyBillWave, FaUsers } from "react-icons/fa"
import { GiPlantRoots } from "react-icons/gi"
import CountUp from "react-countup"

const AkhuwatLoanSection = () => {
  const [statistics, setStatistics] = useState({ loansIssued: 0, beneficiaries: 0 })

  useEffect(() => {
    // Simulate fetching data
    const fetchData = () => {
      setStatistics({ loansIssued: 5000, beneficiaries: 3000 })
    }
    fetchData()
  }, [])

  return (
    <div className="bg-gradient-to-br from-gray-50 to-green-50 py-16 px-4 md:px-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-400 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-blue-400 rounded-full animate-float-reverse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
         <section className="py-16 bg-gradient-to-br from-white via-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg px-6 py-10 sm:px-10 sm:py-12"
        >
          {/* Contact Info */}
          <h3 className="text-lg sm:text-xl font-semibold text-green-700 mb-4">
            Akhuwat Loan Contact:{" "}
            <span className="font-bold underline decoration-green-500">
              0335 4571620
            </span>
          </h3>

          {/* Animated Count */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-600 to-blue-600 text-transparent bg-clip-text mt-2 mb-3"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <CountUp
              end={statistics.loansIssued}
              duration={3}
              separator=","
            />
          </motion.h1>

          {/* Subtext */}
          <p className="text-gray-700 text-md sm:text-lg">
            Total Loan Applications Approved
          </p>
        </motion.div>
      </div>
    </section>

        <motion.div
          className="mt-12 rounded-3xl p-10 bg-gradient-to-r from-blue-900 to-blue-500 text-white shadow-2xl relative overflow-hidden hover-lift"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b-4 border-l-4 border-green-400 rotate-45"></div>
          <div className="absolute top-4 right-4 w-6 h-6 border-t-4 border-r-4 border-green-400 rotate-45"></div>

          <div className="text-center">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Akhuwat
            </motion.h2>
            <motion.h3
              className="text-2xl md:text-3xl font-semibold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Loans
            </motion.h3>
            <motion.p
              className="text-green-200 mb-8 text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              viewport={{ once: true }}
            >
              For your needs
            </motion.p>

            <motion.div
              className="flex justify-center gap-8 text-5xl"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.6 }}>
                <GiPlantRoots className="bg-white text-black p-3 rounded-full w-16 h-16" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.6 }}>
                <FaUsers className="bg-white text-black p-3 rounded-full w-16 h-16" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.6 }}>
                <FaMoneyBillWave className="text-yellow-300 w-16 h-16" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.6 }}>
                <FaHandshake className="text-yellow-400 w-16 h-16" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default AkhuwatLoanSection

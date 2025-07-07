
import { motion } from "framer-motion"
import {
  FaCheckCircle,
  FaFileAlt,
  FaUpload,
  FaEye,
  FaThumbsUp,
  FaUserCheck,
  FaHandshake,
  FaMoneyBillWave,
} from "react-icons/fa"

const steps = [
  {
    step: "Step 1",
    title: "Understand the Eligibility Criteria",
    icon: <FaUserCheck />,
    content:
      "Before applying, it's important to understand the eligibility criteria set by Akhuwat. The foundation typically offers loans to individuals looking to start or expand a small business, people in need of financial assistance for education, healthcare, or improving living conditions.",
    color: "from-blue-500 to-blue-600",
  },
  {
    step: "Step 2",
    title: "Prepare Your Documentation",
    icon: <FaFileAlt />,
    content:
      "Akhuwat wants to make it easier for you to get a loan. You will need some documents for your loan application including a valid form of identification, proof of residence or business location, and a detailed business plan.",
    color: "from-green-500 to-green-600",
  },
  {
    step: "Step 3",
    title: "Visit an Akhuwat Branch or Contact Point",
    icon: <FaHandshake />,
    content:
      "Find the closest Akhuwat branch or contact point in your area. Akhuwat has many offices in Pakistan, working with local mosques, churches, and community centers.",
    color: "from-purple-500 to-purple-600",
  },
  {
    step: "Step 4",
    title: "Attend an Orientation Session",
    icon: <FaEye />,
    content:
      "Akhuwat regularly holds sessions for people interested in applying for loans. These sessions give information about the loan process, repayment terms, and success stories.",
    color: "from-orange-500 to-orange-600",
  },
  {
    step: "Step 5",
    title: "Submit Your Loan Application",
    icon: <FaUpload />,
    content:
      "Once you have all the required information and documents, you can submit your loan application. Akhuwat staff will help you with the process.",
    color: "from-red-500 to-red-600",
  },
  {
    step: "Step 6",
    title: "Community Verification Process",
    icon: <FaCheckCircle />,
    content:
      "Akhuwat involves the community in verifying loan applications. They may visit your home or business and talk to community members.",
    color: "from-teal-500 to-teal-600",
  },
  {
    step: "Step 7",
    title: "Loan Approval and Disbursement",
    icon: <FaThumbsUp />,
    content:
      "After your loan application is verified, it will be reviewed for approval. If approved, you will receive the loan in a group setting.",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    step: "Step 8",
    title: "Repayments",
    icon: <FaMoneyBillWave />,
    content:
      "Akhuwat loans have a clear repayment schedule and usually don't have interest. When you pay back your loan, you help support other people in need.",
    color: "from-pink-500 to-pink-600",
  },
]

const ApplyLoanSteps = () => {
  return (
    <section className="bg-gradient-to-br from-green-50 via-white to-emerald-50 py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 bg-green-400 rounded-full animate-float"></div>
        <div className="absolute bottom-32 right-20 w-32 h-32 bg-blue-400 rounded-full animate-float-reverse"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-[#22C55E] mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            How to Akhuwat Loan Apply Online
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg md:text-xl mb-8 leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Applying for an Akhuwat loan is easy and inclusive. The process is designed to help people in Pakistan by
            reducing poverty and empowering individuals.
          </motion.p>
        </motion.div>

        <div className="space-y-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              className="relative"
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div
                className={`flex flex-col lg:flex-row items-center gap-8 ${idx % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className="flex-1">
                  <motion.div
                    className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center mb-6">
                      <motion.div
                        className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white text-2xl mr-6`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {step.icon}
                      </motion.div>
                      <div>
                        <span className="text-green-500 font-bold text-lg">{step.step}</span>
                        <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-lg">{step.content}</p>
                  </motion.div>
                </div>

                <motion.div
                  className="flex-shrink-0"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: idx * 0.1 + 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div
                    className={`w-24 h-24 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white text-3xl shadow-2xl`}
                  >
                    {idx + 1}
                  </div>
                </motion.div>
              </div>

              {idx < steps.length - 1 && (
                <motion.div
                  className="flex justify-center my-8"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ delay: idx * 0.1 + 0.5, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="w-1 h-16 bg-gradient-to-b from-green-400 to-emerald-500 rounded-full"></div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8 max-w-4xl mx-auto">
            Applying for an Akhuwat loan is not just about money. It's a way to join a community that helps and supports
            each other. By following these steps and getting involved, applicants can get the help they need to create a
            better future.
          </p>
          <motion.a 
          href="/contact-us"
            className="bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white px-12 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Application
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default ApplyLoanSteps

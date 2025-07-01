
import { motion } from "framer-motion"
import { FaExclamationTriangle, FaShieldAlt, FaInfoCircle, FaPhone, FaEnvelope, FaFileAlt } from "react-icons/fa"

const DisclaimerPage = () => {
  const disclaimerSections = [
    {
      icon: FaInfoCircle,
      title: "General Information",
      content: [
        "The information provided on this website is for general informational purposes only and should not be considered as financial, legal, or professional advice.",
        "While we strive to keep the information accurate and up-to-date, we make no representations or warranties of any kind about the completeness, accuracy, reliability, or availability of the information.",
        "Any reliance you place on such information is strictly at your own risk.",
      ],
      color: "text-blue-600",
    },
    {
      icon: FaShieldAlt,
      title: "Loan Approval Disclaimer",
      content: [
        "Loan approval is subject to our internal credit assessment and eligibility criteria.",
        "Meeting the minimum requirements does not guarantee loan approval.",
        "We reserve the right to reject any loan application without providing specific reasons.",
        "Loan terms, amounts, and conditions may vary based on individual circumstances and risk assessment.",
      ],
      color: "text-emerald-600",
    },
    {
      icon: FaExclamationTriangle,
      title: "Risk Disclosure",
      content: [
        "Borrowing money involves financial risk and responsibility.",
        "Failure to repay loans may result in legal action and impact your credit history.",
        "Guarantors are equally responsible for loan repayment in case of borrower default.",
        "Consider your financial situation carefully before applying for any loan.",
      ],
      color: "text-orange-600",
    },
    {
      icon: FaFileAlt,
      title: "Website Content",
      content: [
        "The content on this website may contain technical inaccuracies or typographical errors.",
        "We reserve the right to modify, update, or remove content without prior notice.",
        "Third-party links are provided for convenience and do not constitute endorsement.",
        "We are not responsible for the content or practices of external websites.",
      ],
      color: "text-purple-600",
    },
  ]

  const importantNotices = [
    {
      title: "Regulatory Compliance",
      description:
        "Akhuwat Network operates under the supervision of relevant regulatory authorities in Pakistan. All operations comply with applicable laws and Islamic Sharia principles.",
    },
    {
      title: "Data Protection",
      description:
        "Personal information is collected and processed in accordance with our Privacy Policy and applicable data protection laws. We implement appropriate security measures to protect your data.",
    },
    {
      title: "Service Availability",
      description:
        "While we strive to maintain continuous service availability, we do not guarantee uninterrupted access to our website or services. Maintenance and technical issues may cause temporary disruptions.",
    },
    {
      title: "Financial Advice",
      description:
        "The information provided does not constitute financial advice. We recommend consulting with qualified financial advisors before making important financial decisions.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-orange-50">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-96 h-96 bg-orange-400 rounded-full animate-float blur-3xl"></div>
          <div className="absolute bottom-32 right-20 w-80 h-80 bg-red-400 rounded-full animate-float-reverse blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="flex items-center justify-center gap-4 mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center shadow-2xl">
                <FaExclamationTriangle className="text-white text-2xl" />
              </div>
              <div className="text-left">
                <span className="text-orange-600 font-bold text-xl block">Akhuwat Network</span>
                <span className="text-gray-500 text-sm">Important Disclaimers</span>
              </div>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-black text-gray-900 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                Disclaimer
              </span>
            </motion.h1>

            <motion.p
              className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Please read this disclaimer carefully before using our website or services. This disclaimer outlines the
              limitations of our liability and your responsibilities as a user.
            </motion.p>

            <motion.div
              className="mt-8 text-sm text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Last Updated: January 2024
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Disclaimer Sections */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {disclaimerSections.map((section, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-12 h-12 ${section.color} bg-opacity-10 rounded-full flex items-center justify-center`}
                  >
                    <section.icon className={`text-2xl ${section.color}`} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                </div>

                <div className="space-y-4">
                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notices */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-black text-gray-900 mb-8">
              Important{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Notices</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Additional important information you should be aware of when using our services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {importantNotices.map((notice, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl shadow-xl border border-orange-100 p-8 hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{notice.title}</h3>
                <p className="text-gray-700 leading-relaxed">{notice.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Notice */}
      <section className="py-24 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <FaExclamationTriangle className="text-5xl text-yellow-300 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-6">Legal Notice</h2>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  This disclaimer is governed by the laws of Pakistan. By using our website and services, you agree to
                  the terms outlined in this disclaimer.
                </p>
                <p>
                  If any part of this disclaimer is found to be unenforceable, the remaining provisions will continue to
                  be valid and enforceable.
                </p>
                <p>
                  We reserve the right to modify this disclaimer at any time. Changes will be effective immediately upon
                  posting on our website.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Questions or Concerns?</h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              If you have any questions about this disclaimer or need clarification on any point, please contact us. We
              are here to help and provide the information you need.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPhone />
                Call: +92 328 1969250
              </motion.button>

              <motion.button
                className="bg-white border-2 border-orange-600 text-orange-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-orange-50 transition-all duration-300 flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope />
                Email: legal@akhuwat.org.pk
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default DisclaimerPage

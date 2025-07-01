"use client"

import { motion } from "framer-motion"
import { FaFileContract, FaExclamationTriangle, FaPhone, FaEnvelope } from "react-icons/fa"

const TermsConditionsPage = () => {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: [
        "By accessing and using Akhuwat Network's services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.",
        "These terms constitute a legally binding agreement between you and Akhuwat Network.",
        "If you do not agree with any part of these terms, you must not use our services.",
      ],
    },
    {
      title: "2. Loan Application and Approval",
      content: [
        "All loan applications are subject to our credit assessment and approval process.",
        "Approval is not guaranteed and depends on meeting our eligibility criteria.",
        "We reserve the right to request additional documentation or information during the application process.",
        "Loan terms, amounts, and conditions may vary based on individual circumstances.",
      ],
    },
    {
      title: "3. Interest-Free Financing",
      content: [
        "Akhuwat Network provides interest-free loans in accordance with Islamic Sharia principles.",
        "No interest, markup, or additional charges are applied to the principal loan amount.",
        "Administrative fees may apply for processing and documentation.",
        "Late payment charges may be imposed for overdue installments.",
      ],
    },
    {
      title: "4. Repayment Obligations",
      content: [
        "Borrowers are obligated to repay loans according to the agreed schedule.",
        "Monthly installments must be paid on or before the due date.",
        "Early repayment is allowed without any penalties.",
        "Failure to make timely payments may result in loan default and legal action.",
      ],
    },
    {
      title: "5. Guarantor Requirements",
      content: [
        "Most loans require one or more guarantors as per our lending policy.",
        "Guarantors are jointly liable for loan repayment in case of borrower default.",
        "Guarantors must meet our eligibility criteria and provide required documentation.",
        "Guarantor obligations continue until the loan is fully repaid.",
      ],
    },
    {
      title: "6. Privacy and Data Protection",
      content: [
        "We collect and process personal information in accordance with our Privacy Policy.",
        "Your information may be shared with credit bureaus and regulatory authorities.",
        "We implement appropriate security measures to protect your data.",
        "You have the right to access and correct your personal information.",
      ],
    },
    {
      title: "7. Limitation of Liability",
      content: [
        "Akhuwat Network's liability is limited to the extent permitted by law.",
        "We are not liable for indirect, consequential, or punitive damages.",
        "Our maximum liability shall not exceed the loan amount in question.",
        "We do not guarantee uninterrupted or error-free service.",
      ],
    },
    {
      title: "8. Modification of Terms",
      content: [
        "We reserve the right to modify these terms at any time.",
        "Changes will be communicated through our website or direct notification.",
        "Continued use of our services constitutes acceptance of modified terms.",
        "Material changes may require explicit consent from borrowers.",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400 rounded-full animate-float blur-3xl"></div>
          <div className="absolute bottom-32 right-20 w-80 h-80 bg-purple-400 rounded-full animate-float-reverse blur-3xl"></div>
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
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl">
                <FaFileContract className="text-white text-2xl" />
              </div>
              <div className="text-left">
                <span className="text-blue-600 font-bold text-xl block">Akhuwat Network</span>
                <span className="text-gray-500 text-sm">Legal Terms & Conditions</span>
              </div>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-black text-gray-900 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Terms &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Conditions
              </span>
            </motion.h1>

            <motion.p
              className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Please read these terms and conditions carefully before using our services. These terms govern your
              relationship with Akhuwat Network and outline your rights and responsibilities.
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

      {/* Terms Content */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {index + 1}
                  </div>
                  {section.title}
                </h2>

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

      {/* Important Notice */}
      <section className="py-24 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            className="bg-white rounded-3xl shadow-2xl border border-orange-200 p-12"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-8">
              <FaExclamationTriangle className="text-4xl text-orange-600" />
              <h2 className="text-3xl font-bold text-gray-900">Important Notice</h2>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                <strong>Legal Compliance:</strong> These terms are governed by the laws of Pakistan and comply with
                Islamic Sharia principles. Any disputes will be resolved through Pakistani courts or Islamic arbitration
                as appropriate.
              </p>

              <p>
                <strong>Regulatory Compliance:</strong> Akhuwat Network operates under the supervision of relevant
                regulatory authorities in Pakistan. We maintain compliance with all applicable laws and regulations.
              </p>

              <p>
                <strong>Contact for Legal Matters:</strong> For any legal questions or concerns regarding these terms,
                please contact our legal department at legal@akhuwat.org.pk or call our helpline.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8">Questions About Our Terms?</h2>
            <p className="text-xl text-blue-100 mb-12 leading-relaxed">
              If you have any questions about these Terms and Conditions, please don't hesitate to contact us. Our team
              is here to help clarify any concerns you may have.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPhone />
                Call: +92 328 1969250
              </motion.button>

              <motion.button
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope />
                Email: info@akhuwat.org.pk
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default TermsConditionsPage

"use client"

import { motion } from "framer-motion"
import {
  FaShieldAlt,
  FaLock,
  FaEye,
  FaUserShield,
  FaDatabase,
  FaPhone,
  FaEnvelope,
  FaExclamationCircle,
} from "react-icons/fa"

const PrivacyPolicyPage = () => {
  const privacySections = [
    {
      title: "1. Information We Collect",
      content: [
        "Personal Information: Name, address, phone number, email address, CNIC number, and other identification details.",
        "Financial Information: Income details, bank statements, employment information, and credit history.",
        "Loan Information: Loan application details, repayment history, and transaction records.",
        "Technical Information: IP address, browser type, device information, and website usage data.",
        "Communication Records: Phone calls, emails, and other communications with our team.",
      ],
    },
    {
      title: "2. How We Use Your Information",
      content: [
        "Processing loan applications and making credit decisions.",
        "Verifying your identity and preventing fraud.",
        "Communicating with you about your loan and our services.",
        "Complying with legal and regulatory requirements.",
        "Improving our services and developing new products.",
        "Marketing our services (with your consent).",
      ],
    },
    {
      title: "3. Information Sharing and Disclosure",
      content: [
        "Credit Bureaus: We may share your information with credit reporting agencies.",
        "Regulatory Authorities: Information may be shared with government agencies as required by law.",
        "Service Providers: Third-party vendors who help us provide our services.",
        "Legal Requirements: When required by court orders, legal processes, or law enforcement.",
        "Business Transfers: In case of merger, acquisition, or sale of our business.",
      ],
    },
    {
      title: "4. Data Security Measures",
      content: [
        "We implement industry-standard security measures to protect your information.",
        "Data encryption during transmission and storage.",
        "Access controls and authentication systems.",
        "Regular security audits and vulnerability assessments.",
        "Employee training on data protection and confidentiality.",
        "Secure disposal of physical and electronic records.",
      ],
    },
    {
      title: "5. Your Rights and Choices",
      content: [
        "Access: You can request access to your personal information we hold.",
        "Correction: You can request correction of inaccurate or incomplete information.",
        "Deletion: You can request deletion of your information (subject to legal requirements).",
        "Portability: You can request a copy of your information in a portable format.",
        "Opt-out: You can opt-out of marketing communications at any time.",
        "Complaints: You can file complaints about our data handling practices.",
      ],
    },
    {
      title: "6. Data Retention",
      content: [
        "We retain your information for as long as necessary to provide our services.",
        "Loan records are kept for the duration required by banking regulations.",
        "Marketing information is retained until you opt-out or withdraw consent.",
        "Legal requirements may require us to retain certain information for specific periods.",
        "We regularly review and delete information that is no longer needed.",
      ],
    },
    {
      title: "7. Cookies and Tracking",
      content: [
        "We use cookies to improve your website experience and analyze usage patterns.",
        "Essential cookies are necessary for website functionality.",
        "Analytics cookies help us understand how visitors use our website.",
        "Marketing cookies may be used for targeted advertising (with consent).",
        "You can control cookie settings through your browser preferences.",
      ],
    },
    {
      title: "8. International Transfers",
      content: [
        "Your information may be transferred to and processed in other countries.",
        "We ensure appropriate safeguards are in place for international transfers.",
        "Data processing agreements are established with international service providers.",
        "We comply with applicable data protection laws for cross-border transfers.",
      ],
    },
  ]

  const dataTypes = [
    {
      icon: FaUserShield,
      title: "Personal Data",
      description: "Identity, contact, and demographic information",
      examples: ["Full Name", "CNIC Number", "Address", "Phone Number"],
      color: "text-blue-600",
      bgColor: "from-blue-50 to-blue-100",
    },
    {
      icon: FaDatabase,
      title: "Financial Data",
      description: "Income, assets, and financial transaction information",
      examples: ["Bank Statements", "Salary Details", "Loan History", "Credit Score"],
      color: "text-emerald-600",
      bgColor: "from-emerald-50 to-emerald-100",
    },
    {
      icon: FaEye,
      title: "Usage Data",
      description: "Website interaction and behavioral information",
      examples: ["Page Views", "Click Patterns", "Session Duration", "Device Info"],
      color: "text-purple-600",
      bgColor: "from-purple-50 to-purple-100",
    },
    {
      icon: FaLock,
      title: "Security Data",
      description: "Authentication and security-related information",
      examples: ["Login Credentials", "Security Questions", "Access Logs", "IP Addresses"],
      color: "text-orange-600",
      bgColor: "from-orange-50 to-orange-100",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400 rounded-full animate-float blur-3xl"></div>
          <div className="absolute bottom-32 right-20 w-80 h-80 bg-green-400 rounded-full animate-float-reverse blur-3xl"></div>
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
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl">
                <FaShieldAlt className="text-white text-2xl" />
              </div>
              <div className="text-left">
                <span className="text-blue-600 font-bold text-xl block">Akhuwat Network</span>
                <span className="text-gray-500 text-sm">Data Protection & Privacy</span>
              </div>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-black text-gray-900 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Privacy{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
                Policy
              </span>
            </motion.h1>

            <motion.p
              className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Your privacy is important to us. This policy explains how we collect, use, protect, and share your
              personal information when you use our services.
            </motion.p>

            <motion.div
              className="mt-8 text-sm text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Last Updated: January 2024 | Effective Date: January 1, 2024
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Data Types Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-black text-gray-900 mb-8">
              Types of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
                Data We Collect
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dataTypes.map((type, index) => (
              <motion.div
                key={index}
                className={`bg-gradient-to-br ${type.bgColor} rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="text-center">
                  <div
                    className={`w-16 h-16 ${type.color} bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}
                  >
                    <type.icon className="text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{type.title}</h3>
                  <p className="text-gray-700 mb-4 text-sm">{type.description}</p>
                  <div className="space-y-1">
                    {type.examples.map((example, i) => (
                      <div key={i} className="text-xs text-gray-600 bg-white/50 rounded-full px-3 py-1">
                        {example}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-12">
            {privacySections.map((section, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {index + 1}
                  </div>
                  {section.title}
                </h2>

                <div className="space-y-4">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Commitment */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-3xl p-12 text-white relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-48 translate-x-48"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full translate-y-40 -translate-x-40"></div>
            </div>

            <div className="relative z-10">
              <div className="text-center mb-12">
                <FaLock className="text-6xl text-white mx-auto mb-6" />
                <h2 className="text-4xl font-bold mb-6">Our Security Commitment</h2>
                <p className="text-xl text-blue-100 leading-relaxed max-w-4xl mx-auto">
                  We employ bank-level security measures to protect your personal and financial information. Your trust
                  is our priority, and we continuously invest in advanced security technologies.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: FaShieldAlt,
                    title: "Data Encryption",
                    description: "256-bit SSL encryption for all data transmission",
                  },
                  {
                    icon: FaLock,
                    title: "Secure Storage",
                    description: "Encrypted databases with restricted access controls",
                  },
                  {
                    icon: FaUserShield,
                    title: "Privacy by Design",
                    description: "Built-in privacy protection in all our systems",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="text-2xl text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-blue-100">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact for Privacy */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl shadow-2xl p-12 border border-gray-100">
              <FaExclamationCircle className="text-5xl text-blue-600 mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Privacy Questions or Concerns?</h2>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                If you have any questions about this Privacy Policy, want to exercise your rights, or have concerns
                about how we handle your data, please contact our Data Protection Officer.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-blue-50 rounded-2xl p-6">
                  <FaEnvelope className="text-3xl text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Email Us</h3>
                  <p className="text-gray-700">privacy@akhuwat.org.pk</p>
                  <p className="text-sm text-gray-600 mt-2">Data Protection Officer</p>
                </div>

                <div className="bg-emerald-50 rounded-2xl p-6">
                  <FaPhone className="text-3xl text-emerald-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Call Us</h3>
                  <p className="text-gray-700">+92 328 1969250</p>
                  <p className="text-sm text-gray-600 mt-2">Privacy Helpline</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.button
                  className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaEnvelope />
                  Contact Privacy Officer
                </motion.button>

                <motion.button
                  className="bg-white border-2 border-blue-600 text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaShieldAlt />
                  Request Data Access
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default PrivacyPolicyPage

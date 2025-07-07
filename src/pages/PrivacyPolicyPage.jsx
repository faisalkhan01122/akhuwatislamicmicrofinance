"use client"
import { motion } from "framer-motion"
import {  FaHandHoldingHeart, FaMosque, FaLock, FaUserShield, FaInfoCircle } from "react-icons/fa"
import { RiRefund2Fill } from "react-icons/ri"
import { BsShieldCheck } from "react-icons/bs"
import { FaBookQuran } from "react-icons/fa6";

const PrivacyPolicyPage = () => {
  const islamicPrivacySections = [
    {
      title: "1. Islamic Principles of Confidentiality (Amanah)",
      content: [
        "All personal information is treated as an Amanah (sacred trust) in accordance with Islamic teachings.",
        "We follow the Prophetic tradition of keeping secrets and protecting personal information.",
        "Your data is handled with the same confidentiality as discussed in private Islamic consultations.",
      ],
      ayah: "“Indeed, Allah commands you to render trusts to whom they are due” (Quran 4:58)"
    },
    {
      title: "2. Information We Collect According to Sharia",
      content: [
        "Basic identification details necessary for Islamic contracts (Aqd).",
        "Financial information required for Qard-e-Hasana (benevolent loan) assessment.",
        "Contact details to fulfill our Islamic duty of communication.",
        "Only information that is Islamically permissible to collect is requested.",
      ],
      ayah: "“And do not consume one another's wealth unjustly” (Quran 2:188)"
    },
    {
      title: "3. Sharia-Compliant Use of Information",
      content: [
        "Processing Qard-e-Hasana applications in accordance with Islamic finance principles.",
        "Verifying identity to prevent fraud (Gharar) in transactions.",
        "Mosque-based community support and financial counseling.",
        "Islamic compliance reporting to our Sharia Advisory Board.",
      ],
      ayah: "“And fulfill the covenant, for the covenant will be questioned about” (Quran 17:34)"
    },
    {
      title: "4. Islamic Data Sharing Ethics",
      content: [
        "Information may be shared with mosque committees for community-based decision making.",
        "Reporting to Islamic regulatory bodies as required by Sharia compliance.",
        "With Islamic financial institutions for verification purposes only.",
        "Never for purposes that would involve Riba (interest) or other prohibited transactions.",
      ],
      ayah: "“And cooperate in righteousness and piety” (Quran 5:2)"
    },
    {
      title: "5. Your Islamic Privacy Rights",
      content: [
        "Right to access your information as per Islamic principles of transparency.",
        "Right to correct any inaccuracies to maintain truthful records (Sidq).",
        "Right to request deletion where Islamically permissible.",
        "Right to object to processing that may conflict with Islamic values.",
      ],
      ayah: "“And do not conceal testimony, for whoever conceals it - his heart is sinful” (Quran 2:283)"
    },
    {
      title: "6. Islamic Data Security Measures",
      content: [
        "Information protected as an Amanah (trust) with highest security standards.",
        "Access limited to those with legitimate Islamic need-to-know.",
        "Regular audits by our Sharia Compliance Committee.",
        "Secure disposal following Islamic principles of document preservation.",
      ],
      ayah: "“And let there be [arising] from you a nation inviting to good” (Quran 3:104)"
    }
  ]

  const islamicDataPrinciples = [
    {
      icon: FaBookQuran,
      title: "Sharia Compliance",
      description: "All data practices reviewed by Islamic scholars",
      examples: ["Halal data collection", "Ethical usage", "No Riba involvement"],
      color: "text-emerald-600",
      bgColor: "from-emerald-50 to-emerald-100"
    },
    {
      icon: FaHandHoldingHeart,
      title: "Trust (Amanah)",
      description: "Your information is a sacred trust",
      examples: ["Confidential handling", "Need-to-know access", "Secure storage"],
      color: "text-blue-600",
      bgColor: "from-blue-50 to-blue-100"
    },
    {
      icon: FaMosque,
      title: "Community Benefit",
      description: "Used only for permissible community good",
      examples: ["Mosque support", "Islamic finance", "Charity coordination"],
      color: "text-amber-600",
      bgColor: "from-amber-50 to-amber-100"
    },
    {
      icon: FaLock,
      title: "Protection (Hifz)",
      description: "Guarded as required by Islamic law",
      examples: ["Encryption", "Access controls", "Secure disposal"],
      color: "text-purple-600",
      bgColor: "from-purple-50 to-purple-100"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-emerald-50">
      {/* Islamic Hero Section */}
      <section className="relative py-24 overflow-hidden bg-[url('https://static.vecteezy.com/system/resources/previews/014/664/051/non_2x/islamic-ornament-persian-motiff-3d-ramadan-islamic-round-pattern-elements-geometric-circular-ornamental-arabic-symbol-gold-background-vector.jpg')] bg-cover">
        <div className="absolute inset-0 bg-emerald-900/90"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="flex flex-col items-center justify-center gap-2 mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="text-4xl text-emerald-300 mb-2" style={{ fontFamily: 'Traditional Arabic' }}>سياسة الخصوصية</div>
              <div className="w-20 h-1 bg-amber-400 mb-4"></div>
              <div className="text-xl text-emerald-200">Akhuwat Islamic Privacy Policy</div>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Islamic <span className="text-amber-300">Privacy</span> & Data Protection
            </motion.h1>

            <motion.p
              className="text-2xl text-emerald-100 max-w-4xl mx-auto leading-relaxed mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              "Whoever keeps the secrets of his brother in this world, Allah will keep his secrets in this world and the Hereafter" (Muslim)
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Islamic Data Principles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-emerald-600 text-3xl mb-4" style={{ fontFamily: 'Traditional Arabic' }}>مبادئ البيانات الإسلامية</div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Islamic <span className="text-emerald-600">Data</span> Principles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              "The believers in their mutual kindness, compassion and sympathy are just like one body" (Bukhari)
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {islamicDataPrinciples.map((principle, index) => (
              <motion.div 
                key={index}
                className={`bg-gradient-to-br ${principle.bgColor} rounded-xl p-8 shadow-lg border border-emerald-100 hover:shadow-xl transition-all`}
                whileHover={{ y: -10 }}
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mb-6 mx-auto">
                  <principle.icon className={`text-2xl ${principle.color}`} />
                </div>
                <h3 className="text-xl font-bold text-center text-gray-900 mb-4">{principle.title}</h3>
                <p className="text-gray-700 text-center text-sm mb-4">{principle.description}</p>
                <div className="space-y-2">
                  {principle.examples.map((example, i) => (
                    <div key={i} className="text-xs text-gray-600 bg-white/80 rounded-full px-3 py-1 text-center">
                      {example}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Islamic Privacy Policy Content */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-12">
            {islamicPrivacySections.map((section, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg border border-emerald-100 p-8 hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-emerald-600 to-teal-700 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {index + 1}
                  </div>
                  {section.title}
                </h2>

                <div className="space-y-4 mb-6">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 leading-relaxed text-sm">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="text-sm text-emerald-600 italic border-r-4 border-emerald-200 pr-4">
                  {section.ayah}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Islamic Security Commitment */}
      <section className="py-24 bg-[url('https://static.vecteezy.com/system/resources/previews/014/664/051/non_2x/islamic-ornament-persian-motiff-3d-ramadan-islamic-round-pattern-elements-geometric-circular-ornamental-arabic-symbol-gold-background-vector.jpg')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-emerald-900/90"></div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-xl p-12 border border-emerald-300/20 text-white"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <FaUserShield className="text-6xl text-amber-300 mx-auto mb-6" />
              <h2 className="text-4xl font-bold mb-6">Our Islamic Security Commitment</h2>
              <p className="text-xl text-emerald-200 leading-relaxed max-w-4xl mx-auto">
                "Allah loves when one of you does something, that he does it with excellence" (Bayhaqi)
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: FaLock,
                  title: "Islamic Encryption",
                  description: "Data protected as sacred trust (Amanah)"
                },
                {
                  icon: BsShieldCheck,
                  title: "Sharia Audits",
                  description: "Regular reviews by Islamic scholars"
                },
                {
                  icon: FaInfoCircle,
                  title: "Transparency",
                  description: "Clear Islamic disclosure of practices"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="text-2xl text-amber-300" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-emerald-200">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Islamic Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            className="text-center bg-gradient-to-br from-white to-emerald-50 rounded-xl shadow-lg p-12 border border-emerald-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-emerald-600 text-4xl mb-4" style={{ fontFamily: 'Traditional Arabic' }}>اتصل بنا</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Islamic Privacy Questions?</h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              "Whoever relieves a Muslim of a burden from the burdens of the worldly life, Allah will relieve him of a burden from the burdens on the Day of Judgment" (Tirmidhi)
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-emerald-50 rounded-xl p-6">
                <FaBookQuran className="text-3xl text-emerald-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Sharia Compliance Officer</h3>
                <p className="text-gray-700">sharia@akhuwat.org.pk</p>
                <p className="text-sm text-gray-600 mt-2">For Islamic compliance questions</p>
              </div>

              <div className="bg-blue-50 rounded-xl p-6">
                <FaUserShield className="text-3xl text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Data Protection Officer</h3>
                <p className="text-gray-700">+92 328 196 9250</p>
                <p className="text-sm text-gray-600 mt-2">For privacy concerns</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                href="/contact-us"
                className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white px-8 py-4 rounded-lg font-bold hover:shadow-lg transition-all flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05 }}
              >
                <FaMosque />
                Visit Mosque Helpdesk
              </motion.a>

              <motion.a
                href="https://wa.me/923354571620"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-lg font-bold hover:bg-emerald-50 transition-all flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05 }}
              >
                <RiRefund2Fill />
                Request Your Data
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quranic Closing */}
      <section className="py-16 bg-gradient-to-r from-emerald-800 to-teal-900 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-white text-4xl mb-6" style={{ fontFamily: 'Traditional Arabic' }}>
            وَتَعَاوَنُوا۟ عَلَى ٱلْبِرِّ وَٱلتَّقْوَىٰ ۖ وَلَا تَعَاوَنُوا۟ عَلَى ٱلْإِثْمِ وَٱلْعُدْوَٰنِ
          </div>
          <p className="text-xl text-emerald-200">
            "And cooperate in righteousness and piety, but do not cooperate in sin and aggression" (Quran 5:2)
          </p>
        </div>
      </section>
    </div>
  )
}

export default PrivacyPolicyPage
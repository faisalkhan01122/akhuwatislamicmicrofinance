"use client"
import { motion } from "framer-motion"
import {  FaHandHoldingHeart, FaMosque,  FaInfoCircle } from "react-icons/fa"
import { RiRefund2Fill } from "react-icons/ri"
import { BsShieldCheck } from "react-icons/bs"
import { FaBookQuran } from "react-icons/fa6";
import { FaScaleBalanced } from "react-icons/fa6";

const TermsConditionsPage = () => {
  const islamicTerms = [
    {
      title: "1. Islamic Contract Principles (Aqd)",
      content: [
        "All agreements with Akhuwat are based on Islamic contract law (Fiqh al-Mu'amalat).",
        "Transactions must be free from Riba (interest), Gharar (uncertainty), and Maysir (gambling).",
        "Both parties must enter into agreements with full consent and understanding.",
      ],
      ayah: "“O you who believe! Fulfill your contracts” (Quran 5:1)"
    },
    {
      title: "2. Qard-e-Hasana Conditions",
      content: [
        "Loans are provided as Qard-e-Hasana (benevolent loans) without interest.",
        "Borrowers must intend to repay as an Islamic obligation (Amanah).",
        "Administrative fees must be reasonable and not resemble interest.",
      ],
      ayah: "“Who is it that would loan Allah a goodly loan?” (Quran 2:245)"
    },
    {
      title: "3. Islamic Repayment Ethics",
      content: [
        "Timely repayment is a religious duty and moral obligation.",
        "Early repayment is considered virtuous and highly encouraged.",
        "Those facing hardship should seek mosque-based mediation.",
      ],
      ayah: "“If the debtor is in difficulty, grant him time” (Quran 2:280)"
    },
    {
      title: "4. Guarantor Responsibilities",
      content: [
        "Guarantors fulfill the Islamic principle of Kafala (surety).",
        "Guarantors must understand their Islamic financial responsibility.",
        "Default affects the spiritual and financial standing of both parties.",
      ],
      ayah: "“The guarantor is responsible” (Hadith, Tirmidhi)"
    },
    {
      title: "5. Islamic Data Privacy",
      content: [
        "Personal information is treated as Amanah (sacred trust).",
        "Data is only used for Islamically permissible purposes.",
        "Confidentiality follows Prophetic traditions of keeping secrets.",
      ],
      ayah: "“Indeed, Allah commands you to render trusts” (Quran 4:58)"
    },
    {
      title: "6. Mosque-Based Resolution",
      content: [
        "Disputes are first referred to mosque arbitration committees.",
        "Islamic mediation (Sulh) is preferred over legal action.",
        "Community elders may be involved in reconciliation.",
      ],
      ayah: "“Reconciliation is best” (Quran 4:128)"
    },
    {
      title: "7. Sharia Compliance",
      content: [
        "All terms are reviewed by our Sharia Advisory Board.",
        "Operations are regularly audited for Islamic compliance.",
        "Changes align with evolving Islamic finance standards.",
      ],
      ayah: "“Hold fast to the rope of Allah” (Quran 3:103)"
    }
  ]

  const islamicPrinciples = [
    {
      icon: FaBookQuran,
      title: "Sharia Basis",
      description: "All terms derived from Quran and Sunnah",
      color: "text-emerald-600",
      bgColor: "from-emerald-50 to-emerald-100"
    },
    {
      icon: FaHandHoldingHeart,
      title: "Qard-e-Hasana",
      description: "Pure benevolent lending model",
      color: "text-blue-600",
      bgColor: "from-blue-50 to-blue-100"
    },
    {
      icon: FaMosque,
      title: "Community Trust",
      description: "Mosque-based implementation",
      color: "text-amber-600",
      bgColor: "from-amber-50 to-amber-100"
    },
    {
      icon: FaScaleBalanced,
      title: "Islamic Justice",
      description: "Fair terms for all parties",
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
              <div className="text-4xl text-emerald-300 mb-2" style={{ fontFamily: 'Traditional Arabic' }}>الشروط والأحكام</div>
              <div className="w-20 h-1 bg-amber-400 mb-4"></div>
              <div className="text-xl text-emerald-200">Akhuwat Islamic Terms & Conditions</div>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Islamic <span className="text-amber-300">Contract</span> Terms
            </motion.h1>

            <motion.p
              className="text-2xl text-emerald-100 max-w-4xl mx-auto leading-relaxed mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              "The believers are those who are true to their trusts and covenants" (Quran 23:8)
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Islamic Principles Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-emerald-600 text-3xl mb-4" style={{ fontFamily: 'Traditional Arabic' }}>المبادئ الإسلامية</div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Islamic <span className="text-emerald-600">Principles</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              "Hold firmly to the rope of Allah and do not be divided" (Quran 3:103)
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {islamicPrinciples.map((principle, index) => (
              <motion.div 
                key={index}
                className={`bg-gradient-to-br ${principle.bgColor} rounded-xl p-8 shadow-lg border border-emerald-100 hover:shadow-xl transition-all`}
                whileHover={{ y: -10 }}
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mb-6 mx-auto">
                  <principle.icon className={`text-2xl ${principle.color}`} />
                </div>
                <h3 className="text-xl font-bold text-center text-gray-900 mb-4">{principle.title}</h3>
                <p className="text-gray-700 text-center text-sm">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Islamic Terms Content */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-12">
            {islamicTerms.map((term, index) => (
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
                  {term.title}
                </h2>

                <div className="space-y-4 mb-6">
                  {term.content.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 leading-relaxed text-sm">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="text-sm text-emerald-600 italic border-r-4 border-emerald-200 pr-4">
                  {term.ayah}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Islamic Notice Section */}
      <section className="py-24 bg-[url('https://static.vecteezy.com/system/resources/previews/014/664/051/non_2x/islamic-ornament-persian-motiff-3d-ramadan-islamic-round-pattern-elements-geometric-circular-ornamental-arabic-symbol-gold-background-vector.jpg')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-emerald-900/90"></div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-xl p-12 border border-emerald-300/20 text-white"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-8">
              <FaInfoCircle className="text-4xl text-amber-300" />
              <h2 className="text-3xl font-bold">Important Islamic Notice</h2>
            </div>

            <div className="space-y-6 text-emerald-100 leading-relaxed">
              <p>
                <strong>Sharia Compliance:</strong> These terms are governed by Islamic contract law and the laws of Pakistan where not in conflict with Sharia. Disputes are first referred to our Sharia Arbitration Council.
              </p>

              <p>
                <strong>Mosque-Based Support:</strong> For questions about these terms, please visit your local mosque center after Friday prayers to speak with our Islamic finance counselors.
              </p>

              <p>
                <strong>Changes to Terms:</strong> Any modifications will be announced in mosques and reviewed by our Sharia Advisory Board to ensure continued Islamic compliance.
              </p>
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
            <div className="text-emerald-600 text-4xl mb-4" style={{ fontFamily: 'Traditional Arabic' }}>تواصل معنا</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Sharia Questions?</h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              "The seeking of knowledge is obligatory for every Muslim" (Ibn Majah). Contact our Islamic scholars for guidance on these terms.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-emerald-50 rounded-xl p-6">
                <FaBookQuran className="text-3xl text-emerald-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Sharia Helpdesk</h3>
                <p className="text-gray-700">sharia@akhuwat.org.pk</p>
                <p className="text-sm text-gray-600 mt-2">For Islamic compliance questions</p>
              </div>

              <div className="bg-blue-50 rounded-xl p-6">
                <FaMosque className="text-3xl text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Mosque Consultation</h3>
                <p className="text-gray-700">After Friday prayers</p>
                <p className="text-sm text-gray-600 mt-2">At your local mosque center</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                href="/contact-us"
                className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white px-8 py-4 rounded-lg font-bold hover:shadow-lg transition-all flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05 }}
              >
                <FaMosque />
                Find Nearest Center
              </motion.a>

              <motion.a
                href="https://wa.me/923354571620"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-lg font-bold hover:bg-emerald-50 transition-all flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05 }}
              >
                <RiRefund2Fill />
                Request Scholar Callback
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

export default TermsConditionsPage
"use client"

import { motion } from "framer-motion"
import { FaScaleBalanced, FaHandshake, FaPhone, FaEnvelope, FaMosque } from "react-icons/fa6"
import { RiRefund2Fill } from "react-icons/ri"
import { FaInfoCircle } from "react-icons/fa";

import { FaBookQuran } from "react-icons/fa6";

import { BsShieldCheck } from "react-icons/bs"

const DisclaimerPage = () => {
  const islamicDisclaimers = [
    {
      icon: FaBookQuran,
      title: "Sharia Compliance",
      content: [
        "All financial services provided by Akhuwat strictly adhere to Islamic Sharia principles, free from Riba (interest) and other prohibited elements.",
        "Our Qard-e-Hasana (benevolent loan) model is approved by our Sharia Advisory Board comprising renowned Islamic scholars.",
        "While we ensure Sharia compliance in our operations, individual responsibility lies with users to ensure their usage aligns with Islamic principles.",
      ],
      color: "text-emerald-600",
      ayah: "“Allah has permitted trade and forbidden usury.” (Quran 2:275)"
    },
    {
      icon: FaHandshake,
      title: "Islamic Financial Responsibility",
      content: [
        "Taking loans is permissible in Islam but should be for genuine needs and with intention of repayment.",
        "Defaulting on loans without valid reason is considered oppression (Dhulm) in Islam.",
        "We encourage seeking Islamic financial counseling if uncertain about repayment capacity.",
      ],
      color: "text-blue-600",
      ayah: "“The borrower is a slave until he repays.” (Tirmidhi)"
    },
    {
      icon: FaScaleBalanced,
      title: "Islamic Legal Framework",
      content: [
        "All agreements are governed by Islamic contract law principles (Aqd in Sharia).",
        "Disputes are first referred to mosque-based reconciliation committees before legal action.",
        "We follow Islamic guidelines on debt collection with compassion and dignity.",
      ],
      color: "text-amber-600",
      ayah: "“And fulfill the covenant, for the covenant will be questioned about.” (Quran 17:34)"
    },
    {
      icon: RiRefund2Fill,
      title: "Repayment Ethics",
      content: [
        "Early repayment is considered a virtuous act in Islam and is highly encouraged.",
        "Those facing genuine hardship should contact us immediately for Islamic solutions.",
        "Charity (Sadaqah) is accepted for those unable to repay, following Sharia guidelines.",
      ],
      color: "text-purple-600",
      ayah: "“If the debtor is in difficulty, grant him time till it is easy for him to repay.” (Quran 2:280)"
    },
  ]

  const islamicNotices = [
    {
      title: "Sharia Oversight",
      description:
        "Our operations are supervised by a Board of Islamic Scholars ensuring continuous Sharia compliance. Annual Sharia audits are conducted by independent Islamic finance experts.",
      icon: BsShieldCheck
    },
    {
      title: "Islamic Data Ethics",
      description:
        "We handle personal information according to Islamic principles of confidentiality (Amanah) and only use data for permissible (Halal) purposes as outlined in our Islamic Privacy Charter.",
      icon: FaMosque
    },
    {
      title: "Islamic Dispute Resolution",
      description:
        "Following the Sunnah, disputes are first mediated through mosque-based reconciliation. Legal action is only pursued after exhausting Islamic mediation processes.",
      icon: FaHandshake
    },
    {
      title: "Islamic Financial Guidance",
      description:
        "Our services include free Islamic financial counseling to help community members make Sharia-compliant financial decisions in line with Quran and Sunnah.",
      icon: FaBookQuran
    },
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
              <div className="text-4xl text-emerald-300 mb-2" style={{ fontFamily: 'Traditional Arabic' }}>تنبيهات شرعية</div>
              <div className="w-20 h-1 bg-amber-400 mb-4"></div>
              <div className="text-xl text-emerald-200">Akhuwat Islamic Disclaimers</div>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <span className="text-amber-300">Islamic</span> Financial Responsibilities
            </motion.h1>

            <motion.p
              className="text-2xl text-emerald-100 max-w-4xl mx-auto leading-relaxed mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              "The believer's shade on the Day of Judgment will be his good conduct and fulfillment of trusts" (Ahmad)
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Islamic Disclaimer Sections */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-emerald-600 text-3xl mb-4" style={{ fontFamily: 'Traditional Arabic' }}>الشروط والأحكام</div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sharia <span className="text-emerald-600">Compliance</span> Disclaimers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              "The conditions most deserving to be fulfilled are those by which intimacy becomes permissible" (Bukhari)
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {islamicDisclaimers.map((section, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-500 group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-5 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-700 rounded-xl flex items-center justify-center shadow-md group-hover:rotate-12 transition-transform`}>
                    <section.icon className="text-white text-2xl" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                </div>

                <div className="space-y-4 mb-6">
                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-gray-700 leading-relaxed text-sm">
                      {paragraph}
                    </p>
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

      {/* Islamic Notices */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Important <span className="text-emerald-600">Islamic</span> Notices
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              "The believers in their mutual kindness, compassion and sympathy are just like one body" (Bukhari)
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {islamicNotices.map((notice, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg border border-emerald-100 p-8 hover:shadow-xl transition-all duration-500"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <notice.icon className="text-emerald-600 text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{notice.title}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm">{notice.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Islamic Legal Notice */}
      <section className="py-24 bg-[url('https://static.vecteezy.com/system/resources/previews/014/664/051/non_2x/islamic-ornament-persian-motiff-3d-ramadan-islamic-round-pattern-elements-geometric-circular-ornamental-arabic-symbol-gold-background-vector.jpg')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-emerald-900/90"></div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-xl p-12 border border-emerald-300/20"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div className="text-4xl text-amber-300 mb-4" style={{ fontFamily: 'Traditional Arabic' }}>إشعار قانوني إسلامي</div>
              <h2 className="text-3xl font-bold text-white mb-6">Islamic Legal Notice</h2>
              <div className="space-y-4 text-lg leading-relaxed text-emerald-100">
                <p>
                  This agreement is governed by Islamic contract law (Fiqh al-Mu'amalat) and the laws of Pakistan where not in conflict with Sharia.
                </p>
                <p>
                  Any disputes shall first be referred to our Sharia Arbitration Council before pursuing legal remedies.
                </p>
                <p>
                  We reserve the right to modify terms in accordance with evolving Islamic finance standards, with notice given through mosque announcements.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Islamic Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Sharia Questions?</h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              "The seeking of knowledge is obligatory for every Muslim" (Ibn Majah). Contact our Islamic scholars for guidance on Sharia compliance.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                href="tel:+923354571620"
                className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-emerald-700 transition-all duration-300 shadow-xl flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPhone />
                Call Sharia Helpdesk
              </motion.a>

              <motion.a
                href="mailto:sharia@akhuwat.org.pk"
                className="bg-white border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-lg font-bold hover:bg-emerald-50 transition-all duration-300 flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope />
                Email Islamic Scholars
              </motion.a>
            </div>

            <div className="mt-12 pt-8 border-t border-emerald-200">
              <h3 className="text-lg text-emerald-600 mb-4">Mosque Consultation Hours</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Visit your local mosque after Asr prayers to speak with our Islamic finance counselors about Sharia compliance.
              </p>
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
          <p className="text-xl text-emerald-200 mb-8">
            "And cooperate in righteousness and piety, but do not cooperate in sin and aggression" (Quran 5:2)
          </p>
        </div>
      </section>
    </div>
  )
}

export default DisclaimerPage
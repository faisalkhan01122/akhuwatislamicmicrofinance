"use client"
import { motion } from "framer-motion"
import { useState } from "react"
import { FaPhone, FaEnvelope, FaMosque, FaClock, FaWhatsapp, FaPaperPlane, FaUser, FaComments, FaMapMarkerAlt } from "react-icons/fa"
import { BsFillCalendar2CheckFill } from "react-icons/bs"

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const islamicContactInfo = [
    {
      icon: FaMosque,
      title: "Mosque Consultation",
      details: ["Visit your local mosque after Friday prayers", "Meet with our Islamic finance counselors"],
      color: "text-emerald-600",
      bgColor: "from-emerald-50 to-emerald-100",
      ayah: "“The mosque is the house of every pious person” (Tabarani)"
    },
    {
      icon: FaPhone,
      title: "Islamic Helpdesk",
     
      details: ["+92 328 196 9250", "Available from Fajr to Isha prayers"],
      color: "text-blue-600",
      bgColor: "from-blue-50 to-blue-100",
      ayah: "“Whoever relieves a difficulty, Allah will relieve his difficulties” (Bukhari)"
    },
    {
      icon: FaEnvelope,
      title: "Sharia Guidance",
      details: ["sharia@akhuwat.org.pk", "Response within 24 hours"],
      color: "text-amber-600",
      bgColor: "from-amber-50 to-amber-100",
      ayah: "“The seeking of knowledge is obligatory” (Ibn Majah)"
    },
    {
      icon: BsFillCalendar2CheckFill,
      title: "Visitation Hours",
      details: ["After Fajr to Isha prayers", "Friday: Special consultation after Jummah"],
      color: "text-purple-600",
      bgColor: "from-purple-50 to-purple-100",
      ayah: "“Take advantage of five before five” (Al-Hakim)"
    }
  ]

  const islamicBranches = [
    { 
      city: "Islamabad", 
      address: "House 45, Street 12, F-8/1, Islamabad", 
      phone: "+92 335 4571 q620",
      prayerTimes: "Fajr: 5:00 AM | Dhuhr: 12:30 PM"
    }
  ]

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-emerald-50">
      {/* Islamic Hero Section */}
      <section className="relative py-24 overflow-hidden bg-[url('/islamic-pattern-bg.png')] bg-cover">
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
              <div className="text-4xl text-emerald-300 mb-2" style={{ fontFamily: 'Traditional Arabic' }}>اتصل بنا</div>
              <div className="w-20 h-1 bg-amber-400 mb-4"></div>
              <div className="text-xl text-emerald-200">Akhuwat Islamic Contact</div>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Connect With <span className="text-amber-300">Islamic</span> Guidance
            </motion.h1>

            <motion.p
              className="text-2xl text-emerald-100 max-w-4xl mx-auto leading-relaxed mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              "Whoever guides someone to goodness will have a reward like one who did it" (Muslim)
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Islamic Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-emerald-600 text-3xl mb-4" style={{ fontFamily: 'Traditional Arabic' }}>وسائل الاتصال</div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Islamic <span className="text-emerald-600">Contact</span> Channels
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              "The believers in their mutual kindness, compassion and sympathy are just like one body" (Bukhari)
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {islamicContactInfo.map((info, index) => (
              <motion.div 
                key={index}
                className={`bg-gradient-to-br ${info.bgColor} rounded-xl p-8 shadow-lg border border-emerald-100 hover:shadow-xl transition-all`}
                whileHover={{ y: -10 }}
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mb-6 mx-auto">
                  <info.icon className={`text-2xl ${info.color}`} />
                </div>
                <h3 className="text-xl font-bold text-center text-gray-900 mb-4">{info.title}</h3>
                <div className="space-y-2 mb-6">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-700 text-center text-sm">{detail}</p>
                  ))}
                </div>
                <div className="text-sm text-emerald-600 italic border-r-4 border-emerald-200 pr-4 text-center">
                  {info.ayah}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Islamic Contact Form & Guidance */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Islamic Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-xl shadow-lg p-12 border border-emerald-100">
                <div className="flex items-center gap-4 mb-8">
                  <FaComments className="text-3xl text-emerald-600" />
                  <h3 className="text-3xl font-bold text-gray-900">Seek Islamic Guidance</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                      <div className="relative">
                        <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                          placeholder="Your name"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Contact Number</label>
                      <div className="relative">
                        <FaPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                          placeholder="Phone/WhatsApp"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                    <div className="relative">
                      <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                        placeholder="Your email (optional)"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Inquiry Type</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      required
                    >
                      <option value="">Select inquiry type</option>
                      <option value="qard-hasana">Qard-e-Hasana Inquiry</option>
                      <option value="islamic-finance">Islamic Finance Guidance</option>
                      <option value="repayment">Repayment Assistance</option>
                      <option value="volunteer">Volunteer Opportunities</option>
                      <option value="other">Other Islamic Query</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Your Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                      placeholder="Your Islamic finance questions..."
                      required
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-4 rounded-xl font-bold hover:shadow-lg transition-all flex items-center justify-center gap-3"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaPaperPlane />
                    Submit Islamic Inquiry
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Islamic Guidance Section */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Mosque Visit Info */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-emerald-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <FaMosque className="text-emerald-600" />
                  <span>Mosque-Based Consultation</span>
                </h3>
                <div className="space-y-4 text-gray-700">
                  <p>For personal Islamic finance guidance, we recommend visiting your local mosque center:</p>
                  <ul className="space-y-2 list-disc pl-5">
                    <li>Available after daily prayers</li>
                    <li>Friday: Special sessions after Jummah prayer</li>
                    <li>Bring necessary documents for Qard-e-Hasana inquiries</li>
                    <li>Islamic scholars available for Sharia questions</li>
                  </ul>
                  <div className="text-sm text-emerald-600 italic mt-4">
                    "The mosque is the house of every pious person" (Tabarani)
                  </div>
                </div>
              </div>

              {/* Quick Islamic Contact */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-emerald-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <FaComments className="text-amber-600" />
                  <span>Immediate Islamic Help</span>
                </h3>
                <div className="space-y-4">
                  <motion.a
                  href="tel:+923354571620"
                    className="flex items-center gap-4 p-4 bg-emerald-50 rounded-xl hover:bg-emerald-100 transition-all"
                    whileHover={{ x: 5 }}
                  >
                    <FaPhone className="text-emerald-600 text-xl" />
                    <div>
                      <p className="font-semibold text-gray-900">Islamic Helpdesk</p>
                      <p className="text-sm text-gray-600">+92 328 196 9250</p>
                    </div>
                  </motion.a>

                  <motion.a
                   href="https://wa.me/923354571620"
                target="_blank"
                rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-all"
                    whileHover={{ x: 5 }}
                  >
                    <FaWhatsapp className="text-green-600 text-xl" />
                    <div>
                      <p className="font-semibold text-gray-900">WhatsApp Imam</p>
                      <p className="text-sm text-gray-600">Instant Islamic guidance</p>
                    </div>
                  </motion.a>

                  <motion.a
                    href="mailto:sharia@akhuwat.org.pk"
                    className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-all"
                    whileHover={{ x: 5 }}
                  >
                    <FaEnvelope className="text-blue-600 text-xl" />
                    <div>
                      <p className="font-semibold text-gray-900">Sharia Questions</p>
                      <p className="text-sm text-gray-600">sharia@akhuwat.org.pk</p>
                    </div>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Islamic Branches Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-emerald-600 text-3xl mb-4" style={{ fontFamily: 'Traditional Arabic' }}>فروعنا</div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-emerald-600">Islamic</span> Centers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              "Whoever builds a mosque for Allah, Allah will build for him a house in Paradise" (Bukhari)
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {islamicBranches.map((branch, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-emerald-50 to-white rounded-xl shadow-lg p-8 border border-emerald-100 hover:shadow-xl transition-all"
                whileHover={{ y: -5 }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-700 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-md">
                    <FaMosque className="text-white text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{branch.city}</h3>
                  <p className="text-gray-700 mb-4">{branch.address}</p>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-center gap-2 text-blue-600 font-semibold">
                      <FaPhone className="text-sm" />
                      <span>{branch.phone}</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      {branch.prayerTimes}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Islamic Call to Action */}
      <section className="py-24 bg-[url('/mosque-bg.jpg')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-emerald-900/90"></div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-amber-300 text-4xl mb-4" style={{ fontFamily: 'Traditional Arabic' }}>مساعدة مالية</div>
            <h2 className="text-4xl font-bold text-white mb-8">Need Immediate Islamic Guidance?</h2>
            <p className="text-xl text-emerald-200 mb-12 leading-relaxed">
              "If anyone relieves a Muslim of his worldly distress, Allah will relieve him of his distress on the Day of Resurrection" (Muslim)
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                href="tel:+923354571620"
                className="bg-amber-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-amber-600 transition-all flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05 }}
              >
                <FaPhone />
                Call Islamic Helpdesk
              </motion.a>

              <motion.a
                href="/contact-us"
                className="bg-white/10 backdrop-blur-sm border border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-all flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05 }}
              >
                <FaMapMarkerAlt />
                Find Nearest Mosque
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

export default ContactUsPage
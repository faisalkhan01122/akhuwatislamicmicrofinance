"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaPaperPlane,
  FaUser,
  FaComments,
} from "react-icons/fa"

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const contactInfo = [
    {
      icon: FaPhone,
      title: "Phone Numbers",
      details: ["+92 328 1969250", ],
      color: "text-blue-600",
      bgColor: "from-blue-50 to-blue-100",
    },
    {
      icon: FaEnvelope,
      title: "Email Addresses",
      details: ["info@akhuwat.org.pk", ],
      color: "text-emerald-600",
      bgColor: "from-emerald-50 to-emerald-100",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Head Office",
      details: ["Akhuwat Islamic Microfinance", "House 45, Street 12, F-8/1", "Islamabad, Pakistan"],
      color: "text-purple-600",
      bgColor: "from-purple-50 to-purple-100",
    },
    {
      icon: FaClock,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM", "Sunday: Closed"],
      color: "text-orange-600",
      bgColor: "from-orange-50 to-orange-100",
    },
  ]

  const branches = [
    // { city: "Lahore", address: "92-A/1, Gulberg III, Lahore", phone: "+92 42 111 253 428" },
    // { city: "Karachi", address: "Plot 123, Block A, Gulshan-e-Iqbal, Karachi", phone: "+92 21 111 253 428" },
    { city: "Islamabad", address: "House 45, Street 12, F-8/1, Islamabad", phone: "+92 328 1969250" },
    // { city: "Faisalabad", address: "123 Civil Lines, Faisalabad", phone: "+92 41 111 253 428" },
    // { city: "Multan", address: "456 Cantt Area, Multan", phone: "+92 61 111 253 428" },
    // { city: "Peshawar", address: "789 University Road, Peshawar", phone: "+92 91 111 253 428" },
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
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400 rounded-full animate-float blur-3xl"></div>
          <div className="absolute bottom-32 right-20 w-80 h-80 bg-emerald-400 rounded-full animate-float-reverse blur-3xl"></div>
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
                <FaComments className="text-white text-2xl" />
              </div>
              <div className="text-left">
                <span className="text-blue-600 font-bold text-xl block">Akhuwat Network</span>
                <span className="text-gray-500 text-sm">Get in Touch With Us</span>
              </div>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-black text-gray-900 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Contact{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">Us</span>
            </motion.h1>

            <motion.p
              className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              We're here to help you with all your questions and loan applications. Reach out to us through any of the
              channels below, and our team will get back to you promptly.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
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
              Get in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">Touch</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className={`bg-gradient-to-br ${info.bgColor} rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="text-center">
                  <div
                    className={`w-16 h-16 ${info.color} bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}
                  >
                    <info.icon className="text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{info.title}</h3>
                  <div className="space-y-2">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-gray-700 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-3xl shadow-2xl p-12 border border-gray-100">
                <div className="flex items-center gap-4 mb-8">
                  <FaPaperPlane className="text-3xl text-blue-600" />
                  <h3 className="text-3xl font-bold text-gray-900">Send us a Message</h3>
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
                          className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="Enter your full name"
                          required
                        />
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
                          className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                      <div className="relative">
                        <FaPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="Enter your phone number"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="loan-inquiry">Loan Inquiry</option>
                        <option value="application-status">Application Status</option>
                        <option value="general-support">General Support</option>
                        <option value="complaint">Complaint</option>
                        <option value="partnership">Partnership</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us how we can help you..."
                      required
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaPaperPlane />
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Map & Quick Contact */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Map Placeholder */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Find Our Head Office</h3>
                <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
                  <div className="text-center">
                    <FaMapMarkerAlt className="text-4xl text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">Interactive Map</p>
                    <p className="text-sm text-gray-500">92-A/1, Gulberg III, Lahore</p>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Contact</h3>
                <div className="space-y-4">
                  <motion.a
                    href="tel:+923281969250"
                    className="flex items-center gap-4 p-4 bg-blue-50 rounded-2xl hover:bg-blue-100 transition-all duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <FaPhone className="text-blue-600 text-xl" />
                    <div>
                      <p className="font-semibold text-gray-900">Call Us Now</p>
                      <p className="text-sm text-gray-600">+92 328 1969250</p>
                    </div>
                  </motion.a>

                  <motion.a
                    href="https://wa.me/923281969250"
                    className="flex items-center gap-4 p-4 bg-emerald-50 rounded-2xl hover:bg-emerald-100 transition-all duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <FaWhatsapp className="text-emerald-600 text-xl" />
                    <div>
                      <p className="font-semibold text-gray-900">WhatsApp</p>
                      <p className="text-sm text-gray-600">Chat with us instantly</p>
                    </div>
                  </motion.a>

                  <motion.a
                    href="mailto:info@akhuwat.org.pk"
                    className="flex items-center gap-4 p-4 bg-purple-50 rounded-2xl hover:bg-purple-100 transition-all duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <FaEnvelope className="text-purple-600 text-xl" />
                    <div>
                      <p className="font-semibold text-gray-900">Email Us</p>
                      <p className="text-sm text-gray-600">info@akhuwat.org.pk</p>
                    </div>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Branch Locations */}
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
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
                Branches
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Visit any of our branches across Pakistan for personalized assistance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {branches.map((branch, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <FaMapMarkerAlt className="text-white text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{branch.city}</h3>
                  <p className="text-gray-700 mb-4">{branch.address}</p>
                  <div className="flex items-center justify-center gap-2 text-blue-600 font-semibold">
                    <FaPhone className="text-sm" />
                    <span>{branch.phone}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media & CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8">Stay Connected</h2>
            <p className="text-xl text-blue-100 mb-12 leading-relaxed">
              Follow us on social media for the latest updates, success stories, and financial tips. We're always here
              to support your journey to financial empowerment.
            </p>

            <div className="flex justify-center gap-6 mb-12">
              {[
                { icon: FaFacebook, href: "#", color: "hover:bg-blue-700" },
                { icon: FaTwitter, href: "#", color: "hover:bg-blue-400" },
                { icon: FaLinkedin, href: "#", color: "hover:bg-blue-800" },
                { icon: FaInstagram, href: "#", color: "hover:bg-pink-600" },
                { icon: FaWhatsapp, href: "#", color: "hover:bg-emerald-600" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-xl transition-all duration-300 ${social.color}`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>

            <motion.button
              className="bg-white text-blue-600 px-12 py-6 rounded-full font-bold text-xl hover:bg-gray-100 transition-all duration-300 shadow-2xl flex items-center justify-center gap-3 mx-auto"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPhone />
              Call Now: +92 328 1969250
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ContactUsPage

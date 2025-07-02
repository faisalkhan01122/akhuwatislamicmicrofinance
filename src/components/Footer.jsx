"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaHeart,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa"


const Footer = () => {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const footerLinks = [
    {
      title: "Quick Links",
      items: [
        { label: "Home", url: "/" },
        { label: "Loan Services", url: "/loans" },
        { label: "About Us", url: "/about" },
        // { label: "Apply Now", url: "/apply" },
        { label: "Contact", url: "/contact-us" },
      ],
    },
    {
      title: "Loan Programs",
      items: [
        { label: "Business Qarz-e-Hasna", url: "/loans/business" },
        { label: "Microfinance Solutions", url: "/loans/microfinance" },
        { label: "Personal Finance", url: "/loans/personal" },
        { label: "Healthcare Support", url: "/loans/healthcare" },
        { label: "Education Funding", url: "/loans/education" },
        { label: "Emergency Relief", url: "/loans/emergency" },
        { label: "Housing Finance", url: "/loans/housing" },
      ],
    },
    {
      title: "Help",
      items: [
        { label: "Support", url: "/help-center" },
        // { label: "FAQs", url: "/faq" },
        {label:"Disclaimer", url:"/disclaimer"},
        {label:"Terms-And-Conditions",url:"/terms-and-conditions"},
        { label: "Privacy Policy", url: "/privacy-policy" },
      ],
    },
  ]

  const socialIcons = [
    { icon: FaFacebook, url: "#" },
    { icon: FaTwitter, url: "#" },
    { icon: FaInstagram, url: "#" },
    { icon: FaLinkedin, url: "#" },
    { icon: FaYoutube, url: "#" },
  ]

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setTimeout(() => setIsSubscribed(false), 3000)
      setEmail("")
    }
  }

  return (
    <footer className="relative bg-gradient-to-br from-emerald-950 to-teal-900 text-white py-16 px-4 sm:px-6 lg:px-20 overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-emerald-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-teal-300 rounded-full blur-2xl animate-bounce"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-emerald-300 via-white to-teal-300 bg-clip-text text-transparent mb-6">
            Join Our Islamic Finance Movement
          </h2>
          <p className="text-lg text-teal-100 mb-10">
            Subscribe for updates on interest-free loans, success stories, and social initiatives.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email Address"
              className="px-6 py-4 rounded-full w-full text-black shadow-lg focus:outline-none focus:ring-4 focus:ring-emerald-300"
            />
            <button
              type="submit"
              className="px-6 py-4 bg-gradient-to-r flex items-center gap-2 from-white to-emerald-100 text-emerald-800 rounded-full font-semibold shadow-md hover:scale-105 transition-transform duration-300"
              disabled={isSubscribed}
            >
              {isSubscribed ? <FaCheckCircle /> : <>Subscribe <FaArrowRight /></>}
            </button>
          </form>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-12 text-sm">
          <div>
            <img src="/akhuwatfundslogo.png" alt="Akhuwat Logo" className="h-28 w-64 object-cover mb-4" />
            <p className="text-gray-300 mb-6">
              Akhuwat Islamic Microfinance empowers society with interest-free loans rooted in Islamic values and brotherhood.
            </p>
            <div className="flex gap-4">
              {socialIcons.map((s, i) => (
                <a
                  key={i}
                  href={s.url}
                  className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 text-white transition"
                >
                  <s.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((section, idx) => (
            <div key={idx}>
              <h4 className="font-bold text-lg text-emerald-200 mb-4 tracking-wide">{section.title}</h4>
              <ul className="space-y-3">
                {section.items.map((link, j) => (
                  <li key={j}>
                    <a href={link.url} className="text-gray-400 hover:text-white transition-all duration-300">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
          <p className="mb-2">© {new Date().getFullYear()} Akhuwat Islamic Microfinance All Rights Reserved.</p>
          <p className="flex justify-center items-center gap-2">
            <FaHeart className="text-red-500 animate-pulse" /> Made with sincerity and hope for Pakistan.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
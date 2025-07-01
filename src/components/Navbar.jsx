"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link, useLocation } from "react-router-dom"
import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaBuilding,
  FaUsers,
  FaUser,
  FaMedkit,
  FaGraduationCap,
  FaHome,
  FaExclamationTriangle,
  FaPhone,
  FaMosque,
  FaHandHoldingHeart,
  FaShieldAlt,
} from "react-icons/fa"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const loanServices = [
    {
      name: "Business Qarz-e-Hasna",
      path: "/loans/business",
      icon: FaBuilding,
      desc: "Up to ₨30 Lacs for Halal business growth",
      color: "text-emerald-600",
    },
    {
      name: "Microfinance Solutions",
      path: "/loans/microfinance",
      icon: FaUsers,
      desc: "₨50K-₨5L for small entrepreneurs",
      color: "text-blue-600",
    },
    {
      name: "Personal Finance",
      path: "/loans/personal",
      icon: FaUser,
      desc: "Up to ₨15 Lacs for personal needs",
      color: "text-purple-600",
    },
    {
      name: "Healthcare Support",
      path: "/loans/healthcare",
      icon: FaMedkit,
      desc: "Medical emergency financing",
      color: "text-red-600",
    },
    {
      name: "Education Funding",
      path: "/loans/education",
      icon: FaGraduationCap,
      desc: "Complete Islamic education support",
      color: "text-indigo-600",
    },
    {
      name: "Housing Finance",
      path: "/loans/housing",
      icon: FaHome,
      desc: "Up to ₨50 Lacs for dream homes",
      color: "text-orange-600",
    },
    {
      name: "Emergency Relief",
      path: "/loans/emergency",
      icon: FaExclamationTriangle,
      desc: "Instant crisis support",
      color: "text-yellow-600",
    },
  ]

  const navItems = [
    { name: "Home", path: "/", icon: FaMosque },
    { name: "About Akhuwat", path: "/about", icon: FaHandHoldingHeart },
    { name: "Islamic Finance", path: "/loans", dropdown: loanServices, icon: FaShieldAlt },
    { name: "Our Impact", path: "/impact", icon: FaUsers },
    { name: "Support", path: "/help-center", icon: FaHandHoldingHeart },
    { name: "Contact", path: "/contact-us", icon: FaPhone },
  ]

  // Toggle dropdown in mobile menu
  const toggleMobileDropdown = (name) => {
    if (activeDropdown === name) setActiveDropdown(null)
    else setActiveDropdown(name)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-8 transition-all duration-500 ${
        scrolled
          ? "bg-gradient-to-r from-white/90 via-white/80 to-white/90 shadow-xl backdrop-blur-lg border-b border-emerald-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-4 group">
          <motion.div
            className="relative"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="/akhuwatfundslogo.png" // Replace with your logo path
              alt="Akhuwat Logo"
              className="w-14 h-14 rounded-full object-contain shadow-lg group-hover:shadow-xl transition-all duration-300"
            />
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
          </motion.div>
          <div className="hidden md:block">
            <h1
              className={`text-xl font-black ${
                scrolled ? "text-gray-900" : "text-white"
              } transition-colors duration-300`}
            >
              Akhuwat
            </h1>
            <p
              className={`text-sm font-semibold ${
                scrolled ? "text-emerald-600" : "text-emerald-300"
              } transition-colors duration-300`}
            >
              Islamic Microfinance
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-2">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to={item.path}
                className={`relative flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300
                  after:content-[''] after:absolute after:bottom-1 after:left-6 after:h-[2px] after:bg-emerald-600 after:transition-all after:duration-300 after:w-0 hover:after:w-[calc(100%-3rem)]
                  ${
                    location.pathname === item.path
                      ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg"
                      : scrolled
                      ? "text-gray-800 hover:bg-emerald-50 hover:text-emerald-600"
                      : "text-white hover:bg-white/20 hover:backdrop-blur-sm"
                  }`}
              >
                <item.icon className="w-4 h-4" />
                {item.name}
                {item.dropdown && <FaChevronDown className="w-3 h-3 ml-1" />}
              </Link>
              <AnimatePresence>
                {item.dropdown && activeDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 15, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-3 w-[380px] max-h-[420px] overflow-y-auto bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-6 border border-emerald-100 z-50 scrollbar-thin scrollbar-thumb-emerald-200"
                  >
                    <div className="grid grid-cols-1 gap-3">
                      {item.dropdown.map((loan, i) => (
                        <motion.div
                          key={loan.name}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.05 }}
                        >
                          <Link
                            to={loan.path}
                            onClick={() => setActiveDropdown(null)}
                            className="flex gap-4 items-start hover:bg-emerald-50  p-4 rounded-2xl transition-all duration-300 group"
                          >
                            <div
                              className={`${loan.color} bg-opacity-10 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}
                            >
                              <loan.icon className={`w-5 h-5 ${loan.color}`} />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors duration-300">
                                {loan.name}
                              </h4>
                              <p className="text-sm text-gray-600 leading-relaxed">
                                {loan.desc}
                              </p>
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-emerald-100">
                      <p className="text-center text-sm text-gray-600 mb-3">
                        All loans are 100% interest-free and Sharia-compliant
                      </p>
                      <div className="flex justify-center">
                        <span className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold">
                          <FaShieldAlt className="w-3 h-3" />
                          Halal Finance Guaranteed
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden text-2xl p-2 rounded-md focus:outline-none transition-colors duration-300 ${
            scrolled ? "text-emerald-700 hover:text-teal-700" : "text-white hover:text-emerald-300"
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 backdrop-blur-md border-t border-emerald-100 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navItems.map((item) => (
                <div key={item.name} className="flex flex-col">
                  {!item.dropdown ? (
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg font-semibold transition-colors duration-300 ${
                        location.pathname === item.path
                          ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg"
                          : "text-gray-700 hover:bg-emerald-50 hover:text-emerald-700"
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      {item.name}
                    </Link>
                  ) : (
                    <>
                      <button
                        onClick={() => toggleMobileDropdown(item.name)}
                        className={`flex items-center justify-between px-4 py-3 rounded-lg font-semibold transition-colors duration-300 w-full
                          ${
                            location.pathname === item.path
                              ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg"
                              : "text-gray-700 hover:bg-emerald-50 hover:text-emerald-700"
                          }
                        `}
                      >
                        <span className="flex items-center gap-3">
                          <item.icon className="w-5 h-5" />
                          {item.name}
                        </span>
                        <FaChevronDown
                          className={`ml-2 transition-transform duration-300 ${
                            activeDropdown === item.name ? "rotate-180" : "rotate-0"
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col pl-10 mt-2 space-y-2 overflow-hidden"
                          >
                            {item.dropdown.map((loan) => (
                              <Link
                                key={loan.name}
                                to={loan.path}
                                onClick={() => setIsOpen(false)}
                                className="text-gray-700 hover:text-emerald-600 transition-colors duration-300 font-semibold py-1"
                              >
                                {loan.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar

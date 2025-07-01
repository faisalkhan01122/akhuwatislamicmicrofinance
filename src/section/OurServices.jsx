import { motion } from "framer-motion"
import {
  FaBuilding,
  FaHome,
  FaUser,
  FaUsers,
  FaGraduationCap,
  FaMedkit,
  FaArrowRight,
  FaCheckCircle,
  FaHandHoldingHeart,
  FaExclamationTriangle,
  FaStar,
  FaShieldAlt,
} from "react-icons/fa"

const services = [
  {
    title: "Business Financing",
    desc:
      "Interest-free Shariah-compliant loans to empower entrepreneurs in growing sustainable businesses with dignity and support.",
    icon: FaBuilding,
    color: "from-blue-600 to-indigo-600",
    features: ["Up to ₨30 Lacs", "0% Interest", "5-Day Fast Approval", "Business Mentorship"],
    popular: true,
    link: "/loans/business",
  },
  {
    title: "Microfinance for Women & Communities",
    desc:
      "Small loans designed to uplift women and local entrepreneurs, nurturing community growth through ethical finance.",
    icon: FaUsers,
    color: "from-green-600 to-emerald-600",
    features: ["₨50K to ₨5 Lacs", "Women Empowerment", "Group Lending", "Skill Development"],
    link: "/loans/microfinance",
  },
  {
    title: "Personal Support Loans",
    desc:
      "Quick, interest-free loans to meet urgent personal needs such as health emergencies and family support with respect.",
    icon: FaUser,
    color: "from-purple-600 to-pink-600",
    features: ["Up to ₨15 Lacs", "Emergency Aid", "Fast Disbursement", "Flexible Terms"],
    link: "/loans/personal",
  },
  {
    title: "Healthcare Financing",
    desc:
      "Support for medical expenses with zero-interest financing, enabling access to quality care for you and your family.",
    icon: FaMedkit,
    color: "from-red-600 to-rose-600",
    features: ["Medical Emergencies", "Surgical Support", "Treatment Plans", "Family Coverage"],
    link: "/loans/healthcare",
  },
  {
    title: "Education Financing",
    desc:
      "Sharia-compliant loans covering tuition, books, and living costs to make education accessible to all.",
    icon: FaGraduationCap,
    color: "from-indigo-600 to-purple-600",
    features: ["Full Fee Coverage", "Books & Supplies", "Living Expenses", "Merit-based Support"],
    link: "/loans/education",
  },
  {
    title: "Housing Finance",
    desc:
      "Interest-free home loans to help you build, buy, or renovate with long-term repayment plans and legal support.",
    icon: FaHome,
    color: "from-teal-600 to-green-600",
    features: ["Up to ₨50 Lacs", "Long-Term Plans", "Construction Support", "Legal Assistance"],
    link: "/loans/housing",
  },
  {
    title: "Emergency Relief Loans",
    desc:
      "Rapid support loans during disasters and crises, providing dignity and quick financial relief without interest.",
    icon: FaExclamationTriangle,
    color: "from-orange-600 to-red-600",
    features: ["Instant Approval", "24/7 Processing", "Disaster Support", "Crisis Relief"],
    link: "/loans/emergency",
  },
]

const OurServices = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-4 justify-center mb-6">
            <div className="p-3 rounded-full bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-md">
              <FaHandHoldingHeart className="w-8 h-8" />
            </div>
            <div className="text-left">
              <h4 className="text-teal-700 font-bold text-xl tracking-wide">Akhuwat Islamic Microfinance</h4>
              <p className="text-gray-600 text-sm font-medium">Serving Pakistan with interest-free finance since 2001</p>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600">
              Financial Solutions
            </span>
          </h2>

          <p className="text-gray-700 text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
            Empowering individuals and communities across Pakistan through ethical, Shariah-compliant, interest-free loans.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.7 }}
              whileHover={{ scale: 1.03, boxShadow: "0 10px 25px rgba(16, 185, 129, 0.3)" }}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg cursor-pointer flex flex-col"
            >
              <div
                className={`p-5 rounded-t-2xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white text-3xl font-bold`}
              >
                <service.icon className="w-8 h-8" />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-gray-900 font-bold text-xl mb-2">{service.title}</h3>
                <p className="text-gray-600 flex-grow mb-6 text-sm leading-relaxed">{service.desc}</p>

                <ul className="mb-6 space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-teal-600 text-sm font-semibold gap-2">
                      <FaCheckCircle /> {feature}
                    </li>
                  ))}
                </ul>

                <motion.a
                  href={service.link}
                  className={`mt-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-semibold text-white bg-gradient-to-r ${service.color} hover:brightness-110 transition`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More <FaArrowRight />
                </motion.a>
              </div>

              {service.popular && (
                <div className="absolute top-5 right-5 bg-teal-600 text-white rounded-full px-3 py-1 text-xs font-semibold shadow-md select-none">
                  Popular
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurServices

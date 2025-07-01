import { motion } from "framer-motion"
import LoanCard from "../components/LoanCard"

const cards = [
  {
    img: "/model-house-pile-coins-businessman-holding-coins-real-estate-investment-ideas-home-loans-new-home-loans-lowinterest-rates-homes-1-1-1.webp",
    title: "Akhuwat Loan",
    linkText: "Apply Online",
    linkUrl: "#",
    description:
      "Contact the Akhuwat Head Office Contact Number. When you make a call to Akhuwat Helpline, officials will guide you or contact via WhatsApp.",
  },
  {
    img: "/Student-Loan.png",
    title: "Akhuwat Student Loan",
    linkText: "Learn More",
    linkUrl: "#",
    description:
      "The Akhuwat Foundation offers student loans to make education more affordable and accessible. Covers tuition fees, books, and materials.",
  },
  {
    img: "/thesiliconreview-get-behind-the-wheel.webp",
    title: "Flexible Repayment",
    linkText: "How It Works",
    linkUrl: "#",
    description:
      "Akhuwat helps individuals build a life of dignity and mutual support with flexible, interest-free loan plans.",
  },
]

const LoanCardSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-white via-gray-50 to-green-50 relative overflow-hidden">
      {/* Floating decorative shapes */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-300 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-blue-300 rounded-full blur-2xl animate-float-reverse" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
              Loan Solutions
            </span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Discover flexible, ethical and affordable loan options built for your journey.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="hover:shadow-xl transition-shadow duration-300"
            >
              <LoanCard {...card} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LoanCardSection

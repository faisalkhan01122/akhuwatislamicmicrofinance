"use client"

import { motion } from "framer-motion"
import {
  FaSeedling,
  FaGraduationCap,
  FaHeartbeat,
  FaHome,
  FaHandsHelping,
  FaPeopleCarry,
} from "react-icons/fa"

const services = [
  {
    title: "Business Empowerment",
    desc: "Launch or expand your halal business with interest-free Qarz-e-Hasna — dignified finance rooted in faith.",
    icon: FaSeedling,
    colorFrom: "from-emerald-600",
    colorTo: "to-teal-500",
  },
  {
    title: "Education for All",
    desc: "We ensure bright futures through Islamic funding for schools, universities, and skills training.",
    icon: FaGraduationCap,
    colorFrom: "from-indigo-700",
    colorTo: "to-violet-500",
  },
  {
    title: "Healthcare Relief",
    desc: "Medical emergencies shouldn't bankrupt families. Akhuwat offers riba-free medical support.",
    icon: FaHeartbeat,
    colorFrom: "from-rose-600",
    colorTo: "to-red-400",
  },
  {
    title: "Housing Support",
    desc: "Build, repair, or secure a dignified home with long-term zero-interest housing assistance.",
    icon: FaHome,
    colorFrom: "from-orange-600",
    colorTo: "to-yellow-400",
  },
  {
    title: "Disaster Response",
    desc: "In floods, earthquakes, or personal crises, our emergency aid is swift, halal, and compassionate.",
    icon: FaHandsHelping,
    colorFrom: "from-sky-600",
    colorTo: "to-cyan-400",
  },
  {
    title: "Community Lending",
    desc: "Akhuwat’s model is based on trust, social capital, and Islamic brotherhood — not profit.",
    icon: FaPeopleCarry,
    colorFrom: "from-gray-800",
    colorTo: "to-slate-600",
  },
]

export default function OurServices() {
  return (
    <section className="w-full h-screen snap-y snap-mandatory overflow-y-scroll">
      {services.map((service, index) => {
        const Icon = service.icon
        return (
          <div
            key={index}
            className={`snap-start w-full h-screen flex items-center justify-center bg-gradient-to-br ${service.colorFrom} ${service.colorTo} text-white`}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-3xl text-center px-4"
            >
              <div className="text-5xl mb-6">
                <Icon className="mx-auto animate-bounce" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h2>
              <p className="text-lg md:text-xl font-light mb-8">{service.desc}</p>
              <a
                href="/loans"
                className="inline-block px-8 py-4 bg-white text-black font-bold rounded-full shadow-lg hover:scale-105 transition"
              >
                Explore More →
              </a>
            </motion.div>
          </div>
        )
      })}
    </section>
  )
}

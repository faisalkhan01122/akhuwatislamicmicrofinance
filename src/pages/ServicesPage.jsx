"use client"
import { motion } from "framer-motion"
import HeroImgSection from "../components/HeroImgSection"
import { FaMosque, FaHandHoldingHeart, FaUniversity, FaHome, FaUser, FaClinicMedical, FaArrowRight } from "react-icons/fa"
import { RiRefund2Fill } from "react-icons/ri"
import { BsFillCalendar2CheckFill } from "react-icons/bs"
import { FaBookQuran } from "react-icons/fa6";

const ServicesPage = () => {
  const islamicServices = [
    {
      title: "Qard-e-Hasana for Business",
      description: "Interest-free capital for halal business ventures following Islamic finance principles. Support for entrepreneurs to establish or expand their trade.",
      image: "/islamic-business.jpg",
      icon: FaMosque,
      color: "from-emerald-600 to-teal-700",
      features: ["Sharia-compliant financing", "Up to ₨25 Lacs", "No Riba involved", "Business mentoring"],
      ayah: "“Allah has permitted trade and forbidden usury” (Quran 2:275)",
      href: "/loans/business"
    },
    {
      title: "Islamic Housing Solutions",
      description: "Halal financing for home construction, purchase or renovation. Our mosque-based committees ensure Sharia compliance at every step.",
      image: "/islamic-housing.jpg",
      icon: FaHome,
      color: "from-amber-600 to-orange-600",
      features: ["Interest-free loans", "Family home support", "Islamic contract", "Community guarantee"],
      ayah: "“And Allah has made for you your homes as places of rest” (Quran 16:80)",
      href: "/loans/housing"
    },
    {
      title: "Education Through Sadaqah",
      description: "Support for students seeking Islamic and modern education. Our system follows the Prophetic tradition of spreading knowledge.",
      image: "/islamic-education.jpg",
      icon: FaBookQuran,
      color: "from-blue-600 to-indigo-700",
      features: ["Full tuition coverage", "Books & materials", "Islamic studies support", "Merit-based assistance"],
      ayah: "“Allah will raise those who have believed among you and those who were given knowledge” (Quran 58:11)",
      href: "/loans/education"
    },
    {
      title: "Islamic Family Support",
      description: "Financial assistance for family needs following Islamic principles of charity and brotherhood.",
      image: "/islamic-family.jpg",
      icon: FaUser,
      color: "from-purple-600 to-violet-700",
      features: ["Marriage support", "Emergency funds", "Islamic counseling", "Community assistance"],
      ayah: "“The believers are but brothers” (Quran 49:10)",
      href: "/loans/personal"
    },
    {
      title: "Healthcare with Compassion",
      description: "Medical assistance following the Islamic duty of relieving suffering. Our hospital partnerships ensure halal treatment options.",
      image: "/islamic-healthcare.jpg",
      icon: FaClinicMedical,
      color: "from-red-600 to-pink-700",
      features: ["Emergency treatment", "Surgical support", "Islamic medical ethics", "Family coverage"],
      ayah: "“And whoever saves a life, it is as though he had saved all mankind” (Quran 5:32)",
      href: "/loans/healthcare"
    },
    {
      title: "Islamic Microfinance",
      description: "Small-scale halal financing for micro-entrepreneurs, especially women, following the Sunnah of supporting small traders.",
      image: "/islamic-microfinance.jpg",
      icon: FaHandHoldingHeart,
      color: "from-cyan-600 to-blue-700",
      features: ["Group lending", "Women empowerment", "Skill development", "Community growth"],
      ayah: "“The best charity is that given when you are self-sufficient” (Hadith)",
      href: "/loans/microfinance"
    }
  ]

  return (
    <>
      <HeroImgSection 
        imageUrl="/islamic-finance-hero.jpg" 
        text="Islamic Financial Services"
        subtext="Qard-e-Hasana According to Sharia Principles"
      />

      {/* Quranic Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-emerald-600 text-4xl mb-4" style={{ fontFamily: 'Traditional Arabic' }}>بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-emerald-600">Islamic</span> Financial Solutions
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            "The parable of those who spend their wealth in the Way of Allah is that of a grain of corn that sprouts seven ears, and in every ear there are a hundred grains." (Quran 2:261)
          </p>
        </div>
      </section>

      {/* Islamic Services */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-emerald-600 text-3xl mb-4" style={{ fontFamily: 'Traditional Arabic' }}>خدماتنا الإسلامية</div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-emerald-600">Sharia-Compliant</span> Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              "Who is it that would loan Allah a goodly loan so He may multiply it for him many times over?" (Quran 2:245)
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {islamicServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg border border-emerald-100 hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-48 overflow-hidden rounded-t-xl">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-30`}></div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center text-white`}>
                      <service.icon className="text-xl" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-700 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2 mb-2">
                        <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-sm text-emerald-600 italic border-r-4 border-emerald-200 pr-4 mb-6">
                    {service.ayah}
                  </div>
                  
                  <motion.a
                    href={service.href}
                    className={`inline-block bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all flex items-center gap-2`}
                    whileHover={{ scale: 1.05 }}
                  >
                    Learn Islamic Details
                    <FaArrowRight className="text-xs" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Islamic Benefits */}
      <section className="py-20 bg-[url('/islamic-pattern-bg.png')] bg-cover relative">
        <div className="absolute inset-0 bg-emerald-900/90"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-amber-300 text-3xl mb-4" style={{ fontFamily: 'Traditional Arabic' }}>مزايا أخوات</div>
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Akhuwat's Islamic Services?</h2>
              
              <div className="space-y-6">
                {[
                  {
                    icon: FaBookQuran,
                    title: "100% Sharia Approved",
                    description: "All services reviewed by our Board of Islamic Scholars"
                  },
                  {
                    icon: FaMosque,
                    title: "Mosque-Based System",
                    description: "Community support through local mosques"
                  },
                  {
                    icon: RiRefund2Fill,
                    title: "Early Repayment Encouraged",
                    description: "Considered virtuous in Islamic finance"
                  },
                  {
                    icon: BsFillCalendar2CheckFill,
                    title: "Simple Application",
                    description: "Following Islamic principles of ease"
                  }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-emerald-300/20"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center mt-1">
                      <benefit.icon className="text-xl text-amber-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                      <p className="text-emerald-200">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-emerald-300/20 text-center">
              <h3 className="text-2xl font-bold text-white mb-6">Begin Your Islamic Finance Journey</h3>
              <p className="text-emerald-200 mb-8">"If anyone relieves a Muslim of his worldly distress, Allah will relieve him of his distress on the Day of Resurrection" (Muslim)</p>
              
              <div className="space-y-4">
                <motion.a
                  href="https://wa.me/923354571620"
                target="_blank"
                rel="noopener noreferrer"
                  className="block bg-amber-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-amber-600 transition-all"
                  whileHover={{ scale: 1.05 }}
                >
                  Apply for Qard-e-Hasana
                </motion.a>
                
                <motion.a
                  href="/contact-us"
                  className="block bg-white/10 border border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-all"
                  whileHover={{ scale: 1.05 }}
                >
                  Visit Your Local Mosque
                </motion.a>
                
                <div className="pt-6 border-t border-emerald-300/20 mt-6">
                  <p className="text-emerald-200 mb-2">Islamic Helpdesk</p>
                  <a href="tel:+923283281969250" className="text-2xl font-bold text-white hover:text-amber-300">
                    +92 335 4571 620 
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServicesPage
"use client"
import HeroImgSection from "../components/HeroImgSection"
import FooterBar from "../components/FooterBar"
import { FaHandHoldingHeart, FaMosque, FaUsers, FaPhoneAlt } from "react-icons/fa"
import { RiRefund2Fill } from "react-icons/ri"
import { BsFillCalendar2CheckFill, BsBank2 } from "react-icons/bs"
import { motion } from "framer-motion"
import { FaBookQuran } from "react-icons/fa6";

const LoanServicesPage = () => {
  const islamicLoanServices = [
    {
      icon: FaHandHoldingHeart,
      title: "Qard-e-Hasana",
      description: "Interest-free loans following Islamic principles of benevolence and brotherhood",
      verse: "“Who is it that would loan Allah a goodly loan so He may multiply it for him many times over?” (Quran 2:245)"
    },
    {
      icon: FaMosque,
      title: "Mosque-Based Financing",
      description: "Community-supported loans disbursed through local mosques",
      verse: "“The mosque is the house of every pious person” (Tabarani)"
    },
    {
      icon: BsFillCalendar2CheckFill,
      title: "Flexible Repayment",
      description: "Customized repayment plans considering your circumstances",
      verse: "“If the debtor is in difficulty, grant him time till it is easy for him to repay” (Quran 2:280)"
    },
    {
      icon: RiRefund2Fill,
      title: "Early Repayment",
      description: "Encouraged as a virtuous act in Islam with no penalties",
      verse: "“The best of people are those who repay their debts in the best manner” (Bukhari)"
    }
  ]

  const loanFeatures = [
    {
      title: "Sharia-Compliant",
      description: "Approved by our Board of Islamic Scholars",
      icon: FaBookQuran
    },
    {
      title: "Community-Based",
      description: "Supported by local mosque communities",
      icon: FaUsers
    },
    {
      title: "Transparent",
      description: "No hidden charges or conditions",
      icon: BsBank2
    },
    {
      title: "Accessible",
      description: "Available to all regardless of background",
      icon: FaMosque
    }
  ]

  return (
    <div className="bg-gradient-to-b from-white to-emerald-50">
      {/* Islamic Hero Section */}
      <HeroImgSection
        imageUrl="/islamic-finance-hero.jpg"
        text="Qard-e-Hasana Services"
        subtext="Interest-Free Loans Following Islamic Principles"
        overlayText="In the way of Allah we provide financial support"
      />

      {/* Quranic Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-emerald-600 text-4xl mb-4" style={{ fontFamily: 'Traditional Arabic' }}>بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Islamic <span className="text-emerald-600">Qard-e-Hasana</span> Services
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            "The parable of those who spend their wealth in the Way of Allah is that of a grain of corn that sprouts seven ears, and in every ear there are a hundred grains." (Quran 2:261)
          </p>
        </div>
      </section>

      {/* Islamic Loan Services */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Our <span className="text-emerald-600">Islamic</span> Loan Solutions
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {islamicLoanServices.map((service, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 border border-emerald-100 hover:shadow-xl transition-all"
                whileHover={{ y: -10 }}
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="text-emerald-600 text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="text-sm text-emerald-600 italic border-r-4 border-emerald-200 pr-4">
                  {service.verse}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Akhuwat */}
      <section className="py-20 bg-[url('https://static.vecteezy.com/system/resources/previews/014/664/051/non_2x/islamic-ornament-persian-motiff-3d-ramadan-islamic-round-pattern-elements-geometric-circular-ornamental-arabic-symbol-gold-background-vector.jpg')] bg-cover relative">
        <div className="absolute inset-0 bg-emerald-900/90"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Why Choose <span className="text-amber-300">Akhuwat</span>?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {loanFeatures.map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-emerald-300/20 text-white hover:border-amber-400 transition-all"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-amber-500 rounded-lg flex items-center justify-center mb-6 mx-auto">
                  <feature.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-4">{feature.title}</h3>
                <p className="text-emerald-100 text-center">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Islamic Application Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            <span className="text-emerald-600">Sharia-Compliant</span> Application
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <motion.div 
              className="bg-emerald-50 rounded-xl p-8 border border-emerald-100"
              whileHover={{ y: -5 }}
            >
              <div className="text-5xl text-emerald-600 font-bold mb-4">1</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Visit Your Local Mosque</h3>
              <p className="text-gray-600">Meet with our Islamic finance counselor after Friday prayers</p>
            </motion.div>
            
            <motion.div 
              className="bg-emerald-50 rounded-xl p-8 border border-emerald-100"
              whileHover={{ y: -5 }}
            >
              <div className="text-5xl text-emerald-600 font-bold mb-4">2</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Islamic Assessment</h3>
              <p className="text-gray-600">Discuss your needs with our Sharia advisors</p>
            </motion.div>
            
            <motion.div 
              className="bg-emerald-50 rounded-xl p-8 border border-emerald-100"
              whileHover={{ y: -5 }}
            >
              <div className="text-5xl text-emerald-600 font-bold mb-4">3</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Approval</h3>
              <p className="text-gray-600">Local mosque committee reviews your application</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Islamic Help Center */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-4xl mb-4" style={{ fontFamily: 'Traditional Arabic' }}>مساعدة مالية</div>
          <h2 className="text-4xl font-bold mb-8">Islamic Financial Guidance</h2>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto mb-12">
            "If anyone relieves a Muslim of his worldly distress, Allah will relieve him of his distress on the Day of Resurrection" (Muslim)
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.a
              href="tel:+923354571620" 
              
              className="bg-amber-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-amber-600 transition-all flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
            >
              <FaPhoneAlt />
              Call Sharia Helpdesk
            </motion.a>
            
            <motion.a
              href="/contact-us"
              className="bg-white/10 border border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-all flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
            >
              <FaMosque />
              Find Nearest Center
            </motion.a>
          </div>
        </div>
      </section>

      {/* Quranic Closing */}
      <section className="py-16 bg-gradient-to-r from-emerald-800 to-teal-900 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-white text-4xl mb-6" style={{ fontFamily: 'Traditional Arabic' }}>
            وَمَا تُقَدِّمُوا۟ لِأَنفُسِكُم مِّنْ خَيْرٍ تَجِدُوهُ عِندَ اللَّهِ
          </div>
          <p className="text-xl text-emerald-200">
            "Whatever good you put forward for yourselves - you will find it with Allah." (Quran 2:110)
          </p>
        </div>
      </section>

      <FooterBar />
    </div>
  )
}

export default LoanServicesPage
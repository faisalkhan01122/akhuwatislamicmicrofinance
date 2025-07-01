// Redesigned Services Grid + Team Grid + Partners Section with Enhanced Card Design
import { motion } from "framer-motion";
import {
  FaHandshake,
  FaGlobe,
  FaUsers,
  FaAward,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { useState, useEffect } from "react";

const partners = [
  {
    id: 1,
    name: "APFNA",
    fullName: "Association of Physicians of Pakistani Descent of North America",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop",
    description: "Leading medical association supporting healthcare initiatives",
  },
  {
    id: 2,
    name: "Islamic Society",
    fullName: "Islamic Society of North America",
    logo: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=200&h=100&fit=crop",
    description: "Promoting Islamic values and community development",
  },
  {
    id: 3,
    name: "United Way",
    fullName: "United Way International",
    logo: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=200&h=100&fit=crop",
    description: "Global network fighting for health, education, and financial stability",
  },
  {
    id: 4,
    name: "Rotary Club",
    fullName: "Rotary International",
    logo: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=200&h=100&fit=crop",
    description: "Service organization dedicated to solving world problems",
  },
  {
    id: 5,
    name: "Lions Club",
    fullName: "Lions Clubs International",
    logo: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=200&h=100&fit=crop",
    description: "Empowering volunteers to serve their communities",
  },
  {
    id: 6,
    name: "Habitat",
    fullName: "Habitat for Humanity",
    logo: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=200&h=100&fit=crop",
    description: "Building homes, communities and hope",
  },
];

const CollaboratingPartnersSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const partnersPerSlide = 4;
  const totalSlides = Math.ceil(partners.length / partnersPerSlide);

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400 rounded-full animate-float blur-3xl"></div>
        <div className="absolute bottom-32 right-20 w-80 h-80 bg-emerald-400 rounded-full animate-float-reverse blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-purple-400 rounded-full animate-pulse blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex items-center justify-center gap-4 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl">
              <FaHandshake className="text-white text-2xl" />
            </div>
            <div className="text-left">
              <span className="text-blue-600 font-bold text-xl block">Akhuwat USA</span>
              <span className="text-gray-500 text-sm">Global Partnerships</span>
            </div>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-7xl font-black text-gray-900 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Collaborating <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Partners</span>
          </motion.h2>

          <motion.p
            className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Working together with leading organizations worldwide to create lasting impact in communities and transform lives
          </motion.p>
        </motion.div>

        <div
          className="relative mb-20"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="overflow-hidden rounded-3xl">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
                    {partners
                      .slice(slideIndex * partnersPerSlide, (slideIndex + 1) * partnersPerSlide)
                      .map((partner) => (
                        <motion.div
                          key={partner.id}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                          className="relative group bg-white border border-gray-200 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6 text-center overflow-hidden"
                        >
                          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
                          <div className="relative z-10">
                            <div className="flex justify-center items-center h-24 mb-4">
                              <img
                                src={partner.logo}
                                alt={partner.name}
                                className="max-h-full object-contain grayscale group-hover:grayscale-0 transition duration-300"
                              />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                              {partner.name}
                            </h3>
                            <p className="text-sm text-gray-600 mb-2 min-h-[48px]">
                              {partner.description}
                            </p>
                            <p className="text-xs text-blue-700 italic font-medium">
                              {partner.fullName}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-gray-200 rounded-full shadow hover:shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-gray-200 rounded-full shadow hover:shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600"
          >
            <FaChevronRight />
          </button>

          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-blue-600 w-8" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaboratingPartnersSection;

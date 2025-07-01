import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const services = [
  {
    src: "https://i.postimg.cc/CLqy8yTt/akhuwatfoundationbusinessloan2.jpg",
    alt: "Business Loan",
  },
  {
    src: "https://i.postimg.cc/cCtzf3jY/akhuwatfoundationpersonalloans.jpg",
    alt: "Personal Loan",
  },
  {
    src: "https://i.postimg.cc/1RTh4mTw/akhuwatfoundationeasyloanapproval.jpg",
    alt: "Easy Loan Approval",
  },
  {
    src: "https://i.postimg.cc/1tjTgBWs/akhuwatfoundationhomeloan.jpg",
    alt: "Home Loan",
  },
  {
    src: "https://i.postimg.cc/YC6JX1Sz/akhuwatfoundationbusinessloan4.jpg",
    alt: "Small Business Loan",
  },
];

const ServicesCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 600,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
    customPaging: () => (
      <div className="w-3 h-3 bg-gray-400 rounded-full mx-1 transition-all duration-300"></div>
    ),
    appendDots: (dots) => (
      <div className="flex justify-center mt-6 space-x-1">{dots}</div>
    ),
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white via-green-50 to-blue-50 relative overflow-hidden">
      {/* Background blur dots */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-green-300 opacity-20 rounded-full blur-2xl z-0"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-blue-400 opacity-20 rounded-full blur-2xl z-0"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-center text-gray-800 mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Akhuwat Loan Services
        </motion.h2>

        <Slider {...settings}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="px-3"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-xl bg-white hover:shadow-2xl transition duration-500 group">
                <img
                  src={service.src}
                  alt={service.alt}
                  className="w-full h-64 object-center transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white bg-green-600 px-3 py-1 rounded-md text-sm font-medium shadow-md group-hover:bg-green-700 transition-all duration-300">
                  {service.alt}
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ServicesCarousel;

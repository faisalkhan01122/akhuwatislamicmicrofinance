import { motion } from "framer-motion";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

const FooterBar = () => {
  return (
   <>
  {/* WhatsApp Icon */}
  <motion.a
    href="https://wa.me/923354571620"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-5 left-6 z-50 bg-green-500 hover:bg-green-600 p-3 sm:p-4 md:p-5 rounded-full shadow-2xl transition-all duration-300 group"
    initial={{ scale: 0, rotate: -180 }}
    animate={{ scale: 1, rotate: 0 }}
    transition={{ delay: 0.8, duration: 0.6, type: "spring" }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    <FaWhatsapp className="text-white text-2xl sm:text-3xl md:text-4xl group-hover:animate-bounce" />
    <motion.div
      className="absolute -top-10 sm:-top-12 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs sm:text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
      initial={{ y: 5 }}
      whileHover={{ y: 0 }}
    >
      Chat on WhatsApp
    </motion.div>
  </motion.a>

  {/* WhatsApp Pulse */}
  <motion.div
    className="fixed bottom-5 left-5 z-40 w-10 h-10 sm:w-12 sm:h-12 bg-green-400 rounded-full opacity-20 pointer-events-none"
    animate={{ scale: [1, 1.8, 1], opacity: [0.2, 0, 0.2] }}
    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
  />

  {/* Call Icon */}
  <motion.a
    href="tel:+92 335 4571 620"
    className="fixed bottom-5 right-6 z-50 bg-blue-500 hover:bg-blue-600 p-3 sm:p-4 md:p-5 rounded-full shadow-2xl transition-all duration-300 group"
    initial={{ scale: 0, rotate: 180 }}
    animate={{ scale: 1, rotate: 0 }}
    transition={{ delay: 1, duration: 0.6, type: "spring" }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    <FaPhone className="text-white text-2xl sm:text-3xl md:text-4xl group-hover:animate-pulse" />
    <motion.div
      className="absolute -top-10 sm:-top-12 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs sm:text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
      initial={{ y: 5 }}
      whileHover={{ y: 0 }}
    >
      Call Now
    </motion.div>
  </motion.a>

  {/* Call Pulse */}
  <motion.div
    className="fixed bottom-5 right-5 z-40 w-10 h-10 sm:w-12 sm:h-12 bg-blue-400 rounded-full opacity-20 pointer-events-none"
    animate={{ scale: [1, 1.8, 1], opacity: [0.2, 0, 0.2] }}
    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
  />
</>

  );
};

export default FooterBar;

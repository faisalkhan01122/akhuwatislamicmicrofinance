// import { motion } from "framer-motion"

// const LoanCard = ({ img, title, description, linkText, linkUrl }) => {
//   return (
//     <motion.div
//       className="relative bg-white/70 h-auto md:h-[70vh] backdrop-blur-md shadow-lg rounded-2xl overflow-hidden group hover:shadow-2xl transition duration-300"
//       whileHover={{ scale: 1.03 }}
//     >
//       {/* Image */}
//       <div className="overflow-hidden">
//         <img
//           src={img}
//           alt={title}
//           className="w-full h-60 object-bottom transition-transform duration-500 group-hover:scale-105"
//         />
//       </div>

//       {/* Content */}
//       <div className="p-6 space-y-4">
//         <h3 className="text-xl font-bold text-gray-800">{title}</h3>
//         <p className="text-sm text-gray-600 leading-relaxed">{description}</p>

//         {linkText && (
//           <motion.a
//             href={linkUrl}
//             className="inline-block px-5 py-2 rounded-full bg-green-600 text-white font-medium hover:bg-green-700 transition"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             {linkText}
//           </motion.a>
//         )}
//       </div>

//       {/* Bottom Shape */}
//       <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-bl-2xl rounded-br-2xl" />
//     </motion.div>
//   )
// }

// export default LoanCard
import { motion } from "framer-motion";

const LoanCard = ({ img, title, description, linkText, linkUrl }) => {
  return (
    <motion.div
      className="relative bg-gradient-to-br from-white to-green-50 h-auto min-h-[400px] border border-green-100 shadow-md rounded-xl overflow-hidden group hover:shadow-lg transition duration-300"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Ribbon for Islamic Finance */}
      <div className="absolute top-0 right-0 bg-green-600 text-white text-xs font-bold px-3 py-1 transform rotate-45 translate-x-8 translate-y-4 z-10 w-40 text-center">
        Interest-Free
      </div>

      {/* Image with Islamic pattern overlay */}
      <div className="relative overflow-hidden h-48">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="flex items-center space-x-2">
          <div className="p-2 bg-green-100 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-green-800">{title}</h3>
        </div>

        <p className="text-gray-600 leading-relaxed text-sm">
          {description}
        </p>

        {linkText && (
          <motion.a
            href={linkUrl}
            className="inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-green-600 to-green-700 text-white font-medium hover:from-green-700 hover:to-green-800 transition-all shadow-md hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            {linkText}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </motion.a>
        )}
      </div>

      {/* Islamic pattern border */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-repeat-x bg-[length:20px_20px] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48cGF0aCBmaWxsPSIjMzg3ZTZjIiBkPSJNMTAgMTVhNSA1IDAgMSAwIDAtMTAgNSA1IDAgMCAwIDAgMTB6bTAtOGEzIDMgMCAxIDEgMCA2IDMgMyAwIDAgMSAwLTZ6Ii8+PC9zdmc+')]" />
    </motion.div>
  );
};

export default LoanCard;
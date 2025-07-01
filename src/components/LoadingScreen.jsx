// "use client"

// import { motion } from "framer-motion"
// import { useState, useEffect } from "react"

// const LoadingScreen = ({ onComplete }) => {
//   const [progress, setProgress] = useState(0)
//   const [currentStep, setCurrentStep] = useState(0)

//   const loadingSteps = [
//     "Initializing Akhuwat Network...",
//     "Loading financial solutions...",
//     "Preparing loan services...",
//     "Connecting to secure servers...",
//     "Almost ready...",
//   ]

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setProgress((prev) => {
//         if (prev >= 100) {
//           clearInterval(interval)
//           setTimeout(() => onComplete?.(), 500)
//           return 100
//         }
//         return prev + 2
//       })
//     }, 50)

//     return () => clearInterval(interval)
//   }, [onComplete])

//   useEffect(() => {
//     const stepInterval = setInterval(() => {
//       setCurrentStep((prev) => (prev + 1) % loadingSteps.length)
//     }, 1000)

//     return () => clearInterval(stepInterval)
//   }, [])

//   return (
//     <motion.div
//       className="fixed inset-0 z-50 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 flex items-center justify-center"
//       initial={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.8 }}
//     >
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full animate-float blur-3xl"></div>
//         <div className="absolute bottom-20 right-20 w-80 h-80 bg-white rounded-full animate-float-reverse blur-3xl"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full animate-pulse blur-2xl"></div>
//       </div>

//       <div className="relative z-10 text-center text-white max-w-md mx-auto px-6">
//         {/* Logo */}
//         <motion.div
//           className="mb-12"
//           initial={{ scale: 0, rotate: -180 }}
//           animate={{ scale: 1, rotate: 0 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//         >
//           <div className="relative mx-auto w-24 h-24 mb-6">
//             <img src="/akhuwatfundslogo.png" alt="Akhuwat" className="w-full h-full rounded-full shadow-2xl" />
//             <div className="absolute -inset-2 bg-gradient-to-r from-white/30 to-white/10 rounded-full animate-spin-slow"></div>
//           </div>
//           <motion.h1
//             className="text-4xl font-black mb-2"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5, duration: 0.8 }}
//           >
//             Akhuwat Network
//           </motion.h1>
//           <motion.p
//             className="text-emerald-100 text-lg font-semibold"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.7, duration: 0.8 }}
//           >
//             Interest-Free Microfinance
//           </motion.p>
//         </motion.div>

//         {/* Loading Animation */}
//         <motion.div
//           className="mb-8"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1, duration: 0.8 }}
//         >
//           {/* Progress Circle */}
//           <div className="relative w-32 h-32 mx-auto mb-8">
//             <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
//               <circle cx="50" cy="50" r="45" stroke="rgba(255,255,255,0.2)" strokeWidth="8" fill="none" />
//               <motion.circle
//                 cx="50"
//                 cy="50"
//                 r="45"
//                 stroke="white"
//                 strokeWidth="8"
//                 fill="none"
//                 strokeLinecap="round"
//                 strokeDasharray={283}
//                 strokeDashoffset={283 - (283 * progress) / 100}
//                 transition={{ duration: 0.5, ease: "easeOut" }}
//               />
//             </svg>
//             <div className="absolute inset-0 flex items-center justify-center">
//               <motion.span
//                 className="text-2xl font-black text-white"
//                 key={progress}
//                 initial={{ scale: 0.8 }}
//                 animate={{ scale: 1 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 {Math.round(progress)}%
//               </motion.span>
//             </div>
//           </div>

//           {/* Progress Bar */}
//           <div className="w-full bg-white/20 rounded-full h-2 mb-6 overflow-hidden">
//             <motion.div
//               className="h-full bg-white rounded-full shadow-lg"
//               initial={{ width: 0 }}
//               animate={{ width: `${progress}%` }}
//               transition={{ duration: 0.5, ease: "easeOut" }}
//             />
//           </div>

//           {/* Loading Text */}
//           <motion.p
//             className="text-white/90 text-lg font-medium"
//             key={currentStep}
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             transition={{ duration: 0.5 }}
//           >
//             {loadingSteps[currentStep]}
//           </motion.p>
//         </motion.div>

//         {/* Loading Dots */}
//         <motion.div
//           className="flex justify-center gap-2"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.2, duration: 0.8 }}
//         >
//           {[0, 1, 2].map((i) => (
//             <motion.div
//               key={i}
//               className="w-3 h-3 bg-white rounded-full"
//               animate={{
//                 scale: [1, 1.5, 1],
//                 opacity: [0.5, 1, 0.5],
//               }}
//               transition={{
//                 duration: 1.5,
//                 repeat: Number.POSITIVE_INFINITY,
//                 delay: i * 0.2,
//               }}
//             />
//           ))}
//         </motion.div>

//         {/* Tagline */}
//         <motion.p
//           className="mt-8 text-emerald-100 text-sm font-medium"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.5, duration: 0.8 }}
//         >
//           Transforming lives through compassionate finance since 2001
//         </motion.p>
//       </div>
//     </motion.div>
//   )
// }

// export default LoadingScreen
"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          if (onComplete) {
            setTimeout(onComplete, 500)
          }
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-teal-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-emerald-400 rounded-full animate-pulse blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-teal-400 rounded-full animate-ping blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-green-400 rounded-full animate-bounce blur-xl"></div>
      </div>

      <div className="relative z-10 text-center">
        {/* Logo Animation */}
        <motion.div
          className="mb-8"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.5 }}
        >
          <div className="relative">
            <motion.div
              className="w-32 h-32 mx-auto bg-gradient-to-br from-white to-white rounded-full flex items-center justify-center shadow-2xl"
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(16, 185, 129, 0.4)",
                  "0 0 0 20px rgba(16, 185, 129, 0)",
                  "0 0 0 0 rgba(16, 185, 129, 0)",
                ],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              {/* <motion.div
                className="text-white text-4xl font-bold"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              > */}
                <img src="/akhuwatfundslogo.png" alt="Akhuwat" className="w-full h-full object-contain rounded-full shadow-2xl" />
              {/* </motion.div> */}
            </motion.div>
          </div>
        </motion.div>

        {/* Brand Name */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Akhuwat</span>{" "}
            Islamic Microfinance
          </h1>
          <p className="text-lg text-gray-600 font-medium">
            Pakistan's Largest Interest-Free Microfinance Organization
          </p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          className="w-80 mx-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="bg-gray-200 rounded-full h-3 mb-4 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full relative"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
            </motion.div>
          </div>

          <div className="flex justify-between items-center text-sm text-gray-600">
            <span>Loading...</span>
            <span className="font-bold text-emerald-600">{progress}%</span>
          </div>
        </motion.div>

        {/* Loading Messages */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <div className="text-gray-500 text-sm">
            {progress < 30 && "Initializing Akhuwat Services..."}
            {progress >= 30 && progress < 60 && "Loading Islamic Finance Solutions..."}
            {progress >= 60 && progress < 90 && "Preparing Interest-Free Loans..."}
            {progress >= 90 && "Almost Ready..."}
          </div>
        </motion.div>

        {/* Islamic Pattern */}
        <motion.div
          className="absolute -bottom-20 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <div className="w-96 h-96 border-4 border-emerald-300 rounded-full"></div>
          <div className="absolute inset-8 border-2 border-teal-300 rounded-full"></div>
          <div className="absolute inset-16 border border-green-300 rounded-full"></div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default LoadingScreen

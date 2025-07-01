"use client"

import { Outlet } from "react-router-dom"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import ScrollToTop from "../components/ScrollToTop"
import LoadingScreen from "../components/LoadingScreen"

const RootLayout = () => {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <>
      <AnimatePresence mode="wait">{isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}</AnimatePresence>

      {!isLoading && (
        <motion.div
          className="min-h-screen flex flex-col bg-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <ScrollToTop />
          <Navbar />
          <main className="flex-grow">
            <Outlet />
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  )
}

export default RootLayout

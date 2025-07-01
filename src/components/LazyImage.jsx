"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"

const LazyImage = ({
  src,
  alt,
  className = "",
  placeholder = "/placeholder.svg",
  containerClassName = "",
  showSkeleton = true,
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const [hasError, setHasError] = useState(false)
  const imgRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: "50px" },
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleLoad = () => {
    setIsLoaded(true)
    setHasError(false)
  }

  const handleError = () => {
    setHasError(true)
    setIsLoaded(true)
  }

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${containerClassName}`}>
      {/* Skeleton Loader */}
      {showSkeleton && !isLoaded && (
        <div className={`absolute inset-0 ${className}`}>
          <div className="w-full h-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer" />
          </div>
        </div>
      )}

      {/* Actual Image */}
      {isInView && (
        <motion.img
          src={hasError ? placeholder : src}
          alt={alt}
          className={`${className} transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}
          onLoad={handleLoad}
          onError={handleError}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{
            scale: isLoaded ? 1 : 1.1,
            opacity: isLoaded ? 1 : 0,
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      )}

      {/* Error State */}
      {hasError && (
        <div className={`absolute inset-0 flex items-center justify-center bg-gray-100 ${className}`}>
          <div className="text-center text-gray-500">
            <div className="text-4xl mb-2">📷</div>
            <div className="text-sm">Image not available</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default LazyImage

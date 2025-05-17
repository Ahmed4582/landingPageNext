"use client"

import { useState } from "react"
import { motion } from "@/components/motion"
import type { ServiceType } from "@/lib/types"
import Image from "next/image"

// Props interface for ServiceCard component
interface ServiceCardProps {
  service: ServiceType
}

// ServiceCard component with modern design and enhanced animations
export function ServiceCard({ service }: ServiceCardProps) {
  // State for hover effect
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container with hover effect */}
      <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-gradient-to-br from-green-50 to-blue-50">
        {service.image && (
          <Image
            src={service.image}
            alt={service.title}
            fill
            className={`object-cover transition-transform duration-500 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
        {/* Category badge with modern design */}
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-white/90 backdrop-blur-sm text-green-800 rounded-full shadow-sm">
            {service.categoryName}
          </span>
        </div>
      </div>

      {/* Content container with enhanced spacing */}
      <div className="p-6 sm:p-8">
        {/* Title with hover effect */}
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-800 transition-colors">
          {service.title}
        </h3>

        {/* Description with improved readability */}
        <p className="text-gray-600 mb-6 line-clamp-3 text-sm sm:text-base leading-relaxed">
          {service.description}
        </p>

        {/* Action button with enhanced hover effect */}
        <button
          type="button"
          className="text-green-600 font-medium hover:text-green-700 transition-colors flex items-center gap-2 group/btn"
        >
          Request Service
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transform group-hover/btn:translate-x-1 transition-transform"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>
    </motion.div>
  )
}

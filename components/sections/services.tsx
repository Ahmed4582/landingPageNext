"use client"

import { useState } from "react"
import { motion } from "@/components/motion"
import { serviceData } from "@/lib/data"
import { ServiceCard } from "@/components/service-card"

// Services section component with modern design and enhanced animations
export function Services() {
  // State management for category filtering
  const [selectedCategory, setSelectedCategory] = useState("all")

  // Filter services based on selected category
  const filteredServices =
    selectedCategory === "all"
      ? serviceData
      : serviceData.filter((service) => service.category === selectedCategory)

  // Available service categories
  const categories = [
    { id: "all", name: "All Services" },
    { id: "digital", name: "Digital Services" },
    { id: "development", name: "Software Development" },
    { id: "marketing", name: "Digital Marketing" }
  ]

  return (
    <section
      id="services"
      className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header with enhanced typography */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Premium Services
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer a comprehensive suite of digital and technical services to
            help our clients achieve their goals
          </p>
        </motion.div>

        {/* Category filter buttons with modern design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12 md:mb-16"
        >
          {categories.map((category) => (
            <button
              type="button"
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg hover:shadow-xl"
                  : "bg-white text-gray-700 hover:bg-gray-50 shadow-sm hover:shadow-md"
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Services grid with enhanced animations */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

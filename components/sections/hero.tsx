"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"

// Hero section component with modern design and enhanced animations
const Hero = () => {
  // Reference for animations
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center py-16 md:py-24 lg:py-32 bg-gradient-to-b from-green-50 via-white to-green-50 overflow-hidden"
    >
      {/* Animated background elements with modern gradient blobs */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            repeatType: "loop"
          }}
          className="absolute top-0 left-0 w-72 md:w-96 h-72 md:h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90]
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            repeatType: "loop"
          }}
          className="absolute top-0 right-0 w-72 md:w-96 h-72 md:h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -90, 0]
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            repeatType: "loop"
          }}
          className="absolute -bottom-20 left-20 w-72 md:w-96 h-72 md:h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
        />
      </div>

      {/* Main content container with responsive padding */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left column: Text content with enhanced animations */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left"
          >
            {/* Welcome badge with modern gradient */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block px-6 py-3 bg-gradient-to-r from-green-100 to-blue-100 text-green-800 rounded-full text-sm font-medium mb-6 shadow-lg"
            >
              Welcome to Zain Development
            </motion.div>

            {/* Main heading with modern gradient text */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transforming Ideas into
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent block mt-2">
                Digital Excellence
              </span>
            </h1>

            {/* Description text with improved readability */}
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              We provide cutting-edge digital solutions and services to help
              your business thrive in the digital age. With our expertise in
              information technology and software development, we&apos;re
              committed to turning your vision into reality.
            </p>

            {/* Action buttons with enhanced hover effects */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800 shadow-lg hover:shadow-xl group"
                onClick={() =>
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-green-600 text-green-600 hover:bg-green-50 shadow-lg hover:shadow-xl group"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Contact Us
                <Mail className="ml-2 h-5 w-5 transform group-hover:translate-y-1 transition-transform" />
              </Button>
            </div>
          </motion.div>

          {/* Right column: Image and stats with modern design */}
          <motion.div className="relative">
            {/* Main image with enhanced hover effect */}
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl transform -rotate-2">
                <Image
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Digital transformation and technology concept"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={100}
                  className="object-cover object-center rounded-2xl transform rotate-2 group-hover:scale-110 transition-transform duration-700"
                  priority
                  loading="eager"
                />
              </div>
            </div>

            {/* Stats card with modern glassmorphism effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-6 left-4 right-4 bg-white/80 backdrop-blur-md p-4 sm:p-6 rounded-2xl shadow-xl border border-gray-100 hover:bg-white/90 transition-colors duration-300"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
                {/* Stats items with enhanced hover effects */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="space-y-1 p-2 rounded-lg hover:bg-green-50 transition-colors duration-300"
                >
                  <div className="text-green-600 font-bold text-2xl sm:text-3xl">
                    100%
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium">
                    Client Satisfaction
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="space-y-1 p-2 rounded-lg hover:bg-green-50 transition-colors duration-300"
                >
                  <div className="text-green-600 font-bold text-2xl sm:text-3xl">
                    +50
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium">
                    Success Partners
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="space-y-1 p-2 rounded-lg hover:bg-green-50 transition-colors duration-300"
                >
                  <div className="text-green-600 font-bold text-2xl sm:text-3xl">
                    +500
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium">
                    Projects Completed
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="space-y-1 p-2 rounded-lg hover:bg-green-50 transition-colors duration-300"
                >
                  <div className="text-green-600 font-bold text-2xl sm:text-3xl">
                    +15
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium">
                    Years Experience
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export { Hero }

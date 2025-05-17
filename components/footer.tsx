"use client"

import Link from "next/link"
import { motion } from "@/components/motion"

// Footer component with modern design and enhanced animations
const Footer = () => {
  // Get current year for copyright
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white py-16 md:py-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {/* Company information section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Stellar Glaze
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              A leading Saudi company in information technology and digital
              solutions, working to develop a better digital future.
            </p>
          </motion.div>

          {/* Quick links section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl md:text-2xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", id: "hero" },
                { name: "Services", id: "services" },
                { name: "About Us", id: "about" },
                { name: "Contact", id: "contact" }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() =>
                      document
                        .getElementById(item.id)
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact information section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl md:text-2xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                Riyadh, Kingdom of Saudi Arabia
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                info@zaindev.com.sa
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                +966 12 345 6789
              </li>
            </ul>

            {/* Social media links */}
            <div className="flex gap-4 mt-8">
              {["facebook", "twitter", "instagram", "linkedin"].map(
                (social) => (
                  <Link
                    key={social}
                    href="#"
                    className="h-10 w-10 rounded-full bg-gray-800/50 backdrop-blur-sm flex items-center justify-center hover:bg-green-600 transition-all duration-300 transform hover:-translate-y-1"
                    aria-label={social}
                  >
                    <span className="text-white text-sm font-medium">
                      {social[0].toUpperCase()}
                    </span>
                  </Link>
                )
              )}
            </div>
          </motion.div>
        </div>

        {/* Copyright section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
        >
          <p>© {currentYear}Stellar Glaze. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

export { Footer }

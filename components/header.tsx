"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"

// Header component with responsive navigation and modern design
export function Header() {
  // State management for mobile menu and scroll position
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  // Handle scroll events to change header appearance and active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    // Create Intersection Observer to detect active section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: "-50% 0px -50% 0px" // Trigger when section is in the middle of viewport
      }
    )

    // Observe all sections
    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => observer.observe(section))

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  // Toggle mobile menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Smooth scroll to section and close mobile menu
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-sm shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      {/* Main header container with responsive padding */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo with hover effect */}
        <Link href="/" className="flex items-center group">
          <div className="relative h-10 w-32">
            <span className="font-bold text-xl text-green-800 group-hover:text-green-600 transition-colors">
              Stellar Glaze
            </span>
          </div>
        </Link>

        {/* Desktop Navigation with enhanced spacing */}
        <nav className="hidden md:flex items-center justify-between gap-8 lg:gap-12">
          {[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Services", id: "services" },
    
            { name: "Contact", id: "contact" }
          ].map((item) => (
            <Link
              href={`#${item.id}`}
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-gray-800 hover:text-green-800 transition-colors font-medium px-1 py-2 relative group ${
                activeSection === item.id ? "text-green-800" : ""
              }`}
            >
              {item.name}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-green-600 transition-all duration-300 ${
                  activeSection === item.id
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button with enhanced hover effect */}
        <button
          type="button"
          className="md:hidden p-2 text-gray-500 hover:text-gray-800 transition-colors rounded-lg hover:bg-gray-100"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation with smooth animation */}
      {isMenuOpen && (
        <div className="md:hidden w-full bg-white shadow-lg animate-fadeIn">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              {[
                { name: "Home", id: "hero" },
                { name: "About", id: "about" },
                { name: "Services", id: "services" },
          
                { name: "Contact", id: "contact" }
              ].map((item) => (
                <Link
                  href={`#${item.id}`}
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-gray-800 hover:text-green-800 transition-colors font-medium px-4 py-3 rounded-lg hover:bg-gray-50 ${
                    activeSection === item.id
                      ? "bg-green-50 text-green-800"
                      : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

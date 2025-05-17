import type { Feature, ServiceType, ContactInfo } from "./types"

// Company features and strengths
export const features: Feature[] = [
  {
    icon: "👥",
    title: "Professional Team",
    description:
      "Elite engineers and qualified technicians to implement your projects"
  },
  {
    icon: "🏆",
    title: "Extensive Experience",
    description: "Over 15 years of experience in contracting and development"
  },
  {
    icon: "🎯",
    title: "High Quality",
    description:
      "We are committed to the highest quality standards in all our projects"
  },
  {
    icon: "🏗️",
    title: "Diverse Projects",
    description:
      "Successfully implementing hundreds of residential and commercial projects"
  }
]

// Available services with details
export const serviceData: ServiceType[] = [
  {
    id: "1",
    title: "Website Design & Development",
    description:
      "Professional website design and development compatible with all devices and optimized for search engines.",
    image:
      "https://images.pexels.com/photos/9811832/pexels-photo-9811832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "development",
    categoryName: "Software Development",
    price: "Starting from 5000 SAR"
  },
  {
    id: "2",
    title: "Mobile Applications",
    description:
      "Development of mobile applications for iOS and Android with high quality and excellent performance.",
    image:
      "https://images.pexels.com/photos/4350097/pexels-photo-4350097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "development",
    categoryName: "Software Development",
    price: "Starting from 10000 SAR"
  },
  {
    id: "3",
    title: "Digital Marketing Services",
    description:
      "Comprehensive digital marketing services including social media management and paid advertising campaigns.",
    image:
      "https://images.pexels.com/photos/7988086/pexels-photo-7988086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "marketing",
    categoryName: "Digital Marketing",
    price: "Starting from 3000 SAR monthly"
  },
  {
    id: "4",
    title: "SEO Services",
    description:
      "Specialized strategies to improve your website's ranking in search results and increase organic traffic.",
    image:
      "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "marketing",
    categoryName: "Digital Marketing",
    price: "Starting from 2500 SAR monthly"
  },
  {
    id: "5",
    title: "Visual Identity Design",
    description:
      "Complete visual identity design for companies including logo, colors, typography, and all identity elements.",
    image:
      "https://images.pexels.com/photos/6444/pencil-typography-black-design.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "digital",
    categoryName: "Digital Services",
    price: "Starting from 4500 SAR"
  },
  {
    id: "6",
    title: "Web Hosting & Server Management",
    description:
      "Secure and fast website hosting services with 24/7 technical support and customized solutions for your needs.",
    image:
      "https://images.pexels.com/photos/1476321/pexels-photo-1476321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "digital",
    categoryName: "Digital Services",
    price: "Starting from 1200 SAR annually"
  }
]

// Contact information
export const contactInfo: ContactInfo[] = [
  {
    icon: "phone",
    title: "Call Us",
    content: "920010535",
    bgColor: "bg-orange-100",
    iconColor: "text-orange-600"
  },
  {
    icon: "mail",
    title: "Email",
    content: "info@zaindev.com.sa",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600"
  },
  {
    icon: "map-pin",
    title: "Address",
    content: "Eastern Region, Kingdom of Saudi Arabia",
    bgColor: "bg-green-100",
    iconColor: "text-green-600"
  },
  {
    icon: "clock",
    title: "Working Hours",
    content: "Saturday to Thursday, 9 AM to 5 PM",
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600"
  }
]

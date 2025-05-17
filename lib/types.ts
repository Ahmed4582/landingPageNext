export type Product = {
  id: number
  title: string
  description: string
  price: number
  rating: number
  images: string[]
}

export type ProductData = {
  id: string
  title: string
  thumbnail: string
  description: string
  price: number
  rating: number
  stock: number
}

export type Feature = {
  icon: string
  title: string
  description: string
}

export type ServiceType = {
  id: string
  title: string
  description: string
  image: string
  category: string
  categoryName: string
  price?: string
}

export type ContactInfo = {
  icon: string
  title: string
  content: string
  bgColor: string
  iconColor: string
}

import type { Metadata } from "next"
import "../styles/globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"


export const metadata: Metadata = {
  title: "landing-page",
  description: "Our first project"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body >
        <div data-background />
        <Header />
        {children}
        <Footer />
    
      </body>
    </html>
  )
}
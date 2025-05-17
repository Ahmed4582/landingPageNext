import {  About, Contact,Hero , Services } from "@/components/sections";


export default function Home() {
  return (
    <main className="flex flex-col gap-10 items-center justify-center">
      <Hero />
      <About />
      <Services />
      <Contact />
    </main>
  )
}
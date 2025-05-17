# 🌐 Landing Page – Next.js, Tailwind CSS & Framer Motion

A modern and responsive landing page built using **Next.js App Router**, styled with **Tailwind CSS**, enhanced by **Framer Motion** animations, and powered by **shadcn/ui** components and **lucide-react** icons.

This project demonstrates a scalable and maintainable structure for building high-performance, mobile-friendly landing pages — ideal for SaaS, digital products, personal brands, and more.

---

## 📸 Preview

![Landing Page Preview](public/images/preview.png)

> Replace the image path above with your actual preview image if needed.

---

## 🚀 Live Demo

Coming soon on [Vercel](https://vercel.com/) or any static hosting platform.

---

## ✨ Features

- ⚡️ Built with **Next.js 14+ (App Router)**
- 🎨 Styled using **Tailwind CSS**
- 🎬 Animated with **Framer Motion**
- 🧩 UI powered by **shadcn/ui**
- 🧠 Icons from **lucide-react**
- 💡 Modular, maintainable component structure
- 📱 Fully responsive on all screen sizes
- 🛒 Includes a dynamic **Products** section (`/Products/[id]`)

---

## 📁 Project Structure

```bash
LANDING-PAGE/
├── app/
│   ├── Products/
│   │   ├── [id]/page.tsx         # Dynamic product detail page (demo)
│   │   ├── layout.tsx
│   │   └── page.tsx              # Products listing
│   └── page.tsx                  # Homepage
│
├── components/
│   ├── sections/                 # Hero, About, Services, Contact
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── services.tsx
│   │   ├── contact.tsx
│   │   └── index.tsx             # Combined layout for homepage
│   ├── ui/                       # UI elements (shadcn-based)
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── form.tsx
│   │   ├── textarea.tsx
│   │   └── motion.tsx
│   ├── footer.tsx
│   ├── header.tsx
│   └── service-card.tsx
│
├── lib/
│   ├── data.ts                   # Static content for sections
│   ├── types.ts                  # TypeScript types
│   └── utils.ts                  # Utility functions
│
├── public/
│   ├── fonts/
│   └── images/
│       └── preview.png           # <- Add preview image here
│
├── styles/
│   └── globals.css
│
├── .gitignore
├── next.config.ts
├── next-env.d.ts
└── package.json




🧪 Getting Started
1. Clone the repository
bash
Copy
Edit
git clone https://github.com/Ahmed4582/landingPageNext.git
cd landingPageNext
2. Install dependencies
bash
Copy
Edit
npm install
3. Run development server
bash
Copy
Edit
npm run dev

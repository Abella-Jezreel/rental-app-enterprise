# Rental App Enterprise – Client

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?logo=tailwindcss)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-purple?logo=redux)
![License](https://img.shields.io/badge/license-MIT-green)

Frontend application for the **Rental App Enterprise platform** built with **Next.js, TypeScript, Tailwind CSS, Redux Toolkit, and shadcn/ui**.

The goal of this project is to build a **scalable rental property platform** with a clean architecture and maintainable frontend structure.

---

# Features

- Modern **Next.js App Router architecture**
- **TypeScript** for type-safe development
- **Tailwind CSS** for responsive UI styling
- **shadcn/ui** for reusable UI components
- **Redux Toolkit** for centralized state management
- **React Hook Form + Zod** for form validation
- **Framer Motion** for UI animations
- **Mapbox GL** for property map visualization
- **Lucide React** for icons

---

# Screenshots

*(Add screenshots once UI is ready)*

Example:

```
docs/screenshots/homepage.png
docs/screenshots/property-list.png
docs/screenshots/property-details.png
```

Display example:

```md
![Home Page](docs/screenshots/homepage.png)
```

---

# Tech Stack

| Technology | Purpose |
|---|---|
| Next.js | React framework for optimized applications |
| TypeScript | Static typing |
| Tailwind CSS | Utility-first styling |
| Redux Toolkit | Global state management |
| shadcn/ui | Reusable UI components |
| React Hook Form | Form handling |
| Zod | Schema validation |
| Framer Motion | Animations |
| Mapbox GL | Interactive maps |

---

# Installation

Clone the repository

```bash
git clone https://github.com/Abella-Jezreel/rental-app-enterprise.git
```

Navigate to the client folder

```bash
cd rental-app-enterprise/client
```

Install dependencies

```bash
npm install
```

Run the development server

```bash
npm run dev
```

Application runs at

```
http://localhost:3000
```

---

# Project Setup Commands

Create Next.js project

```bash
npx create-next-app@latest client
```

Install dependencies

```bash
npm i lucide-react dotenv date-fns react-filepond filepond filepond-plugin-image-exif-orientation filepond-plugin-image-preview framer-motion mapbox-gl lodash react-hook-form zod @hookform/resolvers
```

Install development dependencies

```bash
npm i -D @types/node @types/uuid
```

Initialize shadcn

```bash
npx shadcn@latest init -d
```

Install UI components

```bash
npx shadcn@latest add avatar badge button card checkbox command dialog dropdown-menu form input label navigation-menu radio-group select separator sheet sidebar skeleton slider sonner switch table tabs textarea tooltip
```

Install Redux Toolkit

```bash
npm i react-redux @reduxjs/toolkit dotenv --legacy-peer-deps
```

---

# Project Structure

```
client
│
├ app                # Next.js App Router pages
├ components         # Reusable UI components
├ public             # Static assets
├ state              # Redux store and slices
├ types              # TypeScript types
│
├ tailwind.config.ts
├ tsconfig.json
├ package.json
```

---

# Architecture Overview

```
UI Components
      │
      ▼
Next.js Pages / Layouts
      │
      ▼
Redux Toolkit State
      │
      ▼
API Services
```

This architecture ensures:

- scalable frontend architecture
- reusable UI components
- centralized state management
- strong type safety

---

# Development Guidelines

Recommended workflow

```
feature branch
   ↓
develop feature
   ↓
commit using conventional commits
   ↓
merge to main
```

Example commits

```
feat: add property listing page
feat: implement booking flow
fix: resolve property filter bug
chore: update dependencies
```

---

# Future Improvements

Planned features

- authentication and authorization
- property listing and filtering
- booking system
- map-based property discovery
- notifications
- admin dashboard
- analytics

---

# License

MIT License

---

# Author

Jezreel Abella  
Full Stack Developer
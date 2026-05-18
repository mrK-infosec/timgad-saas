# TIMGAD - Landing Page

A high-performance, dark-mode-exclusive landing page for TIMGAD, built with React 18, Vite, Tailwind CSS v4, and Framer Motion. This design system emphasizes calm surfaces, crisp typography (Inter), and precision elements targeted at professional traders.

## Tech Stack
- React 18 (Strict Mode)
- Vite (Build Tool)
- Tailwind CSS v4 (Styling)
- Framer Motion (Animations)
- Phosphor Icons (Thin stroke icons)
- TypeScript (Strict typings)

## Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm run dev
   ```
3. **Build for production:**
   ```bash
   npm run build
   ```

## Architecture
- All components reside in `src/components/`.
- Styling leverages Tailwind v4 standard variables mapped in `src/index.css`.
- Framer Motion animations strictly respect `prefers-reduced-motion` using the custom `useReducedMotion` hook.
- Mock data arrays are segregated into `src/data/` for clean separation of concerns.

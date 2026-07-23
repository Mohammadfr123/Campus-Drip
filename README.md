# Campus Drip

A production-quality streetwear e-commerce marketplace for **The African Leadership College (ALC), Beau Plan, Mauritius**.

## Tech Stack

- **Next.js 14** (App Router) + TypeScript + Tailwind CSS
- **Framer Motion** for animations
- **Zustand** for cart, filters, and product viewer state
- **Supabase** for database, auth, and image storage
- **lucide-react** for icons
- Deployed on **Vercel**

## Getting Started

1. Clone the repo and install dependencies:

```bash
npm install
```

2. Copy environment variables:

```bash
cp .env.example .env.local
```

3. Fill in your Supabase credentials in `.env.local` (Step 2).

4. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
/app              → Next.js App Router pages
/components       → React components (ui, layout, shop, cart)
/lib              → Utilities, constants, Supabase clients
/store            → Zustand stores (cart, filters, product viewer)
/types            → TypeScript type definitions
/public/assets    → Static assets (logo, product placeholders)
/supabase         → SQL migrations and seed data (Step 2)
```

## Brand

- **Palette:** Dark base `#0B0B0F` with electric teal, violet, and amber accents
- **Fonts:** Space Grotesk (display) + Inter (body)
- **Vibe:** Campus streetwear / hypebeast energy

## Build Steps

This project is being built incrementally:

1. ✅ Scaffold Next.js + Tailwind + folder structure
2. Supabase schema, migrations, and seed data
3. Design system + shared UI components
4. Home page
5. Shop / Category pages
6. Product detail with color-swap viewer
7. Cart + Checkout
8. Auth pages
9. Design Studio
10. Admin dashboard
11. Final polish pass

## License

Private — ALC Campus Drip project.

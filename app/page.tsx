"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6">
      <div className="pointer-events-none absolute inset-0 bg-gradient-glow" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 mx-auto max-w-3xl text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent-teal/30 bg-accent-teal/10 px-4 py-1.5 text-sm text-accent-teal"
        >
          <Sparkles className="h-4 w-4" />
          ALC Mauritius · Beau Plan
        </motion.div>

        <h1 className="font-display text-5xl font-bold uppercase tracking-tight sm:text-7xl md:text-8xl">
          Campus
          <span className="text-gradient"> Drip</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg text-muted sm:text-xl">
          The campus streetwear marketplace built for ALC students. Bold drops,
          custom colorways, and drip that hits different.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/shop"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-accent px-8 py-3.5 font-display text-sm font-semibold uppercase tracking-wider text-background transition-all hover:shadow-glow"
          >
            Shop the Drop
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/design"
            className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-3.5 font-display text-sm font-semibold uppercase tracking-wider text-foreground transition-colors hover:border-accent-violet hover:text-accent-violet"
          >
            Design Studio
          </Link>
        </div>
      </motion.div>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute bottom-8 text-center text-sm text-muted"
      >
        <p>Step 1 scaffold complete — full site coming next.</p>
      </motion.footer>
    </main>
  );
}

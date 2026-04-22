import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Instagram, Twitter } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col pt-24 overflow-hidden">
      {/* Decorative Glows */}
      <div className="absolute -bottom-48 -left-48 w-[40rem] h-[40rem] bg-[var(--brand-primary)]/10 blur-[150px] rounded-full"></div>
      <div className="absolute top-1/4 right-1/4 w-[30rem] h-[30rem] bg-[var(--brand-accent)]/5 blur-[120px] rounded-full animate-pulse"></div>

      {/* Background Text Layer */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full pointer-events-none overflow-hidden whitespace-nowrap opacity-[0.03] z-0 select-none">
        <h1 className="text-[35vw] font-black italic leading-none uppercase tracking-tighter">
          CAMPUS
        </h1>
      </div>

      {/* Left Vertical Rail */}
      <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-16 z-20">
        <div className="rotate-[-90deg] origin-left text-[10px] uppercase font-black tracking-[0.8em] text-white/20 whitespace-nowrap italic">
          ALCHE MAURITIUS v.26
        </div>
        <div className="flex flex-col gap-4 items-center">
          <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-[var(--brand-primary)]/40 to-transparent"></div>
          <span className="text-[10px] font-black text-[var(--brand-primary)] graffiti">DRIP</span>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-24 flex flex-col flex-1 relative z-10">
        <div className="mt-32 max-w-5xl">
          <motion.div
            initial={{ y: 70, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-xs uppercase tracking-[0.6em] font-black text-[var(--brand-primary)] mb-8 block graffiti">
              // Made just for you!
            </span>
            <h1 className="text-8xl md:text-[11rem] font-black italic uppercase leading-[0.8] tracking-tighter mb-10">
              CAMPUS <br />
              <span className="text-outline text-transparent">DRIP</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl text-white/50 max-w-2xl mb-14 font-light leading-relaxed tracking-tight"
          >
            Engineered for the leaders.Own your presence.
             Premium streetwear & everyday essentials brought closer to you.
            
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-8"
          >
            <button className="px-12 py-6 bg-[var(--brand-primary)] text-black font-black uppercase text-xs tracking-[0.2em] flex items-center gap-4 hover:scale-105 active:scale-95 transition-all rounded-sm accent-glow">
              ENTER The Market  <ArrowRight size={20} />
            </button>
            <button className="px-12 py-6 border border-white/10 text-white font-black uppercase text-xs tracking-[0.2em] hover:bg-white/5 transition-all rounded-sm backdrop-blur-xl">
              VIEW Latest Drops!
            </button>
          </motion.div>
        </div>

        {/* Social Rail */}
        <div className="mt-auto pb-12 flex justify-between items-end">
          <div className="flex gap-12">
            <a href="#" className="text-white/20 hover:text-[var(--brand-primary)] transition-all flex items-center gap-3 group">
              <Instagram size={22} className="group-hover:rotate-12 transition-transform" />
              <span className="text-[10px] font-black uppercase tracking-widest hidden sm:block italic uppercase">Insta</span>
            </a>
            <a href="#" className="text-white/20 hover:text-[var(--brand-primary)] transition-all flex items-center gap-3 group">
              <Twitter size={22} className="group-hover:rotate-12 transition-transform" />
              <span className="text-[10px] font-black uppercase tracking-widest hidden sm:block italic uppercase">X.com</span>
            </a>
          </div>
          
          <div className="text-right">
             <div className="flex items-center gap-3 justify-end mb-2">
                <div className="w-3 h-3 rounded-full bg-[var(--brand-primary)] animate-pulse shadow-[0_0_12px_var(--brand-primary)]" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--brand-primary)] italic">DROP LIVE</span>
             </div>
             <p className="text-[11px] text-white/30 uppercase font-black tracking-widest">
               SYNC STATUS: SECURE
             </p>
          </div>
        </div>
      </div>
    </section>
  );
}

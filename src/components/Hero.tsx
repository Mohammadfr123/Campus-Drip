import React from 'react';
import { motion } from 'motion/react';
export default function Hero() {
  return (
    <section className="relative pt-24 min-h-[90vh] flex flex-col justify-center overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        {/* 3D Gradient Text */}
        <motion.div
           initial={{ opacity: 0, scale: 0.8, rotateX: 45 }}
           animate={{ opacity: 1, scale: 1, rotateX: 0 }}
           transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
           className="mb-12 perspective-1000"
        >
           <h2 className="text-4xl sm:text-6xl md:text-[8rem] lg:text-[10rem] font-black uppercase tracking-tighter graffiti leading-none text-center
             bg-gradient-to-br from-[#14532d] via-[#4ade80] to-[#064e4b] bg-clip-text text-transparent
             drop-shadow-[0_15px_15px_rgba(0,0,0,0.8)] 
             [text-shadow:2px_2px_0px_#064e3b,4px_4px_0px_rgba(0,0,0,0.4)]
             transform-gpu hover:scale-[1.02] transition-transform duration-500 cursor-default"
           >
             Get Your New Drip!
           </h2>
        </motion.div>

        {/* Video Area with Subheadings around it */}
        <div className="w-full max-w-5xl relative group">
          {/* Surround Texts - Improved Coverage */}
          <motion.div 
            animate={{ y: [0, -5, 0] }} 
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-12 -left-6 hidden lg:block"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[var(--brand-primary)] drop-shadow-[0_0_10px_rgba(74,222,128,0.5)]">URBAN_ROYALS</span>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 5, 0] }} 
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -bottom-12 -right-6 hidden lg:block"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[var(--brand-primary)] drop-shadow-[0_0_10px_rgba(74,222,128,0.5)]">COLLECTIVE_SOUL</span>
          </motion.div>

          <div className="absolute top-1/4 -left-16 -translate-y-1/2 -rotate-90 hidden lg:block opacity-30">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white whitespace-nowrap">EST. 2024 / ALCHE_DRIP</span>
          </div>

          <div className="absolute top-3/4 -right-16 -translate-y-1/2 rotate-90 hidden lg:block opacity-30">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white whitespace-nowrap">CURATED_FOR_THE_BOLD</span>
          </div>

          <div className="absolute -top-10 right-1/4 hidden lg:block opacity-20">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--brand-primary)]">STYLE_FORGE_NODE</span>
          </div>

          <div className="relative aspect-video overflow-hidden bg-black/40 rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] backdrop-blur-sm z-10">
            <iframe 
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/xFps6-Wqz08?start=44&autoplay=0&controls=1&rel=0&modestbranding=1" 
              title="Campus Drip Feature Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 text-center"
          >
            <span className="text-[var(--brand-primary)] uppercase tracking-[0.8em] text-xs md:text-sm font-black italic block mb-4 drop-shadow-[0_0_8px_rgba(74,222,128,0.4)]">Looking for Outfit Inspo?</span>
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[var(--brand-primary)] to-transparent mx-auto opacity-40" />
          </motion.div>
        </div>
        
        <div className="text-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-black mb-4 serif drop-shadow-2xl text-[var(--brand-primary)] text-outline-black">THE COLLECTIVE</h1>
            <motion.p 
              className="text-lg text-[#ccf6dd]/60 mb-8 max-w-2xl mx-auto font-medium uppercase tracking-widest leading-relaxed"
            >
              Engineered for excellence. <br />
              <span className="text-[var(--brand-primary)]">Curated for the bold.</span>
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

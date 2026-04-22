import React from 'react';
import { motion } from 'motion/react';

export default function VideoSection() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl glass-panel group">
               <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500 z-10 pointer-events-none" />
               <div className="video-container">
                  <iframe 
                    src="https://www.youtube.com/embed/xFps6-Wqz08?autoplay=0&controls=1&rel=0" 
                    title="Campus Drip Cinematic"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
               </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <span className="text-xs uppercase tracking-[0.4em] font-bold text-[var(--brand-primary)] mb-6 block">
              Digital Artifact 001
            </span>
            <h2 className="text-5xl md:text-6xl font-black italic uppercase tracking-tighter leading-tight mb-8">
              THE <span className="text-outline text-transparent">STREET</span><br /> 
              CHRONICLES
            </h2>
            <p className="text-lg text-white/50 max-w-lg leading-relaxed font-light mb-12">
              Deep dive into the aesthetic roots of Campus Drip. Our cinematic 
              lookbook exploring the collision of urban sport and high-tech 
              innovation.
            </p>
            <button className="px-10 py-5 bg-white/5 border border-white/10 rounded-full text-white font-black uppercase text-[10px] tracking-widest hover:bg-[var(--brand-primary)] hover:text-black hover:border-[var(--brand-primary)] transition-all accent-glow">
              Watch Experience
            </button>
          </motion.div>
        </div>
      </div>

      {/* Decorative Spray Paint Marks */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-10 pointer-events-none select-none overflow-hidden">
         <h1 className="text-9xl rotate-45 font-black text-white p-4">DRIP</h1>
      </div>
    </section>
  );
}

import React, { useEffect, useState } from 'react';
import { geminiService } from '../services/geminiService';
import { motion } from 'motion/react';
import { Megaphone } from 'lucide-react';

export default function AiAdBanner({ context }: { context: string }) {
  const [adCopy, setAdCopy] = useState("Loading exclusive drip intelligence...");

  useEffect(() => {
    const fetchAd = async () => {
      const copy = await geminiService.generateAdCopy(context);
      setAdCopy(copy);
    };
    fetchAd();
  }, [context]);

  return (
    <div className="relative py-12 px-6">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-black/80 backdrop-blur-3xl text-white rounded-3xl p-8 md:p-12 overflow-hidden relative group border border-white/5"
        >
          {/* Animated Background Graphics */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--brand-primary)]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-1000" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
               <div className="w-16 h-16 bg-[var(--brand-primary)] flex items-center justify-center rounded-full text-black accent-glow shrink-0">
                  <Megaphone size={32} />
               </div>
               <div>
                  <p className="text-2xl md:text-4xl font-black italic uppercase tracking-tighter graffiti pb-2 text-[var(--brand-primary)]">
                    {adCopy}
                  </p>
                  <div className="w-20 h-1 bg-[var(--brand-primary)]/20 rounded-full" />
               </div>
            </div>
            <button className="bg-[var(--brand-primary)] text-black px-12 py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:scale-105 active:scale-95 transition-all shadow-2xl accent-glow">
                Explore Collection
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

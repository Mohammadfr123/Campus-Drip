import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const COLLECTION_IMGS = [
  'https://lh3.googleusercontent.com/pw/AP1GczM-9piQqcRMamC2hRqRYVPj7KOwKtJj6YJfiovGWTzY6KPt6iiJIVI2=w1369-h913-s-no-gm?authuser=1',
  'https://lh3.googleusercontent.com/pw/AP1GczM-9piQqcRMamC2hRqRYVPj7KOwKtJj6YJfiovGWTzY6KPt6iiJIVI2=w800-h1200-crop-s-no-gm?authuser=1',
  'https://lh3.googleusercontent.com/pw/AP1GczM-9piQqcRMamC2hRqRYVPj7KOwKtJj6YJfiovGWTzY6KPt6iiJIVI2=w800-h800-crop-s-no-gm?authuser=1',
  'https://lh3.googleusercontent.com/pw/AP1GczM-9piQqcRMamC2hRqRYVPj7KOwKtJj6YJfiovGWTzY6KPt6iiJIVI2=w1200-h800-crop-s-no-gm?authuser=1',
  'https://lh3.googleusercontent.com/pw/AP1GczM-9piQqcRMamC2hRqRYVPj7KOwKtJj6YJfiovGWTzY6KPt6iiJIVI2=w800-h1200-s-no-gm?authuser=1',
  'https://lh3.googleusercontent.com/pw/AP1GczM-9piQqcRMamC2hRqRYVPj7KOwKtJj6YJfiovGWTzY6KPt6iiJIVI2=w1000-h1000-s-no-gm?authuser=1',
];

export default function ClothingGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={containerRef} className="py-40 bg-black/40 backdrop-blur-md relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-black italic graffiti uppercase mb-4 text-[var(--brand-primary)] text-outline-black">THE GALLERY</h2>
          <p className="text-[10px] text-white/40 uppercase tracking-[0.5em] font-black">Scroll to explore the collective</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16">
          {COLLECTION_IMGS.map((img, i) => (
            <GalleryItem key={i} index={i} src={img} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryItem({ src, index, progress }: { src: string; index: number; progress: any }) {
  const y = useTransform(progress, [0, 1], [0, (index % 3 + 1) * 100]);
  const rotate = useTransform(progress, [0, 1], [0, (index % 2 === 0 ? 10 : -10)]);
  const scale = useTransform(progress, [0, 1], [0.9, 1.1]);

  return (
    <motion.div 
      style={{ y, rotate, scale }}
      className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black/20 group"
    >
                            <img 
                              src={`https://images.weserv.nl/?url=${encodeURIComponent(src)}`}
                              alt="Collection Item" 
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                              referrerPolicy="no-referrer"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&q=80&w=800';
                              }}
                            />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
          <span className="text-[10px] font-black uppercase tracking-widest text-[var(--brand-primary)]">BATCH.026_CD</span>
      </div>
    </motion.div>
  );
}

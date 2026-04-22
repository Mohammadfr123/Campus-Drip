import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from '../data';
import ThreeDShowcase from './ThreeDShowcase';
import { ShoppingBag, Box, Image as ImageIcon, Maximize2 } from 'lucide-react';

export default function ProductCard({ product }: { product: Product }) {
  const [viewMode, setViewMode] = useState<'2d' | '3d'>('2d');
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative bg-[var(--brand-secondary)] border border-white/5 overflow-hidden transition-all duration-500 hover:border-[var(--brand-primary)]/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image / 3D Toggle Container */}
      <div className="relative aspect-[4/5] bg-[#0c0c0c] overflow-hidden">
        <AnimatePresence mode="wait">
          {viewMode === '3d' ? (
             <motion.div
               key="3d-viewer"
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0, scale: 1.05 }}
               className="w-full h-full absolute inset-0 cursor-move"
             >
                <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(235,255,0,0.05)_0%,_transparent_70%)]" />
                <ThreeDShowcase color={product.color} />
             </motion.div>
          ) : (
            <motion.div
              key="2d-image"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full h-full absolute inset-0"
            >
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Controls */}
        <div className="absolute top-4 right-4 z-30 flex flex-col gap-2">
            <button 
                onClick={() => setViewMode(viewMode === '2d' ? '3d' : '2d')}
                className={`w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-xl border transition-all ${
                    viewMode === '3d' 
                    ? 'bg-[var(--brand-primary)] border-[var(--brand-primary)] text-black shadow-[0_0_15px_rgba(235,255,0,0.4)]' 
                    : 'bg-black/40 border-white/10 text-white hover:border-white/30'
                }`}
                title={viewMode === '2d' ? 'Switch to 3D View' : 'Switch to Static Image'}
            >
                {viewMode === '2d' ? <Box size={18} /> : <ImageIcon size={18} />}
            </button>
            <button className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 text-white flex items-center justify-center hover:bg-white/10 transition-all opacity-0 group-hover:opacity-100">
                <Maximize2 size={16} />
            </button>
        </div>

        {/* Category Label */}
        <div className="absolute top-4 left-4 z-10">
          <span className="text-[9px] uppercase tracking-[0.3em] font-black px-3 py-1.5 bg-black/60 text-[var(--brand-primary)] backdrop-blur-md border border-[var(--brand-primary)]/20 rounded-full">
            {product.category}
          </span>
        </div>

        {/* Quick Add Overlay */}
        <div className="absolute bottom-4 left-4 right-4 flex gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-30">
            <button className="flex-1 bg-[var(--brand-primary)] text-black text-[10px] font-black uppercase tracking-[0.2em] py-4 flex items-center justify-center gap-2 hover:brightness-110 transition-all rounded-sm active:scale-95 accent-glow">
              <ShoppingBag size={14} />
              Grab Item
            </button>
        </div>
      </div>

      {/* Info Section */}
      <div className="p-6 border-t border-white/5 bg-[#0a0a0a] relative">
        <div className="flex justify-between items-start mb-2">
            <h3 className="text-xs font-black uppercase tracking-widest text-white group-hover:text-[var(--brand-primary)] transition-colors">
                {product.name}
            </h3>
            <span className="text-xs font-mono font-bold text-[var(--brand-primary)]">Rs {product.price}</span>
        </div>
        <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold leading-relaxed line-clamp-1">
            {product.description}
        </p>

        {/* Decorative elements */}
        <div className="mt-4 pt-4 border-t border-white/5 flex gap-2">
            <div className="w-2 h-2 rounded-full bg-[var(--brand-primary)] opacity-20" />
            <div className="w-2 h-2 rounded-full bg-white opacity-5" />
            <div className="w-2 h-2 rounded-full bg-white opacity-5" />
        </div>
      </div>
    </div>
  );
}

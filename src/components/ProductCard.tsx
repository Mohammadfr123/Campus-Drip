import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from '../data';
import ThreeDShowcase from './ThreeDShowcase';
import { ShoppingBag, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }: { product: Product }) {
  const [viewMode, setViewMode] = useState<'2d' | '3d'>('2d');
  const [isHovered, setIsHovered] = useState(false);
  const [justAdded, setJustAdded] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  };

  return (
    <div 
      className="group relative bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden transition-all duration-500 hover:border-[var(--brand-primary)]/40 shadow-2xl rounded-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image / 3D Toggle Container */}
      <div className="relative aspect-[4/5] bg-black/40 overflow-hidden">
        <AnimatePresence mode="wait">
          {viewMode === '3d' ? (
             <motion.div
               key="3d-viewer"
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0, scale: 1.05 }}
               className="w-full h-full absolute inset-0 cursor-move"
             >
                <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,112,67,0.1)_0%,_transparent_70%)]" />
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Category Label */}
        <div className="absolute top-4 left-4 z-10 flex gap-2">
          <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-black/60 text-[var(--brand-primary)] border border-[var(--brand-primary)]/20 rounded-full backdrop-blur-md">
            {product.category}
          </span>
          <button 
            onClick={() => setViewMode(viewMode === '2d' ? '3d' : '2d')}
            className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-white/10 text-[var(--brand-primary)] border border-[var(--brand-primary)]/20 rounded-full backdrop-blur-md hover:bg-white/20"
          >
            {viewMode === '2d' ? '3D VIEW' : '2D VIEW'}
          </button>
        </div>
      </div>

      {/* Info Section */}
      <div className="p-6 border-t border-white/5 bg-black/20 relative">
        <div className="flex justify-between items-start mb-2 group/title">
            <h3 className="text-sm font-black uppercase tracking-tighter text-[var(--brand-primary)] transition-all duration-300 group-hover/title:text-white group-hover:scale-105 origin-left">
                {product.name}
            </h3>
            <span className="text-sm font-bold text-[var(--brand-primary)] group-hover:text-white transition-colors duration-500">Rs {product.price}</span>
        </div>
        <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold line-clamp-1">
            {product.description}
        </p>

        {/* Action Button */}
        <div className="mt-6 pt-4 border-t border-white/5">
            <button 
              onClick={handleAddToCart}
              className={`w-full py-4 rounded-xl text-[10px] font-black uppercase tracking-widest active:scale-95 transition-all flex items-center justify-center gap-2 accent-glow ${justAdded ? 'bg-green-500 text-white' : 'bg-[var(--brand-primary)] text-black hover:brightness-110'}`}
            >
                {justAdded ? <Check size={14} /> : <ShoppingBag size={14} />}
                {justAdded ? 'Added to Vault' : 'Secure This Drop'}
            </button>
        </div>
      </div>
    </div>
  );
}

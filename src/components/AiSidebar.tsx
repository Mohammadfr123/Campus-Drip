import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, X, Sliders, ChevronRight } from 'lucide-react';
import { geminiService } from '../services/geminiService';
import { Product } from '../data';
import { PRODUCTS } from '../data';

interface AiSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (productId: string) => void;
}

export default function AiSidebar({ isOpen, onClose, onSelectProduct }: AiSidebarProps) {
  const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<{ id: string, reason: string }[]>([]);
  const [preferences, setPreferences] = useState({
    priceRange: '0-5000',
    type: 'Any',
    specifications: ''
  });

  const handleGetRecommendations = async () => {
    setLoading(true);
    const results = await geminiService.getAiRecommendations(preferences);
    setRecommendations(results);
    setLoading(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200]"
          />
          <motion.div 
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 h-full w-full max-w-md bg-black/90 backdrop-blur-3xl border-r border-white/10 z-[201] p-12 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-12">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[var(--brand-primary)] rounded-full flex items-center justify-center text-black accent-glow">
                  <Sparkles size={20} />
                </div>
                <h3 className="text-2xl font-black italic uppercase graffiti">AI Suggest</h3>
              </div>
              <button onClick={onClose} className="text-white/40 hover:text-white transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="space-y-12">
              <div className="space-y-6">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 block">Select Price Range (Rs)</label>
                <select 
                   value={preferences.priceRange}
                   onChange={(e) => setPreferences({...preferences, priceRange: e.target.value})}
                   className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-xs font-bold focus:outline-none focus:border-[var(--brand-primary)]"
                >
                  <option value="0-1000">Under 1,000</option>
                  <option value="1000-3000">1,000 - 3,000</option>
                  <option value="3000-5000">3,000 - 5,000</option>
                  <option value="5000+">Above 5,000</option>
                </select>
              </div>

              <div className="space-y-6">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 block">Clothing Type</label>
                <div className="grid grid-cols-2 gap-3">
                  {['Hoodies', 'T-Shirts', 'Pants', 'Category', 'Any'].map(type => (
                    <button 
                      key={type}
                      onClick={() => setPreferences({...preferences, type})}
                      className={`px-4 py-3 rounded-lg text-[10px] font-black uppercase tracking-widest border transition-all ${preferences.type === type ? 'bg-white text-black border-white' : 'border-white/10 text-white/40 hover:border-white/30'}`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 block">Specific Style / Vibe</label>
                <textarea 
                  placeholder="e.g. Minimalist black, oversized fits, academic core..."
                  value={preferences.specifications}
                  onChange={(e) => setPreferences({...preferences, specifications: e.target.value})}
                  className="w-full h-32 bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-xs font-medium focus:outline-none focus:border-[var(--brand-primary)] resize-none"
                />
              </div>

              <button 
                onClick={handleGetRecommendations}
                disabled={loading}
                className="w-full bg-[var(--brand-primary)] text-black py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-3 accent-glow disabled:opacity-50"
              >
                {loading ? 'Consulting the Oracle...' : 'Get AI Suggestions'}
              </button>

              <div className="space-y-6">
                {recommendations.length > 0 && (
                   <>
                     <h4 className="text-sm font-black uppercase tracking-widest">Recommended Drops</h4>
                     <div className="space-y-4">
                        {recommendations.map((rec) => {
                          const product = PRODUCTS.find(p => p.id === rec.id);
                          if (!product) return null;
                          return (
                            <div 
                              key={product.id}
                              className="p-6 bg-white/5 border border-white/10 rounded-2xl group cursor-pointer hover:border-[var(--brand-primary)]/40 transition-all"
                              onClick={() => {
                                onSelectProduct(product.id);
                                onClose();
                              }}
                            >
                                <div className="flex gap-4 items-center mb-4">
                                   <div className="w-12 h-12 bg-black/20 rounded-lg overflow-hidden shrink-0 border border-white/5">
                                      <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                                   </div>
                                   <div>
                                      <h5 className="text-[11px] font-black uppercase tracking-tight">{product.name}</h5>
                                      <span className="text-[9px] text-black bg-[var(--brand-primary)] font-black px-2 py-0.5 rounded-full inline-block mt-1">Rs {product.price}</span>
                                   </div>
                                </div>
                             <p className="text-[10px] text-white/40 leading-relaxed italic">&quot;{rec.reason}&quot;</p>
                            </div>
                          );
                        })}
                     </div>
                   </>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

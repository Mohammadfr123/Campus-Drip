import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, Search, ChevronDown, X, Sparkles } from 'lucide-react';
import Logo from './Logo';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../context/CartContext';
import { geminiService } from '../services/geminiService';

interface NavbarProps {
  currentPage: string;
  onPageChange: (page: string, subCategory?: 'All' | 'Men' | 'Women' | 'Community') => void;
  onToggleAiSidebar: () => void;
}

export default function Navbar({ currentPage, onPageChange, onToggleAiSidebar }: NavbarProps) {
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState<{ suggestion: string, type: string }[]>([]);
  const { totalItems } = useCart();

  const menuItems = ['Home', 'Shop', 'Our Vision', 'Get in Touch'];

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (searchQuery.length > 2) {
        const res = await geminiService.getSearchSuggestions(searchQuery);
        setSuggestions(res);
      } else {
        setSuggestions([]);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-black/20 backdrop-blur-xl border-b border-white/5">
      <div className="container mx-auto px-6 h-24 flex items-center justify-between">
        <div className="flex items-center gap-12">
          {/* AI Toggle Button on far left */}
          <button 
            onClick={onToggleAiSidebar}
            className="flex items-center gap-3 bg-white/5 border border-white/10 hover:border-[var(--brand-primary)]/50 px-6 py-3 rounded-full transition-all group"
          >
            <Sparkles size={18} className="text-[var(--brand-primary)] group-hover:scale-125 transition-transform" />
            <span className="text-[10px] font-black uppercase tracking-widest hidden lg:block">AI Suggest</span>
          </button>

          <button onClick={() => onPageChange('Home')} className="flex items-center gap-4 group cursor-pointer text-left focus:outline-none">
            <Logo />
            <div className="flex flex-col">
                <span className="text-xl font-black tracking-tighter text-[var(--brand-primary)] uppercase italic text-outline-black">Campus Drip</span>
            </div>
          </button>
          
          <div className="hidden xl:flex gap-6 items-center">
            {menuItems.map((item) => (
              <div key={item} className="relative group/menu">
                <button 
                    onClick={() => onPageChange(item)}
                    onMouseEnter={() => item === 'Shop' && setIsShopOpen(true)}
                    className={`flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.3em] transition-all outline-none ${
                        currentPage === item 
                          ? 'text-[var(--brand-primary)]' 
                          : 'text-white/40 hover:text-white'
                    }`}
                >
                    {item}
                    {item === 'Shop' && <ChevronDown size={14} className={`transition-transform duration-300 ${isShopOpen ? 'rotate-180' : ''}`} />}
                </button>

                {item === 'Shop' && (
                   <div 
                     onMouseLeave={() => setIsShopOpen(false)}
                     className={`absolute top-full left-0 pt-8 transition-all duration-300 ${isShopOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
                   >
                     <div className="bg-black/90 border border-white/10 backdrop-blur-3xl p-6 min-w-[240px] rounded-sm">
                        <div className="space-y-4">
                           {['Men', 'Women', 'Community'].map((col) => (
                              <button
                                key={col}
                                onClick={() => {
                                    onPageChange('Shop', col as any);
                                    setIsShopOpen(false);
                                }}
                                className="block w-full text-left text-[10px] font-black uppercase tracking-[0.2em] text-[#ccf6dd]/60 hover:text-[var(--brand-primary)] hover:translate-x-2 transition-all duration-300"
                              >
                                 {col === 'Community' ? 'Faith & Culture' : `Clothes for ${col}`}
                              </button>
                           ))}
                        </div>
                     </div>
                   </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-8">
          <div className="text-[10px] font-mono text-white/30 hidden md:block uppercase tracking-widest">Mauritius / Rs (MUR)</div>
          
          {/* AI Search Search Bar */}
          <div className="relative">
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className={`text-white/40 hover:text-white transition-colors p-2 ${isSearchOpen ? 'text-[var(--brand-primary)]' : ''}`}
            >
              <Search size={22} />
            </button>
            <AnimatePresence>
              {isSearchOpen && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="absolute top-full right-0 mt-8 w-[300px] md:w-[400px] bg-black/90 backdrop-blur-3xl border border-white/10 p-6 rounded-2xl shadow-2xl overflow-hidden"
                >
                  <input 
                    autoFocus
                    placeholder="Search drops, categories..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-xs font-medium focus:outline-none focus:border-[var(--brand-primary)]"
                  />
                  
                  {suggestions.length > 0 && (
                     <div className="mt-6 space-y-2">
                        <span className="text-[8px] font-black uppercase tracking-widest text-white/20 px-2">AI Suggestions</span>
                        {suggestions.map((s, i) => (
                          <button 
                            key={i}
                            onClick={() => {
                               onPageChange('Shop');
                               setSearchQuery('');
                               setIsSearchOpen(false);
                            }}
                            className="w-full flex items-center justify-between p-4 hover:bg-white/5 rounded-xl transition-all group"
                          >
                            <span className="text-[10px] font-black uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">{s.suggestion}</span>
                            <span className="text-[8px] font-mono p-1 bg-white/10 rounded text-white/40 group-hover:text-[var(--brand-primary)] transition-colors">{s.type}</span>
                          </button>
                        ))}
                     </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button 
            onClick={() => onPageChange('Cart')}
            className={`relative p-2 group transition-all ${currentPage === 'Cart' ? 'text-[var(--brand-primary)]' : 'text-white/40 hover:text-[var(--brand-primary)]'}`}
          >
            <ShoppingCart size={30} />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-[var(--brand-primary)] text-black text-[10px] font-black rounded-full flex items-center justify-center accent-glow">
              {totalItems}
            </span>
          </button>
          <button className="lg:hidden text-white p-2">
            <Menu size={28} />
          </button>
        </div>
      </div>
    </nav>
  );
}

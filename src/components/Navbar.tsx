import React, { useState } from 'react';
import { ShoppingCart, Menu, Search, ChevronDown } from 'lucide-react';
import Logo from './Logo';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  currentPage: string;
  onPageChange: (page: string, subCategory?: 'All' | 'Men' | 'Women' | 'Community') => void;
}

export default function Navbar({ currentPage, onPageChange }: NavbarProps) {
  const [isShopOpen, setIsShopOpen] = useState(false);
  const menuItems = ['Home', 'Shop', 'About', 'Delivery', 'Contact'];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-[var(--brand-secondary)]/80 backdrop-blur-2xl border-b border-white/5">
      <div className="container mx-auto px-6 h-28 flex items-center justify-between">
        <div className="flex items-center gap-16">
          <button onClick={() => onPageChange('Home')} className="flex items-center gap-4 group cursor-pointer text-left focus:outline-none">
            <Logo />
            <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tighter uppercase italic leading-none">Campus Drip</span>
                <span className="text-[8px] font-bold tracking-[0.4em] text-[var(--brand-primary)] uppercase">ALCHE • Beau Plan</span>
            </div>
          </button>
          
          <div className="hidden xl:flex gap-8 items-center">
            {menuItems.map((item) => (
              <div key={item} className="relative group/menu">
                <button 
                    onClick={() => onPageChange(item)}
                    onMouseEnter={() => item === 'Shop' && setIsShopOpen(true)}
                    className={`flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.3em] transition-all hover:translate-x-1 outline-none ${
                        currentPage === item ? 'text-[var(--brand-primary)]' : 'text-white/40 hover:text-[var(--brand-primary)] animate-pulse-slow'
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
                                className="block w-full text-left text-[10px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-[var(--brand-primary)] transition-colors"
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
          <button className="text-white/40 hover:text-white transition-colors p-2 hidden sm:block">
            <Search size={22} />
          </button>
          <button className="relative text-white/40 hover:text-[var(--brand-primary)] p-2 group transition-all">
            <ShoppingCart size={30} />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-[var(--brand-primary)] text-black text-[10px] font-black rounded-full flex items-center justify-center accent-glow">
              0
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

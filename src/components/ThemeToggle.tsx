import React from 'react';
import { useTheme, THEMES } from '../context/ThemeContext';
import { Palette, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ThemeToggle() {
  const { currentTheme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all shadow-xl"
      >
        {isOpen ? <X size={24} /> : <Palette size={24} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="absolute bottom-20 right-0 w-64 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-2xl"
          >
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-white/40 mb-6 flex items-center gap-2">
              <Palette size={12} /> Theme Factory
            </h3>
            
            <div className="flex flex-col gap-3">
              {THEMES.map((theme) => (
                <button
                  key={theme.name}
                  onClick={() => setTheme(theme.name)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all border ${
                    currentTheme.name === theme.name
                      ? 'bg-white text-black border-white'
                      : 'bg-white/5 text-white border-white/5 hover:border-white/20'
                  }`}
                >
                  <span className="text-[10px] font-black uppercase tracking-widest leading-none">
                    {theme.name}
                  </span>
                  <div 
                    className="w-3 h-3 rounded-full border border-black/20"
                    style={{ backgroundColor: theme.colors.primary }}
                  />
                </button>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/5">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-[9px] font-bold text-white/30 uppercase tracking-widest">Accent Sync</span>
                    <div className="w-8 h-4 bg-[#FF7043] rounded-full" />
                </div>
                <p className="text-[9px] text-white/20 italic leading-relaxed">
                  Real-time synchronization across all modular components and 3D primitives.
                </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

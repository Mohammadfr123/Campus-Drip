import React from 'react';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

export default function CartView({ onBack }: { onBack: () => void }) {
  const { cart, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mb-8 border border-white/10">
          <ShoppingBag size={48} className="text-white/20" />
        </div>
        <h2 className="text-4xl font-black uppercase italic graffiti mb-4">Your vault is empty</h2>
        <p className="text-white/40 mb-12 uppercase tracking-widest text-xs">Stock up on the latest campus drip</p>
        <button 
          onClick={onBack}
          className="flex items-center gap-4 bg-[var(--brand-primary)] text-black px-12 py-5 rounded-xl font-black uppercase text-xs tracking-widest hover:scale-105 transition-all accent-glow"
        >
          <ArrowLeft size={18} />
          Go Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-40 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center justify-between mb-16">
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] font-black text-[var(--brand-primary)] mb-2 block">
                Checkout / Review
            </span>
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic graffiti">
              YOUR <span className="text-outline text-transparent">VAULT</span>
            </h2>
          </div>
          <button 
            onClick={onBack} 
            className="text-white/40 hover:text-white flex items-center gap-2 text-[10px] font-black uppercase tracking-widest transition-all"
          >
            <ArrowLeft size={16} /> Continue Shopping
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-8">
            {cart.map((item) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex gap-8 p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl group"
              >
                <div className="w-32 h-40 rounded-xl overflow-hidden bg-black/20 shrink-0 border border-white/5">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between py-2">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-black uppercase italic tracking-tight text-white">{item.name}</h3>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-white/20 hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                    <p className="text-[10px] text-white/40 uppercase tracking-widest mb-4">{item.category}</p>
                    <p className="text-sm font-bold text-[var(--brand-primary)]">Rs {item.price}</p>
                  </div>

                  <div className="flex items-center gap-6 mt-4">
                    <div className="flex items-center bg-black/40 border border-white/10 rounded-lg overflow-hidden">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-3 hover:bg-white/5 text-white/60 transition-colors"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-12 text-center text-sm font-black">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-3 hover:bg-white/5 text-white/60 transition-colors"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    <div className="text-right ml-auto">
                      <span className="text-[10px] text-white/20 uppercase block mb-1">Subtotal</span>
                      <span className="text-lg font-black italic">Rs {item.price * item.quantity}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="space-y-8">
            <div className="p-8 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl sticky top-40">
              <h4 className="text-2xl font-black uppercase italic mb-8 border-b border-white/5 pb-4">Order Summary</h4>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-white/40 font-bold uppercase text-[10px] tracking-widest">
                  <span>Items ({totalItems})</span>
                  <span>Rs {totalPrice}</span>
                </div>
                <div className="flex justify-between text-white/40 font-bold uppercase text-[10px] tracking-widest">
                  <span>Shipping</span>
                  <span className="text-green-500">FREE</span>
                </div>
                <div className="pt-4 border-t border-white/5 flex justify-between items-end">
                  <span className="text-sm font-black uppercase italic">Total Amount</span>
                  <span className="text-3xl font-black text-[var(--brand-primary)]">Rs {totalPrice}</span>
                </div>
              </div>
              <button 
                className="w-full bg-[var(--brand-primary)] text-black py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:scale-[1.02] transition-all accent-glow"
              >
                Checkout Now
              </button>
              <p className="text-[8px] text-white/20 text-center mt-6 uppercase tracking-widest">Secure encrypted transactions via ALCHE node</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

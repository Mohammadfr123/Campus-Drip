/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import { PRODUCTS } from './data';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, MapPin, Truck, Globe, Mail, Phone, Instagram } from 'lucide-react';

import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import VideoSection from './components/VideoSection';
import Logo from './components/Logo';

export default function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  const [activeCollection, setActiveCollection] = useState<'All' | 'Men' | 'Women' | 'Community'>('All');
  const [filter, setFilter] = useState('All');
  
  const filteredProducts = PRODUCTS.filter(p => {
    const matchesCollection = activeCollection === 'All' || p.collection === activeCollection;
    const matchesCategory = filter === 'All' || p.category === filter;
    return matchesCollection && matchesCategory;
  });

  const renderContent = () => {
    switch(currentPage) {
      case 'Shop':
        return (
          <section className="py-40">
            <div className="container mx-auto px-6">
              <div className="flex flex-col mb-16 pt-20">
                <span className="text-[10px] uppercase tracking-[0.4em] font-black text-[var(--brand-primary)] mb-4 block">
                   Campus Hub / Inventory
                </span>
                <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic graffiti mb-8">
                  THE <span className="text-outline text-transparent">MARKET</span>
                </h2>
                
                {/* Collection Selector */}
                <div className="flex flex-wrap gap-4 mb-12 bg-white/5 p-2 rounded-full w-fit">
                   {['All', 'Men', 'Women', 'Community'].map((col) => (
                      <button
                        key={col}
                        onClick={() => {
                            setActiveCollection(col as any);
                            setFilter('All');
                        }}
                        className={`px-8 py-3 rounded-full text-[10px] uppercase font-black tracking-widest transition-all ${
                            activeCollection === col ? 'bg-[var(--brand-primary)] text-black accent-glow' : 'text-white/40 hover:text-white'
                        }`}
                      >
                         {col === 'Community' ? 'Faith & Culture' : col}
                      </button>
                   ))}
                </div>

                {/* Sub-Category Selector */}
                <div className="flex flex-wrap gap-3">
                  {['All', ...new Set(PRODUCTS.filter(p => activeCollection === 'All' || p.collection === activeCollection).map(p => p.category))].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setFilter(cat)}
                      className={`text-[9px] uppercase tracking-[0.2em] px-6 py-2.5 font-black transition-all border rounded-sm ${
                        filter === cat 
                          ? 'bg-white text-black border-white' 
                          : 'text-white/30 border-white/5 hover:border-white/20'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </section>
        );

      case 'About':
        return (
          <section className="py-40 min-h-screen">
            <div className="container mx-auto px-6 pt-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                 <div className="relative">
                    <div className="absolute -top-20 -left-20 w-64 h-64 bg-[var(--brand-primary)]/10 blur-[100px] rounded-full" />
                    <h1 className="text-7xl md:text-9xl font-black italic uppercase tracking-tighter graffiti mb-12 relative z-10 leading-[0.8]">
                      THE <br /><span className="text-[var(--brand-primary)]">CORE</span> <br /><span className="text-outline text-transparent">STORY</span>
                    </h1>
                    <div className="space-y-8 text-xl text-white/60 font-light leading-relaxed">
                       <p>
                          Campus Drip isn't just a label—it's a movement born in the corridors of <span className="text-white font-bold italic">ALCHE Beau Plan</span>. 
                          We represent the ambitious, the dreamers, and the leaders who refuse to blend into the background.
                       </p>
                       <p>
                          Our garments are engineered at the intersection of <span className="text-[var(--brand-primary)] font-bold">Mauritian Heritage</span> and 
                          <span className="text-white font-bold italic">Global Excellence</span>. Every stitch is a commitment to quality that survives 
                          the tropical heat and the high-pressure academic life.
                       </p>
                    </div>
                 </div>
                 <div className="grid grid-cols-2 gap-6 pt-12">
                    {[
                      { title: 'CRAFTED', desc: 'Detailed 3D designs for perfect fits.' },
                      { title: 'LOCAL', desc: 'Rooted deeply in Pamplemousses soil.' },
                      { title: 'INCLUSIVE', desc: 'Serving every student, every community.' },
                      { title: 'BOLD', desc: 'Loud designs for quiet confidence.' }
                    ].map((item, i) => (
                       <div key={i} className="p-8 border border-white/5 bg-white/5 backdrop-blur-xl rounded-sm hover:border-[var(--brand-primary)]/50 transition-all">
                          <h3 className="text-2xl font-black italic mb-3 text-[var(--brand-primary)]">{item.title}</h3>
                          <p className="text-[10px] text-white/30 uppercase font-black tracking-widest leading-relaxed">{item.desc}</p>
                       </div>
                    ))}
                    <div className="col-span-2 p-12 bg-[var(--brand-primary)] text-black rounded-sm mt-6">
                       <h3 className="text-3xl font-black italic mb-4 uppercase">OUR PLEDGE</h3>
                       <p className="text-sm font-bold leading-relaxed uppercase tracking-tight">
                          To empower every student at ALCHE to own their presence. We provide the armor; you provide the leadership.
                       </p>
                    </div>
                 </div>
              </div>
            </div>
          </section>
        );

      case 'Delivery':
        return (
          <section className="py-40">
             <div className="container mx-auto px-6 pt-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                   <div>
                      <h2 className="text-7xl font-black italic graffiti uppercase mb-8">LOGISTICS <span className="text-[var(--brand-primary)]">WING</span></h2>
                      <div className="space-y-8">
                         <div className="flex gap-6 items-start">
                            <div className="w-12 h-12 rounded-full bg-[var(--brand-primary)] flex items-center justify-center text-black flex-shrink-0">
                               <MapPin size={24} />
                            </div>
                            <div>
                               <h4 className="text-xl font-black italic uppercase italic">ON-CAMPUS PICKUP</h4>
                               <p className="text-white/40 text-xs font-bold uppercase mt-2">ALCHE Student Hub, Beau Plan. Zero shipping fees.</p>
                            </div>
                         </div>
                         <div className="flex gap-6 items-start">
                            <div className="w-12 h-12 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white flex-shrink-0">
                               <Truck size={24} />
                            </div>
                            <div>
                               <h4 className="text-xl font-black italic uppercase italic">MAURITIUS WIDE</h4>
                               <p className="text-white/40 text-xs font-bold uppercase mt-2">Next-day delivery to Pamplemousses and beyond via local fleet.</p>
                            </div>
                         </div>
                         <div className="flex gap-6 items-start">
                            <div className="w-12 h-12 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white flex-shrink-0">
                               <Globe size={24} />
                            </div>
                            <div>
                               <h4 className="text-xl font-black italic uppercase italic">INTERNATIONAL</h4>
                               <p className="text-white/40 text-xs font-bold uppercase mt-2">Shipping globally to our alumni across the continent.</p>
                            </div>
                         </div>
                      </div>
                   </div>
                   <div className="aspect-square bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl p-12 flex flex-col justify-center overflow-hidden relative">
                       <h3 className="text-4xl font-black italic mb-4">DRIP TRACKER</h3>
                       <p className="text-[10px] text-white/40 uppercase font-black tracking-widest mb-8 uppercase">LOGISTICS_STATUS: ACTIVE</p>
                       <div className="h-1 bg-white/10 w-full mb-12 overflow-hidden">
                          <motion.div 
                            initial={{ x: '-100%' }}
                            animate={{ x: '100%' }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                            className="w-1/3 h-full bg-[var(--brand-primary)]" 
                          />
                       </div>
                       <div className="space-y-4 font-mono text-[10px]">
                          <p className="text-[var(--brand-primary)]">BATCH_ID: CD-2026-ALCHE</p>
                          <p className="text-white/40 uppercase">ZONE: PAMPLEMOUSSES_DISTRICT</p>
                       </div>
                   </div>
                </div>
             </div>
          </section>
        );

      case 'Contact':
        return (
          <section className="py-40">
             <div className="container mx-auto px-6 pt-20">
                <h2 className="text-8xl font-black italic graffiti uppercase mb-16 text-center">Contact <span className="text-[var(--brand-primary)]">details</span></h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
                   <div className="grid grid-cols-1 gap-6">
                      <a href="mailto:CampusDrip@gmail.com" className="p-10 border border-white/5 bg-white/5 rounded-sm hover:border-[var(--brand-primary)] transition-all group flex items-center gap-8">
                         <Mail size={32} className="text-white/20 group-hover:text-[var(--brand-primary)] transition-colors" />
                         <div>
                            <h4 className="text-lg font-black italic uppercase">EMAIL</h4>
                            <p className="text-[12px] text-white/40 font-bold tracking-widest">CampusDrip@gmail.com</p>
                         </div>
                      </a>
                      <a href="tel:58072542" className="p-10 border border-white/5 bg-white/5 rounded-sm hover:border-[var(--brand-primary)] transition-all group flex items-center gap-8">
                         <Phone size={32} className="text-white/20 group-hover:text-[var(--brand-primary)] transition-colors" />
                         <div>
                            <h4 className="text-lg font-black italic uppercase">PHONE</h4>
                            <p className="text-[12px] text-white/40 font-bold tracking-widest uppercase">5807 2542</p>
                         </div>
                      </a>
                      <a href="https://instagram.com/Campus_Drip_Mu" target="_blank" rel="noreferrer" className="p-10 border border-white/5 bg-white/5 rounded-sm hover:border-[var(--brand-primary)] transition-all group flex items-center gap-8">
                         <Instagram size={32} className="text-white/20 group-hover:text-[var(--brand-primary)] transition-colors" />
                         <div>
                            <h4 className="text-lg font-black italic uppercase">INSTAGRAM</h4>
                            <p className="text-[12px] text-white/40 font-bold tracking-widest uppercase">@Campus_Drip_Mu</p>
                         </div>
                      </a>
                   </div>
                   <div className="h-full min-h-[400px] border border-white/5 rounded-sm overflow-hidden bg-white/5 grayscale">
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14986.516597816!2d57.5755!3d-20.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x217c5b62562b7c21%3A0x6b2b7c21562b7c21!2sAfrican%20Leadership%20College%20(ALC)%20Mauritius!5e0!3m2!1sen!2smu!4v1713680000000!5m2!1sen!2smu"
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                   </div>
                </div>
             </div>
          </section>
        );

      default:
        return (
          <>
            <Hero />
            <VideoSection />
            <section id="shop-all" className="py-32 border-t border-white/5">
              <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                  <div>
                    <span className="text-xs uppercase tracking-[0.4em] font-bold text-[var(--brand-primary)] mb-4 block">
                      ARCHIVE / 26
                    </span>
                    <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic graffiti">
                      BEAU PLAN <br /> <span className="text-outline text-transparent">DROPS</span>
                    </h2>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-12">
                  {PRODUCTS.slice(0, 3).map((product, idx) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <ProductCard product={product} />
                    </motion.div>
                  ))}
                </div>
                <div className="mt-20 text-center">
                    <button onClick={() => setCurrentPage('Shop')} className="border-b border-[var(--brand-primary)] text-[var(--brand-primary)] font-black italic uppercase text-sm tracking-widest pb-1 hover:translate-x-2 transition-all inline-block">
                        View Full Inventory →
                    </button>
                </div>
              </div>
            </section>
            
            <section className="py-48 relative overflow-hidden border-t border-white/5">
               <div className="container mx-auto px-6 relative z-10 text-center">
                   <h2 className="text-7xl md:text-[10rem] font-black uppercase tracking-tighter italic leading-none opacity-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none graffiti">
                      ALCHE_CORE
                   </h2>
                   <div className="max-w-3xl mx-auto">
                      <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-12 italic leading-tight graffiti">
                         WE ARE THE <span className="text-[var(--brand-primary)]">FUTURE</span>.
                      </h2>
                      <p className="text-xl text-white/40 font-light leading-relaxed mb-12">
                         Designed in the heart of Beau Plan. Built for the leaders of tomorrow. 
                         Campus Drip is more than clothing; it's the official aesthetic of African Leadership.
                      </p>
                      <div className="flex justify-center gap-12">
                          <div className="text-center">
                              <p className="text-5xl font-black italic">500+</p>
                              <p className="text-[10px] text-[var(--brand-primary)] font-bold tracking-widest uppercase mt-2">ALCHE Students</p>
                          </div>
                          <div className="text-center">
                              <p className="text-5xl font-black italic">100%</p>
                              <p className="text-[10px] text-[var(--brand-primary)] font-bold tracking-widest uppercase mt-2">Drip Certified</p>
                          </div>
                      </div>
                   </div>
               </div>
            </section>
          </>
        );
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen relative bg-[#050505]">
        <Navbar currentPage={currentPage} onPageChange={(page, subCategory) => {
            setCurrentPage(page);
            if (subCategory) {
                setActiveCollection(subCategory);
                setFilter('All');
            } else if (page === 'Shop' && !subCategory) {
                setActiveCollection('All');
                setFilter('All');
            }
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }} />
        
        <main>
          <AnimatePresence mode="wait">
             <motion.div
               key={currentPage}
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -10 }}
               transition={{ duration: 0.4 }}
             >
                {renderContent()}
             </motion.div>
          </AnimatePresence>
          
          {/* Newsletter / CTA - Always visible on Home */}
          {(currentPage === 'Home' || currentPage === 'Shop') && (
            <section className="py-32 border-t border-white/5">
                <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-7xl font-black italic uppercase tracking-tighter mb-8 graffiti">
                    ENTER THE <span className="text-[var(--brand-primary)]">VAULT</span>
                </h2>
                <p className="text-white/40 uppercase tracking-[0.4em] mb-12 font-bold text-[10px]">
                    Join the ALCHE  drops list.
                </p>
                <div className="max-w-medium mx-auto flex flex-col sm:flex-row gap-4 p-2 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-full group focus-within:border-[var(--brand-primary)]/50 transition-all">
                    <input 
                        type="email" 
                        placeholder="ALCHE EMAIL ADDRESS" 
                        className="flex-1 bg-transparent px-8 py-5 text-[10px] font-bold tracking-widest focus:outline-none placeholder:text-white/10"
                    />
                    <button className="bg-[var(--brand-primary)] text-black px-12 py-5 font-black uppercase text-[10px] tracking-widest hover:scale-105 transition-all rounded-full accent-glow">
                    Secure Access
                    </button>
                </div>
                </div>
            </section>
          )}
        </main>

        <footer className="py-24 border-t border-white/5 bg-black">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
                <div className="flex items-center gap-4">
                    <Logo />
                    <div className="flex flex-col">
                        <span className="text-2xl font-black tracking-tighter uppercase italic leading-none">Campus Drip</span>
                        <span className="text-[8px] font-bold tracking-[0.4em] text-[var(--brand-primary)] uppercase">Mauritius Collective</span>
                    </div>
                </div>
                
                <div className="flex gap-12">
                {['Home', 'Shop', 'About', 'Contact'].map((item) => (
                    <button key={item} onClick={() => setCurrentPage(item)} className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 hover:text-white transition-colors">
                    {item}
                    </button>
                ))}
                </div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-8">
                <div className="text-white/20 text-[10px] font-mono uppercase tracking-widest flex items-center gap-4">
                    <span>Protocol v.2.4.0</span>
                    <span className="w-1 h-1 rounded-full bg-white/10" />
                    <span>ALCHE_NODE_MAURITIUS</span>
                </div>
                <div className="text-white/20 text-[10px] font-mono uppercase tracking-widest">
                © 2026 Campus Drip — Built for Leaders
                </div>
            </div>
          </div>
        </footer>
        
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}

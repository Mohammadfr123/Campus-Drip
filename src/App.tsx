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
import { CartProvider } from './context/CartContext';
import ThemeToggle from './components/ThemeToggle';
import Logo from './components/Logo';

import ClothingGallery from './components/ClothingGallery';
import CartView from './components/CartView';
import AiSidebar from './components/AiSidebar';
import AiAdBanner from './components/AiAdBanner';
import MovingBackground from './components/MovingBackground';

export default function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  const [activeCollection, setActiveCollection] = useState<'All' | 'Men' | 'Women' | 'Community'>('All');
  const [filter, setFilter] = useState('All');
  const [isAiSidebarOpen, setIsAiSidebarOpen] = useState(false);
  
  const filteredProducts = PRODUCTS.filter(p => {
    const matchesCollection = activeCollection === 'All' || p.collection === activeCollection;
    const matchesCategory = filter === 'All' || p.category === filter;
    return matchesCollection && matchesCategory;
  });

  const renderContent = () => {
    switch(currentPage) {
      case 'Cart':
        return <CartView onBack={() => setCurrentPage('Shop')} />;
        
      case 'Shop':
        return (
          <>
            <section className="py-40">
              <div className="container mx-auto px-6">
                <div className="flex flex-col mb-16 pt-20">
                  <span className="text-[10px] uppercase tracking-[0.4em] font-black text-[var(--brand-primary)] mb-4 block">
                     Campus Hub / Inventory
                  </span>
                  <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic graffiti mb-8 text-[var(--brand-primary)] text-outline-black">
                    THE <span className="text-[#ccf6dd] drop-shadow-[0_0_15px_rgba(74,222,128,0.3)]">MARKET</span>
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
                          className={`px-8 py-3 rounded-full text-[10px] uppercase font-black tracking-widest transition-all duration-300 ${
                              activeCollection === col 
                                ? 'bg-[var(--brand-primary)] text-black accent-glow shadow-[0_0_20px_rgba(74,222,128,0.4)] scale-105' 
                                : 'text-[#ccf6dd]/60 hover:text-white hover:bg-white/10'
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
                        className={`text-[9px] uppercase tracking-[0.2em] px-6 py-2.5 font-black transition-all duration-300 border rounded-sm ${
                          filter === cat 
                            ? 'bg-[var(--brand-primary)] text-black border-[var(--brand-primary)] scale-105 shadow-xl' 
                            : 'text-[#ccf6dd]/50 border-white/10 hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] hover:shadow-[0_0_15px_rgba(74,222,128,0.2)]'
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
            <AiAdBanner context="exclusive student streetwear drops" />
          </>
        );

      case 'Our Vision':
        return (
          <>
            <section className="py-40 bg-transparent">
              <div className="container mx-auto px-6">
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div className="relative">
                       <h1 className="text-7xl md:text-9xl font-black italic mb-12 uppercase graffiti tracking-tighter leading-[0.8] text-[var(--brand-primary)] text-outline-black">
                         OUR <br /><span className="text-[var(--brand-primary)]">VISION</span>
                       </h1>
                       <div className="space-y-8 text-xl text-[#ccf6dd]/90 font-light leading-relaxed">
                          <p>
                             Campus Drip began as a vision to unite the style-conscious students of ALCHE Beau Plan. 
                             We believe that how you present yourself is the first step in leadership.
                          </p>
                          <p>
                             Our collections are inspired by the vibrant Mauritian street culture combined with 
                             the academic excellence of our student community.
                          </p>
                       </div>
                    </div>
                    <div className="relative group">
                      <div className="absolute -top-6 -right-6 w-32 h-32 bg-[var(--brand-primary)] rounded-full z-10 flex items-center justify-center p-6 shadow-2xl animate-pulse">
                        <Logo />
                      </div>
                      <img 
                        src="https://lh3.googleusercontent.com/pw/AP1GczM-9piQqcRMamC2hRqRYVPj7KOwKtJj6YJfiovGWTzY6KPt6iiJIVI2=w1369-h913-s-no-gm?authuser=1" 
                        alt="Story"
                        className="w-full rounded-2xl shadow-xl border border-white/10"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                 </div>
              </div>
            </section>
            <AiAdBanner context="quality academic apparel and heritage" />
          </>
        );

      case 'Get in Touch':
        return (
          <section className="py-40 bg-transparent">
             <div className="container mx-auto px-6">
                <div className="text-center mb-24">
                  <h2 className="text-7xl md:text-9xl font-black italic mb-4 uppercase graffiti tracking-tighter text-[var(--brand-primary)] text-outline-black">GET IN TOUCH</h2>
                  <p className="text-[#ccf6dd]/80 uppercase tracking-[0.4em] text-xs font-bold mt-4">We are always active for the culture</p>
                </div>
                
                {/* Logistics Info and Contact Form Integrated */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32">
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-black uppercase italic graffiti text-[var(--brand-primary)]">Campus Logistics</h3>
                            <div className="grid gap-4">
                                {[
                                    { icon: MapPin, title: "On-Campus Hub", desc: "ALCHE Student Hub pickup. Ready in 24h." },
                                    { icon: Truck, title: "District Delivery", desc: "Across Pamplemousses & beyond." },
                                    { icon: Globe, title: "Nationwide Node", desc: "Shipping across Mauritius within 2-3 days." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 items-center p-6 bg-white/5 rounded-2xl border border-white/5">
                                        <div className="w-10 h-10 bg-[var(--brand-primary)] rounded-lg flex items-center justify-center text-black accent-glow shrink-0">
                                            <item.icon size={20} />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-black uppercase tracking-tight text-[#ccf6dd]">{item.title}</h4>
                                            <p className="text-[10px] text-[#ccf6dd]/40 font-bold uppercase">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-2xl font-black uppercase italic graffiti text-[var(--brand-primary)]">Direct Channels</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-6 p-6 bg-white/5 rounded-2xl border border-white/5">
                                    <Phone size={24} className="text-[var(--brand-primary)]" />
                                    <div>
                                        <h4 className="text-xs font-black uppercase text-[#ccf6dd]/40 mb-1">WhatsApp Order Line</h4>
                                        <p className="text-xl font-black italic text-[var(--brand-primary)]">5807 2542</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6 p-6 bg-white/5 rounded-2xl border border-white/5">
                                    <Mail size={24} className="text-[var(--brand-primary)]" />
                                    <div>
                                        <h4 className="text-xs font-black uppercase text-[#ccf6dd]/40 mb-1">Electronic Mail</h4>
                                        <p className="text-xl font-black italic text-[var(--brand-primary)]">CampusDrip@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6 p-6 bg-white/5 rounded-2xl border border-white/5">
                                    <Instagram size={24} className="text-[var(--brand-primary)]" />
                                    <div>
                                        <h4 className="text-xs font-black uppercase text-[#ccf6dd]/40 mb-1">Social Feed</h4>
                                        <p className="text-xl font-black italic text-[var(--brand-primary)]">@Campus_Drip_Mu</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="relative group rounded-3xl overflow-hidden border border-white/10 h-full min-h-[600px]">
                        <img 
                            src="https://images.weserv.nl/?url=https://photos.fife.usercontent.google.com/pw/AP1GczM-9piQqcRMamC2hRqRYVPj7KOwKtJj6YJfiovGWTzY6KPt6iiJIVI2=w1300-s-no-gm" 
                            alt="Contact Us"
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]"
                            referrerPolicy="no-referrer"
                            onError={(e) => {
                                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200';
                            }}
                        />
                        <div className="absolute inset-0 bg-black/40 p-12 flex flex-col justify-end">
                            <div className="p-8 bg-black/60 backdrop-blur-3xl rounded-2xl border border-white/10">
                                <h4 className="text-2xl font-black uppercase italic mb-4">ALCHE HQ</h4>
                                <p className="text-sm font-medium text-[#ccf6dd]/60 leading-relaxed mb-6">Visit our campus node for exclusive try-ons and community drops.</p>
                                <div className="h-64 rounded-xl overflow-hidden grayscale contrast-125">
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
                    </div>
                </div>
             </div>
          </section>
        );

      default:
        return (
          <>
            <Hero />
            <AiAdBanner context="limited edition campus streetwear drops" />
            
            {/* Clothing Gallery with Scroll Hover Effects */}
            <ClothingGallery />

            {/* Streetstyle Showcase replacing the old split grid */}
            <section className="py-24 bg-transparent">
               <div className="container mx-auto px-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[600px]">
                     <div className="relative overflow-hidden rounded-3xl group">
                        <img 
                          src="https://images.weserv.nl/?url=https://photos.fife.usercontent.google.com/pw/AP1GczM-9piQqcRMamC2hRqRYVPj7KOwKtJj6YJfiovGWTzY6KPt6iiJIVI2=w1300-s-no-gm" 
                          alt="Street Style"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3s]"
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1200';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-12">
                           <h3 className="text-4xl font-black italic uppercase graffiti mb-4 text-[var(--brand-primary)]">STREET CORE</h3>
                           <button onClick={() => setCurrentPage('Shop')} className="w-fit bg-white text-black px-8 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-[var(--brand-primary)] transition-colors">SHOP COLLECTION</button>
                        </div>
                     </div>
                     <div className="grid grid-rows-2 gap-8">
                        <div className="relative overflow-hidden rounded-3xl group">
                           <img 
                             src="https://images.weserv.nl/?url=https://photos.fife.usercontent.com/pw/AP1GczM-9piQqcRMamC2hRqRYVPj7KOwKtJj6YJfiovGWTzY6KPt6iiJIVI2=w800-s-no-gm" 
                             alt="Urban Vibes"
                             className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3s]"
                             referrerPolicy="no-referrer"
                             onError={(e) => {
                               (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&q=80&w=800';
                             }}
                           />
                           <div className="absolute inset-0 bg-black/40 p-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                              <span className="text-xl font-black italic uppercase graffiti text-[var(--brand-primary)] drop-shadow-xl">VIBE_CHECK</span>
                           </div>
                        </div>
                        <div className="relative overflow-hidden rounded-3xl group">
                           <img 
                             src="https://images.weserv.nl/?url=https://photos.fife.usercontent.com/pw/AP1GczM-9piQqcRMamC2hRqRYVPj7KOwKtJj6YJfiovGWTzY6KPt6iiJIVI2=w1000-s-no-gm" 
                             alt="Campus Elite"
                             className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3s]"
                             referrerPolicy="no-referrer"
                             onError={(e) => {
                               (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1529139574466-a3090c30c36e?auto=format&fit=crop&q=80&w=800';
                             }}
                           />
                           <div className="absolute inset-0 bg-black/40 p-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                              <span className="text-xl font-black italic uppercase graffiti text-[var(--brand-primary)] drop-shadow-xl">ACADEMY_ELITE</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            
            <AiAdBanner context="the official ALCHE student-led collective" />

            {/* Featured Section: Streetstyle replacing sneakers */}
            <section className="py-24 bg-transparent">
              <div className="container mx-auto px-6">
                <div className="rounded-3xl overflow-hidden bg-black/60 p-4 md:p-12 border border-white/5 backdrop-blur-xl group">
                  <div className="relative aspect-video md:aspect-[21/7] overflow-hidden rounded-2xl">
                    <img 
                      src="https://images.weserv.nl/?url=https://photos.fife.usercontent.com/pw/AP1GczM-9piQqcRMamC2hRqRYVPj7KOwKtJj6YJfiovGWTzY6KPt6iiJIVI2=w1600-s-no-gm" 
                      alt="Street Collection"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3s]"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&q=80&w=1200';
                      }}
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                       <h2 className="text-5xl md:text-9xl font-black italic uppercase graffiti tracking-tighter text-[var(--brand-primary)] opacity-20 group-hover:opacity-40 transition-opacity">CAMPUS_VIBES</h2>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Our Vision Section: Updated with user requested images and logo overlay */}
            <section className="py-24 bg-black/80 backdrop-blur-2xl border-y border-white/5">
               <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
                  <div className="flex-1 relative">
                     <div className="absolute -top-10 -left-10 w-40 h-40 bg-black/40 backdrop-blur-3xl rounded-full flex items-center justify-center z-10 border border-white/10 p-8 shadow-2xl">
                        <Logo />
                     </div>
                     <img 
                        src="https://images.weserv.nl/?url=https://photos.fife.usercontent.com/pw/AP1GczM-9piQqcRMamC2hRqRYVPj7KOwKtJj6YJfiovGWTzY6KPt6iiJIVI2=w1300-s-no-gm" 
                        alt="Campus Drip Creative"
                        className="w-full aspect-square object-cover rounded-2xl shadow-2xl"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=800';
                        }}
                     />
                  </div>
                  <div className="flex-1 text-[#ccf6dd]">
                     <h2 className="text-6xl font-black italic mb-8 uppercase graffiti tracking-tighter text-[var(--brand-primary)] text-outline-black">OUR VISION</h2>
                     <p className="text-xl leading-relaxed mb-10 text-[#ccf6dd] font-medium">
                        Campus Drip curates premium streetwear and everyday essentials for ALCHE students, 
                        keeping you lecture-ready and party-approved with fast, reliable WhatsApp ordering 
                        and delivery straight to your campus door.
                     </p>
                     <button onClick={() => setCurrentPage('Shop')} className="px-12 py-4 bg-[var(--brand-primary)] text-black rounded-xl font-black uppercase text-xs tracking-widest hover:brightness-110 active:scale-95 transition-all accent-glow">
                        Browse drops
                     </button>
                  </div>
               </div>
            </section>
          </>
        );
    }
  };

  return (
    <ThemeProvider>
      <CartProvider>
        <div className="min-h-screen relative overflow-x-hidden bg-black selection:bg-[var(--brand-primary)] selection:text-black">
          <MovingBackground />
          
          <div className="relative z-10">
            <Navbar 
            currentPage={currentPage} 
            onPageChange={(page, subCategory) => {
                setCurrentPage(page);
                if (subCategory) {
                    setActiveCollection(subCategory);
                    setFilter('All');
                } else if (page === 'Shop' && !subCategory) {
                    setActiveCollection('All');
                    setFilter('All');
                }
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }} 
            onToggleAiSidebar={() => setIsAiSidebarOpen(true)}
          />

          <AiSidebar 
            isOpen={isAiSidebarOpen} 
            onClose={() => setIsAiSidebarOpen(false)}
            onSelectProduct={(id) => {
              setCurrentPage('Shop');
              // Logically focus scroll to item or filter by it
            }}
          />
          
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
            
            {/* Newsletter / CTA */}
            {(currentPage === 'Home' || currentPage === 'Shop') && (
              <section className="py-32 bg-black/40 backdrop-blur-3xl border-t border-white/5 relative overflow-hidden">
                  <div className="container mx-auto px-6 text-center relative z-10">
                  <h2 className="text-4xl md:text-7xl font-black italic uppercase tracking-tighter mb-8 graffiti text-[var(--brand-primary)] text-outline-black">
                      GET LATEST DROP UPDATES!
                  </h2>
                  <p className="text-[#ccf6dd]/40 uppercase tracking-[0.4em] mb-12 font-bold text-[10px]">
                      Join the ALCHE drops list.
                  </p>
                  <div className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4 p-2 bg-black/60 backdrop-blur-3xl border border-white/10 rounded-2xl group focus-within:border-[var(--brand-primary)]/50 transition-all">
                      <input 
                          type="email" 
                          placeholder="ALCHE EMAIL ADDRESS" 
                          className="flex-1 bg-transparent px-8 py-5 text-[10px] font-black tracking-widest focus:outline-none placeholder:text-[#ccf6dd]/10 text-[var(--brand-primary)]"
                      />
                      <button className="bg-[var(--brand-primary)] text-black px-12 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest hover:scale-110 transition-all accent-glow">
                        Subscribe!
                      </button>
                  </div>
                  </div>
              </section>
            )}
          </main>


          <footer className="py-24 border-t border-white/5 bg-black relative z-10">
            <div className="container mx-auto px-6">
              <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
                  <div className="flex items-center gap-4">
                      <Logo />
                      <div className="flex flex-col">
                          <span className="text-2xl font-black tracking-tighter uppercase italic leading-none text-[var(--brand-primary)]">Campus Drip</span>
                          <span className="text-[8px] font-bold tracking-[0.4em] text-white/40 uppercase">Mauritius Collective</span>
                      </div>
                  </div>
                  
                  <div className="flex gap-12">
                  {['Home', 'Shop', 'Our Vision', 'Get in Touch'].map((item) => (
                      <button key={item} onClick={() => setCurrentPage(item)} className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ccf6dd]/50 hover:text-[var(--brand-primary)] transition-colors">
                      {item}
                      </button>
                  ))}
                  </div>
              </div>
              
              <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-8">
                  <div className="text-[#ccf6dd]/20 text-[10px] font-mono uppercase tracking-widest flex items-center gap-4">
                      <span>Protocol v.2.4.0</span>
                      <span className="w-1 h-1 rounded-full bg-white/10" />
                      <span>MAURITIUS_NODE</span>
                  </div>
                  <div className="text-white/20 text-[10px] font-mono uppercase tracking-widest">
                  © 2026 Campus Drip — Built for Leaders
                  </div>
              </div>
            </div>
          </footer>
          
          <ThemeToggle />
          </div>
        </div>
      </CartProvider>
    </ThemeProvider>
  );
}

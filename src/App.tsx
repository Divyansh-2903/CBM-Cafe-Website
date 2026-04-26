import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X, ArrowRight, MapPin, Clock, Star, Instagram } from "lucide-react";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Navigation */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled ? "py-4 nav-glass" : "py-8 bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="CBM Logo" className="logo-circle" />
            <span className="font-serif font-bold text-xl md:text-2xl text-[var(--color-dark)] tracking-tight">Chick's Burger</span>
          </div>
          
          <div className="hidden md:flex gap-10 text-[11px] font-bold tracking-[0.2em] uppercase text-[var(--color-dark-muted)]">
            <a href="#menu" className="hover:text-[var(--color-brand-red)] transition-colors relative group">
              Menu
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-[var(--color-brand-red)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
            <a href="#gallery" className="hover:text-[var(--color-brand-red)] transition-colors relative group">
              Gallery
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-[var(--color-brand-red)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
            <a href="#location" className="hover:text-[var(--color-brand-red)] transition-colors relative group">
              Find Us
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-[var(--color-brand-red)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
          </div>

          <button className="hidden md:flex btn-primary">
            Order Pickup
          </button>

          <button 
            className="md:hidden text-[var(--color-dark)] p-2" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 z-40 bg-[var(--color-cream)] pt-32 px-6 md:hidden flex flex-col"
        >
          <div className="flex flex-col gap-8 text-center font-serif text-4xl">
            <a href="#menu" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[var(--color-brand-red)]">Our Menu</a>
            <a href="#gallery" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[var(--color-brand-red)]">The Vibe</a>
            <a href="#location" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[var(--color-brand-red)]">Location</a>
          </div>
          <div className="mt-auto pb-12 flex flex-col items-center gap-6">
            <button className="btn-primary w-full max-w-sm justify-center text-lg py-4">
              Order Now
            </button>
            <div className="flex gap-6 text-[var(--color-brand-amber)]">
              <Instagram size={24} />
            </div>
          </div>
        </motion.div>
      )}

      {/* Hero Section */}
      <main className="relative flex flex-col lg:flex-row lg:min-h-screen pt-20 lg:pt-0">
        {/* Mobile hero image - full bleed behind text */}
        <div className="absolute inset-0 lg:hidden z-0">
          <img
            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=1200"
            alt="Gourmet Burger"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0" style={{background:'linear-gradient(to bottom, rgba(247,243,236,0.3) 0%, rgba(247,243,236,0.85) 50%, var(--color-cream) 100%)'}}></div>
        </div>

        <div className="w-full lg:w-5/12 px-6 md:px-12 lg:pl-20 xl:pl-32 flex flex-col justify-center z-20 py-28 lg:py-0 min-h-[92dvh] lg:min-h-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="tag-pill mb-6">
              <Star size={12} fill="currentColor" /> 4.6 Rated on JustDial
            </div>
            <h1 className="font-serif text-[4rem] sm:text-[5rem] lg:text-[5.5rem] xl:text-[6.5rem] leading-[0.92] text-[var(--color-dark)] mb-6 tracking-tight">
              Burgers <br/>That Hit <br/>
              <span className="text-[var(--color-brand-red)] italic font-display">Different.</span>
            </h1>
            <p className="text-[var(--color-muted)] text-base md:text-lg mb-8 max-w-md font-light leading-relaxed">
              Crafted with fresh ingredients, served with cold coffee, and enjoyed in the best café vibes. Open daily till 11:30 PM.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary group">
                Explore Menu
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-outline">
                <MapPin size={16} />
                Get Directions
              </button>
            </div>
          </motion.div>
        </div>

        {/* Desktop-only right image */}
        <div className="hidden lg:block w-7/12 h-screen absolute right-0 top-0 overflow-hidden z-10">
          <div className="w-full h-full relative">
            <div className="absolute inset-0 hero-overlay z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=2000"
              alt="Gourmet Burger"
              className="w-full h-full object-cover object-left"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute bottom-8 right-8 z-20 rating-badge p-4 rounded-2xl flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-[var(--color-brand-amber)] flex items-center justify-center text-white">
              <Star fill="currentColor" size={24} />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-[var(--color-muted)]">Customer Favorite</div>
              <div className="font-serif font-bold text-xl text-[var(--color-dark)]">"Best in Jhotwara"</div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Stats / Trust Bar */}
      <div className="bg-[var(--color-dark)] text-[var(--color-cream)] relative z-20 border-y border-[rgba(255,255,255,0.1)]">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-[rgba(255,255,255,0.1)] border-x border-[rgba(255,255,255,0.1)]">
          <div className="stat-item">
            <span className="font-serif text-3xl md:text-4xl text-[var(--color-brand-amber)]">100%</span>
            <span className="text-[10px] uppercase tracking-widest font-bold text-white/50">Fresh Patties</span>
          </div>
          <div className="stat-item">
            <span className="font-serif text-3xl md:text-4xl text-[var(--color-brand-amber)]">7 Days</span>
            <span className="text-[10px] uppercase tracking-widest font-bold text-white/50">Open Weekly</span>
          </div>
          <div className="stat-item">
            <span className="font-serif text-3xl md:text-4xl text-[var(--color-brand-amber)]">₹350</span>
            <span className="text-[10px] uppercase tracking-widest font-bold text-white/50">Avg for Two</span>
          </div>
          <div className="stat-item">
            <span className="font-serif text-3xl md:text-4xl text-[var(--color-brand-amber)]">11:30</span>
            <span className="text-[10px] uppercase tracking-widest font-bold text-white/50">PM Closing</span>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="bg-[var(--color-brand-red)] text-[var(--color-cream)] py-4 overflow-hidden flex whitespace-nowrap text-[11px] font-bold tracking-[0.25em] uppercase items-center relative z-20 shadow-inner">
        <div className="animate-marquee flex gap-12">
          {Array(10).fill("JHOTWARA'S FAVOURITE • COMBOS FROM ₹99 • BURGERS FROM ₹49 • COLD COFFEE ₹49 •").map((text, i) => (
            <span key={i} className="text-[var(--color-cream)]/90">{text}</span>
          ))}
        </div>
      </div>

      {/* Menu Section */}
      <section id="menu" className="py-24 md:py-32 bg-[var(--color-cream-dark)] relative">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="section-label mb-4">Our Signatures</span>
            <h2 className="font-serif text-[3.5rem] md:text-[4rem] lg:text-[4.5rem] xl:text-[5rem] leading-none text-[var(--color-dark)] mb-6">
              What We Make
            </h2>
            <div className="ornament-line w-full max-w-md mx-auto">
              <span className="w-2 h-2 rounded-full bg-[var(--color-brand-amber)]"></span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-[var(--color-parchment)] rounded-3xl overflow-hidden card-warm flex flex-col group border border-[rgba(181,135,42,0.1)]"
            >
              <div className="h-64 overflow-hidden img-zoom bg-[var(--color-dark)]">
                <img src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=1200" alt="Mini Bites Veg Combo" className="w-full h-full object-cover opacity-90" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-serif text-3xl font-bold text-[var(--color-dark)]">Mini Bites Combo</h3>
                  <div className="text-[var(--color-brand-red)] font-serif italic text-2xl font-bold">₹169</div>
                </div>
                <p className="text-[var(--color-muted)] font-light leading-relaxed mb-6">A perfect assortment of our best vegetarian mini sliders. Served with crispy fries and our signature dips.</p>
                <div className="mt-auto">
                  <button className="text-[11px] font-bold tracking-[0.15em] uppercase text-[var(--color-brand-amber)] hover:text-[var(--color-brand-red)] flex items-center gap-2 transition-colors">
                    Add to order <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="bg-[var(--color-parchment)] rounded-3xl overflow-hidden card-warm flex flex-col group border border-[rgba(181,135,42,0.1)]"
            >
              <div className="h-64 overflow-hidden img-zoom bg-[var(--color-dark)]">
                <img src="https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&q=80&w=1200" alt="Signature Wraps" className="w-full h-full object-cover opacity-90" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-serif text-3xl font-bold text-[var(--color-dark)]">Signature Wraps</h3>
                  <div className="text-[var(--color-brand-red)] font-serif italic text-2xl font-bold">₹59</div>
                </div>
                <p className="text-[var(--color-muted)] font-light leading-relaxed mb-6">Loaded with fresh veggies, your choice of fillings, and zesty sauces, all wrapped in a soft, warm tortilla.</p>
                <div className="mt-auto">
                  <button className="text-[11px] font-bold tracking-[0.15em] uppercase text-[var(--color-brand-amber)] hover:text-[var(--color-brand-red)] flex items-center gap-2 transition-colors">
                    Add to order <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2 }}
              className="bg-[var(--color-parchment)] rounded-3xl overflow-hidden card-warm flex flex-col group border border-[rgba(181,135,42,0.1)] lg:col-span-1 md:col-span-2"
            >
              <div className="h-64 overflow-hidden img-zoom bg-[var(--color-dark)]">
                <img src="https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&q=80&w=1200" alt="Blue Lagoon Mocktail" className="w-full h-full object-cover opacity-90" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-serif text-3xl font-bold text-[var(--color-dark)]">Blue Lagoon</h3>
                  <div className="text-[var(--color-brand-red)] font-serif italic text-2xl font-bold">₹109</div>
                </div>
                <p className="text-[var(--color-muted)] font-light leading-relaxed mb-6">A refreshing, vibrant mocktail that perfectly balances sweet and citrus notes. The ideal thirst quencher.</p>
                <div className="mt-auto">
                  <button className="text-[11px] font-bold tracking-[0.15em] uppercase text-[var(--color-brand-amber)] hover:text-[var(--color-brand-red)] flex items-center gap-2 transition-colors">
                    Add to order <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-20">
            <button className="btn-outline bg-transparent border-[var(--color-brand-amber)] text-[var(--color-brand-amber)] hover:bg-[var(--color-brand-amber)] hover:text-white hover:border-[var(--color-brand-amber)]">
              View Full Menu
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 md:py-32 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center text-center md:flex-row md:items-end md:text-left md:justify-between mb-16 gap-6">
          <div>
            <span className="section-label mb-4 block">Inside The Cafe</span>
            <h2 className="font-serif text-[3rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[4.5rem] xl:text-[5rem] leading-none text-[var(--color-dark)]">
              CBM Vibes
            </h2>
          </div>
          <p className="max-w-xs text-[var(--color-muted)] pb-2">
            Warm lighting, cozy seating, and the aroma of fresh burgers. A place meant to be shared.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <motion.div 
            whileHover={{ y: -8 }}
            className="rounded-[2rem] overflow-hidden aspect-[4/5] md:col-span-2 img-zoom shadow-xl"
          >
            <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1200" alt="Vibe 1" className="w-full h-full object-cover"/>
          </motion.div>
          <motion.div 
            whileHover={{ y: -8 }}
            className="rounded-[2rem] overflow-hidden aspect-[4/5] img-zoom shadow-xl"
          >
            <img src="https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&q=80&w=800" alt="Vibe 2" className="w-full h-full object-cover"/>
          </motion.div>
          <motion.div 
            whileHover={{ y: -8 }}
            className="rounded-[2rem] overflow-hidden aspect-[4/5] img-zoom shadow-xl"
          >
            <img src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&q=80&w=800" alt="Vibe 3" className="w-full h-full object-cover"/>
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 md:py-40 bg-[var(--color-cream-deeper)] text-center px-6 relative border-y border-[rgba(181,135,42,0.1)]">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at center, var(--color-brand-amber) 0%, transparent 60%)' }}></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="flex justify-center mb-8 text-[var(--color-brand-amber)]">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          <p className="font-serif text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] xl:text-[5rem] leading-[1.1] mb-12 text-[var(--color-dark)] tracking-tight">
            "Every bite should feel like a <span className="italic text-[var(--color-brand-red)]">good day</span>."
          </p>
          <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[var(--color-dark-muted)] mb-4">
            Made Fresh At CBM Cafe
          </p>
          <div className="ornament-line w-32 mx-auto"></div>
        </div>
      </section>

      {/* Find Us Section */}
      <section className="py-24 md:py-32 bg-[var(--color-cream)] relative border-t border-[rgba(181,135,42,0.1)]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col items-center text-center md:flex-row md:items-end md:text-left md:justify-between mb-16 gap-6">
            <div>
              <span className="section-label mb-4 block">Visit Us</span>
              <h2 className="font-serif text-[3rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[4.5rem] xl:text-[5rem] leading-none text-[var(--color-dark)]">
                Find CBM
              </h2>
            </div>
            <p className="max-w-xs text-[var(--color-muted)] pb-2">
              Drop by for the best burgers in Jhotwara. We can't wait to serve you!
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 rounded-3xl overflow-hidden h-[400px] lg:h-auto shadow-xl border border-[rgba(181,135,42,0.1)] bg-[var(--color-parchment)] relative group">
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors pointer-events-none z-10"></div>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14227.098254881335!2d75.74830155!3d26.94236025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3ad539a2b6d%3A0xfdb51cd5de9996d9!2sJhotwara%2C%20Jaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1714080000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: '400px' }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="CBM Cafe Location"
              ></iframe>
            </div>
            <div className="bg-[var(--color-parchment)] rounded-3xl p-8 md:p-10 shadow-xl flex flex-col justify-center border border-[rgba(181,135,42,0.1)]">
              <div className="mb-10">
                <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-[var(--color-brand-amber)] mb-5">Location</h4>
                <div className="flex items-start gap-4 text-[var(--color-dark)]">
                  <MapPin size={24} className="shrink-0 mt-1 text-[var(--color-brand-red)]" />
                  <p className="font-light leading-relaxed text-lg">
                    City Mall, Kanta Road,<br />
                    Jagannathpuri, Jhotwara,<br />
                    Jaipur – 302012, Rajasthan
                  </p>
                </div>
              </div>
              <div className="mb-10">
                <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-[var(--color-brand-amber)] mb-5">Hours</h4>
                <div className="flex items-start gap-4 text-[var(--color-dark)]">
                  <Clock size={24} className="shrink-0 mt-1 text-[var(--color-brand-red)]" />
                  <p className="font-light leading-relaxed text-lg">
                    Monday – Sunday<br />
                    11:00 AM – 11:30 PM
                  </p>
                </div>
              </div>
              <div className="mt-auto">
                <button className="btn-primary w-full justify-center group py-4">
                  Get Directions
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="location" className="footer-bg text-[var(--color-cream)] pt-24 md:pt-32 pb-12 relative">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">
            <div className="lg:col-span-2">
              <div className="font-serif italic font-bold text-5xl mb-6 text-[var(--color-brand-red)]">
                CBM<span className="text-[var(--color-brand-amber)]">.</span>
              </div>
              <p className="text-white/60 max-w-sm mb-8 leading-relaxed font-light">
                Serving the best burgers and cold coffee in Jhotwara. Come for the food, stay for the vibes.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-[var(--color-brand-amber)] hover:border-[var(--color-brand-amber)] transition-all">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-[var(--color-brand-amber)] mb-6">Find Us</h4>
              <ul className="space-y-4 text-white/70 font-light">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="shrink-0 mt-1 text-[var(--color-brand-red)]" />
                  <span>Jhotwara, Jaipur<br/>Rajasthan, India</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock size={18} className="shrink-0 text-[var(--color-brand-red)]" />
                  <span>Open Daily<br/>11:00 AM - 11:30 PM</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-[var(--color-brand-amber)] mb-6">Quick Links</h4>
              <ul className="space-y-3 text-white/70 font-light flex flex-col">
                <a href="#menu" className="hover:text-white transition-colors w-fit">Our Menu</a>
                <a href="#gallery" className="hover:text-white transition-colors w-fit">Gallery</a>
                <a href="https://swiggy.com" className="hover:text-[var(--color-brand-red)] transition-colors w-fit flex items-center gap-2">Order on Swiggy <ArrowRight size={14} /></a>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold tracking-widest uppercase text-white/40">
            <div>© {new Date().getFullYear()} CHICK'S BURGER & MORE.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

import { useState } from "react";
import { motion } from "motion/react";
import { Menu, X, MessageCircle } from "lucide-react";

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans bg-brand-beige selection:bg-brand-red selection:text-white">
      {/* Navigation */}
      <nav className="absolute top-0 w-full z-50 py-6">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="font-serif italic font-bold text-3xl tracking-wide text-brand-dark">CBM</div>
          
          <div className="hidden md:flex gap-10 text-[10px] font-semibold tracking-[0.2em] uppercase text-brand-dark/50">
            <a href="#menu" className="text-brand-dark border-b border-brand-dark pb-0.5 transition-colors">Menu</a>
            <a href="#gallery" className="hover:text-brand-dark transition-colors">Gallery</a>
            <a href="#about" className="hover:text-brand-dark transition-colors">About</a>
            <a href="#location" className="hover:text-brand-dark transition-colors">Find Us</a>
          </div>

          <button className="hidden md:block bg-brand-red text-white px-7 py-2.5 rounded-full text-xs font-semibold tracking-wider hover:bg-brand-red-hover transition-colors shadow-lg">
            Order Now
          </button>

          <button className="md:hidden text-brand-dark" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-brand-beige pt-24 px-6 md:hidden">
          <div className="flex flex-col gap-6 text-center text-4xl font-serif">
            <a href="#menu" onClick={() => setIsMobileMenuOpen(false)}>Menu</a>
            <a href="#gallery" onClick={() => setIsMobileMenuOpen(false)}>Gallery</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
            <a href="#location" onClick={() => setIsMobileMenuOpen(false)}>Find Us</a>
            <button className="mt-8 mx-auto bg-brand-red text-white px-8 py-3 rounded-full text-sm font-semibold">
              Order Now
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <main className="relative flex flex-col md:flex-row min-h-[100dvh]">
        <div className="w-full md:w-1/2 pt-32 pb-16 px-6 md:px-12 lg:px-20 xl:px-24 flex flex-col justify-center z-10">
          <h1 className="font-serif text-[4rem] md:text-[5rem] lg:text-[7rem] leading-[1.05] text-brand-dark mb-8 tracking-tight">
            Burgers <br/>That Hit <br/>
            <span className="text-brand-red italic">Different.</span>
          </h1>
          <p className="text-brand-dark/60 text-base md:text-lg mb-10 max-w-sm font-light leading-relaxed">
            Fresh food, cold coffee & café vibes — open daily till 11:30 PM
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-brand-red text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-brand-red-hover transition-all w-fit shadow-xl shadow-brand-red/20">
              Explore Menu
            </button>
            <button className="border border-brand-dark/20 text-brand-dark px-8 py-3.5 rounded-full text-sm font-medium hover:bg-brand-dark/5 transition-all w-fit">
              Get Directions
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 min-h-[60vh] md:h-screen md:absolute md:right-0 md:top-0 relative">
          <img 
            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=1600" 
            alt="Delicious burger"
            className="w-full h-full object-cover rounded-tl-[1rem] md:rounded-tl-[0rem]"
          />
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-20 flex items-center gap-3 w-max">
            <div className="bg-white/90 backdrop-blur-md px-5 py-2.5 rounded-full flex items-center gap-2 shadow-xl border border-white/20">
              <span className="font-bold text-sm text-brand-dark">4.6</span>
              <span className="text-[#EAB308] text-sm">★</span>
              <span className="text-[10px] uppercase font-semibold text-brand-dark/60 ml-2 tracking-wider">JustDial Reviews</span>
            </div>
            <a href="#" className="w-[45px] h-[45px] bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-transform">
              <MessageCircle className="w-5 h-5 fill-white text-white" />
            </a>
          </div>
        </div>
      </main>

      {/* Marquee */}
      <div className="bg-[#151515] text-white py-3.5 overflow-hidden flex whitespace-nowrap text-[10px] font-semibold tracking-[0.2em] uppercase items-center relative z-20">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }} 
          transition={{ ease: "linear", duration: 30, repeat: Infinity }} 
          className="flex gap-8"
        >
          {Array(8).fill("JHOTWARA'S FAVOURITE SPOT • COMBOS FROM ₹99 • BURGERS FROM ₹49 • WRAPS • COLD COFFEE ₹49 • OPEN TILL 11:30 PM •").map((text, i) => (
            <span key={i} className="text-white/80">{text}</span>
          ))}
        </motion.div>
      </div>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 md:py-32 max-w-[1400px] mx-auto px-6 lg:px-12">
        <h2 className="font-serif text-[3rem] md:text-[4rem] text-brand-dark mb-12">CBM Vibes</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          <div className="rounded-2xl overflow-hidden aspect-square"><img src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800" alt="Vibe 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"/></div>
          <div className="rounded-2xl overflow-hidden aspect-square"><img src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=800" alt="Vibe 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"/></div>
          <div className="rounded-2xl overflow-hidden aspect-square col-span-2 md:col-span-1"><img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800" alt="Vibe 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"/></div>
          <div className="rounded-2xl overflow-hidden aspect-square"><img src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&q=80&w=800" alt="Vibe 4" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"/></div>
          <div className="rounded-2xl overflow-hidden aspect-square bg-white border border-[#E5E2D9]"><img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800" alt="Vibe 5" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 mix-blend-multiply opacity-90"/></div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 md:py-32 max-w-[1400px] mx-auto px-6 lg:px-12 border-t border-brand-dark/5">
        <h2 className="font-serif text-[3rem] md:text-[4rem] text-brand-dark mb-12">What We Make</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-[1.5rem] overflow-hidden flex flex-col shadow-sm border border-[#EBE8DF] group">
            <div className="h-56 md:h-72 overflow-hidden bg-[#1A1A1A]">
              <img src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=1200" alt="Classic Burger" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" />
            </div>
            <div className="p-8 flex justify-between items-start">
              <div>
                <h3 className="font-serif text-2xl font-medium mb-2 text-brand-dark">Classic Burger</h3>
                <p className="text-sm font-light text-brand-dark/50">The simple staple done right.</p>
              </div>
              <div className="text-[#DF8C72] font-serif italic text-xl">₹49</div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-[1.5rem] overflow-hidden flex flex-col shadow-sm border border-[#EBE8DF] group">
            <div className="h-56 md:h-72 overflow-hidden bg-[#1A1A1A]">
              <img src="https://images.unsplash.com/photo-1615671524827-c10557b78161?auto=format&fit=crop&q=80&w=1200" alt="Spicy Chicken" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" />
            </div>
            <div className="p-8 flex justify-between items-start">
              <div>
                <h3 className="font-serif text-2xl font-medium mb-2 text-brand-dark">Spicy Chicken</h3>
                <p className="text-sm font-light text-brand-dark/50">Crispy, bold, and fiery.</p>
              </div>
              <div className="text-[#DF8C72] font-serif italic text-xl">₹99</div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-[1.5rem] overflow-hidden flex flex-col shadow-sm border border-[#EBE8DF] group">
            <div className="h-56 md:h-72 overflow-hidden bg-[#1A1A1A]">
              <img src="https://images.unsplash.com/photo-1572490122747-3968b75bb69c?auto=format&fit=crop&q=80&w=1200" alt="Cold Coffee" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" />
            </div>
            <div className="p-8 flex justify-between items-start">
              <div>
                <h3 className="font-serif text-2xl font-medium mb-2 text-brand-dark">Cold Coffee</h3>
                <p className="text-sm font-light text-brand-dark/50">Creamy and chilled.</p>
              </div>
              <div className="text-[#DF8C72] font-serif italic text-xl">₹49</div>
            </div>
          </div>

          {/* Card 4 - Wide */}
          <div className="bg-white rounded-[1.5rem] overflow-hidden flex flex-col shadow-sm border border-[#EBE8DF] group md:col-span-1 lg:col-span-1 relative">
            <div className="h-56 md:h-72 overflow-hidden bg-[#1A1A1A]">
              <img src="https://images.unsplash.com/photo-1626700051175-6818013e1d4b?auto=format&fit=crop&q=80&w=1200" alt="Paneer Wrap" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" />
            </div>
            <div className="p-8 flex justify-between items-start">
              <div>
                <h3 className="font-serif text-2xl font-medium mb-2 text-brand-dark">Paneer Wrap</h3>
                <p className="text-sm font-light text-brand-dark/50">Grilled to perfection with house sauces.</p>
              </div>
              <div className="text-[#DF8C72] font-serif italic text-xl">₹79</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <a href="#" className="inline-block text-[10px] font-semibold tracking-widest uppercase border-b border-brand-dark/20 pb-1 text-brand-dark/60 hover:text-brand-dark hover:border-brand-dark transition-all">
            View Full Menu
          </a>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 md:py-40 bg-brand-beige-dim text-center px-6">
        <div className="flex justify-center gap-1.5 mb-8">
          <div className="w-2.5 h-10 bg-[#D4C39B] rounded-full rotate-12"></div>
          <div className="w-2.5 h-10 bg-[#D4C39B] rounded-full rotate-12"></div>
        </div>
        <p className="font-serif italic text-4xl md:text-5xl lg:text-6xl max-w-3xl mx-auto leading-tight mb-10 text-brand-dark tracking-tight">
          Every bite should feel like a good day.
        </p>
        <p className="text-[10px] font-semibold tracking-widest uppercase text-brand-dark/50 mb-4">
          — MADE FRESH AT CBM CAFE, JHOTWARA
        </p>
        <p className="text-xs text-brand-dark/40 font-medium">
          ₹350 avg for two <span className="mx-2">•</span> Open 7 days a week
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white pt-32 pb-16 relative overflow-hidden flex flex-col items-center">
        <div className="w-full max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="flex justify-center mb-16 select-none opacity-5">
            <span className="font-serif italic text-[8rem] md:text-[16rem] lg:text-[22rem] leading-none tracking-tighter mix-blend-overlay block text-center">
              CBM
            </span>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 text-[10px] font-semibold tracking-[0.2em] uppercase mb-16 text-white/50">
            <a href="#menu" className="hover:text-white transition-colors">Menu</a>
            <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
            <a href="https://instagram.com" className="hover:text-white transition-colors">Instagram</a>
            <a href="https://swiggy.com" className="hover:text-white transition-colors">Swiggy</a>
            <a href="#location" className="hover:text-white transition-colors">Find Us</a>
          </div>

          <div className="text-center text-[10px] tracking-widest uppercase text-white/30 font-semibold">
            © {new Date().getFullYear()} CHICK'S BURGER & MORE. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
}

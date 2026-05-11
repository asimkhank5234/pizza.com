import { motion } from "motion/react";
import { 
  Menu as MenuIcon,
  X as CloseIcon,
  Pizza as PizzaIcon, 
  Star, 
  Clock, 
  MapPin, 
  Phone, 
  ChefHat, 
  CircleDollarSign, 
  UtensilsCrossed,
  Map as MapIcon,
  Quote
} from "lucide-react";
import { useState, useEffect, ReactNode } from "react";

const PIZZA_DATA = [
  { name: "Classic Margherita", price: "750", icon: "🍅", description: "Fresh basil, mozzarella, and our signature red sauce." },
  { name: "Chicken Tikka", price: "950", icon: "🍗", description: "Spicy chicken tikka chunks with onions and green peppers." },
  { name: "Fajita Sensation", price: "950", icon: "🌶️", description: "Succulent chicken fajita, bell peppers, and olives." },
  { name: "Cheese Lover", price: "850", icon: "🧀", description: "A rich blend of premium cheeses on a crispy crust." },
  { name: "Veggie Supreme", price: "800", icon: "🥦", description: "Farm-fresh vegetables with a dash of herbs." },
];

const REVIEWS = [
  { name: "Anonymous", stars: 5, quote: "The best pizza in Wah Cantt! The crust is light and crispy, and the toppings are always fresh." },
  { name: "Anonymous", stars: 4, quote: "Excellent value for money. Their Chicken Tikka pizza is a must-try. Affordable and tasty." },
  { name: "Anonymous", stars: 5, quote: "Clean environment and great taste. The outdoor seating is a nice touch for evening dine-in." },
];

function Logo({ className = "h-12 w-auto", showText = true }: { className?: string, showText?: boolean }) {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div className={`flex items-center gap-2 ${className.includes('h-24') ? 'flex-col sm:flex-row' : ''}`}>
        <div className="bg-gold p-2 rounded-2xl shadow-lg border-2 border-brown">
          <PizzaIcon className="text-brown" size={className.includes('h-24') ? 48 : 24} />
        </div>
        {showText && (
          <div className="flex flex-col">
            <span className={`font-display font-black tracking-tighter text-brown leading-none ${className.includes('h-24') ? 'text-4xl' : 'text-xl'}`}>
              Pizza.com
            </span>
            <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-amber leading-none mt-1">
              Eat less but the best
            </span>
          </div>
        )}
      </div>
    );
  }

  return (
    <img 
      src="/logo.png" 
      alt="Pizza.com Logo" 
      className={className} 
      onError={() => setImageError(true)}
    />
  );
}

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-stone-900 font-sans">
      {/* Navbar */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen ? "bg-white shadow-md py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer z-50" onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setIsMobileMenuOpen(false);
          }}>
            <Logo className="h-10 md:h-12 w-auto" />
          </div>
          
          <div className="hidden lg:flex items-center gap-8 font-medium">
            <button onClick={() => scrollTo('home')} className="hover:text-amber transition-colors">Home</button>
            <button onClick={() => scrollTo('menu')} className="hover:text-amber transition-colors">Menu</button>
            <button onClick={() => scrollTo('about')} className="hover:text-amber transition-colors">About</button>
            <button onClick={() => scrollTo('reviews')} className="hover:text-amber transition-colors">Reviews</button>
            <button onClick={() => scrollTo('contact')} className="hover:text-amber transition-colors">Contact</button>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href="tel:03020383000"
              className="bg-gold hover:bg-amber text-brown px-4 md:px-6 py-2 rounded-full font-bold transition-all shadow-sm flex items-center gap-2 text-sm md:text-base whitespace-nowrap"
            >
              <Phone size={16} />
              <span className="hidden sm:inline">Order Now</span>
            </a>

            <button 
              className="lg:hidden p-2 text-brown hover:bg-stone-100 rounded-lg transition-colors z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <CloseIcon size={28} /> : <MenuIcon size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <motion.div
          initial={false}
          animate={{ x: isMobileMenuOpen ? 0 : "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 lg:hidden"
        >
          <button onClick={() => { scrollTo('home'); setIsMobileMenuOpen(false); }} className="text-2xl font-display font-bold hover:text-amber">Home</button>
          <button onClick={() => { scrollTo('menu'); setIsMobileMenuOpen(false); }} className="text-2xl font-display font-bold hover:text-amber">Menu</button>
          <button onClick={() => { scrollTo('about'); setIsMobileMenuOpen(false); }} className="text-2xl font-display font-bold hover:text-amber">About</button>
          <button onClick={() => { scrollTo('reviews'); setIsMobileMenuOpen(false); }} className="text-2xl font-display font-bold hover:text-amber">Reviews</button>
          <button onClick={() => { scrollTo('contact'); setIsMobileMenuOpen(false); }} className="text-2xl font-display font-bold hover:text-amber">Contact</button>
          
          <div className="mt-8 flex flex-col items-center gap-4">
            <p className="text-stone-400 font-medium">Get in touch</p>
            <a href="tel:03020383000" className="text-2xl font-bold text-brown">0302-0383000</a>
          </div>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Overlay */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.45)), url('https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full mb-8 border border-white/20 shadow-lg"
          >
            <span className="text-gold font-bold">⭐ 3.9</span>
            <span className="opacity-80 text-sm md:text-base font-medium">· 82 Reviews</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black mb-8 tracking-tighter leading-[0.85] uppercase"
          >
            Iqbal Nagar's <br />
            <span className="text-gold">Favourite</span> Slice
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-2xl opacity-90 mb-12 max-w-3xl mx-auto text-balance leading-relaxed"
          >
            Artisanal pizzas baked with passion, topped with the freshest ingredients, and served at honest prices near Hamza Masjid.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4"
          >
            <a 
              href="tel:03020383000"
              className="w-full sm:w-auto bg-gold text-brown px-12 py-5 rounded-full font-black text-xl hover:bg-amber transition-all shadow-[0_10px_40px_-10px_rgba(255,195,0,0.5)] hover:scale-105 active:scale-95"
            >
              Order Now
            </a>
            <button 
              onClick={() => scrollTo('menu')} 
              className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/30 text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-white/20 transition-all"
            >
              View Menu
            </button>
          </motion.div>
        </div>

        {/* Scroll Decor */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50">
          <span className="text-xs uppercase tracking-widest font-bold text-white">Scroll</span>
          <div className="w-px h-8 bg-white" />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 md:py-32 bg-stone-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            <FeatureCard 
              icon={<ChefHat className="text-amber" size={32} />}
              title="Fresh Every Time"
              description="Our dough is made daily and our sauces are simmered to perfection using secret herbs."
            />
            <FeatureCard 
              icon={<CircleDollarSign className="text-amber" size={32} />}
              title="Honest Pricing"
              description="Gourmet taste without the premium price tag. Slices and pies starting from Rs 500."
            />
            <FeatureCard 
              icon={<UtensilsCrossed className="text-amber" size={32} />}
              title="Dine Your Way"
              description="Enjoy our cozy private dining or the open-air outdoor area for a relaxed evening."
            />
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section id="menu" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Our Pizza Palette</h2>
            <div className="w-24 h-1.5 bg-gold mx-auto mb-8 rounded-full" />
            <p className="text-stone-500 max-w-2xl mx-auto text-base md:text-lg">Hand-stretched and oven-baked to golden perfection. Choose your favorite from our curated selection.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {PIZZA_DATA.map((pizza, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-stone-100 border border-stone-100 flex flex-col items-center text-center group transition-all duration-300"
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-500 drop-shadow-md">{pizza.icon}</div>
                <h3 className="font-display font-bold text-xl mb-3">{pizza.name}</h3>
                <p className="text-sm text-stone-500 mb-6 line-clamp-3 leading-relaxed">{pizza.description}</p>
                <div className="mt-auto pt-4 border-t border-stone-50 w-full">
                  <span className="text-[10px] uppercase font-black tracking-[0.2em] text-stone-300 block mb-1">Starting at</span>
                  <p className="text-amber font-black text-2xl tracking-tighter">Rs {pizza.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-40 bg-stone-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 items-center gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 text-gold text-xs font-bold uppercase tracking-widest mb-6">Our Story</div>
              <h2 className="font-display text-5xl md:text-7xl font-bold mb-8 leading-[0.95] tracking-tight">
                Authentic Taste, <br />
                <span className="text-gold italic">No Fancy Address.</span>
              </h2>
              <p className="text-lg md:text-xl text-stone-400 mb-8 leading-relaxed font-medium">
                At Pizza.com, we believe great food doesn't need a fancy address. Tucked near Hamza Masjid in Iqbal Nagar, we serve freshly baked pizzas at honest prices.
              </p>
              <p className="text-base text-stone-500 mb-12 leading-relaxed">
                What started as a small neighborhood dream has grown into Wah Cantt's favourite corner for pizza lovers. We focus on what matters most: the crunch of the crust and the quality of our toppings.
              </p>
              <div className="flex flex-wrap gap-12">
                <div className="flex flex-col gap-2">
                  <p className="text-4xl md:text-5xl font-display font-bold text-gold tracking-tighter">82+</p>
                  <p className="text-xs text-stone-500 uppercase tracking-[0.2em] font-black">Happy Locals</p>
                </div>
                <div className="w-px h-16 bg-stone-800 hidden sm:block" />
                <div className="flex flex-col gap-2">
                  <p className="text-4xl md:text-5xl font-display font-bold text-gold tracking-tighter">5.0</p>
                  <p className="text-xs text-stone-500 uppercase tracking-[0.2em] font-black">Chef Quality</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative hidden lg:block"
            >
              <div className="aspect-square bg-stone-800 rounded-full flex items-center justify-center p-12 border border-stone-700/50 animate-spin-slow">
                <div className="w-full h-full border-2 border-dashed border-stone-600/50 rounded-full flex items-center justify-center relative overflow-hidden">
                   <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber/10 via-transparent to-transparent" />
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-amber/30 blur-[120px] rounded-full pointer-events-none opacity-20" />
              <div className="absolute top-10 right-10 bg-gold text-brown px-10 py-6 rounded-3xl font-display font-black text-2xl rotate-12 shadow-[0_20px_50px_rgba(255,195,0,0.4)]">
                Iqbal <br /> Nagar
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Logo className="w-48 h-auto drop-shadow-2xl" showText={false} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-32 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-brown">What Locals Say</h2>
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => <Star key={i} className="fill-gold text-gold" size={20} />)}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {REVIEWS.map((review, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-10 rounded-3xl shadow-sm border border-stone-100 flex flex-col relative"
              >
                <Quote className="text-stone-100 absolute top-6 right-8" size={60} />
                <div className="flex gap-1 mb-4 text-gold">
                  {[...Array(review.stars)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-stone-600 leading-relaxed italic mb-8 relative z-10">"{review.quote}"</p>
                <div className="mt-auto flex items-center gap-3">
                  <div className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center font-bold text-stone-400">A</div>
                  <p className="font-bold text-sm tracking-tight">{review.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Us */}
      <section id="contact" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-brown text-white rounded-[2.5rem] md:rounded-[4rem] overflow-hidden grid lg:grid-cols-2 shadow-2xl">
            <div className="p-10 md:p-20 order-2 lg:order-1">
              <div className="inline-block px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 text-gold text-xs font-bold uppercase tracking-widest mb-8">Visit Us</div>
              <h2 className="font-display text-4xl md:text-6xl font-bold mb-10 leading-tight">Visit Our Kitchen</h2>
              
              <div className="space-y-10 mb-14">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-gold transition-colors">
                    <MapPin className="text-gold" size={24} />
                  </div>
                  <div>
                    <p className="font-display font-bold text-xl mb-1">Address</p>
                    <p className="text-stone-400 text-lg">FFC7+88, Iqbal Nagar, Near Hamza Masjid, Wah Cantt</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center shrink-0 border border-white/10">
                    <Phone className="text-gold" size={24} />
                  </div>
                  <div>
                    <p className="font-display font-bold text-xl mb-1">Phone</p>
                    <a href="tel:03020383000" className="text-stone-400 text-lg hover:text-gold transition-colors">0302-0383000</a>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center shrink-0 border border-white/10">
                    <Clock className="text-gold" size={24} />
                  </div>
                  <div>
                    <p className="font-display font-bold text-xl mb-1">Hours</p>
                    <p className="text-stone-400 text-lg">Mon - Sun: 12:00 PM - 12:00 AM</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-5">
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=FFC7%2B88+Iqbal+Nagar+Wah+Cantt" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-gold text-brown px-10 py-5 rounded-full font-black text-lg hover:bg-amber transition-all shadow-[0_15px_40px_-10px_rgba(255,195,0,0.4)]"
                >
                  <MapIcon size={22} />
                  Get Directions
                </a>
                <a 
                  href="tel:03020383000"
                  className="flex items-center justify-center gap-3 border-2 border-white/10 px-10 py-5 rounded-full font-bold text-lg hover:bg-white/5 transition-all"
                >
                  <Phone size={22} />
                  Call Now
                </a>
              </div>
            </div>
            
            <div className="h-[350px] lg:h-auto overflow-hidden relative order-1 lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?q=80&w=2074&auto=format&fit=crop" 
                alt="Pizza Oven"
                className="w-full h-full object-cover grayscale-[0.2] hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown via-transparent to-transparent lg:bg-gradient-to-l opacity-80" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4 text-center">
                 <div className="bg-gold text-brown px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-xl">Cash Only</div>
                 <p className="text-white font-display text-2xl font-bold drop-shadow-lg">Pizza.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 bg-stone-50 border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-6 text-center text-brown">
          <div className="flex flex-col items-center gap-2 mb-12">
            <Logo className="h-24 w-auto drop-shadow-lg mb-2" />
            <p className="text-stone-500 max-w-sm mx-auto text-lg leading-relaxed font-medium mt-4">Eat less but the best. Serving smiles one slice at a time in the heart of Iqbal Nagar, Wah Cantt.</p>
          </div>
          
          <div className="flex justify-center gap-10 mb-12">
            <button onClick={() => scrollTo('home')} className="text-sm font-bold uppercase tracking-widest text-stone-400 hover:text-amber transition-colors">Home</button>
            <button onClick={() => scrollTo('menu')} className="text-sm font-bold uppercase tracking-widest text-stone-400 hover:text-amber transition-colors">Menu</button>
            <button onClick={() => scrollTo('contact')} className="text-sm font-bold uppercase tracking-widest text-stone-400 hover:text-amber transition-colors">Contact</button>
          </div>

          <div className="w-24 h-px bg-stone-200 mx-auto mb-12" />
          <p className="text-xs text-stone-400 font-bold uppercase tracking-[0.3em]">
            &copy; {new Date().getFullYear()} Pizza Restaurant. Crafted with passion.
          </p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: ReactNode, title: string, description: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white p-10 rounded-[2rem] shadow-sm border border-stone-200 hover:border-amber transition-colors duration-500 group text-center"
    >
      <div className="w-16 h-16 bg-stone-50 rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:bg-amber/10 transition-colors duration-500">
        {icon}
      </div>
      <h3 className="font-display font-bold text-2xl mb-4">{title}</h3>
      <p className="text-stone-500 leading-relaxed text-balance">{description}</p>
    </motion.div>
  );
}

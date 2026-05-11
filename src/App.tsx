import { motion } from "motion/react";
import { 
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

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

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
          isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src="/logo.png" alt="Pizza.com Logo" className="h-12 w-auto" />
            <span className="font-display font-bold text-2xl tracking-tight text-brown">Pizza.com</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 font-medium">
            <button onClick={() => scrollTo('home')} className="hover:text-amber transition-colors">Home</button>
            <button onClick={() => scrollTo('menu')} className="hover:text-amber transition-colors">Menu</button>
            <button onClick={() => scrollTo('about')} className="hover:text-amber transition-colors">About</button>
            <button onClick={() => scrollTo('reviews')} className="hover:text-amber transition-colors">Reviews</button>
            <button onClick={() => scrollTo('contact')} className="hover:text-amber transition-colors">Contact</button>
          </div>

          <a 
            href="tel:03020383000"
            className="bg-gold hover:bg-amber text-brown px-6 py-2 rounded-full font-bold transition-all shadow-sm flex items-center gap-2"
          >
            <Phone size={18} />
            <span className="hidden sm:inline">Order Now</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Overlay */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/20"
          >
            <span className="text-gold">⭐ 3.9</span>
            <span className="opacity-80">· 82 Reviews</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight leading-[0.9]"
          >
            Iqbal Nagar's <br />
            <span className="text-gold">Favourite</span> Slice
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto text-balance"
          >
            Artisanal pizzas baked with passion, topped with the freshest ingredients, and served at honest prices near Hamza Masjid.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a 
              href="tel:03020383000"
              className="w-full sm:w-auto bg-gold text-brown px-10 py-4 rounded-full font-black text-lg hover:bg-amber transition-all shadow-xl hover:scale-105 active:scale-95"
            >
              Order Now
            </a>
            <button 
              onClick={() => scrollTo('menu')} 
              className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all"
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
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
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
      <section id="menu" className="py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 px-4">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Our Pizza Palette</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-6" />
            <p className="text-stone-500 max-w-xl mx-auto">Hand-stretched and oven-baked to golden perfection. Choose your favorite from our curated selection.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {PIZZA_DATA.map((pizza, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-3xl shadow-sm border border-stone-100 flex flex-col items-center text-center group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{pizza.icon}</div>
                <h3 className="font-display font-bold text-lg mb-2">{pizza.name}</h3>
                <p className="text-sm text-stone-500 mb-4 line-clamp-2">{pizza.description}</p>
                <div className="mt-auto">
                  <span className="text-xs uppercase font-bold tracking-widest text-stone-400">Starting at</span>
                  <p className="text-amber font-black text-xl">Rs {pizza.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-stone-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 items-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-4xl md:text-6xl font-bold mb-8 leading-tight">
                Authentic Taste, <br />
                <span className="text-gold">No Fancy Address.</span>
              </h2>
              <p className="text-lg text-stone-400 mb-6 leading-relaxed">
                At Pizza, we believe great food doesn't need a fancy address. Tucked near Hamza Masjid in Iqbal Nagar, we serve freshly baked pizzas at honest prices.
              </p>
              <p className="text-lg text-stone-400 mb-10 leading-relaxed">
                What started as a small neighborhood dream has grown into Wah Cantt's favourite corner for pizza lovers. We focus on what matters most: the crunch of the crust and the quality of our toppings.
              </p>
              <div className="flex gap-8">
                <div>
                  <p className="text-3xl font-display font-bold text-gold">82+</p>
                  <p className="text-sm text-stone-500 uppercase tracking-widest font-bold">Happy Locals</p>
                </div>
                <div className="w-px h-12 bg-stone-800" />
                <div>
                  <p className="text-3xl font-display font-bold text-gold">5.0</p>
                  <p className="text-sm text-stone-500 uppercase tracking-widest font-bold">Chef Quality</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative hidden lg:block"
            >
              <div className="aspect-square bg-stone-800 rounded-full flex items-center justify-center p-8 border border-stone-700 animate-spin-slow">
                <div className="w-full h-full border-2 border-dashed border-stone-600 rounded-full flex items-center justify-center">
                  <PizzaIcon size={120} className="text-stone-700" />
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 aspect-video bg-amber/20 backdrop-blur-3xl rounded-full blur-[100px]" />
              <div className="absolute top-0 right-0 bg-gold text-brown p-8 rounded-full font-display font-bold text-xl rotate-12 shadow-2xl">
                Iqbal <br /> Nagar
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
      <section id="contact" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-brown text-white rounded-[2.5rem] overflow-hidden grid lg:grid-cols-2">
            <div className="p-12 md:p-20 order-2 lg:order-1">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-10">Visit Our Kitchen</h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <MapPin className="text-gold mt-1 shrink-0" />
                  <div>
                    <p className="font-bold mb-1">Address</p>
                    <p className="text-stone-400">FFC7+88, Iqbal Nagar, Near Hamza Masjid, Wah Cantt</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-gold mt-1 shrink-0" />
                  <div>
                    <p className="font-bold mb-1">Phone</p>
                    <a href="tel:03020383000" className="text-stone-400 hover:text-gold transition-colors">0302-0383000</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="text-gold mt-1 shrink-0" />
                  <div>
                    <p className="font-bold mb-1">Hours</p>
                    <p className="text-stone-400">Mon - Sun: 12:00 PM - 12:00 AM</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                   <div className="bg-stone-800 p-2 rounded text-[10px] font-bold uppercase text-stone-400">Cash Only</div>
                   <p className="text-stone-400">Payment method accepted: Cash Only</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=FFC7%2B88+Iqbal+Nagar+Wah+Cantt" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-gold text-brown px-8 py-4 rounded-full font-bold hover:bg-amber transition-all shadow-lg"
                >
                  <MapIcon size={20} />
                  Get Directions
                </a>
                <a 
                  href="tel:03020383000"
                  className="flex items-center justify-center gap-2 border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all"
                >
                  <Phone size={20} />
                  Call Now
                </a>
              </div>
            </div>
            
            <div className="h-[400px] lg:h-auto overflow-hidden relative order-1 lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?q=80&w=2074&auto=format&fit=crop" 
                alt="Pizza Oven"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown to-transparent lg:bg-gradient-to-l opacity-40" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-stone-50 border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <img src="/logo.png" alt="Pizza.com Logo" className="h-16 w-auto" />
            <span className="font-display font-bold text-3xl tracking-tight text-brown">Pizza.com</span>
          </div>
          <p className="text-stone-500 mb-10 max-w-sm mx-auto">Eat less but the best. Serving smiles one slice at a time in the heart of Iqbal Nagar, Wah Cantt.</p>
          <div className="w-16 h-px bg-stone-200 mx-auto mb-10" />
          <p className="text-sm text-stone-400 font-medium uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Pizza Restaurant. All Rights Reserved.
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

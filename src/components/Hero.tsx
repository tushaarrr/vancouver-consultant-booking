import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Star, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const HERO_VIDEO = "/hero-vancouver.mov";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
  { label: "Book", href: "/#calendly-section" },
];

const Hero = () => {
  const [navBg, setNavBg] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavBg(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Video Background with Dramatic Overlay */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
        
        {/* Ultra-Modern Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-blue-900/70 to-black/90 z-10" />
        
        {/* Animated Gradient Accents */}
        <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 via-transparent to-cyan-500/20 z-20 animate-gradient-shift" style={{backgroundSize: '400% 400%'}} />
      </div>

      {/* Glass Morphism Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
          navBg ? "glass-dark shadow-2xl" : "bg-transparent"
        } px-6 md:px-16 py-4`}
      >
        <div className="flex items-center justify-between">
          <motion.a 
            href="/"
            className="font-serif text-2xl md:text-3xl gradient-text-rainbow font-bold"
            whileHover={{ scale: 1.05 }}
          >
            Realty<span className="text-white">.com</span>
          </motion.a>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-8">
            {NAV_LINKS.map((link, index) => (
              <motion.li 
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index + 0.3, duration: 0.5 }}
              >
                <a
                  href={link.href}
                  className="text-white/90 font-semibold hover:text-white transition-all duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </motion.li>
            ))}
          </ul>
          
          {/* Mobile Menu Button */}
          <button
            className="flex md:hidden glass-premium p-3 rounded-xl"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
          
          {/* Mobile Menu */}
          {mobileOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute left-0 top-full w-full glass-dark py-6 flex flex-col md:hidden"
            >
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block text-white font-semibold px-8 py-4 hover:bg-white/10"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </motion.ul>
          )}
        </div>
      </motion.nav>

      {/* Hero Content - Ultra-Modern */}
      <div className="relative z-30 text-center max-w-6xl mx-auto px-6 py-32 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="space-y-8"
        >
          {/* Accent Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="inline-flex items-center gap-2 glass-premium px-6 py-3 rounded-full"
          >
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <span className="text-white font-semibold">Vancouver's Premier Real Estate</span>
          </motion.div>
          
          {/* Main Headline - Dramatic Typography */}
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            <span className="text-white drop-shadow-2xl">Luxury Living</span>
            <br />
            <span className="gradient-text-rainbow">Reimagined</span>
          </motion.h1>
          
          {/* Subheadline */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="text-xl md:text-2xl lg:text-3xl font-medium text-white/90 max-w-3xl mx-auto drop-shadow-lg"
          >
            Elevate your real estate journey with cutting-edge market insights and exclusive property access
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
          >
            <a
              href="#lead-form"
              className="group relative px-10 py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl font-bold text-lg text-white shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-3 overflow-hidden"
            >
              <span className="relative z-10">Book Consultation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <a
              href="#what-to-expect"
              className="px-10 py-5 glass-premium rounded-2xl font-bold text-lg text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              Learn More
            </a>
          </motion.div>
          
          {/* Trust Badges - Modern Pills */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="flex flex-wrap justify-center gap-4 mt-12"
          >
            {[
              { icon: <Star className="w-4 h-4" />, text: "500+ Families" },
              { icon: <Star className="w-4 h-4" />, text: "5.0 Rating" },
              { icon: <Star className="w-4 h-4" />, text: "Top Realtor" }
            ].map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6 + index * 0.1 }}
                className="flex items-center gap-2 glass px-6 py-3 rounded-full text-white font-semibold hover:bg-white/20 transition-all"
              >
                {badge.icon}
                {badge.text}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-1/4 right-10 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl opacity-30 z-20"
      />
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-1/4 left-10 w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full blur-3xl opacity-30 z-20"
      />
    </section>
  );
};

export default Hero;

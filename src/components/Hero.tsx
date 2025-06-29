import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Home, Key, TrendingUp, Menu, X } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

// Video configuration - Change these paths to update the hero video
const HERO_VIDEO = "/hero-vancouver.mov"; // Main video file

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
  { label: "Book", href: "/#calendly-section" },
];

// Animation variants for smooth, premium transitions
const navVariants = {
  hidden: { y: -40, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { 
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] // Custom easing for premium feel
    } 
  },
};

const heroContentVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 1.2,
      delay: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94]
    } 
  },
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    } 
  },
};

const Hero = () => {
  const [navBg, setNavBg] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Navbar background on scroll with smooth transition
  useEffect(() => {
    const handleScroll = () => {
      setNavBg(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on nav link click
  const handleNavClick = () => setMobileOpen(false);

  const scrollToCalendly = () => {
    const calendlySection = document.querySelector('#calendly-section');
    calendlySection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToForm = () => {
    const formSection = document.querySelector('#lead-form');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden px-0"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {/* Video Background Only */}
      <div className="absolute inset-0 w-full h-full z-0">
        {/* Video Element - Main Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          onError={(e) => {
            console.warn('Video failed to load');
            setVideoLoaded(false);
          }}
        >
          <source src={HERO_VIDEO} type="video/mp4" />
          <source src={HERO_VIDEO} type="video/quicktime" />
          {/* Fallback message for browsers that don't support video */}
          Your browser does not support the video tag.
        </video>

        {/* Premium Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/60 z-10" />
        
        {/* Additional subtle overlay for enhanced text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/30 via-transparent to-navy/30 z-20" />
      </div>

      {/* Navigation Bar */}
      <motion.nav
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
          navBg 
            ? "bg-black/95 backdrop-blur-xl shadow-2xl border-b border-gold/20" 
            : "bg-transparent"
        } flex items-center justify-between px-4 sm:px-6 md:px-16 py-3 md:py-4`}
        variants={navVariants}
      >
        <motion.a 
          href="/"
          className="font-serif text-xl sm:text-2xl text-gold font-bold tracking-wide"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          Realty.com
        </motion.a>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6 lg:gap-8">
          {NAV_LINKS.map((link, index) => (
            <motion.li 
              key={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <a
                href={link.href}
                className="text-white font-medium hover:text-gold transition-all duration-300 px-3 py-2 rounded-lg hover:bg-white/10 focus:outline-none focus:text-gold relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
            </motion.li>
          ))}
        </ul>
        
        {/* Mobile Menu Button */}
        <motion.button
          className="flex md:hidden items-center justify-center p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 hover:bg-white/10 transition-all duration-300"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Open navigation menu"
          whileTap={{ scale: 0.95 }}
        >
          {mobileOpen ? <X className="w-7 h-7 text-gold" /> : <Menu className="w-7 h-7 text-gold" />}
        </motion.button>
        
        {/* Mobile Menu */}
        <motion.ul
          initial={{ height: 0, opacity: 0 }}
          animate={mobileOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className={`absolute left-0 top-full w-full bg-black/95 backdrop-blur-xl shadow-2xl flex flex-col md:hidden overflow-hidden rounded-b-2xl border-b border-gold/20 ${mobileOpen ? "py-4" : "py-0"}`}
        >
          {NAV_LINKS.map((link, index) => (
            <motion.li 
              key={link.href} 
              className="w-full"
              initial={{ x: -50, opacity: 0 }}
              animate={mobileOpen ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.3 }}
            >
              <a
                href={link.href}
                className="block w-full text-lg text-white font-medium px-6 py-4 border-b border-gold/10 hover:bg-gold/10 focus:bg-gold/10 transition-all duration-300"
                onClick={handleNavClick}
              >
                {link.label}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </motion.nav>

      {/* Hero Content */}
      <div className="relative z-30 text-center max-w-4xl mx-auto px-4 py-28 sm:py-32 flex flex-col items-center">
        <motion.div
          variants={heroContentVariants}
          className="space-y-6"
        >
          {/* Main Headline */}
          <motion.h1 
            className="font-serif text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 drop-shadow-2xl leading-tight" 
            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
            variants={fadeUpVariant}
          >
            Vancouver's Premier Real Estate Consultant
          </motion.h1>
          
          {/* Subheadline */}
          <motion.p 
            className="text-base sm:text-lg md:text-2xl lg:text-3xl font-semibold mb-6 sm:mb-8 drop-shadow-lg" 
            style={{ color: '#F4C430' }}
            variants={fadeUpVariant}
          >
            Guiding High-End Buyers & Sellers to Success
          </motion.p>
          
          {/* Premium CTA Button */}
          <motion.div
            variants={fadeUpVariant}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <a
              href="#lead-form"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-900 to-emerald-600 hover:from-blue-800 hover:to-emerald-500 text-white font-bold px-10 sm:px-14 py-4 sm:py-5 rounded-xl shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 text-base sm:text-lg lg:text-xl transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-emerald-400/50 group"
            >
              Book Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </motion.div>
          
          {/* Trust Badges */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-8 sm:mt-12"
            variants={staggerContainer}
          >
            {[
              { icon: "🌟", text: "500+ Families Helped" },
              { icon: "🏆", text: "Top Rated Realtor" },
              { icon: "⭐", text: "Google 5.0 Rating" }
            ].map((badge, index) => (
              <motion.span
                key={index}
                className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-xl font-semibold text-xs sm:text-sm text-navy border border-white/20 hover:bg-white transition-all duration-300"
                variants={fadeUpVariant}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-lg">{badge.icon}</span>
                {badge.text}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Home, Key, TrendingUp, Menu, X } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const HERO_IMAGE = "/vancouver-luxury.jpg"; // Use the new image in public/

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Consultation", href: "#lead-form" },
  { label: "Book", href: "#calendly-section" },
  { label: "What to Expect", href: "#what-to-expect" },
  { label: "Contact", href: "#footer" },
];

const navVariants = {
  hidden: { y: -40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7 } },
};

const heroVariants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const Hero = () => {
  const [navBg, setNavBg] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Navbar background on scroll
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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Navbar */}
      <motion.nav
        className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ${navBg ? "bg-black/90" : "bg-transparent"} backdrop-blur shadow-lg border-b border-gold/30 flex items-center justify-between px-4 sm:px-6 md:px-16 py-3 md:py-4`}
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <span className="font-serif text-xl sm:text-2xl text-gold font-bold tracking-wide">Realty.com</span>
        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 lg:gap-10">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-white font-medium hover:text-gold transition-colors duration-200 px-2 py-1 rounded focus:outline-none focus:text-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        {/* Hamburger Icon (Mobile Only) */}
        <button
          className="flex md:hidden items-center justify-center p-2 rounded focus:outline-none focus:ring-2 focus:ring-gold"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Open navigation menu"
        >
          {mobileOpen ? <X className="w-7 h-7 text-gold" /> : <Menu className="w-7 h-7 text-gold" />}
        </button>
        {/* Mobile Menu (Mobile Only) */}
        <motion.ul
          initial={{ height: 0, opacity: 0 }}
          animate={mobileOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={`absolute left-0 top-full w-full bg-black/95 backdrop-blur shadow-lg flex flex-col md:hidden overflow-hidden rounded-b-xl ${mobileOpen ? "py-4" : "py-0"}`}
        >
          {NAV_LINKS.map(link => (
            <li key={link.href} className="w-full">
              <a
                href={link.href}
                className="block w-full text-lg text-white font-medium px-6 py-4 border-b border-gold/20 active:bg-gold/10 focus:bg-gold/10"
                onClick={handleNavClick}
              >
                {link.label}
              </a>
            </li>
          ))}
        </motion.ul>
      </motion.nav>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={HERO_IMAGE}
          alt="Vancouver Luxury Real Estate"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent opacity-60" />
      </div>
      <div className="relative z-10 text-center max-w-2xl mx-auto px-4 py-28 sm:py-32 flex flex-col items-center">
        <h1 className="font-serif text-white text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 drop-shadow-lg leading-tight" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
          Vancouver's Premier Real Estate Consultant
        </h1>
        <p className="text-base sm:text-lg md:text-2xl font-semibold mb-6 sm:mb-8" style={{ color: '#F4C430' }}>
          Guiding High-End Buyers & Sellers to Success
        </p>
        <a
          href="#lead-form"
          className="inline-block bg-[#F4C430] text-black font-bold px-6 sm:px-10 py-3 sm:py-4 rounded-full shadow-lg hover:shadow-yellow-400/60 hover:scale-105 transition duration-300 text-base sm:text-lg"
        >
          Book Free Consultation
        </a>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-8 sm:mt-10">
          <span className="flex items-center gap-2 bg-white px-4 sm:px-5 py-2 rounded-full shadow font-semibold text-xs sm:text-sm">
            🌟 500+ Families Helped
          </span>
          <span className="flex items-center gap-2 bg-white px-4 sm:px-5 py-2 rounded-full shadow font-semibold text-xs sm:text-sm">
            🏆 Top Rated Realtor
          </span>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-background">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm transition-colors duration-300">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <h1 className="text-2xl font-serif tracking-wider group cursor-pointer">
            <span className="group-hover:text-gold transition-colors duration-300">VANCOUVER LUXURY</span>
          </h1>
          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-12 text-sm tracking-widest">
              <a href="/about" className="hover:text-gold transition-colors duration-300">ABOUT</a>
              <a href="/testimonials" className="hover:text-gold transition-colors duration-300">TESTIMONIALS</a>
              <a href="/contact" className="hover:text-gold transition-colors duration-300">CONTACT</a>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Hero Content with Parallax */}
      <div 
        className="relative h-full flex items-center justify-center"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <div className="container mx-auto px-6 text-center">
          <div className="space-y-8 animate-fade-in-up">
            <h2 className="text-7xl md:text-9xl font-serif font-light tracking-wider">
              ELEVATE
            </h2>
            <div className="w-24 h-px bg-foreground mx-auto animate-draw-line" />
            <p className="text-lg md:text-xl font-light tracking-[0.3em] max-w-2xl mx-auto">
              LUXURY REAL ESTATE IN VANCOUVER
            </p>
            <Button 
              size="lg" 
              className="mt-12 bg-foreground text-background hover:bg-foreground/90 px-12 py-6 text-sm tracking-widest font-light group"
              onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              EXPLORE COLLECTION
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-foreground/40" />
      </div>

      {/* Hero Video Background */}
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30 grayscale"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
          <source src="/hero-vancouver.mov" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/80" />
      </div>

      {/* Architectural Grid Overlay */}
      <div className="absolute inset-0 -z-5 opacity-5">
        <div className="grid grid-cols-12 h-full">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-r border-foreground" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;

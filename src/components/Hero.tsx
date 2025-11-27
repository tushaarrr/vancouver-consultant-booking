import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

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
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <h1 className="text-2xl font-serif tracking-wider">VANCOUVER LUXURY</h1>
          <div className="hidden md:flex items-center gap-12 text-sm tracking-widest">
            <a href="#properties" className="hover:opacity-60 transition-opacity">PROPERTIES</a>
            <a href="#about" className="hover:opacity-60 transition-opacity">ABOUT</a>
            <a href="#contact" className="hover:opacity-60 transition-opacity">CONTACT</a>
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

      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 -z-10 opacity-5"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <img 
          src="/vancouver-luxury.jpg" 
          alt="Vancouver" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;

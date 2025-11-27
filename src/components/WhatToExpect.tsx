import { useState, useEffect, useRef } from "react";
import { Building2, Key, Home, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "PRIME LOCATIONS",
    description: "Exclusive properties in Vancouver's most prestigious neighborhoods",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop"
  },
  {
    icon: Key,
    title: "PERSONALIZED SERVICE",
    description: "Tailored approach to finding your perfect luxury residence",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop"
  },
  {
    icon: Home,
    title: "CURATED PORTFOLIO",
    description: "Hand-selected properties representing the pinnacle of luxury living",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop"
  },
  {
    icon: TrendingUp,
    title: "INVESTMENT EXCELLENCE",
    description: "Strategic guidance for optimal real estate investment returns",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop"
  }
];

const WhatToExpect = () => {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setInView(rect.top < window.innerHeight && rect.bottom > 0);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 bg-background overflow-hidden">
      {/* Parallax Background Element */}
      <div 
        className="absolute top-1/4 right-0 w-1/2 h-1/2 opacity-5 -z-10"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      >
        <div className="w-full h-full border border-foreground" />
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-24 space-y-6">
            <h2 className="text-6xl md:text-7xl font-serif font-light tracking-wider">
              WHAT TO EXPECT
            </h2>
            <div className="w-24 h-px bg-foreground mx-auto" />
            <p className="text-muted-foreground font-light tracking-wider max-w-2xl mx-auto">
              A refined experience in luxury real estate
            </p>
          </div>

          {/* Features Grid with Images */}
          <div className="grid md:grid-cols-2 gap-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group transition-all duration-700 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="relative mb-6 overflow-hidden h-64">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/0 transition-all duration-500" />
                </div>
                
                {/* Content */}
                <div className="space-y-6">
                  <feature.icon className="h-12 w-12 text-foreground group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-serif font-light tracking-widest">
                    {feature.title}
                  </h3>
                  <div className="w-12 h-px bg-foreground/20 group-hover:w-24 transition-all duration-500" />
                  <p className="text-muted-foreground font-light leading-relaxed tracking-wide">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatToExpect;

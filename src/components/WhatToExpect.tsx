import { useState, useEffect, useRef } from "react";
import { Building2, Key, Home, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "PRIME LOCATIONS",
    description: "Exclusive properties in Vancouver's most prestigious neighborhoods"
  },
  {
    icon: Key,
    title: "PERSONALIZED SERVICE",
    description: "Tailored approach to finding your perfect luxury residence"
  },
  {
    icon: Home,
    title: "CURATED PORTFOLIO",
    description: "Hand-selected properties representing the pinnacle of luxury living"
  },
  {
    icon: TrendingUp,
    title: "INVESTMENT EXCELLENCE",
    description: "Strategic guidance for optimal real estate investment returns"
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

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group transition-all duration-700 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
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

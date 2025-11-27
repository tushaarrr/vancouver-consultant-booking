import { useState, useEffect, useRef } from "react";
import { Building2, Award, Users, TrendingUp } from "lucide-react";
import Footer from "@/components/Footer";

const About = () => {
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

  const values = [
    { icon: Building2, title: "EXPERTISE", description: "Deep market knowledge and insights" },
    { icon: Award, title: "EXCELLENCE", description: "Uncompromising standards of service" },
    { icon: Users, title: "INTEGRITY", description: "Transparent and honest relationships" },
    { icon: TrendingUp, title: "RESULTS", description: "Proven track record of success" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <a href="/" className="text-2xl font-serif tracking-wider">VANCOUVER LUXURY</a>
          <div className="hidden md:flex items-center gap-12 text-sm tracking-widest">
            <a href="/" className="hover:opacity-60 transition-opacity">HOME</a>
            <a href="/testimonials" className="hover:opacity-60 transition-opacity">TESTIMONIALS</a>
            <a href="/contact" className="hover:opacity-60 transition-opacity">CONTACT</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div 
          className="absolute inset-0 opacity-10 -z-10"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1080&fit=crop" 
            alt="Luxury Interior" 
            className="w-full h-full object-cover grayscale"
          />
        </div>

        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-6xl md:text-8xl font-serif font-light tracking-wider">
              ABOUT US
            </h1>
            <div className="w-24 h-px bg-foreground mx-auto" />
            <p className="text-xl font-light tracking-wide leading-relaxed text-muted-foreground max-w-3xl mx-auto">
              Vancouver's premier luxury real estate consultancy, dedicated to delivering 
              exceptional properties and unparalleled service to discerning clients.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={sectionRef} className="py-32 bg-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-24 space-y-6">
              <h2 className="text-5xl md:text-6xl font-serif font-light tracking-wider">
                OUR VALUES
              </h2>
              <div className="w-24 h-px bg-foreground mx-auto" />
            </div>

            <div className="grid md:grid-cols-2 gap-16">
              {values.map((value, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ${
                    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="space-y-6">
                    <value.icon className="h-12 w-12 text-foreground" />
                    <h3 className="text-2xl font-serif font-light tracking-widest">
                      {value.title}
                    </h3>
                    <div className="w-12 h-px bg-foreground/20" />
                    <p className="text-muted-foreground font-light leading-relaxed tracking-wide">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="h-96 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop" 
                alt="Luxury Property 1" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="h-96 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop" 
                alt="Luxury Property 2" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

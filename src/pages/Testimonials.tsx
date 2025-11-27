import { useState, useEffect, useRef } from "react";
import { Quote, Star } from "lucide-react";
import Footer from "@/components/Footer";

const Testimonials = () => {
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

  const testimonials = [
    {
      quote: "An extraordinary experience from start to finish. The attention to detail and market knowledge exceeded all expectations.",
      author: "SARAH & MICHAEL CHEN",
      location: "Yaletown Residence"
    },
    {
      quote: "Professional, knowledgeable, and dedicated. Found us the perfect investment property in record time.",
      author: "DAVID RODRIGUEZ",
      location: "Richmond Investment Property"
    },
    {
      quote: "The level of service and expertise is unmatched. Made our luxury home purchase seamless and enjoyable.",
      author: "JENNIFER & MARK THOMPSON",
      location: "West Vancouver Estate"
    },
    {
      quote: "Outstanding market insights and negotiation skills. Achieved results beyond what we thought possible.",
      author: "ALEX KIM",
      location: "Coal Harbour Penthouse"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <a href="/" className="text-2xl font-serif tracking-wider">VANCOUVER LUXURY</a>
          <div className="hidden md:flex items-center gap-12 text-sm tracking-widest">
            <a href="/" className="hover:opacity-60 transition-opacity">HOME</a>
            <a href="/about" className="hover:opacity-60 transition-opacity">ABOUT</a>
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
            src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1920&h=1080&fit=crop" 
            alt="Luxury Living" 
            className="w-full h-full object-cover grayscale"
          />
        </div>

        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-6xl md:text-8xl font-serif font-light tracking-wider">
              CLIENT STORIES
            </h1>
            <div className="w-24 h-px bg-foreground mx-auto" />
            <p className="text-xl font-light tracking-wide leading-relaxed text-muted-foreground max-w-3xl mx-auto">
              Testimonials from clients who have experienced exceptional service 
              and achieved their real estate aspirations.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section ref={sectionRef} className="py-32 bg-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="space-y-8">
                  <Quote className="h-12 w-12 text-foreground/20" />
                  
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-foreground text-foreground" />
                    ))}
                  </div>
                  
                  <p className="text-lg font-light leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="space-y-2">
                    <div className="w-12 h-px bg-foreground/20" />
                    <p className="text-sm tracking-widest font-light">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-muted-foreground font-light">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;

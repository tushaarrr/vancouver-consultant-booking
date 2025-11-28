import { Star, Quote } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const testimonials = [
  {
    name: "Michael Chen",
    role: "West Vancouver Homeowner",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop",
    rating: 5,
    text: "Working with Vancouver Luxury was an absolute pleasure. Their attention to detail and market knowledge helped us find our dream waterfront estate. The entire process was seamless and professional.",
    property: "$4.2M West Vancouver Estate"
  },
  {
    name: "Sarah Williams",
    role: "Yaletown Resident",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop",
    rating: 5,
    text: "Exceptional service from start to finish. They understood exactly what we were looking for and presented properties that matched our vision perfectly. Highly recommend for luxury real estate.",
    property: "$2.8M Yaletown Penthouse"
  },
  {
    name: "David Thompson",
    role: "Shaughnessy Homeowner",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
    rating: 5,
    text: "Their expertise in the Vancouver luxury market is unmatched. They negotiated an excellent deal and handled everything with utmost professionalism and discretion.",
    property: "$5.5M Shaughnessy Manor"
  },
  {
    name: "Jennifer Martinez",
    role: "Coal Harbour Resident",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop",
    rating: 5,
    text: "From our first meeting to closing, the team went above and beyond. Their network and market insights gave us access to properties before they hit the market.",
    property: "$3.5M Coal Harbour View"
  },
  {
    name: "Robert Kim",
    role: "Kitsilano Homeowner",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    rating: 5,
    text: "The personalized attention and dedication to finding the perfect property was impressive. They truly understand what luxury living means in Vancouver.",
    property: "$3.2M Kitsilano Estate"
  },
  {
    name: "Emily Patterson",
    role: "Point Grey Resident",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop",
    rating: 5,
    text: "Outstanding service and market knowledge. They made the entire purchasing process smooth and stress-free. We couldn't be happier with our new home.",
    property: "$4.8M Point Grey Property"
  }
];

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm transition-colors duration-300">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <a href="/" className="text-2xl font-serif tracking-wider group cursor-pointer">
            <span className="group-hover:text-gold transition-colors duration-300">VANCOUVER LUXURY</span>
          </a>
          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-12 text-sm tracking-widest">
              <a href="/about" className="hover:text-gold transition-colors duration-300">ABOUT</a>
              <a href="/testimonials" className="text-gold">TESTIMONIALS</a>
              <a href="/contact" className="hover:text-gold transition-colors duration-300">CONTACT</a>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-champagne/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <div className="w-16 h-px bg-gold mx-auto mb-8" />
            <h1 className="text-6xl md:text-8xl font-serif font-light tracking-wider mb-8">
              CLIENT STORIES
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Hear from our satisfied clients who've found their dream homes through Vancouver Luxury. Their success stories are our greatest achievement.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-navy text-navy-foreground">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl font-serif text-gold mb-2">500+</p>
              <p className="text-sm tracking-widest text-champagne">HAPPY CLIENTS</p>
            </div>
            <div>
              <p className="text-5xl font-serif text-gold mb-2">4.9</p>
              <p className="text-sm tracking-widest text-champagne">AVERAGE RATING</p>
            </div>
            <div>
              <p className="text-5xl font-serif text-gold mb-2">98%</p>
              <p className="text-sm tracking-widest text-champagne">SATISFACTION RATE</p>
            </div>
            <div>
              <p className="text-5xl font-serif text-gold mb-2">$2B+</p>
              <p className="text-sm tracking-widest text-champagne">PROPERTIES SOLD</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="border border-border p-8 hover:border-gold transition-all duration-300 group"
              >
                <Quote className="h-8 w-8 text-gold mb-6" />
                
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                  ))}
                </div>

                <p className="text-lg leading-relaxed mb-8 text-foreground/90">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-4 border-t border-border pt-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 object-cover"
                  />
                  <div>
                    <p className="font-serif text-lg group-hover:text-gold transition-colors">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground mb-1">{testimonial.role}</p>
                    <p className="text-xs tracking-widest text-gold">{testimonial.property}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-champagne/20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-px bg-gold mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-serif font-light tracking-wider mb-8">
              READY TO BEGIN YOUR JOURNEY?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Join our community of satisfied clients and discover your perfect luxury property in Vancouver.
            </p>
            <a
              href="/contact"
              className="inline-block border-2 border-foreground px-12 py-4 text-sm tracking-widest hover:bg-foreground hover:text-background transition-all duration-300"
            >
              GET IN TOUCH
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Testimonials;

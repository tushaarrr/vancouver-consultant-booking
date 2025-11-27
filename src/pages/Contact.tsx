import { useState, useEffect } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Footer from "@/components/Footer";

const Contact = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <a href="/" className="text-2xl font-serif tracking-wider">VANCOUVER LUXURY</a>
          <div className="hidden md:flex items-center gap-12 text-sm tracking-widest">
            <a href="/" className="hover:opacity-60 transition-opacity">HOME</a>
            <a href="/about" className="hover:opacity-60 transition-opacity">ABOUT</a>
            <a href="/testimonials" className="hover:opacity-60 transition-opacity">TESTIMONIALS</a>
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
            src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1920&h=1080&fit=crop" 
            alt="Contact" 
            className="w-full h-full object-cover grayscale"
          />
        </div>

        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-6xl md:text-8xl font-serif font-light tracking-wider">
              CONTACT
            </h1>
            <div className="w-24 h-px bg-foreground mx-auto" />
            <p className="text-xl font-light tracking-wide leading-relaxed text-muted-foreground max-w-3xl mx-auto">
              Begin your journey to exceptional real estate. 
              We're here to answer your questions and discuss your aspirations.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-32 bg-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div className="space-y-4">
                <Phone className="h-10 w-10 text-foreground" />
                <h3 className="text-xl font-serif tracking-widest">PHONE</h3>
                <div className="w-12 h-px bg-foreground/20" />
                <a href="tel:+17785983175" className="text-muted-foreground hover:text-foreground transition-colors font-light">
                  +1 (778) 598-3175
                </a>
              </div>

              <div className="space-y-4">
                <Mail className="h-10 w-10 text-foreground" />
                <h3 className="text-xl font-serif tracking-widest">EMAIL</h3>
                <div className="w-12 h-px bg-foreground/20" />
                <a href="mailto:info@vancouverluxury.com" className="text-muted-foreground hover:text-foreground transition-colors font-light">
                  info@vancouverluxury.com
                </a>
              </div>
            </div>

            <div className="space-y-12">
              <div className="space-y-4">
                <MapPin className="h-10 w-10 text-foreground" />
                <h3 className="text-xl font-serif tracking-widest">LOCATION</h3>
                <div className="w-12 h-px bg-foreground/20" />
                <p className="text-muted-foreground font-light">
                  Vancouver, British Columbia<br />
                  Greater Vancouver Area
                </p>
              </div>

              <div className="space-y-4">
                <Clock className="h-10 w-10 text-foreground" />
                <h3 className="text-xl font-serif tracking-widest">HOURS</h3>
                <div className="w-12 h-px bg-foreground/20" />
                <div className="text-muted-foreground font-light space-y-1">
                  <p>Monday - Friday: 8AM - 8PM</p>
                  <p>Saturday: 9AM - 6PM</p>
                  <p>Sunday: 10AM - 4PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 grayscale">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83326.84816443756!2d-123.27256568359375!3d49.26606506825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673f143a94fb3%3A0xbb9196ea9b81f38b!2sVancouver%2C%20BC%2C%20Canada!5e0!3m2!1sen!2sus!4v1703123456789!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Vancouver Service Area Map"
        />
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

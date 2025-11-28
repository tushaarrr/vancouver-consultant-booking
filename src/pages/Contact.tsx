import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ThemeToggle from "@/components/ThemeToggle";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+1 (604) 555-1234", "+1 (604) 555-5678"]
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@vancouverluxury.com", "sales@vancouverluxury.com"]
  },
  {
    icon: MapPin,
    title: "Office",
    details: ["1055 West Georgia Street", "Vancouver, BC V6E 3P3"]
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["Mon-Fri: 9AM - 6PM", "Sat-Sun: By Appointment"]
  }
];

const Contact = () => {
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
              <a href="/testimonials" className="hover:text-gold transition-colors duration-300">TESTIMONIALS</a>
              <a href="/contact" className="text-gold">CONTACT</a>
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
              GET IN TOUCH
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Let's discuss your luxury real estate needs. Our team is ready to help you find your perfect Vancouver property.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-navy text-navy-foreground">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 max-w-6xl mx-auto">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="text-center group">
                  <Icon className="h-10 w-10 mx-auto mb-4 text-gold transition-transform group-hover:scale-110 duration-300" />
                  <h3 className="text-lg font-serif mb-3 text-champagne">{info.title}</h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-sm text-champagne/80 mb-1">
                      {detail}
                    </p>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="w-16 h-px bg-gold mx-auto mb-8" />
              <h2 className="text-4xl md:text-5xl font-serif font-light tracking-wider mb-6">
                SEND US A MESSAGE
              </h2>
              <p className="text-muted-foreground tracking-widest text-sm">
                WE'LL RESPOND WITHIN 24 HOURS
              </p>
            </div>

            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm tracking-widest mb-3">FULL NAME</label>
                  <Input
                    placeholder="John Doe"
                    className="border-0 border-b border-border rounded-none focus:border-gold transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm tracking-widest mb-3">EMAIL</label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    className="border-0 border-b border-border rounded-none focus:border-gold transition-colors"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm tracking-widest mb-3">PHONE</label>
                  <Input
                    type="tel"
                    placeholder="+1 (604) 555-1234"
                    className="border-0 border-b border-border rounded-none focus:border-gold transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm tracking-widest mb-3">PROPERTY INTEREST</label>
                  <Input
                    placeholder="West Vancouver Estate"
                    className="border-0 border-b border-border rounded-none focus:border-gold transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm tracking-widest mb-3">MESSAGE</label>
                <Textarea
                  placeholder="Tell us about your property requirements..."
                  rows={6}
                  className="border border-border rounded-none focus:border-gold transition-colors resize-none"
                />
              </div>

              <div className="text-center">
                <Button
                  type="submit"
                  className="bg-foreground text-background hover:bg-gold hover:text-gold-foreground px-16 py-6 text-sm tracking-widest transition-all duration-300"
                >
                  SEND MESSAGE
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-32 bg-champagne/20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="w-16 h-px bg-gold mx-auto mb-8" />
              <h2 className="text-4xl md:text-5xl font-serif font-light tracking-wider">
                VISIT OUR OFFICE
              </h2>
            </div>
            
            <div className="aspect-video bg-muted border border-border overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1400&h=800&fit=crop"
                alt="Vancouver Office Location"
                className="w-full h-full object-cover hover:brightness-110 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Contact;

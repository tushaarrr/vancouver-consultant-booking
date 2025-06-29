import { motion } from "framer-motion";
import { Star, Quote, Home, TrendingUp, Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

// Premium animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    } 
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    } 
  },
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah & Michael Chen",
      location: "Yaletown Condo",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      propertyImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
      rating: 5,
      quote: "Tushar made our first home purchase incredibly smooth. His knowledge of the Vancouver market and attention to detail helped us secure our dream condo in Yaletown at 8% below asking price. We couldn't be happier!",
      type: "First-Time Buyers",
      year: "2024"
    },
    {
      name: "David Rodriguez",
      location: "Richmond Investment Property",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      propertyImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop",
      rating: 5,
      quote: "As an investor, I needed someone who understood market trends and ROI potential. Tushar's data-driven approach helped me acquire three properties that have already appreciated 12% in value. Exceptional service!",
      type: "Real Estate Investor",
      year: "2024"
    },
    {
      name: "Jennifer & Mark Thompson",
      location: "West Vancouver Family Home",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      propertyImage: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
      rating: 5,
      quote: "Selling our family home was emotional, but Tushar handled everything with such care and professionalism. We sold for 18% above asking price within 5 days. His marketing strategy was phenomenal!",
      type: "Home Sellers",
      year: "2024"
    },
    {
      name: "Alex Kim",
      location: "Burnaby Townhouse",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      propertyImage: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=400&h=300&fit=crop",
      rating: 5,
      quote: "Moving from Toronto, I needed someone who could guide me through Vancouver's unique market. Tushar's local expertise and patient guidance made the transition seamless. Found the perfect townhouse for my growing family!",
      type: "Relocation Client",
      year: "2023"
    },
    {
      name: "Lisa & James Park",
      location: "Coal Harbour Luxury Condo",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      propertyImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop",
      rating: 5,
      quote: "Tushar's negotiation skills are unmatched. He helped us secure a luxury condo in Coal Harbour that wasn't even on the market yet. His network and relationships in the industry are incredible!",
      type: "Luxury Home Buyers",
      year: "2023"
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Families", icon: "🏠" },
    { number: "4.9/5", label: "Average Rating", icon: "⭐" },
    { number: "15%", label: "Above Asking Price", icon: "📈" },
    { number: "7", label: "Days Average Sale", icon: "⚡" }
  ];

  return (
    <div className="min-h-screen bg-lightbg">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-40 bg-black/95 backdrop-blur-xl shadow-2xl border-b border-gold/20 flex items-center justify-between px-4 sm:px-6 md:px-16 py-3 md:py-4">
        <motion.a 
          href="/"
          className="font-serif text-xl sm:text-2xl text-gold font-bold tracking-wide"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          Realty.com
        </motion.a>
        
        <div className="flex items-center gap-6">
          <a href="/" className="text-white hover:text-gold transition-colors duration-300">Home</a>
          <a href="/about" className="text-white hover:text-gold transition-colors duration-300">About</a>
          <a href="/contact" className="text-white hover:text-gold transition-colors duration-300">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 opacity-70"></div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-navy mb-6 font-serif">
              Why My Clients Love Working With Me
            </h1>
            <p className="text-xl text-navy/80 max-w-3xl mx-auto leading-relaxed">
              Real stories from real families who achieved their real estate dreams in Vancouver. 
              See why 500+ clients trust me with their biggest investment decisions.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-xl border border-emerald-200 hover:shadow-2xl transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-emerald-600 mb-2">{stat.number}</div>
                <div className="text-navy/70 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full bg-white/80 backdrop-blur-sm border border-emerald-200 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden">
                  <CardContent className="p-0">
                    {/* Property Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={testimonial.propertyImage}
                        alt={`${testimonial.location} - Property`}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {testimonial.year}
                      </div>
                      <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                        {testimonial.type}
                      </div>
                    </div>

                    <div className="p-8">
                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>

                      {/* Quote */}
                      <div className="relative mb-6">
                        <Quote className="absolute -top-2 -left-2 w-8 h-8 text-emerald-600/30" />
                        <p className="text-navy/80 leading-relaxed italic pl-6">
                          "{testimonial.quote}"
                        </p>
                      </div>

                      {/* Client Info */}
                      <div className="flex items-center gap-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-emerald-200"
                        />
                        <div>
                          <div className="font-bold text-navy">{testimonial.name}</div>
                          <div className="text-emerald-600 text-sm font-medium">{testimonial.location}</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Success Stories CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy/10 to-emerald-600/10"></div>
        
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-emerald-200">
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6 font-serif">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-xl text-navy/80 mb-10 max-w-2xl mx-auto">
                Join hundreds of satisfied clients who have achieved their real estate goals. 
                Your dream home or investment opportunity is just one conversation away.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <motion.a
                  href="/#calendly-section"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-900 to-emerald-600 hover:from-blue-800 hover:to-emerald-500 text-white font-bold px-10 py-4 text-lg rounded-xl shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-emerald-400/50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Calendar className="w-5 h-5" />
                  Book Your Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
                
                <motion.a
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-white text-navy border-2 border-emerald-600 hover:bg-emerald-50 font-bold px-10 py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Home className="w-5 h-5" />
                  View All Services
                </motion.a>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <span className="bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold border border-emerald-200">
                  ✅ No Obligation Consultation
                </span>
                <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold border border-blue-200">
                  🏆 Award-Winning Service
                </span>
                <span className="bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold border border-purple-200">
                  🔒 100% Confidential
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Testimonials;
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageSquare, Calendar, ArrowRight, HelpCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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

const slideInRight = {
  hidden: { opacity: 0, x: 60 },
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

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call or Text",
      value: "+1 (778) 598-3175",
      description: "Available 7 days a week for urgent matters",
      action: "tel:+17785983175",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Mail,
      title: "Email",
      value: "tusharsharma25214@gmail.com",
      description: "I respond within 2 hours during business hours",
      action: "mailto:tusharsharma25214@gmail.com",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      value: "Chat Instantly",
      description: "Quick questions and property updates",
      action: "https://wa.me/17785983175",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: Calendar,
      title: "Book Consultation",
      value: "Free 30-60 Min Session",
      description: "Personalized real estate strategy discussion",
      action: "/#calendly-section",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const faqs = [
    {
      question: "How much does your consultation cost?",
      answer: "My initial consultation is completely free! This 30-60 minute session allows us to discuss your real estate goals, review market conditions, and develop a personalized strategy. There's no obligation, and you'll walk away with valuable insights regardless of whether we work together."
    },
    {
      question: "What's the current Vancouver real estate market like?",
      answer: "Vancouver's market remains dynamic with strong fundamentals. As of 2024, we're seeing balanced conditions with selective buyer activity and strategic pricing for sellers. I provide detailed market reports during our consultation, including neighborhood-specific trends, pricing analysis, and timing recommendations."
    },
    {
      question: "How long does it typically take to buy or sell a home?",
      answer: "For buyers, finding the right property can take 2-8 weeks depending on your criteria and market conditions. For sellers, well-priced homes in good condition typically sell within 7-14 days. I'll provide a realistic timeline based on your specific situation and current market dynamics."
    },
    {
      question: "Do you work with first-time homebuyers?",
      answer: "Absolutely! I specialize in helping first-time buyers navigate Vancouver's market. I'll guide you through pre-approval, explain the buying process, help you understand all costs involved, and ensure you're making an informed decision. Many of my clients are first-time buyers who've successfully purchased their dream homes."
    },
    {
      question: "What areas of Vancouver do you serve?",
      answer: "I serve all of Greater Vancouver including Vancouver proper, Burnaby, Richmond, North Vancouver, West Vancouver, Coquitlam, Surrey, and surrounding areas. My deep local knowledge helps clients find the perfect neighborhood that matches their lifestyle and investment goals."
    }
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
          <a href="/testimonials" className="text-white hover:text-gold transition-colors duration-300">Testimonials</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-emerald-50 to-purple-50 opacity-70"></div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-navy mb-6 font-serif">
              Let's Connect & Discuss Your Goals
            </h1>
            <p className="text-xl text-navy/80 max-w-3xl mx-auto leading-relaxed">
              Ready to make your next real estate move? I'm here to help with personalized guidance, 
              market insights, and proven strategies to achieve your property goals in Vancouver.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.action}
                target={method.action.startsWith('http') ? '_blank' : '_self'}
                rel={method.action.startsWith('http') ? 'noopener noreferrer' : ''}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="block"
              >
                <Card className="h-full bg-white/80 backdrop-blur-sm border border-emerald-200 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer">
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg`}>
                      <method.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-navy mb-2">{method.title}</h3>
                    <p className="text-emerald-600 font-semibold mb-3">{method.value}</p>
                    <p className="text-navy/70 text-sm leading-relaxed">{method.description}</p>
                  </CardContent>
                </Card>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Map Section */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInLeft}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-emerald-200">
                <h2 className="text-3xl font-bold text-navy mb-8 font-serif">Get In Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy mb-1">Phone & Text</h3>
                      <p className="text-navy/80">+1 (778) 598-3175</p>
                      <p className="text-sm text-navy/60">Available 7 days a week</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy mb-1">Email</h3>
                      <p className="text-navy/80">tusharsharma25214@gmail.com</p>
                      <p className="text-sm text-navy/60">Response within 2 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy mb-1">Service Area</h3>
                      <p className="text-navy/80">Greater Vancouver Area</p>
                      <p className="text-sm text-navy/60">Vancouver, Burnaby, Richmond & surrounding areas</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy mb-1">Business Hours</h3>
                      <p className="text-navy/80">Monday - Friday: 8 AM - 8 PM</p>
                      <p className="text-navy/80">Saturday: 9 AM - 6 PM</p>
                      <p className="text-navy/80">Sunday: 10 AM - 4 PM</p>
                      <p className="text-sm text-navy/60">Pacific Standard Time</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Google Maps Embed */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInRight}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-emerald-200 h-full">
                <h2 className="text-3xl font-bold text-navy mb-8 font-serif">Service Area</h2>
                
                {/* Google Maps Embed - Replace with actual coordinates */}
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83326.84816443756!2d-123.27256568359375!3d49.26606506825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673f143a94fb3%3A0xbb9196ea9b81f38b!2sVancouver%2C%20BC%2C%20Canada!5e0!3m2!1sen!2sus!4v1703123456789!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Vancouver Service Area Map"
                  ></iframe>
                </div>
                
                <p className="text-navy/70 text-sm mt-4 text-center">
                  Serving all of Greater Vancouver with local expertise and market knowledge
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-navy/5 to-emerald-600/5"></div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6 font-serif">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-navy/80 max-w-2xl mx-auto">
              Quick answers to common questions about working with me and the Vancouver real estate market.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-emerald-200">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border border-emerald-100 rounded-xl px-6">
                    <AccordionTrigger className="text-left font-semibold text-navy hover:text-emerald-600 transition-colors duration-300">
                      <div className="flex items-center gap-3">
                        <HelpCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                        {faq.question}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-navy/80 leading-relaxed pt-2 pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50"></div>
        
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-emerald-200">
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6 font-serif">
                Ready to Take the Next Step?
              </h2>
              <p className="text-xl text-navy/80 mb-10 max-w-2xl mx-auto">
                Whether you're buying, selling, or investing, I'm here to guide you through every step 
                of your Vancouver real estate journey. Let's start with a free consultation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <motion.a
                  href="/#calendly-section"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-900 to-emerald-600 hover:from-blue-800 hover:to-emerald-500 text-white font-bold px-10 py-4 text-lg rounded-xl shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-emerald-400/50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Calendar className="w-5 h-5" />
                  Book Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
                
                <motion.a
                  href="tel:+17785983175"
                  className="inline-flex items-center gap-3 bg-white text-navy border-2 border-emerald-600 hover:bg-emerald-50 font-bold px-10 py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Phone className="w-5 h-5" />
                  Call Now: (778) 598-3175
                </motion.a>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <span className="bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold border border-emerald-200">
                  ✅ No Obligation
                </span>
                <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold border border-blue-200">
                  🏆 500+ Happy Clients
                </span>
                <span className="bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold border border-purple-200">
                  ⚡ 2-Hour Response Time
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

export default Contact;
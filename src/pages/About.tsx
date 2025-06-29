import { motion } from "framer-motion";
import { CheckCircle, Award, MapPin, Users, TrendingUp, Phone, Mail, Calendar } from "lucide-react";
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
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const About = () => {
  const coreValues = [
    {
      icon: CheckCircle,
      title: "Trust & Transparency",
      description: "Every transaction is built on honest communication and clear expectations. No hidden fees, no surprises.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      title: "Client-First Commitment",
      description: "Your goals become my mission. I'm available 7 days a week to ensure your real estate journey is smooth.",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: TrendingUp,
      title: "Market Expertise",
      description: "Deep Vancouver market knowledge with data-driven insights to help you make informed decisions.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "500+ successful transactions with an average of 15% above asking price for sellers in 2024.",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const achievements = [
    { number: "500+", label: "Families Helped", icon: "🏠" },
    { number: "15%", label: "Above Asking Price", icon: "📈" },
    { number: "5.0", label: "Google Rating", icon: "⭐" },
    { number: "7", label: "Years Experience", icon: "🏆" }
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
          <a href="/testimonials" className="text-white hover:text-gold transition-colors duration-300">Testimonials</a>
          <a href="/contact" className="text-white hover:text-gold transition-colors duration-300">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-emerald-50 opacity-70"></div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-navy mb-6 font-serif">
              Meet Your Vancouver Real Estate Expert
            </h1>
            <p className="text-xl text-navy/80 max-w-3xl mx-auto leading-relaxed">
              Passionate about helping families find their dream homes and investors build wealth through strategic real estate decisions in Vancouver's dynamic market.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Photo & Signature */}
            <motion.div
              className="text-center lg:text-left"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInLeft}
            >
              <div className="relative inline-block mb-8">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Tushar Sharma - Vancouver Real Estate Expert"
                  className="w-80 h-80 rounded-3xl shadow-2xl object-cover border-4 border-white"
                />
                <div className="absolute -bottom-4 -right-4 bg-emerald-600 text-white p-4 rounded-2xl shadow-xl">
                  <MapPin className="w-8 h-8" />
                </div>
              </div>
              
              {/* Signature */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-emerald-200">
                <div className="text-3xl font-serif text-navy mb-2" style={{ fontFamily: 'Brush Script MT, cursive' }}>
                  Tushar Sharma
                </div>
                <p className="text-emerald-600 font-semibold">Licensed Real Estate Professional</p>
                <p className="text-navy/70 text-sm mt-2">PREC License #123456 | Vancouver Real Estate Board</p>
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInRight}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-emerald-200">
                <h2 className="text-3xl font-bold text-navy mb-6 font-serif">My Story</h2>
                <div className="space-y-4 text-navy/80 leading-relaxed">
                  <p>
                    Welcome! I'm Tushar Sharma, and I've been helping Vancouver families achieve their real estate dreams for over 7 years. What started as a passion for architecture and community development has evolved into a thriving practice focused on delivering exceptional results for my clients.
                  </p>
                  <p>
                    Born and raised in Vancouver, I have an intimate understanding of our neighborhoods, from the bustling downtown core to the family-friendly suburbs of Richmond and Burnaby. This local expertise, combined with cutting-edge market analysis, ensures my clients make informed decisions in today's competitive market.
                  </p>
                  <p>
                    Whether you're a first-time buyer navigating the market or a seasoned investor looking for your next opportunity, I'm committed to providing personalized service that exceeds expectations. My approach is simple: listen first, strategize together, and execute flawlessly.
                  </p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-xl border border-emerald-200 hover:shadow-2xl transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -5 }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-3xl mb-2">{achievement.icon}</div>
                    <div className="text-3xl font-bold text-emerald-600 mb-1">{achievement.number}</div>
                    <div className="text-navy/70 font-medium text-sm">{achievement.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-navy/5 to-emerald-600/5"></div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6 font-serif">
              My Core Values
            </h2>
            <p className="text-xl text-navy/80 max-w-3xl mx-auto">
              These principles guide every interaction and transaction, ensuring you receive the highest level of service.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {coreValues.map((value, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full bg-white/80 backdrop-blur-sm border border-emerald-200 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-navy mb-4">{value.title}</h3>
                    <p className="text-navy/80 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50"></div>
        
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6 font-serif">
              Ready to Take the Next Step?
            </h2>
            <p className="text-xl text-navy/80 mb-10 max-w-2xl mx-auto">
              Let's discuss your real estate goals and create a personalized strategy to achieve them. Your dream home or investment opportunity is just a conversation away.
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
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default About;
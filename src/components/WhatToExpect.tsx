import { CheckCircle, Calendar, MessageSquare, Target, TrendingUp, Home } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

// Premium animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const ctaVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const WhatToExpect = () => {
  const steps = [
    {
      icon: Calendar,
      title: "1. Book Your Session",
      description: "Choose a convenient time slot that works for your schedule. The booking process takes less than 2 minutes and you'll get instant confirmation.",
      timeline: "Instant confirmation",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: MessageSquare,
      title: "2. Pre-Call Preparation",
      description: "You'll receive a brief questionnaire to help me understand your real estate goals and prepare personalized market insights.",
      timeline: "24 hours before",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Target,
      title: "3. Strategic Consultation",
      description: "We'll dive deep into your property needs, market conditions, and financing options. I'll share actionable strategies tailored to your situation.",
      timeline: "30-60 minutes",
      color: "from-pink-500 to-red-500"
    },
    {
      icon: TrendingUp,
      title: "4. Follow-Up & Action Plan",
      description: "Receive a personalized action plan with next steps, market comparables, and recommended properties or strategies to start implementing immediately.",
      timeline: "Within 24 hours",
      color: "from-red-500 to-orange-500"
    }
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background with Real Estate Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?q=80&w=2000&auto=format&fit=crop" 
          alt="Modern Vancouver Architecture" 
          className="w-full h-full object-cover opacity-5"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 opacity-95"></div>
      </div>
      
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute top-10 right-10 w-28 h-28 bg-green-200 rounded-full opacity-30"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute bottom-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-30"
        animate={{ 
          y: [0, -20, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10 px-4">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            🎯 What to Expect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here's exactly what happens after you book your real estate consultation session with me
          </p>
        </motion.div>
        
        {/* Steps Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="relative bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 h-full">
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <motion.div 
                    className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-lg`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <step.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed flex-grow">
                    {step.description}
                  </p>
                  
                  <motion.div 
                    className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-xs font-bold border-2 border-green-200 hover:bg-green-100 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CheckCircle className="w-4 h-4" />
                    {step.timeline}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Call to Action Section */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-blue-50 via-purple-50 to-green-50 rounded-3xl p-10 text-center shadow-2xl hover:shadow-3xl transition-all duration-500"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={ctaVariants}
          whileHover={{ scale: 1.02 }}
        >
          <motion.div 
            className="flex justify-center mb-6"
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <Home className="w-16 h-16 text-blue-500" />
          </motion.div>
          
          <h3 className="text-3xl font-bold text-foreground mb-4">
            🏡 Ready to Make Your Move?
          </h3>
          
          <p className="text-muted-foreground mb-8 max-w-3xl mx-auto text-lg">
            Join hundreds of satisfied Vancouver families who have found their dream homes and successful investors 
            who have built wealth through strategic real estate decisions. Your journey starts with one conversation.
          </p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-6"
            variants={containerVariants}
          >
            {[
              { icon: "✅", text: "No obligation consultation" },
              { icon: "🎯", text: "Personalized market insights" },
              { icon: "🔒", text: "100% confidential discussion" }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 text-sm text-green-600 font-bold bg-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                variants={cardVariants}
                whileHover={{ y: -2 }}
              >
                <CheckCircle className="w-5 h-5" />
                <span>{benefit.icon} {benefit.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatToExpect;
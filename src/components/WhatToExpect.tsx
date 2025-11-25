import { Calendar, Target, TrendingUp, Zap, Sparkles, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const WhatToExpect = () => {
  const steps = [
    {
      icon: Calendar,
      title: "Book Session",
      description: "Choose your perfect time slot. Instant confirmation in under 2 minutes.",
      gradient: "from-purple-500 via-pink-500 to-red-500",
      delay: 0.1
    },
    {
      icon: Sparkles,
      title: "Preparation",
      description: "Receive personalized questionnaire to maximize our consultation value.",
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      delay: 0.2
    },
    {
      icon: Target,
      title: "Consultation",
      description: "Deep dive into your goals with actionable market strategies tailored for you.",
      gradient: "from-pink-500 via-purple-500 to-indigo-500",
      delay: 0.3
    },
    {
      icon: TrendingUp,
      title: "Action Plan",
      description: "Get your custom roadmap with market data and next steps within 24 hours.",
      gradient: "from-emerald-500 via-green-500 to-lime-500",
      delay: 0.4
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-background via-purple-950/20 to-background">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ rotate: -360, scale: [1, 1.3, 1] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10 px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-flex items-center gap-2 glass-premium px-6 py-3 rounded-full mb-6"
          >
            <Zap className="w-5 h-5 text-yellow-400" />
            <span className="text-white font-semibold">The Process</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold gradient-text-rainbow mb-6">
            What to Expect
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Your journey to real estate success in four simple steps
          </p>
        </motion.div>
        
        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: step.delay }}
            >
              <Card className="luxury-card glass-premium border-white/10 h-full hover:border-purple-500/50">
                <CardContent className="p-8 text-center h-full flex flex-col">
                  {/* Icon */}
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring" }}
                    className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center shadow-2xl`}
                  >
                    <step.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  {/* Number Badge */}
                  <div className="mb-4">
                    <span className={`inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br ${step.gradient} rounded-full text-white font-bold text-lg shadow-lg`}>
                      {index + 1}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-white/70 leading-relaxed flex-grow">
                    {step.description}
                  </p>
                  
                  {/* Checkmark */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: step.delay + 0.3, type: "spring" }}
                    className="mt-6"
                  >
                    <CheckCircle2 className="w-6 h-6 text-green-400 mx-auto" />
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center glass-premium rounded-3xl p-12"
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center"
          >
            <Sparkles className="w-10 h-10 text-white" />
          </motion.div>
          
          <h3 className="text-4xl font-bold gradient-text-rainbow mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">
            Join hundreds of satisfied Vancouver families who found their dream homes
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            {['No Obligation', 'Expert Insights', '100% Confidential'].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="flex items-center gap-2 glass px-6 py-3 rounded-full text-white font-semibold"
              >
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatToExpect;

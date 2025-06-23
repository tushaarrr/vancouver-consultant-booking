
import { CheckCircle, Calendar, MessageSquare, Target, TrendingUp, Home } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
        />
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 opacity-95"></div>
      </div>
      
      {/* Animated Background */}
      <div className="absolute top-10 right-10 w-28 h-28 bg-green-200 rounded-full animate-pulse opacity-30"></div>
      <div className="absolute bottom-10 left-10 w-20 h-20 bg-blue-200 rounded-full animate-bounce opacity-30"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            🎯 What to Expect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here's exactly what happens after you book your real estate consultation session with me
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="relative bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-110 animate-scale-in" style={{animationDelay: `${index * 200}ms`}}>
              <CardContent className="p-8 text-center">
                <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-lg animate-pulse`}>
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-lg font-bold text-foreground mb-4">
                  {step.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {step.description}
                </p>
                
                <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-xs font-bold border-2 border-green-200 hover:bg-green-100 transition-colors duration-300">
                  <CheckCircle className="w-4 h-4" />
                  {step.timeline}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-blue-50 via-purple-50 to-green-50 rounded-3xl p-10 text-center shadow-2xl hover:shadow-3xl transition-all duration-500 animate-fade-in animation-delay-1000">
          <div className="flex justify-center mb-6">
            <Home className="w-16 h-16 text-blue-500 animate-bounce" />
          </div>
          <h3 className="text-3xl font-bold text-foreground mb-4">
            🏡 Ready to Make Your Move?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-3xl mx-auto text-lg">
            Join hundreds of satisfied Vancouver families who have found their dream homes and successful investors 
            who have built wealth through strategic real estate decisions. Your journey starts with one conversation.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 text-sm text-green-600 font-bold bg-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CheckCircle className="w-5 h-5" />
              ✅ No obligation consultation
            </div>
            <div className="flex items-center gap-2 text-sm text-green-600 font-bold bg-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CheckCircle className="w-5 h-5" />
              🎯 Personalized market insights
            </div>
            <div className="flex items-center gap-2 text-sm text-green-600 font-bold bg-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CheckCircle className="w-5 h-5" />
              🔒 100% confidential discussion
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatToExpect;

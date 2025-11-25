import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, User, Sparkles, CheckCircle, Send } from "lucide-react";
import { motion } from 'framer-motion';
import { useToast } from "@/hooks/use-toast";
import { useForm } from "@formspree/react";

const LeadCaptureForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  
  const [state, handleFormspree] = useForm("mnnvgqgd");

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.interest) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { supabase } = await import("@/integrations/supabase/client");
      
      const { error: supabaseError } = await supabase
        .from('leads')
        .insert([
          {
            full_name: formData.name,
            email: formData.email,
            phone: formData.phone,
            interest: formData.interest,
          }
        ]);

      if (supabaseError) {
        console.error('Database error:', supabaseError);
      }

      await handleFormspree(e);
      
      setIsSubmitted(true);
      toast({
        title: "Success!",
        description: "We'll contact you shortly to discuss your real estate goals.",
      });
      
      setFormData({ name: '', email: '', phone: '', interest: '' });
      
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Submission error:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-premium rounded-3xl p-12 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.6 }}
          className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center"
        >
          <CheckCircle className="w-12 h-12 text-white" />
        </motion.div>
        <h3 className="text-3xl font-bold gradient-text-rainbow mb-4">Thank You!</h3>
        <p className="text-white/90 text-lg">We'll be in touch soon to discuss your real estate journey.</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-premium rounded-3xl p-8 md:p-12 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500"
    >
      {/* Header */}
      <div className="text-center mb-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.2 }}
          className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-4"
        >
          <Sparkles className="w-4 h-4 text-yellow-400" />
          <span className="text-white font-semibold text-sm">Free Consultation</span>
        </motion.div>
        
        <h2 className="text-4xl md:text-5xl font-bold gradient-text-rainbow mb-3">
          Start Your Journey
        </h2>
        <p className="text-white/80 text-lg">
          Connect with Vancouver's premier real estate expert
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div className="space-y-2">
          <Label htmlFor="name" className="text-white font-semibold flex items-center gap-2">
            <User className="w-4 h-4" />
            Full Name
          </Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            placeholder="John Doe"
            className="glass border-white/20 text-white placeholder:text-white/50 focus:border-purple-500 h-14 rounded-xl text-lg"
            required
          />
        </div>

        {/* Email Field */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-white font-semibold flex items-center gap-2">
            <Mail className="w-4 h-4" />
            Email Address
          </Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            placeholder="john@example.com"
            className="glass border-white/20 text-white placeholder:text-white/50 focus:border-purple-500 h-14 rounded-xl text-lg"
            required
          />
        </div>

        {/* Phone Field */}
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-white font-semibold flex items-center gap-2">
            <Phone className="w-4 h-4" />
            Phone Number
          </Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            placeholder="+1 (778) 555-0123"
            className="glass border-white/20 text-white placeholder:text-white/50 focus:border-purple-500 h-14 rounded-xl text-lg"
            required
          />
        </div>

        {/* Interest Field */}
        <div className="space-y-2">
          <Label htmlFor="interest" className="text-white font-semibold">
            I'm interested in
          </Label>
          <Select value={formData.interest} onValueChange={(value) => handleInputChange('interest', value)}>
            <SelectTrigger className="glass border-white/20 text-white h-14 rounded-xl text-lg">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent className="glass-dark border-white/20">
              <SelectItem value="buying">Buying a Property</SelectItem>
              <SelectItem value="selling">Selling a Property</SelectItem>
              <SelectItem value="investing">Real Estate Investment</SelectItem>
              <SelectItem value="consultation">General Consultation</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl font-bold text-lg text-white shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
              />
              Sending...
            </span>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Get Started
            </>
          )}
        </motion.button>
      </form>

      {/* Trust Elements */}
      <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-4 text-sm">
        {['🔒 100% Secure', '⚡ Instant Response', '🎯 No Obligation'].map((item, index) => (
          <span key={index} className="text-white/70 font-medium">
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default LeadCaptureForm;

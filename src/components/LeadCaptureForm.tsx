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
import { Phone, Mail, User, Home, CheckCircle } from "lucide-react";
import { motion } from 'framer-motion';
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "@formspree/react";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8 } 
  },
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.8 } 
  },
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  
  // Replace 'YOUR_FORM_ID' with your actual Formspree form ID
  const [state, handleFormspree] = useForm("mnnvgqgd");

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
      // Save to Supabase first
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
        console.error('Error saving to Supabase:', supabaseError);
        toast({
          title: "Database Error",
          description: "There was an error saving your information. Please try again.",
          variant: "destructive",
        });
        return;
      }

      // Send email via Formspree
      const formspreeData = new FormData();
      formspreeData.append('name', formData.name);
      formspreeData.append('email', formData.email);
      formspreeData.append('phone', formData.phone);
      formspreeData.append('interest', formData.interest);
      formspreeData.append('message', `New lead: ${formData.name} is interested in ${formData.interest}`);

      await handleFormspree(formspreeData);

      if (state.succeeded) {
        setIsSubmitted(true);
        toast({
          title: "Success!",
          description: "Your consultation request has been submitted successfully.",
        });
      }
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Submission Error",
        description: "There was an error submitting your form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted || state.succeeded) {
    return (
      <motion.div 
        className="flex flex-col items-center justify-center py-12"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          <CheckCircle className="w-16 h-16 text-primary mb-4" />
        </motion.div>
        <div className="text-center text-foreground font-serif text-2xl font-semibold mb-2">Thank you!</div>
        <div className="text-center text-muted-foreground text-lg">I'll get back to you within 2 hours.</div>
      </motion.div>
    );
  }

  return (
    <motion.form 
      onSubmit={handleSubmit} 
      className="space-y-7"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="relative" variants={fadeInUp}>
        <Label htmlFor="name" className="text-foreground text-sm font-medium flex gap-2 mb-2">
          <User className="w-4 h-4 text-primary" /> Full Name *
        </Label>
        <Input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
          required
          placeholder="Enter your full name"
          className="h-11 border-2 border-border focus:border-ring bg-background placeholder:text-muted-foreground text-foreground rounded-lg transition-all duration-200 hover:border-muted-foreground"
        />
      </motion.div>

      <motion.div className="relative" variants={fadeInUp}>
        <Label htmlFor="email" className="text-foreground text-sm font-medium flex gap-2 mb-2">
          <Mail className="w-4 h-4 text-primary" /> Email Address *
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          required
          placeholder="you@example.com"
          className="h-11 border-2 border-border focus:border-ring bg-background placeholder:text-muted-foreground text-foreground rounded-lg transition-all duration-200 hover:border-muted-foreground"
        />
      </motion.div>

      <motion.div className="relative" variants={fadeInUp}>
        <Label htmlFor="phone" className="text-foreground text-sm font-medium flex gap-2 mb-2">
          <Phone className="w-4 h-4 text-primary" /> Phone Number *
        </Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => handleInputChange('phone', e.target.value)}
          required
          placeholder="+1 (778) 555-1234"
          className="h-11 border-2 border-border focus:border-ring bg-background placeholder:text-muted-foreground text-foreground rounded-lg transition-all duration-200 hover:border-muted-foreground"
        />
      </motion.div>

      <motion.div className="relative" variants={fadeInUp}>
        <Label htmlFor="interest" className="text-foreground text-sm font-medium mb-2 block">
          What are you looking for? *
        </Label>
        <Select value={formData.interest} onValueChange={(value) => handleInputChange('interest', value)} required>
          <SelectTrigger className="h-11 border-2 border-border focus:border-ring bg-background placeholder:text-muted-foreground text-foreground rounded-lg transition-all duration-200 hover:border-muted-foreground">
            <SelectValue placeholder="Select your main interest" />
          </SelectTrigger>
          <SelectContent className="bg-card border-2 border-border">
            <SelectItem value="buy">🏠 Buy a Property</SelectItem>
            <SelectItem value="sell">💰 Sell My Property</SelectItem>
            <SelectItem value="investment">📈 Investment Property</SelectItem>
            <SelectItem value="consultation">🎯 Market Consultation</SelectItem>
            <SelectItem value="general">❓ General Inquiry</SelectItem>
          </SelectContent>
        </Select>
      </motion.div>

      <motion.button
        type="submit"
        disabled={isSubmitting || state.submitting}
        className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base rounded-lg shadow-md hover:shadow-lg flex items-center justify-center gap-2 transition-all duration-200 mt-2 disabled:opacity-50 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-ring"
        variants={fadeInUp}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {(isSubmitting || state.submitting) ? (
          <span className="flex items-center gap-2">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            >
              <Home className="w-5 h-5" />
            </motion.div>
            Submitting...
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <Home className="w-5 h-5" />
            Get My Free Consultation
          </span>
        )}
      </motion.button>

      <motion.p 
        className="text-xs text-center text-muted-foreground mt-2"
        variants={fadeInUp}
      >
        🔒 Your info is safe and used only for this consultation.
      </motion.p>
    </motion.form>
  );
};

const LeadCaptureForm = () => {
  return (
    <section id="lead-form" className="w-full flex justify-center items-center">
      <motion.div
        className="w-full max-w-xl bg-card border-2 border-border rounded-2xl shadow-lg p-10 md:p-12 hover:shadow-xl transition-all duration-300"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={zoomIn}
        whileHover={{ scale: 1.01 }}
      >
        <motion.div 
          className="text-center mb-8"
          variants={fadeInUp}
        >
          <h2 className="font-serif text-3xl md:text-4xl text-foreground font-bold mb-2">
            Request a Private Consultation
          </h2>
          <p className="text-muted-foreground text-base">
            Fill out the form and I'll personally reach out within 2 hours to discuss your real estate goals.
          </p>
        </motion.div>
        <ContactForm />
      </motion.div>
    </section>
  );
};

export default LeadCaptureForm;
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
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Phone, Mail, User, Home, CheckCircle } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};
const zoomIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
};

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mnnvgqgd");

  if (state.succeeded) {
    return (
      <div className="flex flex-col items-center justify-center py-12 animate-fade-in-up">
        <CheckCircle className="w-16 h-16 text-gold mb-4 animate-bounce" />
        <div className="text-center text-navy font-serif text-2xl font-semibold mb-2">Thank you!</div>
        <div className="text-center text-navy/80 text-lg">I'll get back to you within 2 hours.</div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-7">
      <div className="relative">
        <Label htmlFor="name" className="text-navy text-sm font-medium flex gap-2">
          <User className="w-5 h-5 text-gold" /> Full Name *
        </Label>
        <Input
          id="name"
          type="text"
          name="name"
          required
          placeholder="Enter your full name"
          className="h-12 border-2 border-gold/30 focus:border-gold bg-white/80 backdrop-blur placeholder:text-navy/40 text-navy rounded-lg mt-1"
        />
      </div>

      <div className="relative">
        <Label htmlFor="email" className="text-navy text-sm font-medium flex gap-2">
          <Mail className="w-5 h-5 text-gold" /> Email Address *
        </Label>
        <Input
          id="email"
          type="email"
          name="email"
          required
          placeholder="you@example.com"
          className="h-12 border-2 border-gold/30 focus:border-gold bg-white/80 backdrop-blur placeholder:text-navy/40 text-navy rounded-lg mt-1"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div className="relative">
        <Label htmlFor="phone" className="text-navy text-sm font-medium flex gap-2">
          <Phone className="w-5 h-5 text-gold" /> Phone Number *
        </Label>
        <Input
          id="phone"
          type="tel"
          name="phone"
          required
          placeholder="+1 (778) 555-1234"
          className="h-12 border-2 border-gold/30 focus:border-gold bg-white/80 backdrop-blur placeholder:text-navy/40 text-navy rounded-lg mt-1"
        />
      </div>

      <div className="relative">
        <Label htmlFor="interest" className="text-navy text-sm font-medium">
          What are you looking for? *
        </Label>
        <Select name="interest" required>
          <SelectTrigger className="h-12 border-2 border-gold/30 focus:border-gold bg-white/80 backdrop-blur placeholder:text-navy/40 text-navy rounded-lg mt-1">
            <SelectValue placeholder="Select your main interest" />
          </SelectTrigger>
          <SelectContent className="bg-white border-2 border-gold/30">
            <SelectItem value="buy">🏠 Buy a Property</SelectItem>
            <SelectItem value="sell">💰 Sell My Property</SelectItem>
            <SelectItem value="investment">📈 Investment Property</SelectItem>
            <SelectItem value="consultation">🎯 Market Consultation</SelectItem>
            <SelectItem value="general">❓ General Inquiry</SelectItem>
          </SelectContent>
        </Select>
        <ValidationError prefix="Interest" field="interest" errors={state.errors} />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full h-14 bg-gradient-to-r from-gold to-gold/80 hover:from-gold/90 hover:to-gold/60 text-navy font-bold text-lg rounded-xl shadow-lg hover:shadow-gold/40 flex items-center justify-center gap-2 transition-all duration-300 mt-2"
      >
        {state.submitting ? (
          <span className="flex items-center gap-2"><Home className="w-5 h-5 animate-spin" />Submitting...</span>
        ) : (
          <span className="flex items-center gap-2"><Home className="w-5 h-5" />Get My Free Consultation</span>
        )}
      </button>

      <p className="text-xs text-center text-navy/60 mt-2">
        🔒 Your info is safe and used only for this consultation.
      </p>
    </form>
  );
};

const LeadCaptureForm = () => {
  return (
    <section id="lead-form" className="w-full flex justify-center items-center">
      <motion.div
        className="w-full max-w-xl bg-white/70 border border-gold rounded-3xl shadow-2xl p-10 md:p-14 backdrop-blur-xl animate-fade-in-up"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={zoomIn}
      >
        <div className="text-center mb-8">
          <h2 className="font-serif text-3xl md:text-4xl text-navy font-bold mb-2">Request a Private Consultation</h2>
          <p className="text-navy/80 text-lg">Fill out the form and I'll personally reach out within 2 hours to discuss your real estate goals.</p>
        </div>
        <ContactForm />
      </motion.div>
    </section>
  );
};

export default LeadCaptureForm;

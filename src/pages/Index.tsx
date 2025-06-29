import Hero from "@/components/Hero";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import CalendlyWidget from "@/components/CalendlyWidget";
import SocialMediaSection from "@/components/SocialMediaSection";
import WhatToExpected from "@/components/WhatToExpect";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { motion } from 'framer-motion';

// Premium animation variants for luxury real estate feel
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] // Custom cubic-bezier for smooth, premium feel
    } 
  },
};

const slideLeft = {
  hidden: { opacity: 0, x: 80 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.9,
      ease: [0.25, 0.46, 0.45, 0.94]
    } 
  },
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1, 
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
      delayChildren: 0.1,
    },
  },
};

const Index = () => {
  return (
    <div className="min-h-screen bg-lightbg font-sans">
      {/* Hero Section with Video Background */}
      <Hero />

      {/* Main Content */}
      <main className="w-full max-w-[1600px] mx-auto px-2 sm:px-6 lg:px-12">
        {/* Lead Capture Form Section */}
        <motion.section
          id="lead-form"
          className="py-20 flex flex-col md:flex-row gap-12 items-center justify-center scroll-mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <div className="w-full md:w-1/2 flex flex-col gap-8">
            <motion.div variants={fadeInUp}>
              <LeadCaptureForm />
            </motion.div>
            
            {/* Trust Badges with Enhanced Animations */}
            <motion.div
              className="flex flex-wrap gap-4 justify-center md:justify-start mt-6"
              variants={slideLeft}
            >
              {[
                { icon: "⭐", text: "500+ Families Helped" },
                { icon: "✅", text: "Top Rated Realtor" },
                { icon: "🏆", text: "Google 5.0 Rating" }
              ].map((badge, index) => (
                <motion.span
                  key={index}
                  className="flex items-center gap-2 bg-white/80 border border-emerald-200 text-navy px-5 py-2 rounded-full shadow-lg font-semibold text-sm hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-emerald-600">{badge.icon}</span>
                  {badge.text}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Calendly Integration Section */}
        <motion.section
          id="calendly-section"
          className="py-20 scroll-mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={zoomIn}
        >
          <motion.div 
            className="bg-white/80 rounded-3xl shadow-2xl border border-emerald-200 max-w-3xl mx-auto p-10 backdrop-blur-md hover:shadow-3xl transition-all duration-500"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="text-center mb-10"
              variants={fadeInUp}
            >
              <h2 className="font-serif text-3xl md:text-5xl text-navy font-bold mb-4">
                Schedule Your Free Consultation
              </h2>
              <p className="text-lg text-navy/80 max-w-2xl mx-auto">
                Choose a time that works best for you. I'm here to help you achieve your real estate goals.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <CalendlyWidget />
            </motion.div>
          </motion.div>
        </motion.section>

        {/* What to Expect Section */}
        <motion.section
          id="what-to-expect"
          className="py-20 scroll-mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <WhatToExpected />
        </motion.section>

        {/* Social Media Section */}
        <motion.section
          className="py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideLeft}
        >
          <SocialMediaSection />
        </motion.section>
      </main>

      {/* Footer */}
      <motion.footer
        id="footer"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={zoomIn}
      >
        <Footer />
      </motion.footer>

      {/* Floating WhatsApp with Enhanced Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 100 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 3, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <FloatingWhatsApp />
      </motion.div>
    </div>
  );
};

// Enhanced smooth scrolling with premium easing
if (typeof window !== 'undefined') {
  document.documentElement.style.scrollBehavior = 'smooth';
}

export default Index;
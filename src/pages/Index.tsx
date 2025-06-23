import Hero from "@/components/Hero";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import CalendlyWidget from "@/components/CalendlyWidget";
import SocialMediaSection from "@/components/SocialMediaSection";
import WhatToExpect from "@/components/WhatToExpect";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};
const slideLeft = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};
const zoomIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
};

const Index = () => {
  return (
    <div className="min-h-screen bg-lightbg font-sans">
      {/* Hero Section */}
      <Hero />

      {/* Main Content */}
      <main className="w-full max-w-[1600px] mx-auto px-2 sm:px-6 lg:px-12">
        {/* Lead Capture Form */}
        <motion.section
          id="lead-form"
          className="py-20 flex flex-col md:flex-row gap-12 items-center justify-center animate-fade-in scroll-mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className="w-full md:w-1/2 flex flex-col gap-8">
            <LeadCaptureForm />
            {/* Trust Badges */}
            <motion.div
              className="flex flex-wrap gap-4 justify-center md:justify-start mt-6"
              variants={slideLeft}
            >
              <span className="flex items-center gap-2 bg-white/80 border border-gold text-navy px-5 py-2 rounded-full shadow font-semibold text-sm">
                <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.77l-4.77 2.51.91-5.32-3.87-3.77 5.34-.78z"/></svg>
                500+ Families Helped
              </span>
              <span className="flex items-center gap-2 bg-white/80 border border-gold text-navy px-5 py-2 rounded-full shadow font-semibold text-sm">
                <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2" fill="none"/><path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
                Top Rated Realtor
              </span>
              <span className="flex items-center gap-2 bg-white/80 border border-gold text-navy px-5 py-2 rounded-full shadow font-semibold text-sm">
                <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 12H9v-2h2v2zm0-4H9V6h2v4z"/></svg>
                Google 5.0 Rating
              </span>
            </motion.div>
          </div>
        </motion.section>

        {/* Calendly Integration */}
        <motion.section
          id="calendly-section"
          className="py-20 animate-fade-in animation-delay-500 scroll-mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={zoomIn}
        >
          <div className="bg-white/80 rounded-3xl shadow-xl border border-gold max-w-3xl mx-auto p-10 backdrop-blur-md">
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl md:text-5xl text-navy font-bold mb-4">Schedule Your Free Consultation</h2>
              <p className="text-lg text-navy/80 max-w-2xl mx-auto">Choose a time that works best for you. I'm here to help you achieve your real estate goals.</p>
            </div>
            <CalendlyWidget />
          </div>
        </motion.section>

        {/* What to Expect */}
        <motion.section
          id="what-to-expect"
          className="py-20 animate-fade-in animation-delay-1000 scroll-mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <WhatToExpect />
        </motion.section>

        {/* Social Media Section */}
        <motion.section
          className="py-20 animate-fade-in animation-delay-1500"
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

      {/* Floating WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
};

// Add smooth scrolling globally
if (typeof window !== 'undefined') {
  document.documentElement.style.scrollBehavior = 'smooth';
}

export default Index;

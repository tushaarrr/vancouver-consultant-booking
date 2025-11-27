import Hero from "@/components/Hero";
import WhatToExpect from "@/components/WhatToExpect";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <WhatToExpect />
      <LeadCaptureForm />
      <Footer />
    </div>
  );
};

export default Index;

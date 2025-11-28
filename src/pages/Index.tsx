import Hero from "@/components/Hero";
import WhatToExpect from "@/components/WhatToExpect";
import FeaturedProperties from "@/components/FeaturedProperties";
import PropertyMap from "@/components/PropertyMap";
import LuxuryLifestyle from "@/components/LuxuryLifestyle";
import VideoTestimonials from "@/components/VideoTestimonials";
import MosaicGallery from "@/components/MosaicGallery";
import TrustBadges from "@/components/TrustBadges";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import LifestyleVideo from "@/components/LifestyleVideo";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Hero />
      <FeaturedProperties />
      <WhatToExpect />
      <PropertyMap />
      <LuxuryLifestyle />
      <MosaicGallery />
      <VideoTestimonials />
      <TrustBadges />
      <LeadCaptureForm />
      <LifestyleVideo />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;

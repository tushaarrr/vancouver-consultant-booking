import { Play } from "lucide-react";

const LifestyleVideo = () => {
  return (
    <section className="py-32 bg-navy text-navy-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative aspect-video overflow-hidden group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1400&h=800&fit=crop"
              alt="Vancouver Luxury Lifestyle"
              className="w-full h-full object-cover group-hover:brightness-110 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent flex flex-col items-center justify-center">
              <div className="w-24 h-24 border-2 border-champagne group-hover:border-gold group-hover:bg-gold/20 flex items-center justify-center mb-8 transition-all duration-300">
                <Play className="h-10 w-10 fill-current text-champagne group-hover:text-gold" />
              </div>
              <h3 className="text-3xl md:text-5xl font-serif tracking-wider text-champagne mb-4">
                EXPERIENCE LUXURY LIVING
              </h3>
              <p className="tracking-widest text-sm text-champagne/80">
                DISCOVER WHAT MAKES VANCOUVER EXTRAORDINARY
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifestyleVideo;

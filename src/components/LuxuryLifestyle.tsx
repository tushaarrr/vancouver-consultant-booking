import { Utensils, Mountain, GraduationCap, Palette } from "lucide-react";

const lifestyle = [
  {
    icon: Utensils,
    title: "Fine Dining",
    description: "World-class restaurants and Michelin-starred experiences at your doorstep"
  },
  {
    icon: Mountain,
    title: "Nature & Recreation",
    description: "Minutes from pristine beaches, mountains, and year-round outdoor activities"
  },
  {
    icon: GraduationCap,
    title: "Elite Education",
    description: "Access to Vancouver's most prestigious private and public schools"
  },
  {
    icon: Palette,
    title: "Arts & Culture",
    description: "Vibrant cultural scene with galleries, theaters, and exclusive events"
  }
];

const LuxuryLifestyle = () => {
  return (
    <section className="py-32 bg-champagne/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="w-16 h-px bg-gold mx-auto mb-8" />
          <h2 className="text-5xl md:text-6xl font-serif font-light tracking-wider mb-6">
            THE VANCOUVER LIFESTYLE
          </h2>
          <p className="text-muted-foreground tracking-widest text-sm max-w-2xl mx-auto">
            MORE THAN A HOME — A GATEWAY TO EXTRAORDINARY LIVING
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {lifestyle.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="text-center group cursor-pointer"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="mb-6 inline-flex items-center justify-center w-20 h-20 border border-foreground group-hover:border-gold group-hover:bg-gold/10 transition-all duration-500">
                  <Icon className="h-10 w-10 text-foreground group-hover:text-gold transition-colors duration-500" />
                </div>
                <h3 className="text-xl font-serif tracking-wider mb-4 group-hover:text-gold transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-8">
          <img
            src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop"
            alt="Vancouver Lifestyle"
            className="w-full h-80 object-cover hover:brightness-110 hover:scale-105 transition-all duration-700"
          />
          <img
            src="https://images.unsplash.com/photo-1519750783826-e2420f4d687f?w=600&h=400&fit=crop"
            alt="Vancouver Nature"
            className="w-full h-80 object-cover hover:brightness-110 hover:scale-105 transition-all duration-700"
          />
        </div>
      </div>
    </section>
  );
};

export default LuxuryLifestyle;

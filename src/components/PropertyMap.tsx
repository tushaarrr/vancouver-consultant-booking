import { useState } from "react";
import { MapPin } from "lucide-react";

const mapProperties = [
  { id: 1, name: "West Vancouver Estate", price: "$4.9M", lat: 35, left: 20 },
  { id: 2, name: "Yaletown Penthouse", price: "$3.7M", lat: 45, left: 50 },
  { id: 3, name: "Shaughnessy Manor", price: "$6.2M", lat: 60, left: 35 },
  { id: 4, name: "Coal Harbour View", price: "$5.5M", lat: 25, left: 65 },
];

const PropertyMap = () => {
  const [activePin, setActivePin] = useState<number | null>(null);

  return (
    <section className="py-32 bg-navy text-navy-foreground">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="w-16 h-px bg-gold mx-auto mb-8" />
          <h2 className="text-5xl md:text-6xl font-serif font-light tracking-wider mb-6">
            EXPLORE LOCATIONS
          </h2>
          <p className="text-champagne tracking-widest text-sm">
            DISCOVER PREMIUM PROPERTIES ACROSS VANCOUVER
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Map Background */}
          <div className="aspect-video bg-navy-foreground/5 border border-champagne/20 relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&h=675&fit=crop&auto=format"
              alt="Vancouver Map"
              className="w-full h-full object-cover opacity-40"
            />
            
            {/* Property Pins */}
            {mapProperties.map((property) => (
              <div
                key={property.id}
                className="absolute cursor-pointer group"
                style={{ top: `${property.lat}%`, left: `${property.left}%` }}
                onMouseEnter={() => setActivePin(property.id)}
                onMouseLeave={() => setActivePin(null)}
              >
                <MapPin
                  className="h-8 w-8 text-gold animate-bounce transition-all group-hover:scale-125"
                  fill="currentColor"
                />
                
                {activePin === property.id && (
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-background text-foreground p-4 min-w-[200px] shadow-2xl border border-gold/20 animate-fade-in">
                    <p className="font-serif text-lg mb-1">{property.name}</p>
                    <p className="text-gold text-sm tracking-widest">{property.price}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyMap;

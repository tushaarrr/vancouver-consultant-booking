import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const properties = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
    price: "$4,950,000",
    location: "West Vancouver",
    beds: 5,
    baths: 6,
    sqft: "5,200"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    price: "$3,750,000",
    location: "Yaletown",
    beds: 4,
    baths: 4,
    sqft: "3,800"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
    price: "$6,200,000",
    location: "Shaughnessy",
    beds: 6,
    baths: 7,
    sqft: "7,500"
  }
];

const FeaturedProperties = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="w-16 h-px bg-gold mx-auto mb-8" />
          <h2 className="text-5xl md:text-6xl font-serif font-light tracking-wider mb-6">
            FEATURED PROPERTIES
          </h2>
          <p className="text-muted-foreground tracking-widest text-sm">
            EXCLUSIVE LISTINGS IN VANCOUVER'S MOST PRESTIGIOUS NEIGHBORHOODS
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <div
              key={property.id}
              className="group relative overflow-hidden cursor-pointer"
              style={{
                animationDelay: `${index * 200}ms`
              }}
              onMouseEnter={() => setHoveredId(property.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={property.image}
                  alt={property.location}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  style={{
                    filter: hoveredId === property.id ? "grayscale(0%)" : "grayscale(100%)",
                  }}
                />
              </div>
              
              <div
                className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8"
              >
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-gold font-light tracking-[0.3em] text-sm mb-2">
                    {property.location}
                  </p>
                  <p className="text-3xl font-serif mb-4">{property.price}</p>
                  <div className="flex gap-6 text-sm tracking-widest mb-6 text-muted-foreground">
                    <span>{property.beds} BEDS</span>
                    <span>{property.baths} BATHS</span>
                    <span>{property.sqft} SQ FT</span>
                  </div>
                  <Button
                    variant="ghost"
                    className="text-gold hover:text-gold-foreground hover:bg-gold p-0 h-auto font-light tracking-widest group/btn"
                  >
                    VIEW PROPERTY
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;

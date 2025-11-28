import { Award, TrendingUp, Users, Star } from "lucide-react";

const badges = [
  { icon: Award, value: "25+", label: "YEARS EXPERIENCE" },
  { icon: TrendingUp, value: "$2B+", label: "PROPERTIES SOLD" },
  { icon: Users, value: "500+", label: "SATISFIED CLIENTS" },
  { icon: Star, value: "4.9", label: "AVERAGE RATING" }
];

const certifications = [
  "Vancouver Real Estate Board",
  "Luxury Home Marketing Specialist",
  "Certified Negotiation Expert",
  "International Property Specialist"
];

const TrustBadges = () => {
  return (
    <section className="py-32 bg-background border-y border-border">
      <div className="container mx-auto px-6">
        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div key={index} className="text-center group">
                <Icon className="h-10 w-10 mx-auto mb-4 text-gold transition-transform group-hover:scale-110 duration-300" />
                <p className="text-4xl font-serif mb-2 text-gold">{badge.value}</p>
                <p className="text-xs tracking-widest text-muted-foreground">{badge.label}</p>
              </div>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-px bg-gold mx-auto mb-8" />
            <h3 className="text-2xl font-serif tracking-wider">CREDENTIALS & MEMBERSHIPS</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="border border-border p-6 text-center hover:border-gold transition-colors duration-300 group"
              >
                <p className="tracking-widest text-sm group-hover:text-gold transition-colors">
                  {cert}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;

import { Award, Users, TrendingUp, Heart } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const stats = [
  { icon: Award, value: "25+", label: "Years Experience" },
  { icon: TrendingUp, value: "$2B+", label: "Properties Sold" },
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: Heart, value: "98%", label: "Client Satisfaction" }
];

const team = [
  {
    name: "James Anderson",
    role: "Founder & Lead Broker",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop",
    bio: "25+ years of luxury real estate expertise in Vancouver"
  },
  {
    name: "Sarah Chen",
    role: "Senior Property Specialist",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop",
    bio: "Expert in high-end residential properties"
  },
  {
    name: "Michael Rivera",
    role: "Investment Consultant",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop",
    bio: "Specializing in luxury investment properties"
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm transition-colors duration-300">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <a href="/" className="text-2xl font-serif tracking-wider group cursor-pointer">
            <span className="group-hover:text-gold transition-colors duration-300">VANCOUVER LUXURY</span>
          </a>
          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-12 text-sm tracking-widest">
              <a href="/about" className="text-gold">ABOUT</a>
              <a href="/testimonials" className="hover:text-gold transition-colors duration-300">TESTIMONIALS</a>
              <a href="/contact" className="hover:text-gold transition-colors duration-300">CONTACT</a>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-champagne/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <div className="w-16 h-px bg-gold mx-auto mb-8" />
            <h1 className="text-6xl md:text-8xl font-serif font-light tracking-wider mb-8">
              OUR STORY
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              For over 25 years, we've been helping discerning clients find their perfect luxury homes in Vancouver. Our dedication to excellence and deep market knowledge sets us apart.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We don't just sell properties — we curate exceptional living experiences in Vancouver's most prestigious neighborhoods.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 border-y border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <Icon className="h-10 w-10 mx-auto mb-4 text-gold transition-transform group-hover:scale-110 duration-300" />
                  <p className="text-4xl font-serif mb-2 text-gold">{stat.value}</p>
                  <p className="text-xs tracking-widest text-muted-foreground">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-32 bg-navy text-navy-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-px bg-gold mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-serif font-light tracking-wider mb-8">
              OUR MISSION
            </h2>
            <p className="text-xl text-champagne leading-relaxed">
              To provide unparalleled service in Vancouver's luxury real estate market, connecting exceptional properties with extraordinary individuals who appreciate refined living.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="w-16 h-px bg-gold mx-auto mb-8" />
            <h2 className="text-5xl md:text-6xl font-serif font-light tracking-wider mb-6">
              MEET OUR TEAM
            </h2>
            <p className="text-muted-foreground tracking-widest text-sm">
              EXPERT PROFESSIONALS DEDICATED TO YOUR SUCCESS
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="group text-center">
                <div className="aspect-[3/4] overflow-hidden bg-muted mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:brightness-110 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <h3 className="text-2xl font-serif mb-2 group-hover:text-gold transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm tracking-widest text-gold mb-3">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-champagne/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="w-16 h-px bg-gold mx-auto mb-8" />
              <h2 className="text-4xl md:text-5xl font-serif font-light tracking-wider">
                OUR VALUES
              </h2>
            </div>
            
            <div className="space-y-12">
              <div className="border-l-2 border-gold pl-8">
                <h3 className="text-2xl font-serif mb-3">Excellence</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We maintain the highest standards in every aspect of our service, from property curation to client relationships.
                </p>
              </div>
              
              <div className="border-l-2 border-gold pl-8">
                <h3 className="text-2xl font-serif mb-3">Integrity</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Trust is the foundation of our business. We operate with complete transparency and honesty.
                </p>
              </div>
              
              <div className="border-l-2 border-gold pl-8">
                <h3 className="text-2xl font-serif mb-3">Discretion</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Your privacy is paramount. We handle all transactions with the utmost confidentiality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default About;

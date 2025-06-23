
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const SocialMediaSection = () => {
  const socialLinks = [
    {
      name: "WhatsApp",
      icon: "📱",
      href: "https://wa.me/17785983175",
      color: "hover:bg-green-500",
      description: "Chat directly with me",
      bgColor: "bg-green-50"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/tushar-sharma-realtor",
      color: "hover:bg-blue-600",
      description: "Professional network",
      bgColor: "bg-blue-50"
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://facebook.com/tusharvancouverrealestate",
      color: "hover:bg-blue-500",
      description: "Community updates",
      bgColor: "bg-blue-50"
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com/tusharvancouverrealty",
      color: "hover:bg-pink-500",
      description: "Property showcases",
      bgColor: "bg-pink-50"
    }
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-green-50 opacity-70"></div>
      <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200 rounded-full animate-pulse opacity-20"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-200 rounded-full animate-bounce opacity-20"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            🌟 Stay Connected
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Follow me for Vancouver market insights, property highlights, and real estate success stories
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group animate-scale-in"
              style={{animationDelay: `${index * 200}ms`}}
            >
              <div className={`${social.bgColor} rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-500 border-2 border-white hover:border-gray-200`}>
                <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-white flex items-center justify-center text-3xl group-hover:text-white transition-colors duration-300 shadow-lg ${social.color}`}>
                  {typeof social.icon === 'string' ? (
                    <span className="text-4xl">{social.icon}</span>
                  ) : (
                    <social.icon className="w-10 h-10 text-gray-600 group-hover:text-white transition-colors duration-300" />
                  )}
                </div>
                <h3 className="font-bold text-foreground mb-2 text-lg">{social.name}</h3>
                <p className="text-sm text-muted-foreground">{social.description}</p>
              </div>
            </a>
          ))}
        </div>
        
        <div className="animate-fade-in animation-delay-1000">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="font-bold px-10 py-4 text-lg rounded-full border-3 border-purple-500 text-purple-600 hover:bg-purple-50 hover:border-purple-600 hover:shadow-2xl transform hover:scale-110 transition-all duration-300"
          >
            <a href="mailto:tusharsharma25214@gmail.com">
              📧 Or email me directly at tusharsharma25214@gmail.com
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;

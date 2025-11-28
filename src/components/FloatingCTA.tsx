import { Phone, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const FloatingCTA = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {isOpen && (
        <div className="absolute bottom-20 right-0 bg-card border border-border shadow-2xl p-6 w-64 animate-fade-in">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
          <p className="font-serif text-lg mb-4">Get In Touch</p>
          <div className="space-y-3">
            <a
              href="tel:+16045551234"
              className="flex items-center gap-3 p-3 border border-border hover:border-gold hover:bg-gold/10 transition-all group"
            >
              <Phone className="h-5 w-5 text-gold" />
              <span className="text-sm tracking-wider">Schedule Call</span>
            </a>
            <a
              href="https://wa.me/16045551234"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 border border-border hover:border-gold hover:bg-gold/10 transition-all group"
            >
              <MessageCircle className="h-5 w-5 text-gold" />
              <span className="text-sm tracking-wider">WhatsApp</span>
            </a>
          </div>
        </div>
      )}

      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="h-16 w-16 rounded-full bg-gold hover:bg-gold/90 text-gold-foreground shadow-2xl group"
      >
        <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
      </Button>
    </div>
  );
};

export default FloatingCTA;

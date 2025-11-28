import { Home, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm transition-colors duration-300">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <a href="/" className="text-2xl font-serif tracking-wider group cursor-pointer">
            <span className="group-hover:text-gold transition-colors duration-300">VANCOUVER LUXURY</span>
          </a>
          <ThemeToggle />
        </div>
      </nav>

      <div className="pt-24 min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="mb-12 animate-fade-in-up">
            <h1 className="text-9xl font-serif font-light tracking-wider mb-6 text-gold">
              404
            </h1>
            <div className="w-32 h-px bg-gold mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl font-serif font-light tracking-wider mb-6">
              PAGE NOT FOUND
            </h2>
            <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
              The page you're looking for doesn't exist or has been moved. 
              Let's get you back to discovering luxury properties.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              onClick={() => window.location.href = '/'}
              className="bg-gold text-gold-foreground hover:bg-gold/90 px-8 py-6 text-sm tracking-widest font-light group"
            >
              <Home className="mr-2 h-4 w-4 group-hover:-translate-y-1 transition-transform" />
              RETURN HOME
            </Button>
            <Button
              variant="outline"
              onClick={() => window.location.href = '/'}
              className="border-2 border-gold text-gold hover:bg-gold hover:text-gold-foreground px-8 py-6 text-sm tracking-widest font-light group"
            >
              <Search className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              BROWSE PROPERTIES
            </Button>
          </div>

          <div className="mt-20 opacity-40">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=400&fit=crop"
              alt="Vancouver Property"
              className="w-full h-64 object-cover hover:brightness-110 transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

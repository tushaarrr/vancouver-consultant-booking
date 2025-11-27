import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-8 px-6">
        <h1 className="text-9xl font-serif font-light tracking-wider">404</h1>
        <div className="w-24 h-px bg-foreground mx-auto" />
        <p className="text-xl font-light tracking-widest text-muted-foreground">
          PAGE NOT FOUND
        </p>
        <p className="text-sm font-light text-muted-foreground max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button 
          onClick={() => window.location.href = '/'}
          className="bg-foreground text-background hover:bg-foreground/90 px-8 py-6 text-sm tracking-widest font-light mt-8"
        >
          <Home className="mr-2 h-4 w-4" />
          RETURN HOME
        </Button>
      </div>
    </div>
  );
};

export default NotFound;

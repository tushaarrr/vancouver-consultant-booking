import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight } from "lucide-react";

const LeadCaptureForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setInView(rect.top < window.innerHeight && rect.bottom > 0);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      full_name: formData.get("fullName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      interest: formData.get("interest") as string,
    };

    try {
      const { supabase } = await import("@/integrations/supabase/client");
      const { error } = await supabase.from("leads").insert([data]);

      if (error) throw error;

      toast({
        title: "Thank you for your interest",
        description: "We'll be in touch shortly.",
      });

      e.currentTarget.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Failed to submit. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={sectionRef} className="relative py-32 bg-muted overflow-hidden">
      {/* Parallax Line Element */}
      <div 
        className="absolute left-0 top-1/2 w-1/3 h-px bg-foreground/10"
        style={{ transform: `translateX(${scrollY * 0.15}px)` }}
      />

      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div 
            className={`transition-all duration-1000 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            {/* Header */}
            <div className="text-center mb-16 space-y-6">
              <h2 className="text-5xl md:text-6xl font-serif font-light tracking-wider">
                BEGIN YOUR JOURNEY
              </h2>
              <div className="w-24 h-px bg-foreground mx-auto" />
              <p className="text-muted-foreground font-light tracking-wider">
                Connect with our luxury real estate specialists
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-3">
                <Label htmlFor="fullName" className="text-xs tracking-widest uppercase">
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  name="fullName"
                  required
                  className="border-0 border-b border-foreground/20 rounded-none bg-transparent focus-visible:ring-0 focus-visible:border-foreground px-0 font-light"
                  placeholder="Enter your name"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="email" className="text-xs tracking-widest uppercase">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="border-0 border-b border-foreground/20 rounded-none bg-transparent focus-visible:ring-0 focus-visible:border-foreground px-0 font-light"
                  placeholder="your@email.com"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="phone" className="text-xs tracking-widest uppercase">
                  Phone
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="border-0 border-b border-foreground/20 rounded-none bg-transparent focus-visible:ring-0 focus-visible:border-foreground px-0 font-light"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="interest" className="text-xs tracking-widest uppercase">
                  Interest
                </Label>
                <Select name="interest" required>
                  <SelectTrigger className="border-0 border-b border-foreground/20 rounded-none bg-transparent focus:ring-0 px-0 font-light">
                    <SelectValue placeholder="Select your interest" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="buying">Buying</SelectItem>
                    <SelectItem value="selling">Selling</SelectItem>
                    <SelectItem value="investing">Investing</SelectItem>
                    <SelectItem value="consultation">Consultation</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-foreground text-background hover:bg-foreground/90 py-6 text-sm tracking-widest font-light group mt-12"
              >
                {isSubmitting ? "SUBMITTING..." : "SUBMIT INQUIRY"}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadCaptureForm;

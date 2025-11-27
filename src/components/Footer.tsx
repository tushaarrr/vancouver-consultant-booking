const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl font-serif tracking-wider">VANCOUVER LUXURY</h3>
              <p className="text-sm text-muted-foreground font-light tracking-wide">
                Redefining luxury real estate in Vancouver
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-xs tracking-widest uppercase text-muted-foreground">Quick Links</h4>
              <div className="space-y-2 text-sm font-light">
                <a href="#properties" className="block hover:text-foreground/60 transition-colors">Properties</a>
                <a href="#about" className="block hover:text-foreground/60 transition-colors">About</a>
                <a href="#contact" className="block hover:text-foreground/60 transition-colors">Contact</a>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="text-xs tracking-widest uppercase text-muted-foreground">Contact</h4>
              <div className="space-y-2 text-sm font-light">
                <p>Vancouver, BC</p>
                <p>info@vancouverluxury.com</p>
                <p>+1 (604) 555-0000</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground tracking-widest">
            <p>© 2024 VANCOUVER LUXURY. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-8">
              <a href="#privacy" className="hover:text-foreground transition-colors">PRIVACY</a>
              <a href="#terms" className="hover:text-foreground transition-colors">TERMS</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

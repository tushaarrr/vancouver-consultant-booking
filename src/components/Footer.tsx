import { Mail, Phone, MapPin, Clock, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-background via-purple-950/30 to-background text-white py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-premium rounded-2xl p-8"
          >
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-purple-400" />
              <h3 className="text-2xl font-bold gradient-text-purple">Get In Touch</h3>
            </div>
            <div className="space-y-4">
              <a href="tel:+17785983175" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <span>+1 (778) 598-3175</span>
              </a>
              <a href="mailto:tusharsharma25214@gmail.com" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-sm">tusharsharma25214@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-white/80">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <span>Vancouver, BC</span>
              </div>
            </div>
          </motion.div>
          
          {/* Business Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-premium rounded-2xl p-8"
          >
            <div className="flex items-center gap-2 mb-6">
              <Clock className="w-5 h-5 text-blue-400" />
              <h3 className="text-2xl font-bold gradient-text-blue">Available Hours</h3>
            </div>
            <div className="space-y-3 text-white/70">
              <div className="flex justify-between hover:text-white transition-colors">
                <span className="font-medium">Monday - Friday</span>
                <span>8AM - 8PM</span>
              </div>
              <div className="flex justify-between hover:text-white transition-colors">
                <span className="font-medium">Saturday</span>
                <span>9AM - 6PM</span>
              </div>
              <div className="flex justify-between hover:text-white transition-colors">
                <span className="font-medium">Sunday</span>
                <span>10AM - 4PM</span>
              </div>
              <p className="text-sm text-white/50 mt-4 pt-4 border-t border-white/10">
                Pacific Standard Time (PST)
              </p>
            </div>
          </motion.div>
          
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-premium rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold gradient-text-gold mb-6">About</h3>
            <p className="text-white/70 mb-6 leading-relaxed">
              Licensed Vancouver real estate professional specializing in luxury homes, 
              investment properties, and guiding first-time buyers.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Licensed Realtor', 'MLS® Access', 'VREB Member'].map((badge, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-white/10 rounded-full text-xs font-semibold text-white/80"
                >
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="border-t border-white/10 pt-8 text-center"
        >
          <p className="text-white/60 mb-2">
            © {new Date().getFullYear()} Tushar Sharma - Vancouver Real Estate. All rights reserved.
          </p>
          <div className="flex justify-center gap-6 text-sm text-white/50">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

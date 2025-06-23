
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Information */}
          <div className="animate-fade-in">
            <h3 className="text-xl font-bold mb-6 text-blue-300">🏡 Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 hover:text-blue-300 transition-colors duration-300">
                <Phone className="w-5 h-5 text-green-400" />
                <span>+1 (778) 598-3175</span>
              </div>
              <div className="flex items-center gap-3 hover:text-blue-300 transition-colors duration-300">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>tusharsharma25214@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 hover:text-blue-300 transition-colors duration-300">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span>Vancouver, BC, Canada</span>
              </div>
            </div>
          </div>
          
          {/* Business Hours */}
          <div className="animate-fade-in animation-delay-1000">
            <h3 className="text-xl font-bold mb-6 text-green-300">⏰ Available Hours</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex justify-between hover:text-white transition-colors duration-300">
                <span>Monday - Friday:</span>
                <span>8:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between hover:text-white transition-colors duration-300">
                <span>Saturday:</span>
                <span>9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between hover:text-white transition-colors duration-300">
                <span>Sunday:</span>
                <span>10:00 AM - 4:00 PM</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              Pacific Standard Time (PST)
            </p>
          </div>
          
          {/* Professional Info */}
          <div className="animate-fade-in animation-delay-2000">
            <h3 className="text-xl font-bold mb-6 text-purple-300">🎯 About Me</h3>
            <p className="text-gray-300 mb-4">
              Licensed Vancouver real estate professional specializing in residential sales, 
              investment properties, and helping first-time buyers navigate the market with confidence.
            </p>
            <p className="text-sm text-gray-400">
              Licensed Realtor | Vancouver Real Estate Board Member | MLS® Access
            </p>
          </div>
        </div>
        
        {/* Tracking Code Placeholders */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="text-center text-gray-400 text-sm">
            <p className="mb-4">🔧 Analytics & Marketing Integration Ready</p>
            <div className="flex flex-wrap justify-center gap-4 text-xs">
              <span className="bg-gray-800 px-3 py-1 rounded hover:bg-gray-700 transition-colors duration-300">Google Analytics Ready</span>
              <span className="bg-gray-800 px-3 py-1 rounded hover:bg-gray-700 transition-colors duration-300">Meta Pixel Ready</span>
              <span className="bg-gray-800 px-3 py-1 rounded hover:bg-gray-700 transition-colors duration-300">LinkedIn Insights Ready</span>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center animate-fade-in animation-delay-3000">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Tushar Sharma - Vancouver Real Estate Professional. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Privacy Policy | Terms of Service | Cookie Policy
          </p>
        </div>
      </div>
      
      {/* Hidden tracking placeholders for future integration */}
      <div style={{ display: 'none' }}>
        {/* Google Analytics placeholder */}
        <div id="ga-tracking-placeholder">
          {/* Insert Google Analytics code here */}
        </div>
        
        {/* Meta Pixel placeholder */}
        <div id="meta-pixel-placeholder">
          {/* Insert Meta Pixel code here */}
        </div>
        
        {/* Additional tracking placeholder */}
        <div id="additional-tracking-placeholder">
          {/* Insert additional tracking codes here */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

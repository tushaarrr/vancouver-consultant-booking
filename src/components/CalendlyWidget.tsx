
import { useEffect } from "react";

const CalendlyWidget = () => {
  useEffect(() => {
    // Load Calendly script if not already loaded
    if (!document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div id="calendly-section" className="w-full">
      <div className="bg-white rounded-lg shadow-inner p-4">
        {/* Calendly Inline Widget Embed */}
        <div 
          className="calendly-inline-widget" 
          data-url="https://calendly.com/arealtor158/30min"
          style={{ minWidth: '320px', height: '700px' }}
        ></div>
        
        {/* Fallback for when script is loading */}
        <noscript>
          <div className="text-center p-8 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Schedule Your Consultation</h3>
            <p className="text-muted-foreground mb-4">
              Click the link below to book your free strategy session:
            </p>
            <a 
              href="https://calendly.com/arealtor158/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Book Your Free Consultation
            </a>
          </div>
        </noscript>
      </div>
    </div>
  );
};

export default CalendlyWidget;

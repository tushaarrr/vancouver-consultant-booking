import { Play } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Michael Chen",
    role: "West Vancouver Homeowner",
    thumbnail: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop",
    quote: "Exceptional service from start to finish"
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Yaletown Resident",
    thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop",
    quote: "Found our dream home in record time"
  }
];

const VideoTestimonials = () => {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="w-16 h-px bg-gold mx-auto mb-8" />
          <h2 className="text-5xl md:text-6xl font-serif font-light tracking-wider mb-6">
            CLIENT STORIES
          </h2>
          <p className="text-muted-foreground tracking-widest text-sm">
            HEAR FROM OUR SATISFIED CLIENTS
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group cursor-pointer"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-muted mb-6">
                <img
                  src={testimonial.thumbnail}
                  alt={testimonial.name}
                  className="w-full h-full object-cover group-hover:brightness-110 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-all duration-500 flex items-center justify-center">
                  <div className="w-16 h-16 border-2 border-foreground group-hover:border-gold group-hover:bg-gold/20 flex items-center justify-center transition-all duration-300">
                    <Play className="h-6 w-6 fill-current group-hover:text-gold" />
                  </div>
                </div>
              </div>
              <p className="text-xl font-serif mb-2 tracking-wide">{testimonial.name}</p>
              <p className="text-sm text-muted-foreground tracking-widest mb-3">
                {testimonial.role}
              </p>
              <p className="text-foreground/80 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;

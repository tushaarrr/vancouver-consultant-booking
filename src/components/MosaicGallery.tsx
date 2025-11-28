const images = [
  { url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=800&fit=crop", span: "md:col-span-2 md:row-span-2" },
  { url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=400&fit=crop", span: "md:col-span-1" },
  { url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&h=400&fit=crop", span: "md:col-span-1" },
  { url: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=400&fit=crop", span: "md:col-span-2" },
  { url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400&h=600&fit=crop", span: "md:row-span-2" },
  { url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&h=400&fit=crop", span: "md:col-span-1" },
  { url: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=400&h=400&fit=crop", span: "md:col-span-1" },
];

const MosaicGallery = () => {
  return (
    <section className="py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="w-16 h-px bg-gold mx-auto mb-8" />
          <h2 className="text-5xl md:text-6xl font-serif font-light tracking-wider mb-6">
            PORTFOLIO
          </h2>
          <p className="text-muted-foreground tracking-widest text-sm">
            A CURATED COLLECTION OF VANCOUVER'S FINEST PROPERTIES
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`group overflow-hidden cursor-pointer ${image.span}`}
            >
              <img
                src={image.url}
                alt={`Property ${index + 1}`}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MosaicGallery;

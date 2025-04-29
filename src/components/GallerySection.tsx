
import { Separator } from "@/components/ui/separator";

const galleryItems = [
  {
    id: 1,
    title: "Main Dining Hall",
    description: "Elegant space with 60 seats",
    image: "/images/interior-1.jpg"
  },
  {
    id: 2,
    title: "Private Dining Room",
    description: "Intimate setting for special occasions",
    image: "/images/interior-2.jpg"
  },
  {
    id: 3,
    title: "Bar & Lounge",
    description: "Craft cocktails and wine selection",
    image: "/images/bar.jpg"
  }
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-20 bg-restaurant-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-restaurant-dark mb-2">Preview Our Space</h2>
          <Separator className="mx-auto w-24 bg-restaurant-gold h-1 my-4" />
          <p className="text-lg text-restaurant-dark/70 max-w-2xl mx-auto">
            We're putting the finishing touches on our restaurant. Here's a sneak peek at what's to come.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div key={item.id} className="group overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-playfair font-bold text-restaurant-dark">{item.title}</h3>
                <p className="text-restaurant-dark/70">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;


import { Separator } from "@/components/ui/separator";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-restaurant-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-restaurant-dark mb-2">Our Story</h2>
          <Separator className="mx-auto w-24 bg-restaurant-gold h-1 my-4" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg mb-6">
              <span className="text-restaurant-burgundy font-bold">House of Sattvik</span> is the culmination of Chef Laurent's 20-year journey through the culinary capitals of the world.
            </p>
            <p className="text-lg mb-6">
              Our restaurant aims to bring you a dining experience that celebrates local ingredients with global techniques, creating memorable flavors in an elegant atmosphere.
            </p>
            <p className="text-lg">
              We're crafting a space where every detail - from the handpicked wine selection to the custom-designed interior - contributes to an unforgettable evening.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square bg-restaurant-burgundy rounded-lg overflow-hidden relative">
              <img 
                src="/images/chef.jpg" 
                alt="Chef Laurent preparing a signature dish" 
                className="w-full h-full object-cover mix-blend-overlay opacity-90"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-restaurant-dark/80 to-transparent">
                <p className="text-white font-playfair text-xl">Chef Laurent</p>
                <p className="text-restaurant-gold text-sm">Executive Chef & Founder</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-4 border-restaurant-gold rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;


import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="hero-section h-screen flex items-center justify-center text-center">
      <div className="container mx-auto px-4 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          <span className="text-restaurant-gold">H</span>ouse of Sattvik
        </h1>
        <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto mb-8">
          A new fine dining experience coming to your city
        </p>
        <div className="text-lg text-white/90 mb-12 font-light">
          Opening Summer 2024
        </div>
        <Button 
          className="bg-restaurant-gold text-restaurant-dark hover:bg-restaurant-gold/90 text-lg py-6 px-8"
          onClick={() => document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Join the Waiting List
        </Button>
      </div>
    </section>
  );
};

export default Hero;

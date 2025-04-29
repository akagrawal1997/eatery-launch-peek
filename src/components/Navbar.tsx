
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full py-4 transition-all duration-300 z-50 ${
      scrolled ? 'bg-restaurant-dark/95 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-white font-playfair text-2xl font-bold">
          <span className="text-restaurant-gold">S</span>avoria
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-white hover:text-restaurant-gold transition-colors">About</a>
          <a href="#countdown" className="text-white hover:text-restaurant-gold transition-colors">Opening</a>
          <a href="#gallery" className="text-white hover:text-restaurant-gold transition-colors">Gallery</a>
          <Button className="bg-restaurant-burgundy text-white hover:bg-restaurant-burgundy/90 ml-4" onClick={() => document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' })}>
            Get Notified
          </Button>
        </div>
        <div className="md:hidden">
          <Button variant="ghost" className="text-white p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


import { useEffect, useState } from 'react';
import { Separator } from "@/components/ui/separator";

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Set opening date to 6 weeks from now
  useEffect(() => {
    const calculateTimeLeft = () => {
      const currentDate = new Date();
      const openingDate = new Date(currentDate);
      openingDate.setDate(currentDate.getDate() + 42); // 6 weeks from now
      
      const difference = +openingDate - +currentDate;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();
    
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number): string => {
    return num < 10 ? `0${num}` : `${num}`;
  };

  return (
    <section id="countdown" className="countdown-section py-32 bg-fixed" style={{ backgroundImage: "url('/images/food-bg.jpg')" }}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">Opening Soon</h2>
        <Separator className="mx-auto w-24 bg-restaurant-gold h-1 my-4" />
        
        <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
          Our team is putting the finishing touches on our space. Join us for our grand opening in:
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center border border-restaurant-gold/30">
            <span className="text-4xl md:text-5xl font-bold text-restaurant-gold mb-2">{formatNumber(timeLeft.days)}</span>
            <span className="text-white font-light">Days</span>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center border border-restaurant-gold/30">
            <span className="text-4xl md:text-5xl font-bold text-restaurant-gold mb-2">{formatNumber(timeLeft.hours)}</span>
            <span className="text-white font-light">Hours</span>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center border border-restaurant-gold/30">
            <span className="text-4xl md:text-5xl font-bold text-restaurant-gold mb-2">{formatNumber(timeLeft.minutes)}</span>
            <span className="text-white font-light">Minutes</span>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center border border-restaurant-gold/30">
            <span className="text-4xl md:text-5xl font-bold text-restaurant-gold mb-2">{formatNumber(timeLeft.seconds)}</span>
            <span className="text-white font-light">Seconds</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;

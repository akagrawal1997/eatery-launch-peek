
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

const SignupSection = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Thank you for signing up!",
        description: "We'll notify you when we're ready to open our doors.",
        duration: 5000,
      });
      setEmail('');
      setName('');
      setIsChecked(false);
      
      // Track conversion in analytics
      if (window.goatcounter && typeof window.goatcounter.count === 'function') {
        window.goatcounter.count({
          path: 'signup-conversion',
          title: 'Waitlist Signup',
          event: true,
        });
      }
    }, 1000);
  };

  return (
    <section id="signup" className="py-20 bg-restaurant-burgundy text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Join Our Waiting List</h2>
          <Separator className="mx-auto w-24 bg-restaurant-gold h-1 my-4" />
          <p className="text-lg mb-8 text-white/80">
            Be the first to know when we open and receive an exclusive invitation to our opening night celebration.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div>
              <label htmlFor="name" className="text-sm font-medium mb-1 block">Full Name</label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-restaurant-gold"
                placeholder="Your name"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="text-sm font-medium mb-1 block">Email Address</label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-restaurant-gold"
                placeholder="your@email.com"
                required
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="terms" 
                checked={isChecked}
                onCheckedChange={() => setIsChecked(!isChecked)}
                className="border-white data-[state=checked]:bg-restaurant-gold data-[state=checked]:border-restaurant-gold" 
                required
              />
              <label htmlFor="terms" className="text-sm text-white/80">
                I agree to receive email updates about the restaurant opening
              </label>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-restaurant-gold hover:bg-restaurant-gold/90 text-restaurant-dark font-medium py-6"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Get Notified"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignupSection;

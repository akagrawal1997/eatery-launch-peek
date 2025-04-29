
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import CountdownSection from '@/components/CountdownSection';
import GallerySection from '@/components/GallerySection';
import SignupSection from '@/components/SignupSection';
import Footer from '@/components/Footer';
import analytics from '@/lib/analytics';

const Index = () => {
  // Initialize analytics when component mounts
  useEffect(() => {
    // Track page view
    analytics.trackPageView('/');
    
    // Add event listeners for scroll depth tracking
    const handleScroll = () => {
      const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      
      if (scrollPercent >= 75 && !localStorage.getItem('tracked75Percent')) {
        analytics.trackEvent('scroll', 'depth-75');
        localStorage.setItem('tracked75Percent', 'true');
      }
      
      if (scrollPercent >= 50 && !localStorage.getItem('tracked50Percent')) {
        analytics.trackEvent('scroll', 'depth-50');
        localStorage.setItem('tracked50Percent', 'true');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Track visit duration when user leaves or hides page
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        const duration = analytics.getSessionDuration();
        analytics.trackEvent('session', 'duration', `${duration}s`);
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <CountdownSection />
      <GallerySection />
      <SignupSection />
      <Footer />
    </div>
  );
};

export default Index;

import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import durdleDoorBackground from "@/assets/durdle-door-background.jpg";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${durdleDoorBackground})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-hero-gradient opacity-85" />
      
      {/* Additional Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/20" />
      
      <div className="container mx-auto px-6 py-20 relative z-10 flex items-center justify-center min-h-screen">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-8xl md:text-9xl font-bold mb-4 text-white/90">404</h1>
            <div className="text-2xl md:text-3xl font-bold mb-6">
              Well, this is awkward...
            </div>
            <p className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed">
              Looks like this page took an unscheduled vacation. Maybe it's attending one of those 
              "How to Disappear Completely" workshops that I definitely don't teach.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 border border-white/20">
              <p className="text-white/80 mb-4">
                <strong className="text-white">Fun Fact:</strong> In 25+ years of building businesses, 
                I've learned that getting lost is just the first step to finding something better.
              </p>
              <p className="text-white/80 text-sm italic">
                "Every 404 is just a 200 waiting to happen" - Ancient Web Developer Proverb
              </p>
            </div>
          </div>
          
          <div className="space-y-4 animate-fade-in">
            <Button 
              variant="cta" 
              size="lg" 
              className="text-lg px-8 py-4 mb-4"
              onClick={() => window.location.href = '/'}
            >
              Take Me Home (Where the Growth Happens)
            </Button>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                variant="cta-secondary" 
                size="lg"
                onClick={() => window.location.href = '/coffee'}
              >
                Book a Coffee Chat Instead
              </Button>
              <Button 
                variant="ghost" 
                className="text-white hover:bg-white/20"
                onClick={() => window.history.back()}
              >
                Go Back & Pretend This Never Happened
              </Button>
            </div>
          </div>
          
          <div className="mt-12 text-white/60 text-sm">
            <p>Lost? Confused? Need directions to success?</p>
            <p>That's literally what I do for a living. Let's chat.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

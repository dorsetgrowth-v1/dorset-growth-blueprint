import { Button } from "@/components/ui/button";
import durdleDoorBackground from "@/assets/durdle-door-background.jpg";

const HeroSection = () => {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen text-white relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${durdleDoorBackground})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-hero-gradient opacity-85" />
      
      {/* Additional Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/20" />
      
      <div className="container mx-auto px-6 pt-32 pb-20 md:py-20 relative z-10 flex items-center justify-center min-h-screen">
        <article className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Stop Guessing.
            <br />
            <span className="text-white">Start Growing.</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Proven step-by-step strategies to grow a business that works without you. 
            Get clarity, systems, and results — fast.
          </p>
          
          {/* Primary CTA */}
          <div className="mb-12">
            <Button 
              variant="cta" 
              size="lg" 
              className="text-sm md:text-lg px-6 md:px-12 py-4 md:py-5 mb-4 w-full max-w-md mx-auto"
              onClick={scrollToBooking}
            >
              Book Your 15-Min Virtual Coffee
            </Button>
            <div className="text-white/80 text-sm">
              No obligation • Immediate value • 100% confidential
            </div>
          </div>
          
          {/* Social Proof */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">25+</div>
              <div className="text-white/80">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">170+</div>
              <div className="text-white/80">B2B Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">£7M+</div>
              <div className="text-white/80">Generated</div>
            </div>
          </div>
          
          {/* Secondary CTA */}
          <Button variant="cta-secondary" size="lg" className="text-sm md:text-lg px-6 md:px-8 py-2 md:py-3 w-full max-w-xs mx-auto" onClick={scrollToAbout}>
            Learn More
          </Button>
        </article>
      </div>
      
      {/* Brand Logo */}
      <div className="absolute top-8 left-8">
        <img 
          src="/lovable-uploads/4cfd5d71-855e-4b22-aa48-82e859b3ce30.png" 
          alt="Dorset Growth Business Coaching Logo" 
          className="h-16 w-auto"
          loading="eager"
        />
      </div>
    </section>
  );
};

export default HeroSection;
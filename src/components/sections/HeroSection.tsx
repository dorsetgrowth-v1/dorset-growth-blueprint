import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-hero-gradient text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-[0.5px]" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
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
              className="text-lg px-8 py-4 h-auto mb-4"
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
          <Button variant="cta-secondary" size="lg" className="text-lg px-8 py-3">
            Learn More
          </Button>
        </div>
      </div>
      
      {/* Brand Logo */}
      <div className="absolute top-8 left-8">
        <div className="text-2xl font-bold text-white">
          Dorset<br />
          <span className="text-white/90">Growth</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
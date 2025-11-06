import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProcessSection = () => {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  const steps = [
    {
      number: "1",
      title: "Discover (Week 1)",
      subtitle: "15-Minute Prayer Call",
      description: "A low-pressure, high-value conversation. No sales pitch—just authentic connection. Book yours today and experience the difference.",
      duration: ""
    },
    {
      number: "2", 
      title: "Explore (Weeks 2-12)",
      subtitle: "Alpha for Business",
      description: "A safe space to question, discuss, and explore faith in a business context. Quarterly cohorts available online or in-person.",
      duration: ""
    },
    {
      number: "3",
      title: "Develop (Weeks 13-20)",
      subtitle: "Faith Driven Entrepreneur Programme",
      description: "8 weeks of structured discipleship covering identity, calling, integrity, generosity, and eternal perspective. Peer accountability included.",
      duration: ""
    },
    {
      number: "4",
      title: "Integrate (Ongoing)",
      subtitle: "Local Church Connection",
      description: "Sustainable spiritual growth through church community, ongoing coaching, and an alumni network of purpose-driven leaders.",
      duration: ""
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Journey: From First Call to Lasting Transformation
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A clear pathway from discovery to integration
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {steps.map((step, index) => (
              <Card key={index} className="relative border-none shadow-lg hover:shadow-glow transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 mt-4">
                    {step.title}
                  </h3>
                  <h4 className="text-lg font-semibold text-primary mb-3">
                    {step.subtitle}
                  </h4>
                  <p className="text-gray-600 mb-4">
                    {step.description}
                  </p>
                  {step.duration && (
                    <div className="text-sm text-primary font-semibold">
                      {step.duration}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center bg-hero-gradient rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Start Your Journey Today
            </h3>
            <p className="text-xl mb-8 text-white/90">
              Start with a prayer call—see where it leads →
            </p>
            <Button variant="cta" size="lg" className="text-sm md:text-lg px-6 md:px-12 py-4 md:py-5 mb-4 w-full max-w-md mx-auto" onClick={scrollToBooking}>
              Book Your 15-Min Prayer Call
            </Button>
            <div className="text-white/80 text-sm">
              No commitment, no pressure—just a conversation
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
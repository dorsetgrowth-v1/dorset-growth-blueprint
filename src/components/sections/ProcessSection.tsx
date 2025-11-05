import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProcessSection = () => {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  const steps = [
    {
      number: "1",
      title: "15-Minute Prayer Call",
      description: "Start with a confidential conversation — explore your business challenges and spiritual journey.",
      duration: "Free & confidential"
    },
    {
      number: "2", 
      title: "Alpha for Business",
      description: "For those exploring faith or new Christians — discover purpose and meaning through Alpha's proven approach.",
      duration: "Quarterly cohorts"
    },
    {
      number: "3",
      title: "FDE 8-Week Foundation", 
      description: "For Christian entrepreneurs — align your business with biblical principles through Faith Driven Entrepreneur programme.",
      duration: "8-week study groups"
    },
    {
      number: "4",
      title: "Local Church Integration",
      description: "Connect with local church communities for ongoing support, fellowship, and Kingdom impact.",
      duration: "Ongoing support"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Faith & Business Journey
            </h2>
            <h3 className="text-2xl text-gray-700 mb-4">Four Steps to Purpose-Driven Business</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Whether you're exploring faith or seeking to align your business with Kingdom values, we'll meet you where you are.
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
                  <h3 className="text-xl font-bold text-gray-900 mb-4 mt-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {step.description}
                  </p>
                  <div className="text-sm text-primary font-semibold">
                    {step.duration}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center bg-hero-gradient rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Discover Purpose in Your Business?
            </h3>
            <p className="text-xl mb-8 text-white/90">
              Book your free virtual coffee chat today. Explore Alpha for Business or the FDE Programme — discover which path is right for you.
            </p>
            <Button variant="cta" size="lg" className="text-sm md:text-lg px-6 md:px-12 py-4 md:py-5 mb-4 w-full max-w-md mx-auto" onClick={scrollToBooking}>
              Yes, Book My Free Virtual Coffee
            </Button>
            <div className="text-white/80 text-sm">
              100% confidential • Fully funded programme • No cost to you
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
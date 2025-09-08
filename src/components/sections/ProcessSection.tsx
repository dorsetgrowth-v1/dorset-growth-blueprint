import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProcessSection = () => {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  const steps = [
    {
      number: "1",
      title: "Book a 15-Min Call",
      description: "Quick, friendly chat to understand your business and biggest growth challenge right now.",
      duration: "Takes 2 minutes to book"
    },
    {
      number: "2", 
      title: "Complete Short Assessment",
      description: "Simple questionnaire about your current situation, goals, and what's been holding you back.",
      duration: "5 minutes max"
    },
    {
      number: "3",
      title: "Get Your Custom Growth Plan", 
      description: "Receive a tailored roadmap with specific next steps to grow your business systematically.",
      duration: "Within 48 hours"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Simple 3-Step Process
            </h2>
            <h3 className="text-2xl text-gray-700 mb-4">Here's How It Works</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              No complicated processes. No long commitments. Just a clear path forward.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
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
              Ready to Stop Guessing and Start Growing?
            </h3>
            <p className="text-xl mb-8 text-white/90">
              Book your free 15-minute virtual coffee chat today. No sales pitch, just practical insights you can use immediately.
            </p>
            <Button variant="cta" size="lg" className="text-sm md:text-lg px-6 md:px-12 py-4 md:py-5 mb-4 w-full max-w-md mx-auto" onClick={scrollToBooking}>
              Yes, Book My Free 15-Min Coffee Chat
            </Button>
            <div className="text-white/80 text-sm">
              No obligation • Immediate value • 100% confidential
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
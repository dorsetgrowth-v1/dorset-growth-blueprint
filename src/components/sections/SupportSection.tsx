import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SupportSection = () => {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="border-none shadow-elegant">
            <CardContent className="p-12 text-center">
              <div className="mb-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Fully Funded Programme
                </h2>
              </div>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The 15-minute prayer call is completely free. Alpha for Business and the FDE Programme have optional contributions (£50-£400) to cover materials, but scholarships are available. <strong>Never let cost be the barrier.</strong>
              </p>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Thanks to the generous support of corporate sponsors, our programmes are accessible to all. Our mission is to help business leaders across Dorset discover purpose, integrate faith, and create Kingdom impact.
              </p>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Want to Support This Vision?
                </h3>
                <p className="text-gray-700 mb-4">
                  If you'd like to help us reach more business leaders and expand this ministry, 
                  donations are warmly welcomed. Your support helps us provide resources, run cohorts, 
                  and connect more entrepreneurs with purpose-driven business practices.
                </p>
                <p className="text-sm text-gray-600 italic">
                  Contact us during your virtual coffee chat to learn how you can contribute to this Kingdom work.
                </p>
              </div>
              
              <div className="bg-hero-gradient rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">
                  Ready to Begin Your Journey?
                </h3>
                <div className="grid md:grid-cols-3 gap-6 mb-8 text-sm">
                  <div>
                    <div className="font-semibold mb-1">No cost to participate</div>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">100% confidential</div>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Explore both programmes</div>
                  </div>
                </div>
                <Button 
                  variant="cta" 
                  size="lg" 
                  className="text-sm md:text-lg px-6 md:px-12 py-4 md:py-5 mb-4 w-full max-w-md mx-auto" 
                  onClick={scrollToBooking}
                >
                  Book Your Free Prayer Call
                </Button>
                <div className="text-white/80 text-sm">
                  Takes less than 2 minutes to book • Available this week
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              Whether you're exploring faith for the first time or looking to align your established business 
              with Kingdom values, we're here to support you every step of the way.
            </p>
            <p className="text-xl font-semibold text-gray-900">
              Your journey to purpose-driven business starts with a conversation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;

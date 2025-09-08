import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const GuaranteeSection = () => {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="border-none shadow-elegant">
            <CardContent className="p-12 text-center">
              <div className="mb-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  90-Day Money Back Guarantee
                </h2>
              </div>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We're so confident in the proven methods we deploy with our clients to crack the rhythmic 
                acquisition of customers that we offer a complete <strong>90-Day Money Back Guarantee</strong>.
              </p>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Work with me for 90 days and if you're not 100% satisfied with the traction we're making 
                and the results you're seeing then let me know and we can part ways as friends and I'll 
                refund your money.
              </p>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
                <p className="text-green-800 font-semibold">
                  That's how confident I am in the results we can generate and removes all the risk for you 
                  so you can be confident too!
                </p>
              </div>
              
              <div className="bg-hero-gradient rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">
                  Ready to Stop Guessing and Start Growing?
                </h3>
                <div className="grid md:grid-cols-3 gap-6 mb-8 text-sm">
                  <div>
                    <div className="font-semibold mb-1">Only 15 minutes of your time</div>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">100% confidential conversation</div>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Immediate actionable insights</div>
                  </div>
                </div>
                <Button variant="cta" size="lg" className="text-sm md:text-lg px-4 md:px-8 py-3 md:py-4 h-auto mb-4 w-full max-w-md mx-auto" onClick={scrollToBooking}>
                  Schedule Your Free 15-Min Coffee Chat
                </Button>
                <div className="text-white/80 text-sm">
                  Takes less than 2 minutes to book • Available this week
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
                <p className="text-gray-700 font-medium">
                  Every day you delay is potential revenue and peace of mind you're leaving on the table.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              Book your free 15-minute virtual coffee chat today. No sales pitch, no pressure — just a 
              friendly conversation about your business and practical next steps you can implement immediately.
            </p>
            <p className="text-xl font-semibold text-gray-900">
              Don't let another month pass feeling stuck.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
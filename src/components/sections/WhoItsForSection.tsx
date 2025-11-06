import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const WhoItsForSection = () => {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  const audiences = [
    {
      title: "Seekers",
      description: "You're not religious, but you're open. Business success hasn't brought the fulfilment you expected. You're exploring purpose and meaning beyond profit."
    },
    {
      title: "Aligners",
      description: "You're a Christian, but faith and work feel disconnected. You want to lead with integrity and apply biblical principles to business decisions—but you're not sure how."
    },
    {
      title: "Growers",
      description: "You're established in faith and business. Now you want deeper impact, peer community, and opportunities to mentor the next generation of Kingdom entrepreneurs."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Is This For You?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We serve entrepreneurs at different stages of their faith journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {audiences.map((audience, index) => (
              <Card key={index} className="border-none shadow-elegant hover:shadow-glow transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {audience.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {audience.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              variant="cta" 
              size="lg" 
              className="text-sm md:text-lg px-6 md:px-12 py-4 md:py-5 mb-4 w-full max-w-md mx-auto" 
              onClick={scrollToBooking}
            >
              Wherever you are, we meet you there →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoItsForSection;

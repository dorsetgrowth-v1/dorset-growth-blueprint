import { Card, CardContent } from "@/components/ui/card";

const PartnersSection = () => {
  const partners = [
    {
      name: "Alpha for Business",
      description: "Trusted globally for faith exploration"
    },
    {
      name: "Faith Driven Entrepreneur",
      description: "Biblical business discipleship"
    },
    {
      name: "Entrepreneurs Circle",
      description: "Coaching methodology and frameworks"
    },
    {
      name: "Local Churches",
      description: "Spiritual integration and community"
    },
    {
      name: "Good Business Charter",
      description: "Ethical business accreditation"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Powered By Proven Networks
            </h2>
            <p className="text-xl text-gray-600">
              Standing on the shoulders of established organizations
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {partner.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {partner.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;

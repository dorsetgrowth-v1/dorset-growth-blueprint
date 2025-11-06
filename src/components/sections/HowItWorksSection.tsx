import { Card, CardContent } from "@/components/ui/card";

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Smart Systems, Authentic Connection
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-none shadow-elegant">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Technology Opens the Door
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We use Leadeth.io automation to invite business leaders into the journey through LinkedIn—meeting entrepreneurs where they already are. Scheduling, follow-ups, and tracking run seamlessly in the background.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-elegant">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Relationships Drive the Journey
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  But technology only opens the door. Everything that matters happens through genuine human connection: prayer calls, small groups, mentorship, and church integration. We scale the invitation, not the relationship.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

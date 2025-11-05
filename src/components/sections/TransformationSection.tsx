import { Card, CardContent } from "@/components/ui/card";

const TransformationSection = () => {
  const transformations = [
    {
      from: "Seeking Meaning",
      to: "Living with Purpose", 
      description: "Discover how your business can serve Kingdom purposes and create eternal impact."
    },
    {
      from: "Faith & Work Disconnect",
      to: "Integrated Leadership",
      description: "Align your business decisions with biblical principles and godly character."
    },
    {
      from: "Isolated & Alone", 
      to: "Community & Support",
      description: "Connect with like-minded entrepreneurs who share your values and vision."
    },
    {
      from: "Success Without Fulfilment",
      to: "Impact with Integrity", 
      description: "Build a business that honours God, serves others, and creates lasting legacy."
    }
  ];

  const benefits = [
    "Explore faith and purpose through Alpha for Business",
    "Align your business with biblical principles through FDE", 
    "Connect with supportive community of faith-driven entrepreneurs",
    "Integrate Kingdom values into daily business decisions",
    "Discover meaning beyond profit and success",
    "Personal mentoring from experienced business leader and church elder",
    "Access to proven faith-driven frameworks",
    "Ongoing support through local church integration"
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transform Your Business & Your Purpose
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Imagine running a business aligned with Kingdom values, supported by community, and driven by eternal purpose. 
              Here's what becomes possible...
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {transformations.map((transformation, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-glow transition-all duration-300">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Transformation {index + 1}
                    </h3>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex-1">
                        <div className="text-sm text-gray-500 mb-1">FROM:</div>
                        <div className="bg-red-100 text-red-800 px-3 py-2 rounded-lg font-medium">
                          {transformation.from}
                        </div>
                      </div>
                      <div className="text-2xl text-gray-400">→</div>
                      <div className="flex-1">
                        <div className="text-sm text-gray-500 mb-1">TO:</div>
                        <div className="bg-green-100 text-green-800 px-3 py-2 rounded-lg font-medium">
                          {transformation.to}
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    {transformation.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              What You'll Get When We Work Together
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              The Result? A Business That Honours God and Serves Others
            </h3>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">2 Programmes</div>
                <div className="text-gray-600">Alpha & FDE tailored to your journey</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">Fully Funded</div>
                <div className="text-gray-600">Thanks to corporate sponsorship</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">Kingdom Impact</div>
                <div className="text-gray-600">Eternal purpose in your work</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
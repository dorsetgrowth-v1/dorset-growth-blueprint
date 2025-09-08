import { Card, CardContent } from "@/components/ui/card";

const TransformationSection = () => {
  const transformations = [
    {
      from: "Overwhelmed & Reactive",
      to: "Confident & Proactive", 
      description: "Stop firefighting and start leading with clarity and purpose."
    },
    {
      from: "Inconsistent Revenue",
      to: "Predictable Growth",
      description: "Build systems that generate consistent, scalable results month after month."
    },
    {
      from: "Working IN Business", 
      to: "Working ON Business",
      description: "Reclaim your time and focus on strategy while your business runs itself."
    },
    {
      from: "Struggling to Find Clients",
      to: "Attracting Ideal Customers", 
      description: "Implement proven systems to attract and convert your perfect clients."
    }
  ];

  const benefits = [
    "Clear, step-by-step roadmap tailored to your business",
    "Proven systems that eliminate guesswork", 
    "More predictable revenue streams",
    "Better work-life balance and reduced stress",
    "Increased business value for future exit",
    "Personal support from an experienced entrepreneur",
    "Access to tested frameworks and templates",
    "Ongoing accountability to keep you on track"
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transform Your Business & Your Life
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Imagine running a business that grows consistently while giving you more time and less stress. 
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
              The Result? A Business That Works For You, Not Against You
            </h3>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">3-6 months</div>
                <div className="text-gray-600">To see significant improvements</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">2-5x</div>
                <div className="text-gray-600">Typical revenue increase</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50%+</div>
                <div className="text-gray-600">Reduction in time spent firefighting</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
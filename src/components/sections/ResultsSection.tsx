import { Card, CardContent } from "@/components/ui/card";

const ResultsSection = () => {
  const results = [
    {
      title: "Ministry Experience",
      metric: "35+ Years",
      description: "Over three decades serving in Baptist and New Frontiers churches in leadership positions"
    },
    {
      title: "Business Success", 
      metric: "£600k Exit",
      description: "Built and successfully exited stika.co at £600k annual revenue"
    },
    {
      title: "Client Impact",
      metric: "170+ Leaders", 
      description: "Coached and mentored over 170 business leaders with systematic growth strategies"
    },
    {
      title: "Proven Results",
      metric: "£7M+ Generated",
      description: "Generated over £7 million for clients through proven business systems"
    }
  ];

  const credentials = [
    "35+ Years Church Leadership Experience",
    "25+ Years Building & Scaling Businesses", 
    "Multiple Business Exits & Success Stories",
    "Married with Three Children",
    "Baptist & New Frontiers Background",
    "Faith-Driven Business Principles"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Experience & Background
            </h2>
            <h3 className="text-2xl text-gray-700 mb-6">Ministry, Business & Family</h3>
            <p className="text-xl text-gray-600">
              Combining decades of church leadership with proven business success to serve faith-driven entrepreneurs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {results.map((result, index) => (
              <Card key={index} className="text-center border-none shadow-lg hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {result.metric}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    {result.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {result.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Background & Qualifications
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {credentials.map((credential, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">{credential}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
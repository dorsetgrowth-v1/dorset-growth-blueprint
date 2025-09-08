import { Card, CardContent } from "@/components/ui/card";

const ResultsSection = () => {
  const results = [
    {
      title: "Personal Success",
      metric: "£600k/year",
      description: "Scaled stika.co to £600k annual revenue and successfully exited"
    },
    {
      title: "Client Success", 
      metric: "170+ B2B Clients",
      description: "Helped over 170 B2B businesses implement systematic growth strategies"
    },
    {
      title: "Proven ROI",
      metric: "£7M+ Generated", 
      description: "Generated over £7 million in additional revenue for clients via LinkedIn Outreach alone"
    },
    {
      title: "Experience",
      metric: "25+ Years",
      description: "Twenty-five years of hands-on business building and scaling experience"
    }
  ];

  const credentials = [
    "Entrepreneurs Circle Certified Coach",
    "25+ Years Business Building Experience", 
    "Multiple Business Exits",
    "Proven LinkedIn Outreach Expert"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Proven Track Record
            </h2>
            <h3 className="text-2xl text-gray-700 mb-6">Real Results for Real Businesses</h3>
            <p className="text-xl text-gray-600">
              Don't just take my word for it. Here's what I've achieved and helped others accomplish.
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
              Credentials & Qualifications
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
            <div className="text-center">
              <a 
                href="#" 
                className="inline-flex items-center text-secondary hover:text-secondary/80 font-medium transition-colors"
              >
                View Full Entrepreneurs Circle Profile
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
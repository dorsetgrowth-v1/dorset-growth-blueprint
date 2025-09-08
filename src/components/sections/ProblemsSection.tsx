import { Card, CardContent } from "@/components/ui/card";

const ProblemsSection = () => {
  const problems = [
    {
      title: "Inconsistent Sales",
      description: "Revenue goes up and down like a roller coaster. You never know if this month will be good or terrible.",
      example: "Like Sophie, who had three great months followed by two awful ones..."
    },
    {
      title: "Overwhelmed & Exhausted", 
      description: "Working IN the business instead of ON it. Every day feels like firefighting with no time to think strategically.",
      example: "Juggling family commitments while trying to keep the business afloat..."
    },
    {
      title: "Wasting Time Guessing",
      description: "Trying random marketing tactics, hoping something will stick. No clear system or strategy that actually works.",
      example: "Posting on social media, hoping for leads, but nothing consistent happens..."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sound Familiar?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Most Dorset business owners face these same challenges every day...
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <Card key={index} className="border-none shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {problem.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {problem.description}
                </p>
                <p className="text-sm text-gray-500 italic">
                  {problem.example}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-red-50 border-l-4 border-primary p-6 max-w-4xl mx-auto rounded-r-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              The Real Cost of Staying Stuck
            </h3>
            <p className="text-gray-700">
              Every month you delay getting proper systems in place, you're losing potential revenue, 
              burning out faster, and missing opportunities that your competitors might be taking advantage of.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
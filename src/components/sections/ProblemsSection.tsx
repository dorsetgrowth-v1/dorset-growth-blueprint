import { Card, CardContent } from "@/components/ui/card";

const ProblemsSection = () => {
  const problems = [
    {
      title: "The Meaning Gap",
      description: "Success without significance. You're hitting revenue targets but feeling empty. There's got to be more than this.",
      example: ""
    },
    {
      title: "The Integration Gap", 
      description: "Faith and work exist in separate compartments. You don't know how to practically connect Sunday beliefs with Monday decisions.",
      example: ""
    },
    {
      title: "The Community Gap",
      description: "Isolation at the top. Few peers understand both business pressures and faith. You need people who get it.",
      example: ""
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Three Gaps Business Leaders Face
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Many business leaders face these challenges on their journey...
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
                {problem.example && (
                  <p className="text-sm text-gray-500 italic">
                    {problem.example}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-blue-50 border-l-4 border-secondary p-6 max-w-4xl mx-auto rounded-r-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              We bridge these gaps with a proven pathway →
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
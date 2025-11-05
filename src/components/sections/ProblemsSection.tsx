import { Card, CardContent } from "@/components/ui/card";

const ProblemsSection = () => {
  const problems = [
    {
      title: "Searching for Meaning",
      description: "Success feels hollow. You've achieved business goals but wonder 'Is this it?' Deep down, you're seeking something more.",
      example: "Building revenue but feeling empty inside..."
    },
    {
      title: "Faith & Business Disconnect", 
      description: "You want to honour God in your work but don't know how. Struggling to integrate your faith with daily business decisions.",
      example: "Feeling torn between Kingdom values and marketplace pressures..."
    },
    {
      title: "Isolated & Unsupported",
      description: "Running your business alone without community or spiritual support. No one understands the unique challenges you face.",
      example: "Longing for authentic connection with like-minded entrepreneurs..."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Does This Resonate?
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
                <p className="text-sm text-gray-500 italic">
                  {problem.example}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-blue-50 border-l-4 border-secondary p-6 max-w-4xl mx-auto rounded-r-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              There's a Better Way
            </h3>
            <p className="text-gray-700">
              Imagine running your business with clarity, purpose, and community support — aligned with Kingdom values 
              and driven by eternal impact. That transformation starts with a conversation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
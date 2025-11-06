import { Card, CardContent } from "@/components/ui/card";

const TransformationSection = () => {
  const transformations = [
    {
      icon: "🤝",
      title: "Confidential Community",
      description: "A trusted peer group tackling real business challenges with faith-informed wisdom. No judgment, just growth."
    },
    {
      icon: "📚",
      title: "Practical Frameworks",
      description: "Biblical principles applied to leadership, ethics, team building, and decision-making. Tested by entrepreneurs, not just theorists."
    },
    {
      icon: "🌱",
      title: "Personal Transformation",
      description: "Changed leadership, strengthened relationships, increased generosity, and a business you're proud of—aligned with eternal values."
    }
  ];


  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What You Gain
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Real transformation across three key areas
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {transformations.map((transformation, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-glow transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl mb-4">{transformation.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {transformation.title}
                  </h3>
                  <p className="text-gray-600">
                    {transformation.description}
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

export default TransformationSection;
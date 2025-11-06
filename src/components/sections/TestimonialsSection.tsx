import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "This isn't just another business network—it's where I finally found people who understand the tension between ambition and faith.",
      author: "Business Owner, Dorchester"
    },
    {
      quote: "The Alpha for Business format gave me space to ask questions I've had for years without feeling judged.",
      author: "Entrepreneur, Weymouth"
    },
    {
      quote: "Dorset Growth helped me see my business as a calling, not just a career. That shift changed everything.",
      author: "Consultant, Bournemouth"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Leaders Are Saying
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-elegant">
                <CardContent className="p-8">
                  <p className="text-gray-600 italic mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <p className="text-sm font-semibold text-gray-900">
                    — {testimonial.author}
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

export default TestimonialsSection;

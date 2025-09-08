import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const achievements = [
    { number: "£600k", description: "Scaled stika.co to £600k/year and successfully exited" },
    { number: "25+", description: "Years of hands-on business building experience" },
    { number: "£7M+", description: "Generated for clients via proven LinkedIn Outreach strategies" },
    { number: "170+", description: "B2B businesses transformed with systematic growth" }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Growth Partner
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">
              Meet Alex Smith
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Not just another business coach. A proven entrepreneur who's built, scaled, and sold 
              businesses while generating millions for clients using systematic approaches.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="text-center md:text-left">
              <div className="inline-block mb-6">
                <img 
                  src="/lovable-uploads/59d347b7-8221-45df-b8f5-65cada2f287a.png" 
                  alt="Alex Smith - Business Growth Coach" 
                  className="w-80 h-80 object-cover rounded-2xl shadow-xl mx-auto md:mx-0"
                />
              </div>
              <img 
                src="/lovable-uploads/e0e810a3-5402-48a0-93e5-0b94f7c1cc4c.png" 
                alt="Entrepreneurs Circle Certified Coach" 
                className="w-80 h-auto mx-auto md:mx-0"
              />
            </div>
            
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                I Know Exactly How You Feel
              </h4>
              <p className="text-gray-600 mb-4">
                I've been where you are. Twenty-five years ago, I was grinding away, working endless hours 
                in my business instead of on it. The stress, the uncertainty, the constant firefighting — I get it.
              </p>
              <p className="text-gray-600 mb-4">
                That's why I developed systematic approaches that actually work. I scaled stika.co to £600k/year 
                and successfully exited. More importantly, I've helped 170+ businesses implement these same 
                systems to generate over £7 million in results.
              </p>
              
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-center">
                  <span className="text-primary mr-3">✓</span>
                  Built & sold multiple businesses
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-3">✓</span>
                  170+ B2B clients coached
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-3">✓</span>
                  £7M+ generated for clients
                </li>
              </ul>
              
              <div className="bg-blue-50 border-l-4 border-secondary p-4 rounded-r-lg">
                <p className="text-gray-700 font-medium">
                  <strong>The difference?</strong> I don't just give you theory. I give you step-by-step systems 
                  that I've personally used and refined over twenty-five years of building real businesses.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {achievement.number}
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {achievement.description}
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

export default AboutSection;
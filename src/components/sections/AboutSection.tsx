import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const achievements = [
    { number: "35+", description: "Years in church leadership and ministry" },
    { number: "25+", description: "Years building and scaling businesses" },
    { number: "170+", description: "Business leaders coached and mentored" },
    { number: "£7M+", description: "Generated for clients through proven systems" }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Faith & Business Partner
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">
              Meet Alex Smith
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Entrepreneur, church leader, and family man — committed to helping business leaders discover purpose, 
              integrate faith, and create Kingdom impact through their work.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="text-center md:text-left">
              <img 
                src="/lovable-uploads/59d347b7-8221-45df-b8f5-65cada2f287a.png" 
                alt="Alex Smith - Business Growth Coach and Entrepreneur with 25+ years experience" 
                className="w-80 h-80 object-cover rounded-2xl shadow-xl mx-auto md:mx-0"
                loading="lazy"
              />
            </div>
            
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                Business & Ministry — A Life of Purpose
              </h4>
              <p className="text-gray-600 mb-4">
                For over 35 years, I've been involved with Baptist and New Frontiers Commission Sphere churches, 
                holding leadership positions and serving my community. Married with three children, I understand 
                the balance between family, faith, and business.
              </p>
              <p className="text-gray-600 mb-4">
                My business journey spans 25+ years — I've built, scaled, and sold businesses including stika.co 
                (£600k/year exit). I've also helped 170+ businesses generate over £7 million through proven strategies. 
                Now, I'm combining this experience with my passion for faith-driven entrepreneurship.
              </p>
              
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-center">
                  <span className="text-primary mr-3">✓</span>
                  35+ years in church leadership
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-3">✓</span>
                  25+ years business experience
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-3">✓</span>
                  170+ businesses transformed
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-3">✓</span>
                  Married with 3 children
                </li>
              </ul>
              
              {/* Personal 60-Second Pitch Video */}
              <div className="mb-6">
                <h5 className="text-lg font-semibold text-gray-900 mb-3">
                  Hear From Alex Directly
                </h5>
                <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.youtube.com/embed/l4BzmF-I_6g"
                    title="Alex Smith's 60-Second Personal Pitch - Dorset Growth Business Coach"
                    className="absolute inset-0 w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              
              <div className="bg-blue-50 border-l-4 border-secondary p-4 rounded-r-lg">
                <p className="text-gray-700 font-medium">
                  <strong>The difference?</strong> I bring both marketplace experience and Kingdom perspective — 
                  helping you build businesses that honour God, serve others, and create lasting impact.
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
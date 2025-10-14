import { Card, CardContent } from "@/components/ui/card";

const PricingSection = () => {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    "Weekly 1:1 coaching sessions (60 minutes each)",
    "Personalised growth roadmap and strategy",
    "Access to proven frameworks and templates",
    "Email support between sessions",
    "Quarterly strategic planning reviews",
    "90-day money-back guarantee"
  ];

  const idealFor = [
    "Ready to invest in systematic growth",
    "Turnover £100k+ and want to scale",
    "Willing to implement proven strategies",
    "Committed to long-term success"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Investment in Your Growth
            </h2>
            <p className="text-xl text-muted-foreground">
              Transparent pricing for serious business owners ready to transform their results
            </p>
          </div>

          {/* Main Pricing Card */}
          <Card className="border-none shadow-glow mb-12 overflow-hidden">
            <div className="bg-gradient-to-br from-primary to-secondary p-1">
              <div className="bg-background rounded-lg">
                <CardContent className="p-8 md:p-12">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                      1:1 Business Growth Coaching
                    </h3>
                    <div className="inline-block bg-secondary/10 text-secondary font-semibold px-4 py-2 rounded-full text-sm mb-6">
                      6-month minimum commitment
                    </div>
                    <div className="mb-6">
                      <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
                        £999
                        <span className="text-2xl md:text-3xl text-muted-foreground ml-2">+ VAT</span>
                      </div>
                      <p className="text-lg text-muted-foreground">per month</p>
                    </div>
                    <p className="text-lg text-foreground leading-relaxed max-w-2xl mx-auto">
                      Create your ideal life by understanding your figures, setting clear goals, and putting the right systems in place to grow with confidence.
                    </p>
                  </div>

                  {/* What's Included */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-foreground mb-6 text-center">
                      What's Included
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* ROI Value Proposition */}
                  <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-xl p-6 mb-8">
                    <h4 className="text-lg font-bold text-foreground mb-3 text-center">
                      Return on Investment
                    </h4>
                    <p className="text-center text-foreground mb-3">
                      <strong>If we help you secure just ONE £5,000 client, you've covered 5 months of coaching.</strong>
                    </p>
                    <p className="text-center text-muted-foreground text-sm">
                      Our clients typically see a 2-5x increase in revenue within the first year.
                    </p>
                  </div>

                  {/* Ideal Client Criteria */}
                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-foreground mb-4 text-center">
                      This Programme is Ideal for B2B Business Owners Who Are:
                    </h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {idealFor.map((criteria, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-foreground">{criteria}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Social Proof */}
                  <div className="text-center mb-8">
                    <p className="text-muted-foreground text-sm">
                      Join 170+ B2B businesses investing in their growth
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="text-center">
                    <button
                      onClick={scrollToBooking}
                      className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-primary to-secondary hover:opacity-90 rounded-lg transition-all duration-300 shadow-lg hover:shadow-glow"
                      aria-label="Book your free strategy call to discuss 1:1 coaching"
                    >
                      Book Your Free Strategy Call
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                    <p className="text-sm text-muted-foreground mt-3">
                      Let's discuss whether this is right for your business
                    </p>
                  </div>

                  {/* Trust Badge */}
                  <div className="flex items-center justify-center gap-2 mt-8 pt-8 border-t border-border">
                    <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium text-foreground">90-Day Money-Back Guarantee</span>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>

          {/* Not Right For */}
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-sm text-muted-foreground italic">
              <strong>Not right for you if:</strong> You're looking for a quick fix, not willing to invest time in implementation, or expecting someone else to do the work for you. This is a partnership where we work together to build your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

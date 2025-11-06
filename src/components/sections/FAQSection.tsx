import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "I'm not religious. Is this still for me?",
      answer: "Absolutely. We welcome seekers, skeptics, and anyone exploring purpose beyond profit. Alpha for Business is specifically designed as a safe space to ask hard questions."
    },
    {
      question: "Do I have to join a church?",
      answer: "We don't force anything. Our goal is to connect you with community and spiritual growth—but the pace and depth are entirely up to you."
    },
    {
      question: "What's the cost?",
      answer: "The 15-minute prayer call is completely free. Alpha for Business and the FDE Programme have optional contributions (£50-£400) to cover materials, but scholarships are available. Never let cost be the barrier."
    },
    {
      question: "How much time commitment is this?",
      answer: "Prayer call: 15 minutes. Alpha: 10 weeks, 90 minutes/week. FDE: 8 weeks, 60-90 minutes/week. All sessions are designed for busy entrepreneurs."
    },
    {
      question: "Is this a Dorset-only initiative?",
      answer: "We started in Dorset, but our model is replicable. If you're outside the region and interested in starting something similar, let's talk."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about our programmes
            </p>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

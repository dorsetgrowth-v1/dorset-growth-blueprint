import { useEffect } from "react";

const BookingSection = () => {
  useEffect(() => {
    // Load the booking widget script
    const script = document.createElement('script');
    script.src = 'https://meet.dorsetgrowth.com/js/form_embed.js';
    script.type = 'text/javascript';
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Book Your Free 15-Minute Virtual Coffee Chat
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            No obligation • Immediate value • 100% confidential
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <iframe 
            src="https://meet.dorsetgrowth.com/widget/booking/Alij8mHLPjxNUuNfsyDe" 
            style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '600px' }} 
            scrolling="no" 
            id="Alij8mHLPjxNUuNfsyDe_1757331658732"
            title="Book 15-minute consultation"
          />
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
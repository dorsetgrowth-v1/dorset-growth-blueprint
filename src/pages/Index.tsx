import HeroSection from "@/components/sections/HeroSection";
import ProblemsSection from "@/components/sections/ProblemsSection";
import AboutSection from "@/components/sections/AboutSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TransformationSection from "@/components/sections/TransformationSection";
import ResultsSection from "@/components/sections/ResultsSection";
import SupportSection from "@/components/sections/SupportSection";
import BookingSection from "@/components/sections/BookingSection";

const Index = () => {
  return (
    <main>
      <HeroSection />
      <ProblemsSection />
      <AboutSection />
      <ProcessSection />
      <BookingSection />
      <TransformationSection />
      <ResultsSection />
      <SupportSection />
    </main>
  );
};

export default Index;
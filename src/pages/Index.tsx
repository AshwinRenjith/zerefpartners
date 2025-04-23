
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import WhyZerefSection from "@/components/WhyZerefSection";
import FounderSection from "@/components/FounderSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <WhyZerefSection />
      <FounderSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;

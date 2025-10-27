import { HeroSection } from "@/components/HeroSection";
import { AboutUs } from "@/components/AboutUs";
import { WhyChooseGlobalGrad } from "@/components/WhyChooseGlobalGrad";
import { StudyDestinations } from "@/components/StudyDestinations";
import { PopularUKPrograms } from "@/components/PopularUKPrograms";
import { HowItWorks } from "@/components/HowItWorks";
import { FAQs } from "@/components/FAQs";
import { ContactUs } from "@/components/ContactUs";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutUs />
      <WhyChooseGlobalGrad />
      <StudyDestinations />
      <PopularUKPrograms />
      <HowItWorks />
      <FAQs />
      <ContactUs />
      <WhatsAppButton />
    </div>
  );
}

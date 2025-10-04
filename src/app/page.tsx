import { HeroSection } from "@/components/HeroSection";
import { WhyChooseGlobalGrad } from "@/components/WhyChooseGlobalGrad";
import { HowItWorks } from "@/components/HowItWorks";
import { PopularUKPrograms } from "@/components/PopularUKPrograms";
import { SuccessStories } from "@/components/SuccessStories";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WhyChooseGlobalGrad />
      <HowItWorks />
      <PopularUKPrograms />
      <SuccessStories />
    </div>
  );
}

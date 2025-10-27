import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutUs } from "@/components/AboutUs";
import { WhyChooseGlobalGrad } from "@/components/WhyChooseGlobalGrad";
import { StudyDestinations } from "@/components/StudyDestinations";
import { PopularUKPrograms } from "@/components/PopularUKPrograms";
import { HowItWorks } from "@/components/HowItWorks";
import { FAQs } from "@/components/FAQs";
import { ContactUs } from "@/components/ContactUs";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <section id="why-choose">
        <WhyChooseGlobalGrad />
      </section>
      <section id="destinations">
        <StudyDestinations />
      </section>
      <section id="programs">
        <PopularUKPrograms />
      </section>
      <section id="how-it-works">
        <HowItWorks />
      </section>
      <section id="faqs">
        <FAQs />
      </section>
      <section id="contact">
        <ContactUs />
      </section>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

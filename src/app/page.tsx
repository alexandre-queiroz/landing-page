import { Header } from "@/components/headers/header";
import { IntroSection } from "./_components/intro-section";
import { AboutSection } from "./_components/about-section";
import { FeatureSection } from "./_components/feature-section";
import { FaqSection } from "./_components/faq-scetion";
import { InvestmentSection } from "./_components/investiment-section";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <div className="overflow-auto h-[calc(100vh-4rem)]">
        <IntroSection />
        <AboutSection />
        <FeatureSection />
        <InvestmentSection />
        <FaqSection />
      </div>
    </main>
  );
}

import { HeroSection } from "../components/sections/HeroSection";
import { TrustStripSection } from "../components/sections/TrustStripSection";
import { AboutSection } from "../components/sections/AboutSection";
import { FabricCategoriesSection } from "../components/sections/FabricCategoriesSection";
import { FabricShowcaseSection } from "../components/sections/FabricShowcaseSection";
import { WhyTwisttexSection } from "../components/sections/WhyTwisttexSection";
import { ProcessSection } from "../components/sections/ProcessSection";
import { QualitySection } from "../components/sections/QualitySection";
import { GlobalReachSection } from "../components/sections/GlobalReachSection";
import { ValuesSection } from "../components/sections/ValuesSection";
import { PartnershipCTASection } from "../components/sections/PartnershipCTASection";
import { ContactSection } from "../components/sections/ContactSection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStripSection />
      <AboutSection />
      <FabricCategoriesSection />
      <FabricShowcaseSection />
      <WhyTwisttexSection />
      <ProcessSection />
      <QualitySection />
      <GlobalReachSection />
      <ValuesSection />
      <PartnershipCTASection />
      <ContactSection />
    </>
  );
}

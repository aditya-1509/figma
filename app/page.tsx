import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { ClarityBlock } from "@/components/landing/clarity-block";
import { CollaborationFlow } from "@/components/landing/collaboration-flow";
import { BenefitsTabs } from "@/components/landing/benefits-tabs";
import { UseCases } from "@/components/landing/use-cases";
import { TrustSection } from "@/components/landing/trust-section"; // Reusing Section 6
import { RegisterPanel } from "@/components/landing/register-panel";
import { CTA } from "@/components/landing/cta"; // Reusing Section 9 style if needed, but RegisterPanel covers logical CTA
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-violet-500/30">
      <Navbar />
      <Hero />
      <ClarityBlock />
      <CollaborationFlow />
      <BenefitsTabs />
      <UseCases />
      <TrustSection />
      <RegisterPanel />
      <Footer />
    </main>
  );
}

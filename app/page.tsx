import Navbar from "@/components/landing/navbar";
import Hero from "@/components/landing/hero";
import NetworkBackground from '@/components/landing/network-background';
// Keeping other sections as they were not replaced by user code, or should I hide them to match exact user request?
// User said "now just integrate the coed", which implies the main structure.
// The provided App code only had Navbar, Hero, NetworkBackground.
// I will include the other sections below Hero to keep the full content but valid with the new Hero style.

import { RoleSelection } from "@/components/landing/role-cards";
import { Brands } from "@/components/landing/brands";
import { CollaborationFlow } from "@/components/landing/collaboration-flow";
import { BenefitsTabs } from "@/components/landing/benefits-tabs";
import { UseCases } from "@/components/landing/use-cases";
import { TrustSection } from "@/components/landing/trust-section";
import { RegisterPanel } from "@/components/landing/register-panel";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#030712] text-white overflow-hidden selection:bg-violet-500/30 selection:text-violet-200">

      {/* Background Layer */}
      <NetworkBackground />

      {/* Decorative Gradients (Static) */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-900/10 blur-[100px] rounded-full transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-900/10 blur-[100px] rounded-full transform -translate-x-1/2 translate-y-1/2" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex flex-col">
          <Hero />
          {/* Continuing with content sections to complete the landing page */}
          <RoleSelection />
          <CollaborationFlow />
          <BenefitsTabs />
          <UseCases />
          <Brands />
          <TrustSection />
          <RegisterPanel />
          <Footer />
        </main>
      </div>

    </div>
  );
}

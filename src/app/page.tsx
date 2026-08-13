"use client";

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LocalTrustStrip from "@/components/LocalTrustStrip";
import ServicesSection from "@/components/ServicesSection";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import WhyComfortMatters from "@/components/WhyComfortMatters";
import ContactSection from "@/components/ContactSection";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-warm-ivory text-stone-900 selection:bg-amber-200 selection:text-amber-950">
      <Header />
      <Hero />
      <LocalTrustStrip />
      <ServicesSection />
      <BeforeAfterSlider />
      <WhyComfortMatters />
      <ContactSection />
      <MobileStickyCTA />
      <Footer />
    </main>
  );
}

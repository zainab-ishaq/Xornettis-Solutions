"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import Technologies from "@/components/Technologies";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AIWidget from "@/components/ai/AIWidget"; // Path ko '@/' ke sath fix kiya hai

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About /> 
        <Services />
        <WhyChooseUs />
        <Process />
        <Technologies />
        <Portfolio />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      <Footer />

      <AIWidget /> 
    </>
  );
}
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TickerStrip from "@/components/TickerStrip";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CtaBand from "@/components/CtaBand";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TickerStrip />
        <Services />
        <WhyUs />
        <HowItWorks />
        <Testimonials />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

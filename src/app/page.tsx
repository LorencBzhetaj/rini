import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen"; // ← shto këtë

export default function Home() {
  return (
    <>
      <LoadingScreen /> {/* ← shto këtë */}
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Services />
        <WhyUs />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
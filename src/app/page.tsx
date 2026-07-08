import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Reel from "@/components/Reel";
import Work from "@/components/Work";
import Services from "@/components/Services";
import About from "@/components/About";
import Numbers from "@/components/Numbers";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div id="top" className="relative w-full min-h-screen flex flex-col bg-brand-bg text-brand-text overflow-hidden select-none">
      {/* Absolute top grid glow detail */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[300px] bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Global Navigation Header */}
      <Navbar />

      <main className="flex-grow w-full flex flex-col">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Selected Work Section */}
        <Work />

        {/* 3. Featured Reel Section */}
        <Reel />

        {/* 4. About Section */}
        <About />

        {/* 5. Services Section */}
        <Services />

        {/* 6. Experience Numbers Section */}
        <Numbers />

        {/* 7. Testimonials Section */}
        <Testimonials />

        {/* 8. Contact Section */}
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

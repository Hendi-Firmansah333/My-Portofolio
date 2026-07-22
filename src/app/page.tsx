import SplashScreen from "@/components/SplashScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PortfolioShowcase from "@/components/PortfolioShowcase";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <SplashScreen />
      <div className="mesh-bg">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>
      <Navbar />
      <Hero />
      <About />
      <PortfolioShowcase />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

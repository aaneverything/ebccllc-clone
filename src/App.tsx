import Threads from "./components/bg";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/layout/Hero";
import SalesGoals from "./components/layout/SalesGoals";
import AboutUs from "./components/layout/AboutUs";
import OurValues from "./components/layout/OurValues";
import PCICompliance from "./components/layout/PCICompliance";
import Services from "./components/layout/Services";
import Kerjasama from "./components/layout/Kerjasama";
import ThreeSteps from "./components/layout/ThreeSteps";
import Testimonials from "./components/layout/Testimonials";
import ContactForm from "./components/layout/ContactForm";
import Footer from "./components/layout/Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="relative w-full min-h-screen">
      <div className="fixed inset-0 z-0 bg-neutral-900">
        <Threads
          amplitude={5}
          color={[0.1, 0.5, 0.4]}
          distance={1.4}
          enableMouseInteraction={false}
        />
      </div>

      <div className="relative z-10">
        <Navbar />

        <Hero />
        <SalesGoals />

        <div className="bg-neutral-900">
          <AboutUs />
        </div>

        <OurValues />

        <PCICompliance />

        <Kerjasama />

        <div className="bg-neutral-100">
          <Services />
        </div>

        <ThreeSteps />

        <Testimonials />

        <div className="bg-neutral-900">
          <ContactForm />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;

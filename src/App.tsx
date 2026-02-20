import Threads from "./components/layout/bg";
import Navbar from "./components/layout/Navbar";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "./components/layout/Hero";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-black">
        <Threads
          amplitude={5}
          color={[0.2, 0.6, 1]}
          distance={1.4}
          enableMouseInteraction={false}
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-10">
        <Navbar />
      </div>
    </div>
  );
}

export default App;

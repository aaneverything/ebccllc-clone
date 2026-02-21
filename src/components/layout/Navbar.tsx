import logo from "../../assets/download.svg";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="w-full sticky top-0 left-0 z-50 bg-white">
      <div className="flex items-center justify-between px-5 md:px-10 lg:px-14 py-4 text-lg max-w-7xl mx-auto">
        <img src={logo} className="h-8" alt="Bacus Call Centers LLC" />

        <button
          className="lg:hidden text-black p-2"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className="hidden lg:flex gap-6 items-center text-sm">
          <a
            href="#home"
            className="text-black font-medium hover:underline underline-offset-8 decoration-orange-500 transition"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-black font-medium hover:underline underline-offset-8 decoration-orange-500 transition"
          >
            About Us
          </a>
          <a
            href="#services"
            className="text-black font-medium hover:underline underline-offset-8 decoration-orange-500 transition"
          >
            Service
          </a>
          <a
            href="#contact"
            className="bg-black hover:bg-orange-700 text-orange-500 hover:text-black rounded-full px-6 font-bold py-3 transition"
          >
            Contact Us
          </a>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        } bg-white text-center backdrop-blur-sm`}
      >
        <div className="px-4 pb-4 pt-1 flex flex-col gap-2">
          <a
            href="#home"
            className="text-black font-medium hover:underline underline-offset-8 decoration-orange-500 transition py-2"
            onClick={() => setMobileOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="text-black font-medium hover:underline underline-offset-8 decoration-orange-500 transition py-2"
            onClick={() => setMobileOpen(false)}
          >
            About Us
          </a>
          <a
            href="#services"
            className="text-black font-medium hover:underline underline-offset-8 decoration-orange-500 transition py-2"
            onClick={() => setMobileOpen(false)}
          >
            Service
          </a>
          <a
            href="#contact"
            className="bg-black hover:bg-orange-700 text-orange-500 hover:text-black rounded-full px-6 font-bold py-3 transition text-center"
            onClick={() => setMobileOpen(false)}
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

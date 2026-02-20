import logo from "../assets/download.svg";
import { Menu } from "lucide-react";

function Navbar() {
  return (
    <nav className="z-50 transition-all duration-300 w-full lg:-top-96 top-0 sticky bg-white ">
      <div className="flex items-center justify-between px-5 md:px-10 lg:px-14 py-5 text-lg content bg-white  ">
        <img src={logo} className="" />
        <Menu className="lg:hidden" />
        <div className="hidden lg:flex gap-8 items-center">
          <a
            href="#"
            className="font-medium hover:underline underline-offset-8 decoration-orange-500 transition"
          >
            Home
          </a>
          <a
            href="#"
            className="font-medium hover:underline underline-offset-8 decoration-orange-500 transition"
          >
            About us
          </a>
          <a
            href="#"
            className="font-medium hover:underline underline-offset-8 decoration-orange-500 transition"
          >
            Service
          </a>
          <a
            href="#"
            className="hover:bg-orange-500 hover:text-black bg-black rounded-full text-orange-500 px-6 font-bold py-4 transition"
          >
            Contact us
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

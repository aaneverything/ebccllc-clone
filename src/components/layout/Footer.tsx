import logo from "../../assets/download.svg";

export default function Footer() {
  return (
    <footer className="pt-8 pb-6 px-4 md:px-8 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-6 mb-6">
          <div className="md:w-4/12">
            <img src={logo} className="h-8 mb-3" alt="Bacus Call Centers LLC" />
          </div>
          <div className="flex gap-12">
            <div className="flex flex-col gap-2">
              <a
                href="#home"
                className="text-gray-400 text-xs hover:text-orange-500 transition"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-400 text-xs hover:text-orange-500 transition"
              >
                About Us
              </a>
              <a
                href="#services"
                className="text-gray-400 text-xs hover:text-orange-500 transition"
              >
                Service
              </a>
              <a
                href="#contact"
                className="text-gray-400 text-xs hover:text-orange-500 transition"
              >
                Contact
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <a
                href="#"
                className="text-gray-400 text-xs hover:text-orange-400 transition"
              >
                Terms and Conditions
              </a>
              <a
                href="#"
                className="text-gray-400 text-xs hover:text-orange-400 transition"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-neutral-800 pt-4">
          <p className="text-gray-500 text-[10px] leading-relaxed max-w-xl">
            These Terms will be applied fully and affect to your use of this
            Website. By using this Website, you agreed to accept all terms and
            conditions written in here.
          </p>
        </div>
      </div>
    </footer>
  );
}

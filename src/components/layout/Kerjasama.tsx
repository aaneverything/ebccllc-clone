import logo1 from "../../assets/logo/logo 1.jpg";
import logo2 from "../../assets/logo/logo 2.jpg";
import logo3 from "../../assets/logo/logo 3.jpg";
import logo4 from "../../assets/logo/logo 4.jpg";
import logo5 from "../../assets/logo/logo 5.jpg";
import logo6 from "../../assets/logo/logo 6.jpeg";
import logo7 from "../../assets/logo/logo 7.jpg";
import logo8 from "../../assets/logo/logo 8.jpg";
import logo9 from "../../assets/logo/logo 9.jpg";
import logo10 from "../../assets/logo/logo 10.jpeg";
import logo11 from "../../assets/logo/logo 11.jpg";
import logo12 from "../../assets/logo/logo 12.jpeg";
import logo13 from "../../assets/logo/logo 13.jpg";

const logos = [
  { src: logo1, alt: "EU GDPR Compliant" },
  { src: logo2, alt: "AA-ISP" },
  { src: logo3, alt: "Certified WBENC" },
  { src: logo4, alt: "PACE SRO Auditor" },
  { src: logo5, alt: "PACE" },
  { src: logo6, alt: "WOSB" },
  { src: logo7, alt: "PCI Certified" },
  { src: logo8, alt: "BBB Accredited" },
  { src: logo9, alt: "Featured on UpCity" },
  { src: logo10, alt: "CECP PACE" },
  { src: logo11, alt: "U.S. Chamber of Commerce" },
  { src: logo12, alt: "Military Spouse Employment" },
  { src: logo13, alt: "Clutch Top Advertising" },
];

export default function Kerjasama() {
  return (
    <section className="bg-white rounded-t-[40px]  relative overflow-hidden">
      <div className="content pt-[100px] pb-20 lg:pt-[125px] lg:pb-[118px] px-3">
        {/* Heading */}
        <div className="text-center mb-6" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-4">
            The Company We Keep
          </h2>
          <p className="text-black text-[10px]  max-w-3xl mx-auto">
            Our team is active in a large number of telemarketing, call center
            and professional trade organizations, including the Professional
            Association for Customer Engagement (PACE), AA-ISP, and the ASAE. We
            are also affiliate members of the Energy Marketing and Customer
            Service (EMACS) group.
          </p>
        </div>

        <div
          className="mt-10 overflow-hidden"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="flex animate-marquee gap-12 items-center">
            {[...logos, ...logos].map((logo, i) => (
              <img
                key={i}
                src={logo.src}
                alt={logo.alt}
                className="h-12 md:h-16 w-auto object-contain flex-shrink-0 grayscale transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { ChevronDown, X } from "lucide-react";

const accordionData = [
  {
    title: "B2B Outbound Marketing",
    content:
      "If you are considering a telemarketing firm for B2B outbound marketing solutions, look no further. Eight Bacus Call Centers LLC is your premier choice for B2B outbound marketing.",
  },
  {
    title: "B2C Outbound Marketing",
    content:
      "Our B2C outbound marketing solutions help you reach consumers directly with personalized messaging, driving engagement and conversions at scale.",
  },
  {
    title: "TCPA Call Center Consulting",
    content:
      "Navigate the complexities of TCPA regulations with our expert consulting services. We ensure your call center operations remain compliant while maximizing outreach effectiveness.",
  },
  {
    title: "Outsourced Telemarketing QA",
    content:
      "Our quality assurance programs ensure every call meets the highest standards. We monitor, evaluate, and optimize your telemarketing operations for peak performance.",
  },
];

export default function AboutUs() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section id="about" className="py-14 px-4 md:px-8 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8" data-aos="fade-up">
          <p className="text-orange-500 uppercase tracking-widest text-xs font-semibold mb-2">
            About Us
          </p>
          <h2 className="text-2xl md:text-3xl font-bold">
            We deliver{" "}
            <span className="text-orange-500 italic">
              exceptional call center sales
            </span>{" "}
            results
          </h2>
        </div>

        <div
          className="flex flex-col lg:flex-row gap-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {/* Left description */}
          <div className="lg:w-5/12">
            <p className="text-gray-400 text-sm leading-relaxed mb-3">
              Eight Bacus Call Centers LLC provides quality call center
              solutions that achieve sales results. We exist because the world
              is driven by sales. We deliver exceptional results because our
              company culture is vibrant and alive.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              We offer the solutions and services to make the most of your
              contact center dollars. We specialize in:
            </p>
          </div>

          {/* Accordion */}
          <div className="lg:w-7/12">
            {accordionData.map((item, index) => (
              <div key={index} className="border-b border-neutral-700">
                <button
                  className="flex items-center justify-between w-full py-4 text-left"
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                >
                  <span className="font-bold text-white text-sm">
                    {item.title}
                  </span>
                  {openIndex === index ? (
                    <X size={18} className="text-white flex-shrink-0" />
                  ) : (
                    <ChevronDown
                      size={18}
                      className="text-white flex-shrink-0"
                    />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index
                      ? "max-h-40 pb-4 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-400 text-xs leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

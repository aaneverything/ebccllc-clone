import { useState, useEffect, useCallback } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Headphones,
  Phone,
  Briefcase,
  BarChart3,
  Users,
  MessageSquare,
  ClipboardCheck,
  Layers,
} from "lucide-react";

const services = [
  {
    title: "Telemarketing Services",
    description:
      "With Telemarketing as a core competency, we understand that there are several factors that contribute to successfully outsourcing part or all of your business.",
    icon: Phone,
  },
  {
    title: "Qualified Sales Leads",
    description:
      "The experts at Quality Contact Solutions will help you by generating the highly qualified sales leads that will meet and exceed your expectations.",
    icon: Headphones,
  },
  {
    title: "Consulting & Outsourced Telemarketing QA",
    description:
      "As call center experts, we can quickly and cost-effectively help you solve your most challenging problems. As industry experts, we know the telemarketing and call center regulations and how they apply to your business.",
    icon: ClipboardCheck,
  },
  {
    title: "B2B Outbound Marketing",
    description:
      "If you are considering a telemarketing firm for B2B outbound marketing solutions, look no further. Quality Contact Solutions is your premier choice for B2B outbound marketing.",
    icon: Briefcase,
  },
  {
    title: "B2C Outbound Marketing",
    description:
      "Using outbound marketing has become a cost effective solution for organizations looking to increase sales with the help of outside expertise.",
    icon: Phone,
  },
  {
    title: "Inbound Call Center",
    description:
      "We are experts at helping you create a staffing plan and forecast to ensure your calls are handled with minimum wait time and maximum customer experience.",
    icon: Phone,
  },
  {
    title: "Telemarketing Lead Generation",
    description:
      "By utilizing our business to business lead generation services, your sales team is supplied with a steady stream of qualified leads to help you hit your sales goal.",
    icon: BarChart3,
  },
  {
    title: "Shared & Dedicated Inbound Call Center",
    description:
      "Most shared programs will use a team of call center agents that are more experienced and have longer tenure with the inbound service agency.",
    icon: Users,
  },
  {
    title: "Blended Call Center",
    description:
      "At Quality Contact Solutions, 100% of our workstations have an omni-channel capability. In short, this means that the same workstation can seamlessly handle an inbound call, outbound call, email, text or chat.",
    icon: Layers,
  },
  {
    title: "Appointment Setting",
    description:
      "At Quality Contact Solutions, we understand that building a pipeline of new customers is essential to attaining sales goals. One of the common tacticts employed to secure these new customers is through Appointment Setting.",
    icon: MessageSquare,
  },
];

const ITEMS_PER_PAGE = 3;
const TOTAL_PAGES = Math.ceil(services.length / ITEMS_PER_PAGE);
const AUTO_SLIDE_INTERVAL = 5000;

export default function Services() {
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = useCallback(() => {
    setCurrentPage((prev) => (prev + 1) % TOTAL_PAGES);
  }, []);

  const prevPage = useCallback(() => {
    setCurrentPage((prev) => (prev - 1 + TOTAL_PAGES) % TOTAL_PAGES);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextPage, AUTO_SLIDE_INTERVAL);
    return () => clearInterval(interval);
  }, [nextPage]);

  const currentItems = services.slice(
    currentPage * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE,
  );

  return (
    <section id="services" className="py-14 px-4 md:px-8 lg:px-12">
      <div className="max-w-5xl mx-auto" data-aos="fade-up">
        <div className="text-center mb-3">
          <p className="text-black uppercase tracking-widest text-md font-semibold mb-1">
            Services
          </p>
          <h2 className="text-3xl font-bold text-black mb-1">
            Business Call Center & Telemarketing Services
          </h2>
          <h3 className="text-3xl font-bold text-orange-500 mb-3">
            that achieve results
          </h3>
        </div>
        <p className="text-black font-semibold text-[15px] text-center max-w-2xl mx-auto mb-8">
          Our team is active in a large number of telemarketing, call center and
          professional trade organizations, including the Professional
          Association for Customer Engagement (PACE), AA-ISP, and the ASAE. We
          are also affiliate members of the Energy Marketing and Customer
          Service (EMACS) group.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {currentItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={`${currentPage}-${index}`}
                className={`bg-white rounded-3xl px-6 py-8  min-h-[600px] flex flex-col align-center gap-6 items-center text-center justify-center  hover:shadow-xl transition-all duration-300 animate-fadeIn ${
                  index === 1 ? "hidden md:flex" : ""
                } ${index === 2 ? "hidden lg:flex" : ""}`}
              >
                <div className="w-[140px] h-[140px] flex items-center justify-center   mb-3 bg-orange-50 rounded-full ">
                  <Icon
                    size={28}
                    className="text-orange-500"
                    strokeWidth={1.5}
                  />
                </div>
                <h4 className="font-bold text-black text-[18px] mb-2">
                  {item.title}
                </h4>
                <p className="text-black font-semibold text-[15px] ">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-center gap-2">
          <button
            onClick={prevPage}
            className="w-8 h-8 rounded-full border-2 border-orange-500 flex items-center justify-center hover:bg-orange-500 hover:text-white transition text-orange-500"
          >
            <ChevronLeft size={16} />
          </button>
          <div className="flex gap-1.5 items-center">
            {Array.from({ length: TOTAL_PAGES }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === currentPage
                    ? "bg-orange-500 w-3 h-3"
                    : "bg-gray-300 hover:bg-gray-400 w-2.5 h-2.5"
                }`}
              />
            ))}
          </div>
          <button
            onClick={nextPage}
            className="w-8 h-8 rounded-full border-2 border-orange-500 flex items-center justify-center hover:bg-orange-500 hover:text-white transition text-orange-500"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

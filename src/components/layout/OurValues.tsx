import { useState, useEffect, useCallback } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Trophy,
  Settings,
  Target,
  ThumbsUp,
  Zap,
  Award,
  Heart,
  Star,
} from "lucide-react";

const values = [
  { icon: Trophy, label: "Urgency" },
  { icon: Settings, label: "Service" },
  { icon: Target, label: "Achieving Goals" },
  { icon: ThumbsUp, label: "Being Positive" },
  { icon: Zap, label: "Innovation" },
  { icon: Award, label: "Excellence" },
  { icon: Heart, label: "Integrity" },
  { icon: Star, label: "Leadership" },
];

const ITEMS_PER_PAGE = 4;
const TOTAL_PAGES = Math.ceil(values.length / ITEMS_PER_PAGE);
const AUTO_SLIDE_INTERVAL = 4000;

export default function OurValues() {
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

  const currentItems = values.slice(
    currentPage * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE,
  );

  return (
    <section className="bg-white rounded-4xl md:rounded-[64px] relative overflow-x-hidden ">
      <div className="content px-5 md:px-10 xl:px-14 pt-[73px] pb-[60px]">
        <div className="text-center mb-3">
          <p className="text-black uppercase tracking-widest text-xl font-bold mb-1">
            What We Achieve
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-black">
            Our <span className="text-orange-500">Values</span>
          </h2>
        </div>
        <p className="text-black text-lg text-center max-w-2xl mx-auto mb-8 font-semibold">
          Eight Bacus Call Centers LLC serves an array of verticals and offers
          solutions that apply to each customer, market and industry. We are
          known for being a world class telesales organization and for providing
          exceptional results through our expertise in the industry.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8">
          {currentItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={`${currentPage}-${index}`}
                className="bg-gray-50 min-h-[270px] md:min-h-[318px] flex flex-col items-center py-4 rounded-4xl justify-center text-center  transition-all duration-300 animate-fadeIn"
              >
                <div className=" w-48 h-48 md:w-64 md:h-64 flex flex-col md:flex-row items-center justify-center mb-3">
                  <Icon
                    size={100}
                    className="text-orange-500"
                    strokeWidth={1.5}
                  />
                  <p className="font-bold text-black text-xl">{item.label}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation */}
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

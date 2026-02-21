import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import avatar1 from "../../assets/reviewers/person1.jpg";
import avatar2 from "../../assets/reviewers/person2.jpg";
import avatar3 from "../../assets/reviewers/person3.jpg";
import avatar4 from "../../assets/reviewers/person4.jpg";

const testimonials = [
  {
    quote:
      "I would give 8Bacus five stars for each category if I could! I LOVE the testimonial.",
    name: "AGELLA MAXWELL",
    role: "CEO of Daring Independent",
    avatar: avatar1,
  },
  {
    quote:
      "Working with the 8Bacus team is a pleasure. Their mantra of intelligent urgency is impressive. Their pursuit of meeting my sales and customer service goals is always appreciated. If you need a B2B outsourced call center team, I highly recommend A.J., Ryan and the team at 8Bacus",
    name: "LI XINYI",
    role: "Quality Monitoring Specialist",
    avatar: avatar2,
  },
  {
    quote:
      "We are very pleased with the performance of the company an look forward to a long and prosperous relationship. Based on their outstanding performance, we are currently expanding ourr profram to target larger commercial roofs.",
    name: "KEVIN TAN WEI JIE",
    role: "Customer operations Leade",
    avatar: avatar3,
  },
  {
    quote:
      "From day 1, Angela and the team at 8Bacus have deonstrated ther commitment to quality. We rely on the 8Bacus team to conduct multiple call center programs pn an annual basis. In our busiest years, we had more than 100 diffrent programs running in markets around the United States. Their flexibility and attention to detail is second to none.",
    name: "ARUN RAJAN",
    role: "Quality Monitoring Specialist",
    avatar: avatar4,
  },
];

const AUTO_SLIDE_INTERVAL = 5000;

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(next, AUTO_SLIDE_INTERVAL);
    return () => clearInterval(interval);
  }, [next]);

  const testimonial = testimonials[current];

  return (
    <section className="relative py-14 px-4 md:px-8 lg:px-12">
      <div className="relative z-10 max-w-5xl mx-auto" data-aos="fade-up">
        <div className="flex flex-col lg:flex-row  gap-8">
          <div className="lg:w-5/12">
            <h2 className="text-[18px] font-bold mb-1">
              Hear from
            </h2>
            <h2 className="text-[18px] font-bold text-orange-500 mb-3">
              happy customers.
            </h2>
            <p className="text-gray-400 text-md font-bold mb-4">
              What People Say About Us.
            </p>
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-8 h-8 rounded-full border-2 border-orange-600 flex items-center justify-center hover:border-orange-500 hover:text-orange-500 transition text-white"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={next}
                className="w-8 h-8 rounded-full border-2 border-orange-600 flex items-center justify-center hover:border-orange-500 hover:text-orange-500 transition text-white"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div className="lg:w-7/12">
            <div
              key={current}
              className="bg-white rounded-3xl p-12 md:p-16 animate-fadeIn"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <img
                  src={testimonial.avatar}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-orange-500 text-lg uppercase">
                    {testimonial.name}
                  </p>
                  <p className="text-black text-sm">{testimonial.role}</p>
                </div>
                <p className="text-black text-lg md:text-sm leading-relaxed">
                  {testimonial.quote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

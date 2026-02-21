export default function SalesGoals() {
  return (
    <section className="relative z-10 px-4 md:px-8 lg:px-12 pb-16">
      <div
        className="bg-white rounded-2xl max-w-4xl mx-auto overflow-hidden shadow-xl"
        data-aos="fade-up"
      >
        {/* Heading - full width centered on top */}
        <div className="px-6 md:px-10 pt-8 pb-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-black leading-tight">
            Hitting Your Sales Goals Should Feel{" "}
            <span className="text-orange-500 italic">Effortless</span>
            <br />— With the Right Support.
          </h2>
        </div>

        {/* Image left + Text right */}
        <div className="flex flex-col md:flex-row px-6 md:px-10 pb-8 gap-6">
          <div className="md:w-5/12">
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=500&fit=crop"
              alt="Customer support representative"
              className="w-full h-48 md:h-full object-cover rounded-lg"
            />
          </div>

          <div className="md:w-7/12 flex flex-col justify-center">
            <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-3">
              Achieving your sales and service targets takes more than just
              effort — it demands strategy, focus, and the right team behind
              you. We know your time is valuable, and chasing quotas or solving
              every operational hiccup shouldn't pull you away from leading your
              business forward.
            </p>
            <p className="text-black font-bold text-xs md:text-sm mb-3">
              That's where we come in.
            </p>
            <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
              With our expert telemarketing services, you'll turn every customer
              interaction into real opportunities — without spreading your team
              thin. Let us handle the outreach, follow-ups, and lead generation,
              so you can stay focused on what truly matters: growing your
              business with confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

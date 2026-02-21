export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-5 md:px-10 lg:px-14 pt-20"
      data-aos="fade-up"
    >
      <div className="max-w-2xl" data-aos="fade" data-aos-delay="200">
        <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-6">
          Your Trusted Partner in{" "}
          <span className="text-orange-500">Customer Support Excellence</span>
        </h1>
        <p className="text-gray-300 text-base md:text-lg font-bold">
          We specialize in outbound calls that connect, engage, and convert.
          With proven telemarketing strategies and skilled agents, we help your
          business generate leads, close deals, and grow faster — one call at a
          time.
        </p>
      </div>
    </section>
  );
}

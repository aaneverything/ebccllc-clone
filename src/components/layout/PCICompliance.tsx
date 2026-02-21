import pciCertified from "../../assets/logo/pciservice.jpg";

export default function PCICompliance() {
  return (
    <section className="py-14 px-4">
      <div className="max-w-5xl mx-auto">
        <div
          className="flex flex-col lg:flex-row gap-8 items-center"
          data-aos="fade-up"
        >
          <div className="lg:w-1/2">
            <p className="text-white font-bold text-xs uppercase tracking-wider mb-1">
              PCI Level 1 Call Center
            </p>
            <h2 className="text-2xl font-bold mb-4">
              A PCI Level 1 Call Center Ensures{" "}
              <span className="text-orange-500">
                Credit Card Data is Secure
              </span>
            </h2>
            <p className="text-white text-lg  mb-3">
              As a company, if you accept or process payment cards, the PCI Data
              Security Standards apply to you. If you take credit cards via
              inbound telemarketing, customer service or outbound telemarketing,
              you will need a PCI compliant call center, preferably a PCI
              Certified Level 1 call center.
            </p>
            <p className="text-white text-lg  mb-3">
              It’s in the news continuously – consumer credit card data is
              hacked and stolen. In an effort to combat these threats, Visa,
              MasterCard, American Express, Discover and JCB created a set of
              standards known as the Payment Card Industry Data Security
              Standards (PCI DSS). PCI DSS is required for all entities that
              store, process, or transmit cardholder data, including call center
              vendors and outsourcers.
            </p>
            <p className="text-white text-lg ">
              These standards include technical and operational requirements for
              organizations accepting or processing payment transactions. PCI
              DSS helps a company to avoid potential severe penalties/fines or
              even lose their credit card processing arrangement if a breach
              were to occur.
            </p>
          </div>

          <div className="lg:w-1/2" data-aos="fade-left" data-aos-delay="200">
            <div className="bg-white pt-10 pb-14 md:pb-[96px] px-7 md:px-11 rounded-[30px] text-center relative overflow-hidden">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center">
                <img
                  src={pciCertified}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="border-t pt-4">
                <p className="text-black text-xl font-semibold">
                  8Bacus has been a PCI Certified Level 1 Call Center since May
                  2013. Over the years, the PCI Security Standards Council
                  continues to add requirements and controls to make cardholder
                  data more secure. 8Bacus has successfully made the adjustments
                  necessary to continue to be PCI Level 1 certified.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

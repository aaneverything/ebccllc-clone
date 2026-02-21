export default function ThreeSteps() {
  return (
    <section className="py-14 px-4 md:px-8 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl p-6 md:p-8" data-aos="fade-right">
          <p className="text-neutral-800 uppercase text-lg font-extrabold mb-2">
            Three Steps to Success
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 leading-tight">
            Improve Your Bottom Line
          </h2>
          <p className="text-black font-semibold text-md leading-relaxed mb-6">
            We have the tools and expertise needed to reduce your operating
            costs while improving key performance metrics important to your
            organization.
          </p>

          <div className="flex flex-col gap-3">
            {/* Step 01 */}
            <div className="rounded-[40px] p-4 flex sm:flex-row flex-col items-center gap-4 transition-all duration-300 bg-orange-600 text-white">
              <span className="text-[100px] font-bold leading-none text-orange-800">
                01
              </span>
              <div>
                <h4 className="text-xl font-extrabold mb-0.5">
                  Request a Quote
                </h4>
                <p className="text-md font-medium text-orange-100">
                  Let us know the challenges you're facing and looking to
                  address.
                </p>
              </div>
            </div>

            {/* Step 02 */}
            <div className="rounded-[40px] p-4 flex sm:flex-row flex-col items-center gap-4 transition-all duration-300 bg-neutral-100 text-black ">
              <span className="text-[100px] font-bold leading-none text-gray-400">
                02
              </span>
              <div>
                <h4 className="text-xl font-extrabold mb-0.5">
                  Get a Customized Plan
                </h4>
                <p className="text-md font-medium text-black">
                  With the information we learn from you, we'll craft a plan
                  that addresses your business needs.
                </p>
              </div>
            </div>

            {/* Step 03 */}
            <div className="rounded-[40px] p-4 flex sm:flex-row flex-col items-center gap-4 transition-all duration-300 bg-slate-800 text-black ">
              <span className="text-[100px] font-bold leading-none text-gray-400">
                03
              </span>
              <div>
                <h4 className="text-xl text-white font-extrabold mb-0.5">
                  Sit back & relax!
                </h4>
                <p className="text-md font-medium text-white">
                  Have peace of mind knowing that we'll work tirelessly to
                  achieve your business goals. We are driven to succeed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Globe, Phone } from "lucide-react";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-14">
      <div>
        <div className="rounded-[30px] bg-white overflow-hidden flex flex-col gap-3 py-5 px-5 md:flex-row shadow-xl">
          <div className="md:w-full rounded-3xl bg-gray-200 p-6 md:p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl lg:text-3xl font-extrabold text-black mb-0.5 ">
                Have a project in mind? Let's connect
              </h3>
              <p className="text-black text-md font-semibold">
                We have three projects with this template and that is because we
                love the design, the large number of possibilities.
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-black ">
                <Globe size={16} className="text-orange-500" />
                <span className="text-lg font-bold">ebccllc.com</span>
              </div>
              <div className="flex items-center gap-2 text-black ">
                <Phone size={16} className="text-orange-500" />
                <span className="text-lg font-bold">+971 5434 76408</span>
              </div>
            </div>
          </div>

          <div className="md:w-full bg-neutral-800 p-6 md:p-8 rounded-3xl">
            <h3 className="text-xl lg:text-3xl font-bold mb-0.5">
              Send a message
            </h3>
            <p className="text-white text-xs mb-4">
              We're here to answer any question you may have.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="text-white text-[10px] block mb-0.5">
                  Your name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-neutral-600 text-white pb-1.5 outline-none focus:border-orange-500 transition text-xs"
                  required
                />
              </div>
              <div>
                <label className="text-white text-[10px] block mb-0.5">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-neutral-600 text-white pb-1.5 outline-none focus:border-orange-500 transition text-xs"
                  required
                />
              </div>
              <div>
                <label className="text-white text-[10px] block mb-0.5">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-neutral-600 text-white pb-1.5 outline-none focus:border-orange-500 transition text-xs"
                />
              </div>
              <div>
                <label className="text-gray-400 text-[10px] block mb-0.5">
                  Your message (optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={2}
                  className="w-full bg-transparent border-b border-neutral-600 text-white pb-1.5 outline-none focus:border-orange-500 transition text-xs resize-y"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2.5 rounded-full border-2 border-orange-500 text-orange-500 font-semibold hover:bg-orange-500 hover:text-white transition text-xs"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

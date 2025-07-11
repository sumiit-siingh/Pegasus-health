import AnimateOnScroll from "../../components/AnimateOnScroll";

const ContactPage = () => {
  return (
    <div className="space-y-16 py-12">
      {/* Page Header */}
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
          Contact <span className="text-[#00B2FF]">Us</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
          Have a question? We're here to help. Reach out to us via phone, email,
          or the form below.
        </p>
      </section>

      {/* Main Content: Info + Form */}
      <AnimateOnScroll>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Contact Info */}
          <div className="bg-gray-900/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-white">
                Office Address
              </h3>
              <p className="mt-1 text-gray-300">
                [Street Address]
                <br />
                [City], Florida [Zip Code]
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">Email</h3>
              <a
                href="mailto:info@pegasushealth.com"
                className="mt-1 text-gray-300 hover:text-[#00B2FF]"
              >
                info@pegasushealth.com
              </a>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">Phone</h3>
              <p className="mt-1 text-gray-300">[Your Phone Number]</p>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Send an Inquiry
            </h2>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="full-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="full-name"
                  id="full-name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#00B2FF] focus:border-[#00B2FF]"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#00B2FF] focus:border-[#00B2FF]"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#00B2FF] focus:border-[#00B2FF]"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-[#00B2FF] text-white font-bold py-3 px-4 rounded-md hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00B2FF] transition-colors duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>
      </AnimateOnScroll>
    </div>
  );
};

export default ContactPage;

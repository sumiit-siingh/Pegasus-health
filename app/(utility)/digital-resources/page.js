import AnimateOnScroll from "../../components/AnimateOnScroll";

const DownloadIcon = () => (
  <svg
    className="w-5 h-5 mr-2"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
    />
  </svg>
);

const DigitalResourcesPage = () => {
  return (
    <div className="space-y-16 py-12">
      {/* Page Header */}
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
          Digital <span className="text-[#00B2FF]">Resources</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
          Your one-stop shop for all necessary forms, brochures, and onboarding
          materials.
        </p>
      </section>

      {/* Resources Grid */}
      <AnimateOnScroll>
        <section className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Resource Card 1 */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-white/10 p-6 rounded-2xl flex flex-col">
              <h2 className="text-xl font-bold text-white">
                Broker Onboarding Kit
              </h2>
              <p className="mt-2 text-gray-300 flex-grow">
                Everything you need to get started, including contracts and
                welcome information.
              </p>
              <a
                href="#"
                className="mt-6 bg-[#00B2FF] text-white font-bold py-2 px-4 rounded-md hover:bg-cyan-400 inline-flex items-center justify-center transition-colors duration-300"
              >
                <DownloadIcon />
                Download Kit
              </a>
            </div>

            {/* Resource Card 2 */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-white/10 p-6 rounded-2xl flex flex-col">
              <h2 className="text-xl font-bold text-white">
                PPO Plan Highlights PDF
              </h2>
              <p className="mt-2 text-gray-300 flex-grow">
                A comprehensive, client-facing document detailing the key
                advantages of our plans.
              </p>
              <a
                href="#"
                className="mt-6 bg-[#00B2FF] text-white font-bold py-2 px-4 rounded-md hover:bg-cyan-400 inline-flex items-center justify-center transition-colors duration-300"
              >
                <DownloadIcon />
                Download PDF
              </a>
            </div>

            {/* Resource Card 3 */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-white/10 p-6 rounded-2xl flex flex-col">
              <h2 className="text-xl font-bold text-white">Enrollment Form</h2>
              <p className="mt-2 text-gray-300 flex-grow">
                The official form for enrolling new clients into Pegasus Health
                Group plans.
              </p>
              <a
                href="#"
                className="mt-6 bg-[#00B2FF] text-white font-bold py-2 px-4 rounded-md hover:bg-cyan-400 inline-flex items-center justify-center transition-colors duration-300"
              >
                <DownloadIcon />
                Download Form
              </a>
            </div>

            {/* Resource Card 4 */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-white/10 p-6 rounded-2xl flex flex-col">
              <h2 className="text-xl font-bold text-white">
                Marketing Brochure
              </h2>
              <p className="mt-2 text-gray-300 flex-grow">
                Professionally designed marketing materials to help you attract
                and inform clients.
              </p>
              <a
                href="#"
                className="mt-6 bg-[#00B2FF] text-white font-bold py-2 px-4 rounded-md hover:bg-cyan-400 inline-flex items-center justify-center transition-colors duration-300"
              >
                <DownloadIcon />
                Download Brochure
              </a>
            </div>
          </div>
        </section>
      </AnimateOnScroll>
    </div>
  );
};

export default DigitalResourcesPage;

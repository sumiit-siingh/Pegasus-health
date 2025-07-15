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
    <div className="space-y-16 py-12 bg-gradient-to-r from-blue-300 via-white to-blue-300">
      {/* Page Header */}
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
          <span className="bg-[#00b2ff] pl-2 pr-2 "> Digital</span>{" "}
          <span className="text-[#00B2FF]">Resources</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-[#323202]">
          Your one-stop shop for all necessary forms, brochures, and onboarding
          materials.
        </p>
      </section>

      {/* Resources Grid */}
      <AnimateOnScroll>
        <section className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
            {/* Resource Card 1 */}
            <div className=" backdrop-blur-sm bg-white/20 hover:transform hover:scale-105 ease-in-out duration-400  border border-white/10 p-6 rounded-2xl flex flex-col">
              <h2 className="text-xl font-bold text-[#00b2ff]">
                Broker Onboarding Kit
              </h2>
              <p className="mt-2 text-[#323202] flex-grow">
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
            <div className=" backdrop-blur-sm bg-white/20 hover:transform hover:scale-105 ease-in-out duration-400 border border-white/10 p-6 rounded-2xl flex flex-col">
              <h2 className="text-xl font-bold text-[#00b2ff]">
                PPO Plan Highlights PDF
              </h2>
              <p className="mt-2 text-[#323202] flex-grow">
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
            <div className=" backdrop-blur-sm border bg-white/20 hover:transform hover:scale-105 ease-in-out duration-400 border-white/10 p-6 rounded-2xl flex flex-col">
              <h2 className="text-xl font-bold text-[#00b2ff]">
                Enrollment Form
              </h2>
              <p className="mt-2 text-[#323202] flex-grow">
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
            <div className="50 backdrop-blur-sm bg-white/20 hover:transform hover:scale-105 ease-in-out duration-400 border border-white/10 p-6 rounded-2xl flex flex-col">
              <h2 className="text-xl font-bold text-[#00b2ff]">
                Marketing Brochure
              </h2>
              <p className="mt-2 text-[#323202] flex-grow">
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

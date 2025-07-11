import AnimateOnScroll from "../../components/AnimateOnScroll";

const BrokerAdvantagePage = () => {
  return (
    <div className="space-y-16 py-12">
      {/* Page Header */}
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
          The Broker <span className="text-[#00B2FF]">Advantage</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
          We're not just another GA/FMO. We're your strategic partner, invested
          in your growth and success.
        </p>
      </section>

      {/* Comparison Section */}
      <AnimateOnScroll>
        <section className="max-w-4xl mx-auto bg-gray-900/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center text-white mb-10">
            How We Compare
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pegasus Model */}
            <div className="bg-slate-800/50 border-2 border-[#00B2FF] rounded-lg p-6">
              <h3 className="text-2xl font-bold text-white">
                The Pegasus Model
              </h3>
              <ul className="mt-4 space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✔</span> High
                  Commissions
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✔</span> Dedicated
                  Broker Support
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✔</span> Modern Tech &
                  Tools
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✔</span> Exclusive Plan
                  Access
                </li>
              </ul>
            </div>
            {/* Traditional Model */}
            <div className="bg-slate-800/50 border border-gray-600 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-white">
                Traditional GA/FMO
              </h3>
              <ul className="mt-4 space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="text-red-400 mr-3">✖</span> Standard
                  Commissions
                </li>
                <li className="flex items-center">
                  <span className="text-red-400 mr-3">✖</span> Impersonal Call
                  Centers
                </li>
                <li className="flex items-center">
                  <span className="text-red-400 mr-3">✖</span> Outdated Systems
                </li>
                <li className="flex items-center">
                  <span className="text-red-400 mr-3">✖</span> Commodity Plans
                </li>
              </ul>
            </div>
          </div>
        </section>
      </AnimateOnScroll>
    </div>
  );
};

export default BrokerAdvantagePage;

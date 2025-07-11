import AnimateOnScroll from "../../components/AnimateOnScroll";
import { Boxes } from "../../components/background-boxes";
import { cn } from "../../../utils/cn";

const PlansPage = () => {
  return (
    <div className="space-y-10 ">
      {/* Page Header */}

      <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-tr from-transparent via-slate-900/20 to-transparent" />
        <Boxes />
        <section className={cn("text-center z-40")}>
          <h1 className="text-4xl md:text-5xl font-extrabold  text-[#00B2FF] ">
            Overview of ACA-Compliant{" "}
            <span className="text-white md:pl-5 md:pr-5 bg-gradient-to-r from-orange-500 to-pink-500">
              PPO Plans
            </span>
          </h1>

          <p className="mt-10 md:max-w-5xl mx-auto md:text-lg text-sm text-gray-400">
            The Affordable Care Act (ACA) fundamentally transformed the health
            insurance landscape, mandating essential protections and benefits
            for consumers. Among the diverse plan types available, Preferred
            Provider Organization (PPO) plans, when ACA-compliant, offer an
            exceptional blend of flexibility and comprehensive coverage.
          </p>
        </section>
      </div>

      {/* Key Advantages Section */}
      <AnimateOnScroll>
        <div className="text-center space-y-4 md:text-4xl text-lg md:font-extrabold font-bold ">
          {" "}
          What is a{" "}
          <span className="text-transparent  bg-clip-text tracking-tight md:font-extrabold md:text-4xl text-lg bg-gradient-to-r from-orange-500 to-pink-500">
            PPO Plan?
          </span>
        </div>
        <section className="bg-gray-900/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white">
                Broad Network Access
              </h3>
              <p className="mt-2 text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore.
              </p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white">
                Competitive Premiums
              </h3>
              <p className="mt-2 text-gray-300">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white">
                Simplified Enrollment
              </h3>
              <p className="mt-2 text-gray-300">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim.
              </p>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Download PDF Section */}
      <AnimateOnScroll delay={0.2}>
        <section className="bg-gray-900/40 backdrop-blur-sm border border-white/10 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white">
            Get the Full Details
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-300">
            Download our comprehensive plan highlights sheet to compare benefits
            and see the Pegasus advantage for yourself.
          </p>
          <div className="mt-8">
            <a
              href="/path-to-your-highlights.pdf"
              className="bg-[#00B2FF] text-white font-bold px-8 py-3 rounded-md text-lg hover:bg-cyan-400 transition-colors duration-300"
            >
              Download Highlights PDF
            </a>
          </div>
        </section>
      </AnimateOnScroll>
    </div>
  );
};

export default PlansPage;

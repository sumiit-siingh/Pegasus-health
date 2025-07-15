import AnimateOnScroll from "./components/AnimateOnScroll";
import { HeroSidebar } from "./components/HeroSidebar";
import { BackgroundBeams } from "./components/BackgroundBeams";
import { TypewriterEffectSmooth } from "./components/TypewriterEffect";
import { WavyBackground } from "./components/WavyBackground";
import { ColourfulText } from "./components/ColourfulText";
import { PlanHighlightsGrid } from "./components/bento-grid";

const Icon = ({ children }) => (
  <div className="bg-white p-4 rounded-full shadow-md border border-gray-200">
    {children}
  </div>
);

export default function Home() {
  const words = [
    {
      text: "Ready",
    },
    {
      text: "To",
    },
    {
      text: "Elevate",
    },
    {
      text: "Your",
    },
    {
      text: "Brokerage?",
      className: "text-blue-500 dark:text-blue-500 font-extrabold",
    },
  ];
  return (
    <div className="-mt-[140px]">
      {/* SECTION 1: Dark Gradient */}
      <section className="relative min-h-screen w-full overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 h-full w-full bg-[#111827]">
            <div className="absolute top-1/4 left-0 w-72 h-72 bg-[#00B2FF] rounded-full filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>
        </div>

        {/* Desktop Layout: Sidebar + Hero Content */}
        <div className="hidden md:flex h-screen ">
          <HeroSidebar />
          <div className=" w-full flex items-center justify-center p-4">
            <AnimateOnScroll>
              <div className="text-center space-y-15">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
                  Empowering{" "}
                  <span className="text-[#00B2FF] font-extrabold">Brokers</span>
                  <span className="block font-bold">
                    Elevating{" "}
                    <span className=" font-extrabold text-[#00B2FF]">
                      Health Coverage
                    </span>
                  </span>
                </h1>
                <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
                  Partner with{" "}
                  <span className="text-[#00B2FF] font-bold ">Pegasus</span>.
                  Your{" "}
                  <span className="text-[#00B2FF] font-bold">Super broker</span>{" "}
                  for comprehensive ACA-compliant PPO plans and unparalleled
                  support.
                </p>
                <div className="mt-8 text-6xl font-bold  text-white">
                  {" "}
                  <span className="text-black ">
                    <ColourfulText text="Super Broker" />
                  </span>{" "}
                  for{" "}
                  <span className="text-black">
                    <ColourfulText text="Brokers" />
                  </span>
                </div>
                <div className="-mt-10 max-w-4xl mx-auto">
                  <span className=" text-lg text-gray-400 max-w-2xl mx-auto">
                    At{" "}
                    <span className="text-[#00B2FF] font-bold ">Pegasus</span>,
                    we're not just another General Agency or FMO. We are your{" "}
                    <span className="text-[#00B2FF] font-bold">
                      Super broker
                    </span>
                    , designed to amplify your success in the ever-evolving
                    health insurance market. We empower independent brokers with
                    the plans, tools, and dedicated support to thrive, offering
                    your clients the best in ACA-compliant PPO health solutions.
                    Think of us as your strategic partner, streamlining your
                    operations and maximizing your earning potential.
                  </span>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>

        {/* Mobile Layout: Just Hero Content (Centering and Text Size Fixed) */}
        <div className="md:hidden min-h-screen flex items-center justify-center p-4">
          <AnimateOnScroll>
            <div className="text-center">
              {/* Text size is smaller on mobile (`text-4xl`) and scales up */}
              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
                Empowering{" "}
                <span className="text-[#00B2FF] font-extrabold">Brokers</span>
                <span className="block ">
                  Elevating{" "}
                  <span className="font-extrabold text-[#00B2FF]">
                    Health Coverage
                  </span>
                </span>
              </h1>
              <p className="mt-6 max-w-xl mx-auto text-lg text-gray-300">
                Partner with{" "}
                <span className="text-[#00B2FF] font-bold ">Pegasus</span>. Your
                Super Broker for comprehensive ACA-compliant PPO plans and
                unparalleled support.
              </p>
              <div className="mt-8 text-3xl font-bold space-x-2 text-white">
                {" "}
                <span className="text-black">
                  <ColourfulText text="Super Broker" />
                </span>{" "}
                for{" "}
                <span className="text-black ml-2">
                  <ColourfulText text="Brokers" />
                </span>
              </div>
              <div className=" mt-5 max-w-2xl mx-auto">
                <span className=" text-md text-gray-400 max-w-2xl mx-auto">
                  At <span className="text-[#00B2FF] font-bold ">Pegasus</span>,
                  we're not just another General Agency or FMO. We are your{" "}
                  <span className="text-[#00B2FF] font-bold">Super broker</span>
                  , designed to amplify your success in the ever-evolving health
                  insurance market. We empower independent brokers with the
                  plans, tools, and dedicated support to thrive, offering your
                  clients the best in ACA-compliant PPO health solutions. Think
                  of us as your strategic partner, streamlining your operations
                  and maximizing your earning potential.
                </span>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* SECTION 2 & 3 remain the same */}
      <BackgroundBeams className="min-h-screen w-full text-gray-800 p-4 flex items-center justify-center">
        <AnimateOnScroll>
          <div className="container mx-auto text-center mt-10">
            <h2 className="text-5xl md:text-6xl h-20 font-extrabold text-[#323202]">
              Plan{" "}
              <span className="bg-[#00B2FF] text-white md:pl-5 md:pr-5">
                Highlights
              </span>
            </h2>
            <p className="mt-4 text-lg md:text-2xl text-[#323202] font-bitter-regular">
              <span className="text-[#00B2FF] md:font-extrabold font-bold ">
                Pegasus
              </span>{" "}
              offers a robust portfolio of ACA-compliant PPO plans, meticulously
              curated to meet the diverse needs of your clients. Our plans
              feature:
            </p>
            <div className="mt-16  ">
              {/* Card 1 */}
              <div className="relative flex bg-gradient-to-r from-blue-200 via-white to-blue-200  flex-col items-center p-8 z-50 backdrop-blur-2xl rounded-2xl border border-gray-200 overflow-hidden ">
                {/* <div className="absolute inset-0 z-[60]">
                  <WavyBackground />
                </div> */}

                {/* Make sure this is on top */}
                <div className="relative z-[70]">
                  <PlanHighlightsGrid />
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </BackgroundBeams>

      {/* SECTION 3: Light Shade Gradient (CTA) */}
      <section className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-200 p-4">
        <AnimateOnScroll>
          <div className="text-center flex flex-col items-center">
            {/* KEY CHANGE: We apply responsive font sizes.
              - Starts at text-4xl on mobile.
              - Scales up to text-6xl on large screens.
            */}
            <TypewriterEffectSmooth
              words={words}
              className="text-4xl md:text-5xl lg:text-6xl"
            />

            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600">
              Discover how{" "}
              <span className="text-[#00B2FF] font-bold ">Pegasus</span> can
              become your most valuable asset.
            </p>
            <div className="mt-10">
              <a
                href="/partner-with-us"
                className=" bg-[#00B2FF] hover:bg-[#006eff] font-bold px-8 text-white py-4 rounded-md text-lg transition-all duration-300"
              >
                Partner with Us
              </a>
            </div>
          </div>
        </AnimateOnScroll>
      </section>
    </div>
  );
}

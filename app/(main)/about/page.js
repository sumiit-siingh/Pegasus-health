import Image from "next/image";
import AnimateOnScroll from "../../components/AnimateOnScroll";
import { BackgroundGradient } from "../../components/BackgroundGradient";

const AboutPage = () => {
  return (
    <div className="relative isolate bg-gradient-to-r from-blue-300 via-white to-blue-300 ">
      {/* Background Image Container */}

      {/* The existing page content */}
      <div className="container mx-auto px-4 py-16">
        <AnimateOnScroll>
          <div className="bg-white/70 backdrop-blur-2xl  opacity-90 border border-white/50 rounded-2xl p-8 md:p-12 space-y-16">
            <section className="text-center">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
                <span className="bg-[#00b2ff] text-white md:pl-5 md:pr-5">
                  About
                </span>{" "}
                <span className="text-[#00B2FF]">Pegasus </span>
                <span className="text-[#323202]">Health Group</span>
              </h1>
              <p className="mt-5 max-w-2xl mx-auto text-lg  text-gray-700">
                Our story, our mission, and the people leading the charge.
              </p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-800 border-l-4 border-[#00B2FF] pl-4">
                  Company Story
                </h2>
                <p className="text-gray-600">
                  Pegasus was founded by Jim and Mitch, two industry veterans
                  who recognized a critical need for a new kind of brokerage
                  partner. Having spent years navigating the complexities of
                  health insurance, they saw firsthand the challenges
                  independent brokers faced – from limited product access to
                  insufficient support and convoluted referral fees structures.
                  Their vision was simple yet ambitious: to build a "Super
                  Broker" that prioritizes the success of its partners. They
                  envisioned a company that combines deep market expertise with
                  cutting-edge tools and a truly supportive ecosystem, allowing
                  brokers to focus on what they do best: serving their clients.
                  Pegasus was born from this commitment to innovation,
                  integrity, and partnership.
                </p>
                <h2 className="text-3xl font-bold text-gray-800 border-l-4 border-[#00B2FF] pl-4">
                  Mission
                </h2>
                <p className="text-gray-600">
                  Our mission at Pegasus is to empower independent insurance
                  brokers by providing unparalleled access to high-quality,
                  ACA-compliant PPO plans, alongside innovative tools and a
                  dedicated support structure. We are committed to fostering
                  growth, simplifying processes, and maximizing the success of
                  every broker we partner with, ultimately helping more
                  Americans secure robust and flexible health coverage.
                </p>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/logo-dark-text.png"
                  alt="Pegasus Health Group Logo"
                  width={400}
                  height={400}
                  className="rounded-lg object-contain"
                />
              </div>
            </section>

            <section className="text-center">
              <h2 className="text-5xl font-extrabold  ">
                <span className="bg-[#00b2ff] text-white md:pl-4">Leader</span>
                <span className="text-[#00B2FF] bg-white">ship</span>
              </h2>
              <p className="mt-10 text-gray-500">
                The driving force behind our broker-first approach.
              </p>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
                <BackgroundGradient>
                  <div className="bg-white/50 p-8 rounded-lg border border-gray-400">
                    <Image
                      src="/profile-logo.png"
                      alt="Portrait of Jim"
                      width={120}
                      height={120}
                      className="rounded-full mx-auto"
                    />
                    <h3 className="mt-6 text-2xl font-semibold text-gray-900">
                      Jim
                    </h3>
                    <p className="mt-1 text-[#00B2FF] font-medium">
                      Co-Founder
                    </p>
                    <p className="mt-4 text-gray-600">
                      Brief bio focusing on experience, vision, and role in
                      product/market strategy.
                    </p>
                  </div>
                </BackgroundGradient>
                <BackgroundGradient>
                  {" "}
                  <div className="bg-white/50 p-8 rounded-lg border border-gray-400">
                    <Image
                      src="/profile-logo.png"
                      alt="Portrait of Mitch"
                      width={120}
                      height={120}
                      className="rounded-full mx-auto"
                    />
                    <h3 className="mt-6 text-2xl font-semibold text-gray-900">
                      Mitch
                    </h3>
                    <p className="mt-1 text-[#00B2FF] font-medium">
                      Co-Founder
                    </p>
                    <p className="mt-4 text-gray-600">
                      Brief bio focusing on experience, operational expertise,
                      and commitment to broker support.
                    </p>
                  </div>
                </BackgroundGradient>
              </div>
            </section>
            <div className="relative md:text-center text-start mt-12 border border-gray-400 p-1 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 z-0">
                <Image
                  src="/logo-dark-text.png"
                  alt="Pegasus Logo Background"
                  fill={true}
                  // The opacity is increased from 5 to 20 to make it visible
                  className="object-cover blur-xs opacity-30"
                />
              </div>
              <div className="relative z-10   bg-opacity-80 rounded-lg p-5 md:p-12">
                <span className="relative md:text-center text-start  z-10 md:p-8  text-black text-sm md:text-lg">
                  The name{" "}
                  <span className="text-[#00B2FF]  md:font-extrabold font-semibold ">
                    Pegasus
                  </span>{" "}
                  was chosen to symbolize the core values we bring to our
                  partnerships. In Greek mythology, Pegasus is a winged divine
                  horse, representing{" "}
                  <span className="  tracking-tight bg-clip-text text-transparent bg-[#00b2ff] font-bold md:text-2xl text-md">
                    Strength
                  </span>
                  ,{" "}
                  <span className=" tracking-tight bg-clip-text text-transparent bg-[#00b2ff] font-bold md:text-2xl text-md">
                    Swiftness
                  </span>
                  , and{" "}
                  <span className=" tracking-tight bg-clip-text text-transparent bg-[#00b2ff] font-bold md:text-2xl text-md">
                    Inspiration.
                  </span>{" "}
                  <span>
                    For our brokers,{" "}
                    <span className="text-[#00B2FF] md:font-extrabold font-bold ">
                      Pegasus
                    </span>{" "}
                    signifies:
                  </span>
                </span>
                <div className="text-start md:space-y-10 space-y-4 mt-10">
                  <div className="flex flex-col md:flex-row md:items-start md:gap-2">
                    <span className="font-semibold text-white w-fit md:text-2xl text-sm bg-[#00b2ff] px-2">
                      Strength
                    </span>
                    <span className="text-black md:text-xl text-xs">
                      The robust plans and unwavering support we provide, giving
                      you a strong foundation for your business.
                    </span>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-start  md:gap-2">
                    <span className="font-semibold  text-white w-fit md:text-2xl text-sm bg-[#00b2ff] px-2">
                      Swiftness
                    </span>
                    <span className="text-black md:text-xl text-xs">
                      Our efficient processes and quick response times, helping
                      you close deals faster and serve clients more effectively.
                    </span>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-start md:gap-2">
                    <span className="font-semibold text-white w-fit md:text-2xl text-sm bg-[#00b2ff] px-2">
                      Inspiration
                    </span>
                    <span className="text-black md:text-xl text-xs">
                      Our commitment to innovation and growth, inspiring you to
                      reach new heights in your career.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-10 space-y-4 ">
              <span className="text-gray-500 text-sm md:text-lg ">
                Our logo incorporates the graceful silhouette of{" "}
                <span className="text-[#00B2FF] md:font-extrabold font-bold ">
                  Pegasus
                </span>{" "}
                , embodying this spirit of upward momentum and powerful
                partnership. The wings represent our ability to help brokers
                transcend traditional limitations and soar above the
                competition.
              </span>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default AboutPage;

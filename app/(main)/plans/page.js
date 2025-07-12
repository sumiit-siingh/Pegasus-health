import AnimateOnScroll from "../../components/AnimateOnScroll";
import { Boxes } from "../../components/background-boxes";
import { StickyScroll } from "../../components/sticky-scroll-reveal";
import { cn } from "../../../utils/cn";
import Image from "next/image";
import { FocusCards } from "../../components/FocusCards"; // Correctly imported

const content = [
  {
    title: "Extensive Network",
    description:
      "Access to a broad network of preferred doctors, specialists, and hospitals. Using in-network providers typically results in lower out-of-pocket costs.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Extensive Network
      </div>
    ),
  },
  {
    title: "Out-of-Network Flexibility",
    description:
      "Unlike some other plan types, PPOs allow members to seek care from providers outside the network, albeit usually at a higher cost. This freedom is a significant advantage for clients who prioritize choice.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        {/* <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        /> */}
        Out-of-Network Flexibility
      </div>
    ),
  },
  {
    title: "No Referrals Required",
    description:
      "Clients generally do not need a referral from a primary care physician (PCP) to see a specialist, simplifying access to specialized care.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        No Referrals Required
      </div>
    ),
  },
  {
    title: "No Mandatory PCP",
    description:
      "While choosing a PCP is often recommended for coordinated care, it's not a requirement with most PPO plans.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        No Mandatory PCP
      </div>
    ),
  },
];

const PlansPage = () => {
  const cards = [
    {
      title: "Extensive Network",
      des: "Access to a broad network of preferred doctors, specialists, and hospitals. Using in-network providers typically results in lower out-of-pocket costs.",
      src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Out-of-Network Flexibility",
      des: "Unlike some other plan types, PPOs allow members to seek care from providers outside the network, albeit usually at a higher cost. This freedom is a significant advantage for clients who prioritize choice.",
      src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "No Lifetime or Annual Limits",
      des: "No caps on how much the plan will pay for essential health benefits over a lifetime or in a year.",
      src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Maximum Out-of-Pocket (MOOP) Limits",
      des: "A defined cap on annual out-of-pocket expenses, providing financial protection against high medical costs",
      src: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Free Preventive Care",
      des: "Many preventive services are covered at no additional cost when received in-network.",
      src: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Dependent Coverage to Age 26",
      des: ": Young adults can remain on their parents' plans until their 26th birthday.",
      src: "https://assets.aceternity.com/the-first-rule.png",
    },
  ];

  const sellingPoints = [
    {
      title: "Superior Network Breadth",
      description:
        "We prioritize plans with extensive networks, offering your clients more choice and convenience compared to more restrictive HMO or EPO options often prevalent in the individual market.",
    },
    {
      title: "True Out-of-Network Coverage",
      description:
        "While other plans may limit out-of-network care to emergencies only, our PPO plans provide a tangible option for clients to see their preferred out-of-network providers, a crucial selling point for many.",
    },
    {
      title: "Competitive Rates (with potential subsidies)",
      description:
        "We work to ensure our PPO offerings remain competitively priced, and when combined with potential ACA subsidies, they deliver exceptional value for comprehensive coverage.",
    },
    {
      title: "Simplified Enrollment Experience",
      description:
        "Our streamlined processes and broker support ensure a smooth enrollment journey for both you and your clients, reducing administrative burden often associated with complex plan structures.",
    },
    {
      title: "Focus on Client Choice",
      description:
        "We understand that choice is paramount for many clients. Our PPO-centric approach aligns with this demand, differentiating us from general agencies heavily focused on more restrictive plan types.",
    },
  ];

  return (
    <div className="space-y-10 md:px-50 ">
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
        <div className="text-center space-y-4 md:text-5xl text-2xl md:font-extrabold font-bold ">
          What is a{" "}
          <span className="text-transparent  bg-clip-text tracking-tight md:font-extrabold md:text-5xl text-3xl font-extrabold bg-gradient-to-r from-orange-500 to-pink-500">
            PPO Plan?
          </span>
          <div className="w-full md:py-4 md:text-[20px] text-md text-gray-700">
            <StickyScroll
              className="md:translate-x-0 translate-x-20"
              content={content}
            />
          </div>{" "}
        </div>
        <div className="mt-16">
          <h2 className="text-3xl font-extrabold text-center mb-4">
            Key Features of ACA-Compliant{" "}
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 text-white md:px-2 font-extrabold">
              PPO Plans
            </span>
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
            Pegasus partners with leading carriers to offer ACA-compliant PPO
            plans that adhere to all federal regulations, ensuring your clients
            receive robust and reliable coverage. These plans guarantee:
          </p>
          <FocusCards cards={cards} />
        </div>
      </AnimateOnScroll>

      {/* Download PDF Section */}
      <AnimateOnScroll delay={0.2}>
        <section className="bg-gray-300/40 mb-20 backdrop-blur-sm border-t border-gray-400 shadow-xl transition-shadow shadow-pink-200  rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white flex flex-col md:flex-row items-center justify-center text-center space-y-4 md:space-y-0 md:space-x-2">
            <span className="text-[#00B2FF] px-2">Key Advantages</span>
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 md:font-extrabold font-semibold text-3xl px-1 py-0 md:px-2 md:text-6xl ">
              vs.
            </span>
            <span className="text-[#00B2FF] px-2">Market Competitors</span>
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-gray-800">
            Pegasus's portfolio of ACA-compliant PPO plans stands out in the
            market due to.
          </p>
          <div className="md:flex flex-wrap justify-center mt-8 gap-6">
            {sellingPoints.map((point, index) => (
              <div
                key={index}
                className="max-w-md border border-gray-400 hover:border-orange-300 p-6 rounded-lg bg-white shadow-md hover:shadow-xl transition-shadow hover:shadow-pink-300 duration-700 space-y-5 md:mt-0 mt-4 md"
              >
                <h2 className="md:text-xl text-lg md:font-bold font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
                  {point.title}
                </h2>
                <p className="md:text-md text-sm md:font-semibold font-normal mt-2 text-gray-600">
                  {point.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <a
              href="/path-to-your-highlights.pdf"
              className="bg-[#00B2FF] text-white font-bold px-8 py-3 rounded-md text-lg   hover:bg-gradient-to-r from-orange-500 to-pink-500 transition-all duration-700"
            >
              Download Plan Highlights PDF
            </a>
          </div>
        </section>
      </AnimateOnScroll>
    </div>
  );
};

export default PlansPage;

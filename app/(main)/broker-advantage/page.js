"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "../../components/useOutsideClick";
import AnimateOnScroll from "../../components/AnimateOnScroll";
import Image from "next/image";
import {
  IconHeadset,
  IconLock,
  IconChartBar,
  IconShieldCheck,
} from "@tabler/icons-react";

// Simple CloseIcon component (SVG)
const CloseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M4 4L12 12M12 4L4 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const BrokerAdvantagePage = () => {
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event) {
      setActive(false);
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  const brokerBenefits = [
    {
      title: "Access to Premium PPO Plans",
      description:
        "Gain immediate access to a curated selection of top-tier ACA-compliant PPO plans from reputable carriers, giving you a competitive edge.",
    },
    {
      title: "Enhanced Referral Fees Structures",
      description:
        "We offer attractive and transparent referral fees rates, ensuring your hard work is generously rewarded.",
    },
    {
      title: "Dedicated Support Team",
      description:
        "Our experienced team is just a call or click away, providing personalized assistance with plan selection, quoting, enrollment issues, and referral fees inquiries. We understand the nuances of the market and are here to help you navigate them.",
    },
    {
      title: "Cutting-Edge Technology & Tools",
      description:
        "Leverage our intuitive online platform for quick quoting, streamlined application submissions, CRM integration, and real-time referral fees tracking. Minimize paperwork and maximize your productive selling time.",
    },
    {
      title: "Marketing & Sales Resources",
      description:
        "Access a library of customizable marketing materials, sales scripts, and training modules to sharpen your skills and reach more clients effectively.",
    },
    {
      title: "Expert Training & Education",
      description:
        "Stay ahead of industry changes with regular webinars, workshops, and compliance updates, ensuring you're always informed and ready.",
    },
    {
      title: "Build Your Book of Business",
      description:
        "Our focus is on your growth. We provide the resources and support necessary to expand your client base and cultivate long-term relationships.",
    },
  ];

  return (
    <div className="space-y-16 py-12">
      {/* Page Header */}
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#323202]">
          Why{" "}
          <span className="pr-4 pl-4 text-white bg-gradient-to-r from-orange-500 to-pink-500">
            Brokers
          </span>{" "}
          Should Work with <span className="text-[#00B2FF]">Pegasus</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
          Choosing Pegasus as your Super Broker means unlocking a new level of
          efficiency, support, and earning potential. We are uniquely positioned
          to help independent brokers thrive in the competitive ACA market.
        </p>
      </section>

      {/* Comparison Section */}
      <AnimateOnScroll>
        <AnimatePresence>
          {active && typeof active === "object" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 h-full w-full z-10"
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {active && typeof active === "object" ? (
            <div className="fixed inset-0  grid place-items-center z-[100]">
              <motion.button
                key={`button-${active.title}-${id}`}
                layout
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.05,
                  },
                }}
                className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                onClick={() => setActive(null)}
              >
                <CloseIcon />
              </motion.button>
              <motion.div
                layoutId={`card-${active.title}-${id}`}
                ref={ref}
                className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
              >
                <motion.div layoutId={`image-${active.title}-${id}`}>
                  <Image
                    width={200}
                    height={200}
                    src={active.src}
                    alt={active.title}
                    className="w-full h-80  lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                  />
                </motion.div>

                <div>
                  <div className="flex justify-between items-start p-4">
                    <div className="">
                      <motion.h3
                        layoutId={`title-${active.title}-${id}`}
                        className="font-bold text-[#00B2FF] md:text-xl text-2xl dark:text-neutral-200"
                      >
                        {active.title}
                      </motion.h3>
                      <motion.p
                        layoutId={`description-${active.description}-${id}`}
                        className="text-[#323202] dark:text-neutral-400 md:text-normal text-xl mt-2"
                      >
                        {active.description}
                      </motion.p>
                    </div>
                  </div>
                  <div className="pt-4 relative px-4">
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-neutral-600 text-xl md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                    >
                      {typeof active.content === "function"
                        ? active.content()
                        : active.content}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          ) : null}
        </AnimatePresence>
        <ul className="max-w-2xl mx-auto w-full gap-4">
          {cards.map((card, index) => (
            <motion.div
              layoutId={`card-${card.title}-${id}`}
              key={`card-${card.title}-${id}`}
              onClick={() => setActive(card)}
              className="p-4 flex md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
            >
              <div className="flex gap-4 md:flex-row ">
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-15 w-15 md:h-20 md:w-20 rounded-lg object-cover object-top"
                />
                <div className="">
                  <motion.h3
                    layoutId={`title-${card.title}-${id}`}
                    className="font-medium md:font-bold md:text-lg text-sm inline  text-neutral-800 dark:text-neutral-200 text-start md:text-left"
                  >
                    {card.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${card.description}-${id}`}
                    className="text-neutral-600 dark:text-neutral-400 text-start md:text-left"
                  >
                    {card.description}
                  </motion.p>
                </div>
              </div>
              <motion.button
                layoutId={`button-${card.title}-${id}`}
                className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
              >
                {card.ctaText}
              </motion.button>
            </motion.div>
          ))}
        </ul>
        <div className="bg-white/60 backdrop-blur-lg border border-white/50 rounded-2xl p-8 md:p-12 space-y-20">
          {/* Support Structure Section */}
          <section>
            <h2 className="md:text-5xl text-3xl mt-10 font-bold text-center  text-[#323202]">
              <span className="md:font-extrabold  font-extrabold text-white pl-2  pr-2  bg-gradient-to-r from-orange-500 to-pink-500">
                Support Structure
              </span>
              , Tools & Referral Fees
            </h2>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8  ">
              <div className="bg-white/50 p-6 rounded-lg border border-gray-400 hover:border-orange-30 shadow-md hover:shadow-xl transition-shadow hover:shadow-pink-300 duration-700">
                <IconHeadset className="h-8 w-8 text-[#00B2FF] mb-3" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Personalized Account Management
                </h3>
                <p className="mt-2 text-gray-600">
                  Every partner receives dedicated support from an experienced
                  account manager committed to your success.
                </p>
              </div>
              <div className="bg-white/50 border border-gray-400 hover:border-orange-300 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow hover:shadow-pink-300 duration-700">
                <IconLock className="h-8 w-8 text-[#00B2FF] mb-3" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Broker Portal
                </h3>
                <p className="mt-2 text-gray-600">
                  Our secure online portal is your command center, offering:
                </p>
                <ul className="mt-3 list-disc list-inside text-gray-600 space-y-1 text-sm">
                  <li>Instant Quoting & Comparison Tools</li>
                  <li>Electronic Application Submission</li>
                  <li>Client Management & Tracking</li>
                  <li>Real-time Referral Fees Statements</li>
                  <li>Resource Library (Forms, Marketing, FAQs)</li>
                </ul>
              </div>
              <div className="bg-white/50 border border-gray-400 hover:border-orange-300 p-6 rounded-lg  shadow-md hover:shadow-xl transition-shadow hover:shadow-pink-300 duration-700">
                <IconChartBar className="h-8 w-8 text-[#00B2FF] mb-3" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Timely & Accurate Referral Fees
                </h3>
                <p className="mt-2 text-gray-600">
                  We pride ourselves on transparent and prompt payouts, so you
                  can focus on selling with confidence.
                </p>
              </div>
              <div className="bg-white/50 border border-gray-400 hover:border-orange-300 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow hover:shadow-pink-300 duration-700">
                <IconShieldCheck className="h-8 w-8 text-[#00B2FF] mb-3" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Compliance Assistance
                </h3>
                <p className="mt-2 text-gray-600">
                  We help you stay up-to-date with ACA regulations and carrier
                  requirements, reducing your compliance burden.
                </p>
              </div>
            </div>
          </section>

          {/* Comparison Table Section */}
          <section>
            <h2 className="md:text-4xl text-xl font-bold text-center text-gray-800">
              <span className="md:font-extrabold  font-extrabold text-white pl-2  pr-2  bg-gradient-to-r from-orange-500 to-pink-500">
                Comparison
              </span>{" "}
              to Traditional Models
            </h2>
            <div className="mt-12 flow-root">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-300">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="py-3.5 pl-4 pr-3 text-left text-sm md:text-xl font-semibold md:font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500 sm:pl-6"
                          >
                            Feature
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm md:text-xl font-semibold md:font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500"
                          >
                            Traditional GA/FMO
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm md:text-xl font-semibold md:font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500"
                          >
                            Pegasus (Super Broker)
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        <tr>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                            Product Focus
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            Often broad, less specialized
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm font-semibold text-gray-900 bg-blue-100/50">
                            Focused on premium ACA-compliant PPO plans
                          </td>
                        </tr>
                        <tr>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                            Support Level
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            Generalized, reactive, self-service
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm font-semibold text-gray-900 bg-blue-100/50">
                            Proactive, personalized, dedicated
                          </td>
                        </tr>
                        <tr>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                            Technology
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            Varies; often fragmented or outdated
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm font-semibold text-gray-900 bg-blue-100/50">
                            Integrated, cutting-edge broker portal
                          </td>
                        </tr>
                        <tr>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                            Referral Fees Payouts
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            Can be slow and less transparent
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm font-semibold text-gray-900 bg-blue-100/50">
                            Transparent, timely, and competitive
                          </td>
                        </tr>
                        <tr>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                            Value Proposition
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            Primarily access to contracts
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm font-semibold text-gray-900 bg-blue-100/50">
                            Strategic partnership and growth enablement
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </AnimateOnScroll>
    </div>
  );
};

const cards = [
  {
    description: "Brokers Benefits",
    title: "Access to Premium PPO Plans",
    src: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/201309/coin-pile3_660_092613083716.jpg",
    ctaText: "Open",
    // ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Gain immediate access to a curated selection of top-tier ACA-compliant
          PPO plans from reputable carriers, giving you a competitive edge.
        </p>
      );
    },
  },
  {
    description: "Brokers Benefits",
    title: "Enhanced Referral Fees Structures",
    src: "https://vychmc.com/public/uploads/news-29.jpg",
    ctaText: "Open",
    // ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          We offer attractive and transparent referral fees rates, ensuring your
          hard work is generously rewarded.
        </p>
      );
    },
  },

  {
    description: "Brokers Benefits",
    title: "Dedicated Support Team",
    src: "https://assets.aceternity.com/demos/metallica.jpeg",
    ctaText: "Open",
    // ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Our experienced team is just a call or click away, providing
          personalized assistance with plan selection, quoting, enrollment
          issues, and referral fees inquiries. We understand the nuances of the
          market and are here to help you navigate them.
        </p>
      );
    },
  },
  {
    description: "Brokers Benefits",
    title: "Cutting-Edge Technology & Tools",
    src: "https://assets.aceternity.com/demos/led-zeppelin.jpeg",
    ctaText: "Open",
    // ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Leverage our intuitive online platform for quick quoting, streamlined
          application submissions, CRM integration, and real-time referral fees
          tracking. Minimize paperwork and maximize your productive selling time
        </p>
      );
    },
  },
  {
    description: "Brokers Benefits",
    title: "Marketing & Sales Resources",
    src: "https://plus.unsplash.com/premium_photo-1661443554105-0b1bdc879493?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2FsZXMlMjBhbmQlMjBtYXJrZXRpbmd8ZW58MHx8MHx8fDA%3D",
    ctaText: "Open",
    // ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Access a library of customizable marketing materials, sales scripts,
          and training modules to sharpen your skills and reach more clients
          effectively.
        </p>
      );
    },
  },
  {
    description: "Brokers Benefits",
    title: "Expert Training & Education",
    src: "https://www.shutterstock.com/image-illustration/business-technology-internet-network-concept-600nw-2348431265.jpg",
    ctaText: "Open",
    // ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Stay ahead of industry changes with regular webinars, workshops, and
          compliance updates, ensuring you're always informed and ready.
        </p>
      );
    },
  },
  {
    description: "Brokers Benefits",
    title: "Build Your Book of Business",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSESD2Arn5u2WvmzKjFOXDgakWWRt7TCfNyUg&s",
    ctaText: "Open",
    // ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Our focus is on your growth. We provide the resources and support
          necessary to expand your client base and cultivate long-term
          relationships.
        </p>
      );
    },
  },
];

export default BrokerAdvantagePage;

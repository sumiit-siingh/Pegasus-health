"use client";
import React from "react";
import AnimateOnScroll from "../../components/AnimateOnScroll";
import {
  IconPhoneCall,
  IconUsers,
  IconLicense,
  IconSchool,
  IconHeadset,
} from "@tabler/icons-react";
// Import the form component
import { PartnershipForm } from "../../components/PartnershipForm";

const PartnerPage = () => {
  const onboardingSteps = [
    {
      icon: <IconPhoneCall className="h-6 w-6 text-pink-500" />,
      title: "1. Initial Contact",
      description:
        "A Pegasus Partnership Specialist will reach out within 24 business hours to discuss your needs and answer any initial questions.",
    },
    {
      icon: <IconUsers className="h-6 w-6 text-orange-500" />,
      title: "2. Discovery Call",
      description:
        "We'll schedule a brief call to understand your business goals, target market, and how Pegasus can best support your growth.",
    },
    {
      icon: <IconLicense className="h-6 w-6 text-purple-500" />,
      title: "3. Agreement & Licensing",
      description:
        "We'll facilitate the necessary paperwork, including a clear partnership agreement and carrier appointments, to ensure you're fully authorized.",
    },
    {
      icon: <IconSchool className="h-6 w-6 text-cyan-500" />,
      title: "4. Platform Training",
      description:
        "Our support team will provide comprehensive training on the Pegasus Broker Portal, familiarizing you with all our tools and resources.",
    },
    {
      icon: <IconHeadset className="h-6 w-6 text-blue-500" />,
      title: "5. Ongoing Support",
      description:
        "You'll be introduced to your dedicated account manager who will be your primary point of contact for ongoing assistance.",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-300 via-white to-blue-300 mx-auto px-4 py-16 flex items-center justify-center">
      <AnimateOnScroll>
        <div className="container backdrop-blur-lg rounded-2xl p-8 md:p-12 space-y-20">
          {/* Page Header */}
          <section className="text-center space-y-5 ">
            <h1 className="text-4xl md:text-5xl md:h-20 font-extrabold text-[#323202]  ">
              {" "}
              Unlock Your{" "}
              <span className="bg-gradient-to-r pr-2 pl-2 from-orange-500 via-pink-500 to-purple-500 text-white">
                Full Potential
              </span>{" "}
              with
              <span className="text-[#00B2FF]"> Pegasus</span>
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-700">
              Joining the Pegasus network is a straightforward process designed
              to get you up and running quickly. We're eager to welcome you to
              our growing family of successful brokers.
            </p>
          </section>

          {/* Lead Capture Form & Onboarding Steps */}
          <section className="flex flex-col lg:flex-row flex-wrap gap-6">
            {/* Form Component is now placed directly */}
            <div className="lg:col-span-3 flex-1 min-w-[500px]">
              <PartnershipForm />
            </div>

            {/* Onboarding Steps */}
            <div className="lg:col-span-2 flex-1 min-w-[300px] space-y-4 border border-gray-300 md:p-10 p-4 rounded-lg bg-white/50 backdrop-blur-lg">
              <h2 className="text-xl md:text-2xl md:font-extrabold font-bold text-neutral-800 mb-4">
                Seamless Onboarding Process
              </h2>
              <div className="space-y-4">
                {onboardingSteps.map((step, index) => (
                  <div
                    key={index}
                    className="p-4 bg-white/50 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-gray-100 p-2 rounded-full">
                        {step.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {step.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="text-center bg-gray-100/50 md:p-12 p-5 w-full rounded-2xl">
            <h2 className="text-3xl font-bold text-gray-800">
              What Our Partners Say
            </h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1">
                <blockquote className="text-gray-600 italic">
                  "Partnering with Pegasus has been a game-changer for my
                  business. Their PPO plans are exactly what my clients need,
                  and their support team is incredibly responsive. I've seen a
                  significant increase in my referral fees and client
                  satisfaction."
                </blockquote>
                <p className="mt-4 font-semibold text-gray-900">
                  – [Broker Name], [Brokerage Name]
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1">
                <blockquote className="text-gray-600 italic">
                  "The technology and tools Pegasus provides are simply
                  unmatched. Quoting and enrolling clients is faster than ever,
                  and I love the transparency in their referral fees reporting.
                  I highly recommend it!"
                </blockquote>
                <p className="mt-4 font-semibold text-gray-900">
                  – [Broker Name], [Brokerage Name]
                </p>
              </div>
            </div>
          </section>
        </div>
      </AnimateOnScroll>
    </div>
  );
};

export default PartnerPage;

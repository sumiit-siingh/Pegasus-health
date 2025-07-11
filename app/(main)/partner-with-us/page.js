"use client";

import { useState } from "react";
import AnimateOnScroll from "../../components/AnimateOnScroll";

const CheckIcon = () => (
  <svg
    className="h-6 w-6 text-green-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const PartnerPage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [agency, setAgency] = useState("");
  const [comments, setComments] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = { fullName, email, phone, agency, comments };
    console.log("Form Submitted. Data:", formData);
    alert("Thank you for your interest! We have received your information.");
    setFullName("");
    setEmail("");
    setPhone("");
    setAgency("");
    setComments("");
  };

  return (
    <div className="space-y-16 py-12">
      {/* 1. Page Header */}
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
          Partner With <span className="text-[#00B2FF]">Pegasus</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
          Join our network of elite brokers. Fill out the form below to begin
          the simple onboarding process and unlock your potential.
        </p>
      </section>

      {/* 2. Main Content: Form + Onboarding Steps */}
      <AnimateOnScroll>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Lead Capture Form (Already on a white panel, no changes needed here) */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Become a Partner
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
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
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#00B2FF] focus:border-[#00B2FF]"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#00B2FF] focus:border-[#00B2FF]"
                />
              </div>
              <div>
                <label
                  htmlFor="agency"
                  className="block text-sm font-medium text-gray-700"
                >
                  Agency Name (Optional)
                </label>
                <input
                  type="text"
                  name="agency"
                  id="agency"
                  value={agency}
                  onChange={(e) => setAgency(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#00B2FF] focus:border-[#00B2FF]"
                />
              </div>
              <div>
                <label
                  htmlFor="comments"
                  className="block text-sm font-medium text-gray-700"
                >
                  Questions / Comments
                </label>
                <textarea
                  name="comments"
                  id="comments"
                  rows={4}
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#00B2FF] focus:border-[#00B2FF]"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-[#00B2FF] text-white font-bold py-3 px-4 rounded-md hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00B2FF] transition-colors duration-300"
                >
                  Submit Interest
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Onboarding Steps - NOW WITH A PANEL BACKGROUND */}
          <div className="bg-gray-900/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white">
              Our Onboarding Process
            </h2>
            <p className="mt-2 text-gray-400">Fast, simple, and supportive.</p>
            <ul className="mt-6 space-y-6">
              <li className="flex items-start">
                <CheckIcon />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-white">
                    1. Submit Your Interest
                  </h3>
                  <p className="text-gray-300">
                    Fill out the form to your left to get the ball rolling.
                    We'll receive your information instantly.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckIcon />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-white">
                    2. Initial Consultation
                  </h3>
                  <p className="text-gray-300">
                    A Pegasus representative will contact you to discuss your
                    business and answer any questions.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckIcon />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-white">
                    3. Onboarding & Training
                  </h3>
                  <p className="text-gray-300">
                    We'll provide you with all the necessary contracts,
                    resources, and training on our platform and plans.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckIcon />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-white">
                    4. Start Selling
                  </h3>
                  <p className="text-gray-300">
                    You're all set! Start offering exclusive Pegasus plans and
                    benefit from our full support.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </AnimateOnScroll>

      {/* 3. Testimonials Placeholder Section - NOW WITH A PANEL BACKGROUND */}
      <AnimateOnScroll delay={0.2}>
        <section className="text-center bg-gray-900/40 backdrop-blur-sm border border-white/10 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white">
            What Our Partners Say
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-300">
            Testimonials from our top brokers will be featured here soon.
          </p>
        </section>
      </AnimateOnScroll>
    </div>
  );
};

export default PartnerPage;

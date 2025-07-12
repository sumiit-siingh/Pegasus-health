"use client";
import React from "react";
import AnimateOnScroll from "../../components/AnimateOnScroll";
import { ContactForm } from "../../components/ContactForm";
import { IconMail, IconPhone, IconMapPin } from "@tabler/icons-react";
import { AuroraBackground } from "../../components/aurora-background";

// This is a standard JavaScript component, so no TypeScript syntax is used here.
const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <AuroraBackground className="absolute inset-0 z-[-1]" />

      {/* Page Header */}
      <AnimateOnScroll>
        <div className=" bg-transparen rounded-2xl p-8 md:p-12 space-y-20">
          {/* Page Header */}
          <section className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold ">
              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500  text-white pr-2 pl-2">
                Contact
              </span>{" "}
              <span className="text-[#00B2FF]">Us</span>
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-700">
              We're here to help you succeed! Reach out to the Pegasus team with
              any questions or to start your partnership journey.
            </p>
          </section>

          {/* Main Content Area */}
          <section className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
            {/* Left Column: Contact Details */}
            <div className="lg:col-span-2 space-y-8 border border-gray-400 p-6 rounded-lg bg-white/50 backdrop-blur-lg">
              <div className="flex items-start space-x-4 ">
                <div className="bg-blue-100 p-3 rounded-full">
                  <IconMapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Office Address
                  </h3>
                  <p className="text-gray-600">
                    [Full Street Address]
                    <br />
                    [City], Florida [Zip Code]
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <IconPhone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                  <p className="text-gray-600">[Your Phone Number]</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <IconMail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                  <a
                    href="mailto:info@pegasushealth.com"
                    className="text-gray-600 hover:text-blue-600"
                  >
                    [Your Email Address]
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </section>
        </div>
      </AnimateOnScroll>
    </div>
  );
};

export default ContactPage;

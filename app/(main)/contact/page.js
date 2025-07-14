"use client";
import React from "react";
import AnimateOnScroll from "../../components/AnimateOnScroll";
import { ContactForm } from "../../components/ContactForm";
import { IconMail, IconPhone, IconMapPin } from "@tabler/icons-react";
import Image from "next/image";
// This is a standard JavaScript component, so no TypeScript syntax is used here.
const ContactPage = () => {
  return (
    <div className=" mx-auto px-4  bg-gradient-to-r from-blue-300 via-white to-blue-300">
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
          <section className="w-full lg:flex lg:items-stretch lg:space-x-10 space-y-10 lg:space-y-0">
            {/* Left Column: Address + Logo stacked */}
            <div className="lg:w-2/5 space-y-8">
              {/* Contact Info Card */}
              <div className="space-y-8 border border-gray-400 p-6 rounded-2xl bg-white/50 backdrop-blur-lg">
                <div className="flex items-start space-x-4">
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
                    <h3 className="text-lg font-semibold text-gray-800">
                      Phone
                    </h3>
                    <p className="text-gray-600">[Your Phone Number]</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <IconMail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Email
                    </h3>
                    <a
                      href="mailto:info@pegasushealth.com"
                      className="text-gray-600 hover:text-blue-600"
                    >
                      [Your Email Address]
                    </a>
                  </div>
                </div>
              </div>

              {/* Logo */}
              <div>
                <Image
                  src="/logo-dark-text.png"
                  alt="Contact Us"
                  width={500}
                  height={300}
                  className=""
                />
              </div>
            </div>

            {/* Right Column: Contact Form with full height */}
            <div className="lg:w-3/5">
              <div className="h-full ">
                <ContactForm />
              </div>
            </div>
          </section>
        </div>
      </AnimateOnScroll>
    </div>
  );
};

export default ContactPage;

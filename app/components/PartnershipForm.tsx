"use client";
import React, { useState } from "react";
import { Label } from "./ui/Label";
import { Input } from "./ui/Input";
import { Select } from "./ui/Select";
import { Textarea } from "./ui/Textarea";
import { cn } from "../../utils/cn";

export function PartnershipForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    states: "",
    experience: "",
    howDidYouHear: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Partnership Inquiry Submitted!");
    // Reset form state
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      companyName: "",
      states: "",
      experience: "",
      howDidYouHear: "",
      message: "",
    });
  };

  return (
    <div className="shadow-input mx-auto w-full max-w-lg rounded-2xl border border-gray-300 bg-white p-4 md:p-8 dark:bg-blue-100">
      <h2 className="text-xl md:text-2xl md:font-extrabold font-bold text-neutral-800 dark:text-[#323202]">
        Become a{" "}
        <span className="text-[#00B2FF] md:font-extrabold font-bold md:text-3xl ">
          Pegasus
        </span>{" "}
        <span className="text-[#323202]">Partner</span>
      </h2>
      <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-[#323202]">
        Start your journey with us by filling out the inquiry form below.
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        {/* Grid container for two-column layout on medium screens and up */}
        <div className="grid grid-cols-1 gap-y-4 gap-x-4 md:grid-cols-2 ">
          <LabelInputContainer className=" text-[#323202]">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              placeholder="John Doe"
              type="text"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="bg-gray-300  dark:bg-neutral-200 dark:text-neutral-400"
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="email" className="text-[#323202]">
              Email Address
            </Label>
            <Input
              id="email"
              placeholder="john.doe@example.com"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="bg-gray-300 dark:bg-neutral-200 dark:text-neutral-400 "
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="phone" className="text-[#323202]">
              Phone Number
            </Label>
            <Input
              id="phone"
              placeholder="(123) 456-7890"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              className="bg-gray-300 dark:bg-neutral-200 dark:text-neutral-400"
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="companyName" className="text-[#323202]">
              Company Name (Optional)
            </Label>
            <Input
              id="companyName"
              placeholder="Pegasus Health Group"
              type="text"
              value={formData.companyName}
              onChange={handleChange}
              className="bg-gray-300 dark:bg-neutral-200 dark:text-neutral-400"
            />
          </LabelInputContainer>
          <LabelInputContainer className="md:col-span-2">
            <Label htmlFor="states">State(s) of Licensure</Label>
            <Input
              id="states"
              placeholder="e.g., FL, GA, TX"
              type="text"
              required
              value={formData.states}
              onChange={handleChange}
              className="bg-gray-300 dark:bg-neutral-200 dark:text-neutral-400"
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="experience" className="text-[#323202]">
              Years of Experience
            </Label>
            <Select
              id="experience"
              required
              value={formData.experience}
              onChange={handleChange}
              className="bg-gray-300 dark:bg-neutral-200 dark:text-[#323202] "
            >
              <option value="" disabled>
                Select experience...
              </option>
              <option value="<1 year">&lt;1 year</option>
              <option value="1-3 years">1-3 years</option>
              <option value="3-5 years">3-5 years</option>
              <option value="5+ years">5+ years</option>
            </Select>
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="howDidYouHear" className="text-[#323202]">
              How did you hear about us?
            </Label>
            <Select
              id="howDidYouHear"
              required
              value={formData.howDidYouHear}
              onChange={handleChange}
              className="bg-gray-300 dark:bg-neutral-200 dark:text-[#323202] "
            >
              <option value="" disabled>
                Select an option...
              </option>
              <option value="Referral">Referral</option>
              <option value="Online Search">Online Search</option>
              <option value="Social Media">Social Media</option>
              <option value="Industry Event">Industry Event</option>
              <option value="Other">Other</option>
            </Select>
          </LabelInputContainer>
        </div>

        {/* Textarea remains full-width */}
        <LabelInputContainer className="mt-4 mb-8">
          <Label htmlFor="message" className="text-[#323202]">
            Message/Questions (Optional)
          </Label>
          <Textarea
            id="message"
            placeholder="Your message..."
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="bg-gray-300 dark:bg-neutral-200 dark:text-white"
          />
        </LabelInputContainer>

        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
        >
          Submit Inquiry &rarr;
          <BottomGradient />
        </button>

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

        <p className="text-xs text-center text-neutral-600 dark:text-neutral-600">
          We respect your privacy. Your information will only be used to discuss
          potential partnership opportunities.
        </p>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

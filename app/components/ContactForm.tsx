"use client";
import React, { useState } from "react";
import { Label } from "./ui/Label";
import { Input } from "./ui/Input";
import { Select } from "./ui/Select";
import { Textarea } from "./ui/Textarea";
import { cn } from "../../utils/cn";

// Define a type for our form data for better type-safety
interface FormData {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export function ContactForm() {
  // Use the FormData type for our state
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Contact form submitted:", formData);
    alert("Your message has been sent!");
    // Reset form state
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="shadow-input border border-gray-400 mx-auto w-full max-w-lg rounded-2xl bg-white p-4 md:p-8 dark:bg-blue-100">
      <h2 className="text-xl font-bold text-[#323202] ">
        Send an <span className="text-[#00b2ff]">Inquiry</span>
      </h2>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-y-4 gap-x-4 md:grid-cols-2">
          <LabelInputContainer>
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              placeholder="John Doe"
              type="text"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="bg-gray-300 dark:bg-neutral-200 dark:text-neutral-400"
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              placeholder="john.doe@example.com"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="bg-gray-300 dark:bg-neutral-200 dark:text-neutral-400"
            />
          </LabelInputContainer>
        </div>

        <div className="grid grid-cols-1 gap-y-4 gap-x-4 md:grid-cols-2 mt-4">
          <LabelInputContainer>
            <Label htmlFor="phone">Phone Number (Optional)</Label>
            <Input
              id="phone"
              placeholder="(123) 456-7890"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="bg-gray-300 dark:bg-neutral-200 dark:text-neutral-400"
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="subject">Subject</Label>
            <Select
              id="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="bg-gray-300 dark:bg-neutral-200 dark:text-neutral-400"
            >
              <option
                value=""
                disabled
                className="bg-gray-300 text-[#323202] dark:text-[#323202]"
              >
                Select a subject...
              </option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Partnership Question">Partnership Question</option>
              <option value="Technical Support">Technical Support</option>
              <option value="Other">Other</option>
            </Select>
          </LabelInputContainer>
        </div>

        <LabelInputContainer className="mt-4 mb-8">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            placeholder="Your message..."
            required
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="bg-gray-300 dark:bg-neutral-200 dark:text-neutral-400"
          />
        </LabelInputContainer>

        <button
          className="group/btn relative block cursor-pointer h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
        >
          Send Message &rarr;
          <BottomGradient />
        </button>
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

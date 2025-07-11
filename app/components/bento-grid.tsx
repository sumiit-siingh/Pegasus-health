"use client";
import { cn } from "../../utils/cn";
import React from "react";
import { motion } from "framer-motion";
import {
  IconArrowWaveRightUp,
  IconCurrencyDollar,
  IconHeadset,
} from "@tabler/icons-react";
// Import the new icons
import {
  MdOutlineAttachMoney,
  MdOutlineWorkspacePremium,
} from "react-icons/md";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl  mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  titleClassName,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  titleClassName?: string;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-2",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200 ">
        {icon}
        <div
          className={cn(
            "font-sans font-bold text-lg text-neutral-600 dark:text-neutral-200 mb-2 mt-2",
            titleClassName // 👈 add this here
          )}
        >
          {title}
        </div>

        <div className="font-sans font-semibold text-neutral-600 text-sm dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};

// SKELETON COMPONENTS
const SkeletonOne = () => {
  const variants = {
    initial: { x: 0 },
    animate: { x: 10, rotate: 5, transition: { duration: 0.2 } },
  };
  const variantsSecond = {
    initial: { x: 0 },
    animate: { x: -10, rotate: -5, transition: { duration: 0.2 } },
  };
  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shrink-0" />
      </motion.div>
    </motion.div>
  );
};

const SkeletonTwo = () => {
  const variants = {
    initial: { backgroundPosition: "0 50%" },
    animate: { backgroundPosition: ["0, 50%", "100% 50%", "0 50%"] },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #23a6d5, #23d5ab, #e73c7e, #ee7752)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-lg"></motion.div>
    </motion.div>
  );
};

// This is the component we will actually use
export function PlanHighlightsGrid() {
  const items = [
    {
      title: "Broad Networks",
      textColor: "text-[#00B2FF]",
      description:
        "Access to extensive networks of healthcare providers, giving clients choice and flexibility.",
      header: <SkeletonTwo />,
      // Adjusted layout: This item now spans 2 columns
      className: "md:col-span-2",
      icon: <IconArrowWaveRightUp className="h-7  w-7  text-yellow-700" />,
    },
    {
      title: "Comprehensive Benefits",
      textColor: "text-[#00B2FF]",
      description:
        "Full coverage for all 10 mandated ACA categories, including preventive care, maternity, and mental health.",
      header: <SkeletonOne />,
      className: "md:col-span-1",
      icon: <IconCurrencyDollar className="h-7  w-7  text-yellow-700" />,
    },
    {
      title: "Out-of-Network Options",
      textColor: "text-[#00B2FF]",
      description:
        "The freedom for clients to seek care outside the network, with defined cost-sharing.",
      header: <SkeletonOne />,
      className: "md:col-span-1",
      icon: <IconHeadset className="h-7  w-7  text-yellow-700" />,
    },
    {
      title: "Transparent Cost Structures",
      textColor: "text-[#00B2FF]",
      description:
        "Clear deductibles and copayments, with annual out-of-pocket maximums to protect clients.",
      header: <SkeletonOne />,
      className: "md:col-span-1",
      icon: <MdOutlineAttachMoney className="h-7  w-7  text-yellow-700" />,
    },
    {
      title: "Subsidized Premium Eligibility",
      textColor: "text-[#00B2FF]",
      description:
        "Many clients may qualify for significant financial assistance, making quality health insurance more affordable.",
      header: <SkeletonTwo />,
      className: "md:col-span-1",
      icon: <MdOutlineWorkspacePremium className="h-7  w-7  text-yellow-700" />,
    },
  ];

  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          titleClassName={item.textColor}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.textColor, item.className)}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

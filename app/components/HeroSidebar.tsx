"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./sidebar";
import {
  IconHome,
  IconReportMoney,
  IconChartInfographic,
  IconUsers,
  IconMessage,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";
import Image from "next/image";
import Link from "next/link";
import { FaRegHandshake } from "react-icons/fa6";

export function HeroSidebar() {
  const links = [
    {
      label: "Home",
      href: "/",
      icon: (
        <IconHome className="h-7 w-7 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "About Pegasus",
      href: "/about",
      icon: (
        <IconUsers className="h-7 w-7 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Plans",
      href: "/plans",
      icon: (
        <IconReportMoney className="h-7 w-7 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Broker Advantage",
      href: "/broker-advantage",
      icon: (
        <IconChartInfographic className="h-7 w-7 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },

    {
      label: "Partner with us",
      href: "/partner-with-us",
      icon: (
        <FaRegHandshake className="h-7 w-7 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <Sidebar open={open} setOpen={setOpen}>
      <SidebarBody className="justify-between gap-10">
        <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
          {open ? <Logo /> : <LogoIcon />}
          <div className="mt-8 flex flex-col  gap-10">
            {links.map((link, idx) => (
              <SidebarLink key={idx} link={link} />
            ))}
          </div>
        </div>
        <div>
          <SidebarLink
            link={{
              label: "Contact Us",
              href: "/contact",
              icon: (
                <IconMessage className="h-7 w-7 shrink-0 text-neutral-700 dark:text-neutral-200" />
              ),
            }}
          />
        </div>
      </SidebarBody>
    </Sidebar>
  );
}

export const Logo = () => {
  return (
    <Link
      href="/"
      className="relative z-20 flex items-center space-x-2 py-1 font-normal text-black"
    >
      <Image
        src="/logo-dark-text.png"
        alt="Pegasus Health Group Logo"
        width={150}
        height={33}
      />
    </Link>
  );
};

export const LogoIcon = () => {
  return (
    <Link
      href="/"
      className="relative z-20 flex items-center space-x-5 w-full  py-5"
    >
      <Image
        src="/logo-icon-only.png" // Assumes you have a square icon version of your logo
        alt="Pegasus Health Group Icon"
        width={50}
        height={50}
      />
    </Link>
  );
};

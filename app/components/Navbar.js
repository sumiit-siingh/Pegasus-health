"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (pathname === "/") {
        setIsVisible(window.scrollY > 100);
      } else {
        setIsVisible(true);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
  }, [isMenuOpen]);

  const handleNavigate = (path) => {
    setIsMenuOpen(false);
    setTimeout(() => {
      router.push(path);
    }, 300); // Delay matches animation duration
  };

  const navbarVariants = {
    hidden: { y: "-100%", opacity: 0 },
    visible: { y: "0%", opacity: 1 },
  };

  const menuVariants = {
    hidden: { x: "100%" },
    visible: { x: 0 },
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <>
      <motion.nav
        variants={navbarVariants}
        animate={isVisible ? "visible" : "hidden"}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="bg-gradient-to-r from-blue-300 via-white to-blue-300 sticky top-0 z-[100]"
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-3">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <Image
                src="/logo-dark-text.png"
                alt="Pegasus Health Group Logo"
                width={200}
                height={44}
                priority
              />
            </Link>

            <div className="hidden md:flex items-center lg:space-x-10 xl:space-x-20 space-x-2 text-gray-800 lg:font-medium lg:text-lg text-sm">
              {[
                "Home",
                "About",
                "Plans",
                "Broker Advantage",
                "Partner With Us",
              ].map((label, i) => {
                const path =
                  "/" +
                  (label === "Home"
                    ? ""
                    : label.toLowerCase().replace(/ /g, "-"));
                return (
                  <Link
                    key={i}
                    href={path}
                    className="hover:text-[#00B2FF] transition-colors duration-300"
                  >
                    {label}
                  </Link>
                );
              })}
            </div>

            <div className="hidden md:block">
              <Link
                href="/contact"
                className="bg-[#00B2FF] text-white lg:font-bold lg:px-5 px-2 lg:py-2 py-1 rounded-md hover:bg-gradient-to-r from-orange-500 to-pink-500 transition-colors duration-300 shadow-lg"
              >
                Contact Us
              </Link>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-800 focus:outline-none"
              >
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-[999]"
            />
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-35 right-0 w-30 max-w-sm h-160 bg-gradient-to-b from-blue-200 via-white to-blue-200 z-[1000] md:hidden flex flex-col p-7 rounded-tl-4xl rounded-bl-4xl"
            >
              <div className="flex-grow flex flex-col items-center justify-center text-center space-y-8 ">
                {[
                  { label: "🏠", title: "Home", path: "/" },
                  { label: "🦄", title: "About", path: "/about" },
                  { label: "📕", title: "Plans", path: "/plans" },
                  {
                    label: "💹",
                    title: "Broker Advantage",
                    path: "/broker-advantage",
                  },
                  {
                    label: "🤝",
                    title: "Partner with us",
                    path: "/partner-with-us",
                  },
                ].map((item, i) => (
                  <button
                    key={i}
                    onClick={() => handleNavigate(item.path)}
                    className="flex flex-col items-center text-2xl font-bold text-gray-800 hover:text-[#00B2FF] transition-colors duration-300"
                  >
                    <span>{item.label}</span>
                    <span className="text-sm font-medium text-gray-500">
                      {item.title}
                    </span>
                  </button>
                ))}

                <button
                  onClick={() => handleNavigate("/contact")}
                  className=" flex flex-col items-center  text-white font-bold px-6  rounded-md text-lg"
                >
                  📞
                  <span className="text-sm font-medium text-gray-500">
                    Contact
                  </span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

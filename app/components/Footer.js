import Link from "next/link";
import Image from "next/image"; // Import the Image component

const Footer = () => {
  return (
    // Use the same dark background as the navbar for consistency
    <footer className="bg-[#111827] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Logo and Company Info */}
          <div className="md:col-span-2">
            <Link href="/">
              <Image
                src="/footer-logo.png" // The same logo used in the navbar
                alt="Pegasus Health Group Logo"
                width={220}
                height={48}
              />
            </Link>
            <p className="mt-4 text-gray-400 max-w-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              doeiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Column 2: Resources */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-[#00B2FF]">Resources</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link href="/faqs" className="hover:text-[#00B2FF]">
                  FAQ's
                </Link>
              </li>
              <li>
                <Link
                  href="/digital-resources"
                  className="hover:text-[#00B2FF]"
                >
                  Digital Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/training-schedules"
                  className="hover:text-[#00B2FF]"
                >
                  Training Schedules
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#00B2FF]">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-[#00B2FF]">Legal</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link href="/terms-of-use" className="hover:text-[#00B2FF]">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-[#00B2FF]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/advertising-policy"
                  className="hover:text-[#00B2FF]"
                >
                  Advertising Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright Notice */}
        <div className="text-center text-gray-500 pt-8 mt-8 border-t border-gray-700">
          <p>
            &copy; {new Date().getFullYear()} Pegasus Health Group. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

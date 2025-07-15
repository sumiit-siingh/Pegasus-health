import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "../../components/AnimateOnScroll";

const BlogPage = () => {
  return (
    <div className="space-y-16 py-12 bg-gradient-to-r from-blue-300 via-white to-blue-300 ">
      {/* Page Header */}
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
          <span className="text-[#00B2FF]">The Pegasus</span>{" "}
          <span className="bg-[#00b2ff] pl-2 pr-2 ">Blog</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-[#323202]">
          Updates from our team, ACA insights, and tips for broker success.
        </p>
      </section>

      {/* Blog Post Grid */}
      <AnimateOnScroll>
        <section className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog Post Card - This would be repeated for each post */}
            <div className="bg-blue-100 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden flex flex-col group">
              <div className="overflow-hidden">
                <Link href="/blog/sample-post">
                  <Image
                    src="https://placehold.co/600x400.png/00B2FF/FFFFFF?text=Post+Image"
                    alt="Blog post feature image"
                    width={600}
                    height={400}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </Link>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-sm font-semibold text-[#00B2FF]">
                  ACA INSIGHTS
                </p>
                <h2 className="mt-2 text-xl font-bold text-[#323202]">
                  <Link href="/blog/sample-post" className="hover:underline">
                    Understanding the New ACA-Compliant Plan Changes
                  </Link>
                </h2>
                <p className="mt-3 text-[#323202] flex-grow">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <p className="text-sm text-gray-400">
                    By Mitch [Last Name] on July 9, 2025
                  </p>
                </div>
              </div>
            </div>
            {/* End of Blog Post Card */}

            {/* Add more cards here... */}
          </div>
        </section>
      </AnimateOnScroll>
    </div>
  );
};

export default BlogPage;

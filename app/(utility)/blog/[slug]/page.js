import Image from "next/image";
import AnimateOnScroll from "../../../components/AnimateOnScroll";

const SinglePostPage = () => {
  return (
    <div className="py-12">
      <AnimateOnScroll>
        <article className="max-w-4xl mx-auto bg-gray-900/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
          {/* Post Header */}
          <header className="text-center mb-12">
            <p className="text-base font-semibold text-[#00B2FF]">
              ACA INSIGHTS
            </p>
            <h1 className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Understanding the New ACA-Compliant Plan Changes
            </h1>
            <p className="mt-6 text-lg text-gray-400">
              Posted on July 9, 2025 by Mitch [Last Name]
            </p>
          </header>

          {/* Feature Image */}
          <Image
            src="https://placehold.co/1200x600.png/00B2FF/FFFFFF?text=Feature+Image"
            alt="Feature image for the blog post"
            width={1200}
            height={600}
            className="w-full rounded-lg shadow-lg mb-12"
          />

          {/* Post Content */}
          <div className="prose prose-xl max-w-none prose-invert text-white/80">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
              Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
              massa.
            </p>
            <h2>A New Section Heading</h2>
            <p>
              Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu
              ad litora torquent per conubia nostra, per inceptos himenaeos.
              Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.
              Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque
              sem at dolor. Maecenas mattis.
            </p>
            <blockquote>
              "This is a blockquote. A standout quote from the article would go
              here to emphasize a key point."
            </blockquote>
            <p>
              Sed Lacinia, urna non tincidunt mattis, tortor neque adipiscing
              diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut
              fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat
              imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices.
            </p>
          </div>
        </article>
      </AnimateOnScroll>
    </div>
  );
};

export default SinglePostPage;

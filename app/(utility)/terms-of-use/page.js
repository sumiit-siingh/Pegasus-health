import AnimateOnScroll from "../../components/AnimateOnScroll";

const TermsOfUsePage = () => {
  return (
    <div className="py-12 bg-gradient-to-r from-blue-300 via-white to-blue-300">
      <AnimateOnScroll>
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm border border-[#bdbdb0] rounded-2xl p-8 md:p-12">
          {/* Page Header */}
          <div className="text-center mb-12 ">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#323202]">
              <span className="bg-[#00b2ff] pl-2 pr-2 text-white">Terms</span>{" "}
              of <span className="text-[#00b2ff]">Use</span>
            </h1>
            <p className="mt-4 text-gray-400">Last Updated: July 9, 2025</p>
          </div>

          {/* Legal Content - prose-invert styles the text for a dark background */}
          <div className="prose lg:prose-xl max-w-none prose-invert text-[#323202]">
            <p>
              Welcome to{" "}
              <span className="text-[#00B2FF] md:font-extrabold font-bold ">
                Pegasus
              </span>{" "}
              Health Group. By accessing or using our website, you agree to be
              bound by the terms and conditions set forth below. If you do not
              wish to be bound by these terms and conditions, you may not access
              or use the site.
            </p>

            <h2>1. Use of the Site</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
              Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
              massa.
            </p>

            <h2>2. Intellectual Property</h2>
            <p>
              Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu
              ad litora torquent per conubia nostra, per inceptos himenaeos.
              Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.
              Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque
              sem at dolor. Maecenas mattis.
            </p>

            <h2>3. Limitation of Liability</h2>
            <p>
              Sed Lacinia, urna non tincidunt mattis, tortor neque adipiscing
              diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut
              fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat
              imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices.
              Suspendisse in justo eu magna luctus suscipit.
            </p>
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  );
};

export default TermsOfUsePage;

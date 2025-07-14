import AnimateOnScroll from "../../components/AnimateOnScroll";

const FaqPage = () => {
  return (
    <div className="space-y-16 py-12 bg-gradient-to-r from-blue-300 via-white to-blue-300 px-4">
      {/* Page Header */}
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold ">
          <span className="text-white bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500">
            Frequently Asked
          </span>{" "}
          <span className="text-[#00B2FF]">Questions</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-[#323202]">
          Have questions? We have answers. If you can't find what you're looking
          for, feel free to contact us directly.
        </p>
      </section>

      {/* FAQ Section */}
      <AnimateOnScroll>
        <section className="max-w-4xl mx-auto  backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
          <div className="space-y-10">
            {/* Category: About Our Plans */}
            <div>
              <h2 className="text-2xl font-bold text-[#323202] mb-6 border-l-4 border-[#00B2FF] pl-4">
                About Our Plans
              </h2>
              <div className="space-y-4">
                {/* FAQ Item */}
                <details className="group bg-white p-4 rounded-lg cursor-pointer">
                  <summary className="flex justify-between items-center font-semibold text-[#00b2ff] list-none">
                    Are these plans ACA-compliant?
                    <span className="transform transition-transform duration-300 group-open:rotate-180">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-4 text-[#323202]">
                    Yes, absolutely. All our PPO plans are fully compliant with
                    the Affordable Care Act (ACA), ensuring they meet all
                    essential health benefit requirements.
                  </p>
                </details>
                {/* FAQ Item */}
                <details className="group bg-white p-4 rounded-lg cursor-pointer">
                  <summary className="flex justify-between items-center font-semibold text-[#00b2ff] list-none">
                    What network do the PPO plans use?
                    <span className="transform transition-transform duration-300 group-open:rotate-180">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-4 text-[#323202]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </details>
              </div>
            </div>

            {/* Category: For Brokers */}
            <div>
              <h2 className="text-2xl font-bold  text-[#323202] mb-6 border-l-4 border-[#00B2FF] pl-4">
                For Brokers & Onboarding
              </h2>
              <div className="space-y-4">
                {/* FAQ Item */}
                <details className="group bg-white p-4 rounded-lg cursor-pointer">
                  <summary className="flex justify-between items-center font-semibold text-[#00b2ff] list-none">
                    What are the commission rates?
                    <span className="transform transition-transform duration-300 group-open:rotate-180">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-4 text-[#323202]">
                    Our commission structure is highly competitive and designed
                    to be more profitable for you than traditional GA/FMO
                    models. For specific rates, please partner with us and speak
                    to a representative.
                  </p>
                </details>
                {/* FAQ Item */}
                <details className="group bg-white p-4 rounded-lg cursor-pointer">
                  <summary className="flex justify-between items-center font-semibold text-[#00b2ff] list-none">
                    What support and tools do you provide?
                    <span className="transform transition-transform duration-300 group-open:rotate-180">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-4 text-[#323202]">
                    We provide a dedicated support team, a modern broker portal
                    for tracking, digital resources like forms and brochures,
                    and regular training sessions.
                  </p>
                </details>
                {/* FAQ Item */}
                <details className="group bg-white p-4 rounded-lg cursor-pointer">
                  <summary className="flex justify-between items-center font-semibold text-[#00b2ff] list-none">
                    How long does the onboarding process take?
                    <span className="transform transition-transform duration-300 group-open:rotate-180">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-4 text-[#323202]">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>
    </div>
  );
};

export default FaqPage;

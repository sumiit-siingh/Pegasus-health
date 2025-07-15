import AnimateOnScroll from "../../components/AnimateOnScroll";

const TrainingSchedulesPage = () => {
  return (
    <div className="space-y-16 py-12 bg-gradient-to-r from-blue-300 via-white to-blue-300">
      {/* Page Header */}
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
          <sapn className="bg-[#00b2ff] pl-2 pr-2 ">Training</sapn>{" "}
          <span className="text-[#00B2FF]">Schedules</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-[#323202]">
          Stay up-to-date with our live webinars, certification sessions, and
          Q&A events. Click on an event for details and registration links.
        </p>
      </section>

      {/* Embedded Calendar Section */}
      <AnimateOnScroll>
        <section className="max-w-6xl mx-auto">
          <div className="bg-blue-100 backdrop-blur-sm border border-white/10 rounded-2xl p-4 md:p-6">
            <div className="relative h-0" style={{ paddingBottom: "75%" }}>
              {" "}
              {/* Aspect ratio container */}
              <iframe
                src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=UTC&src=ZW4uaW5kaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%2309d6c7"
                style={{
                  border: "0",
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                }}
                className="rounded-lg"
                width="800"
                height="600"
                frameBorder="0"
                scrolling="no"
                title="Training Schedules Calendar"
              ></iframe>
            </div>
          </div>
          <p className="text-center mt-4 text-sm text-gray-400">
            Having trouble viewing the calendar?{" "}
            <a href="#" className="underline hover:text-[#00B2FF]">
              Click here to open it in a new tab.
            </a>
          </p>
        </section>
      </AnimateOnScroll>
    </div>
  );
};

export default TrainingSchedulesPage;

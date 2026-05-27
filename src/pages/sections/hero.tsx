import { useScroll } from "@/hooks/use-scroll";

const Hero = () => {
  const { scrollToSection } = useScroll();

  return (
    <section id="home" className="hero bg-base-200 min-h-screen px-4 sm:px-8">
      <div className="hero-content flex-col lg:flex-row-reverse gap-12 lg:gap-24 max-w-6xl">

        <div className="flex-shrink-0">
          <img
            src="/assets/img/profile.jpg"
            className="max-w-xs sm:max-w-sm rounded-xl shadow-2xl border border-base-300"
            alt="Adryan Ashidiq - Fullstack Developer"
          />
        </div>

        <div className="space-y-2 md:space-y-4 lg:space-y-6 text-left max-w-xl">
          <div>
            <h2 className="text-base lg:text-xl font-medium tracking-wide text-base-content/80">
              Adryan Ashidiq
            </h2>
            <h1 className="text-xl md:text-5xl lg:text-5xl font-extrabold tracking-tight mt-1 mb-3">
              Fullstack Developer
            </h1>
            <h3 className="text-sm lg:text-lg font-medium text-base-content/90">
              Turning Complex Business{" "}
              <span className="text-primary italic font-semibold">Logic</span>{" "}
              into Seamless Products.
            </h3>
          </div>

          <p className="text-xs md:text-base lg:text-base leading-relaxed text-base-content/80">
            From .NET Web Apps to E-commerce platforms and LMS dashboards — I
            build end-to-end solutions that are fast, secure, and user-centric.
            With more than 2 years of experience in delivering and supporting
            software for global users, I help brands modernize their digital
            infrastructure.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <button
              className="btn btn-primary px-6"
              onClick={() => scrollToSection("contact")}
            >
              Contact Me
            </button>
            <a
              download={true}
              href="/assets/file/CV Adryan (2026).pdf"
              className="btn btn-outline px-6"
            >
              My Resume
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
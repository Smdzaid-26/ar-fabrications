import heroImage from "../../assets/images/services/hero.webp";

const Hero = ({ openQuote }) => {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative flex items-center pt-20 min-h-[80vh] md:min-h-screen"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center 30%",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/40"></div>

      {/* Content */}
      <div className="relative z-10 w-full px-5 sm:px-6 md:px-16 lg:px-24">
        <div className="max-w-[650px] text-white">

          {/* Heading */}
          <h1 className="text-[30px] sm:text-4xl md:text-[52px] leading-tight font-bold tracking-tight">
            Premium Steel & Grill
          </h1>

          <h1 className="text-[30px] sm:text-4xl md:text-[52px] leading-tight font-semibold tracking-tight">
            Designs for Modern
          </h1>

          <h1 className="text-[30px] sm:text-4xl md:text-[52px] leading-tight font-bold tracking-tight">
            Homes
          </h1>

          {/* Description */}
          <p className="mt-4 md:mt-5 text-gray-300 text-sm sm:text-base md:text-lg max-w-[520px]">
            Custom gates, window grills, railings & steel solutions built for
            strength and style.
          </p>

          {/* Buttons */}
          <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">

            {/* Quote Button */}
            <button
              onClick={openQuote}
              className="w-full sm:w-auto px-6 md:px-7 py-3 rounded-md font-semibold text-white
              bg-gradient-to-b from-[#f97316] to-[#ea580c]
              shadow-md hover:brightness-110 transition"
            >
              Get Free Quote
            </button>

            {/* View Designs */}
            <button
              onClick={() => scrollToSection("services")}
              className="w-full sm:w-auto px-6 md:px-7 py-3 rounded-md font-semibold text-white
              border border-white/40 bg-white/5
              backdrop-blur-sm hover:bg-white hover:text-black transition"
            >
              View Our Designs
            </button>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
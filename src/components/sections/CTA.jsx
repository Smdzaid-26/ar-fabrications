import ctaBg from "../../assets/images/services/structuralcta.png";

const CTA = () => {

  const scrollToServices = () => {
    const section = document.getElementById("services");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative py-20 md:py-24 text-white bg-cover bg-center 
      brightness-105 contrast-110"
      style={{ backgroundImage: `url(${ctaBg})` }}
    >

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r
        from-black/90 via-black/75 to-transparent"
      ></div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-6 md:px-12 text-left">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight drop-shadow-lg leading-tight">
          Let’s Build Something Strong & Beautiful
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-lg mb-8 max-w-2xl leading-relaxed">
          From custom gates to complete structural fabrication,
          we deliver strength, precision, and lasting quality.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-6">

          {/* Call Button */}
          <a
            href="tel:+919391093490"
            className="px-10 py-4 rounded-md font-semibold text-white
            bg-gradient-to-b from-[#f97316] to-[#ea580c]
            hover:brightness-110 hover:scale-105
            shadow-2xl shadow-orange-500/30
            transition duration-300"
          >
            📞 Get Free Consultation
          </a>

          {/* View Designs */}
          <button
            onClick={scrollToServices}
            className="px-10 py-4 rounded-md font-semibold text-white
            border border-white/30
            backdrop-blur-sm
            hover:bg-white/10 hover:scale-105
            transition duration-300"
          >
            View Our Designs
          </button>

        </div>

      </div>
    </section>
  );
};

export default CTA;
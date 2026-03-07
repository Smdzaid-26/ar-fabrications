import fabricationImage from "../../assets/images/services/industrial fabrication.png";

const About = () => {
  return (
    <section id="about" className="bg-[#0b1119] text-white py-24">

      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About AR Fabrications
          </h2>

          <p className="text-gray-400 mb-6 leading-relaxed">
            AR Fabrications specializes in high-quality steel fabrication
            solutions for residential, commercial, and industrial projects.
            We design and manufacture custom gates, window grills, balcony
            railings, staircase railings, and structural steel work that
            combine durability with modern design.
          </p>

          <p className="text-gray-400 mb-8 leading-relaxed">
            Our focus is on precision craftsmanship, strong materials, and
            reliable installation. Every project is built with attention to
            detail to ensure long-lasting strength and visual appeal.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-6">

            <div>
              <h3 className="text-2xl font-bold text-orange-500">10+</h3>
              <p className="text-gray-400 text-sm">Years Experience</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-orange-500">500+</h3>
              <p className="text-gray-400 text-sm">Projects Completed</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-orange-500">100%</h3>
              <p className="text-gray-400 text-sm">Quality Materials</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-orange-500">24/7</h3>
              <p className="text-gray-400 text-sm">Customer Support</p>
            </div>

          </div>

        </div>

        {/* Right Image */}
        <div className="relative">

          <img
            src={fabricationImage}
            alt="Fabrication Work"
            className="rounded-xl shadow-lg object-cover w-full h-[420px]"
            loading="lazy"
          />

        </div>

      </div>

    </section>
  );
};

export default About;
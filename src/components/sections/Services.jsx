import mainGate from "../../assets/images/services/main-gate.png";
import windowGrill from "../../assets/images/services/window-grill.png";
import balcony from "../../assets/images/services/balcony.png";
import staircase from "../../assets/images/services/staircase.png";
import custom from "../../assets/images/services/custom.png";
import structural from "../../assets/images/services/structural.png";
import industry from "../../assets/images/services/industrial fabrication.png";

import { Link } from "react-router-dom";

const services = [
  { title: "Main Gates", slug: "main-gates", image: mainGate },
  { title: "Window Grills", slug: "window-grills", image: windowGrill },
  { title: "Balcony Railings", slug: "balcony-railings", image: balcony },
  { title: "Staircase Railings", slug: "staircase-railings", image: staircase },
  { title: "Custom Steel Designs", slug: "custom-steel", image: custom },
  { title: "Structural Fabrication", slug: "structural-fabrication", image: structural },
];

const Services = () => {
  return (
    <section id="services" className="bg-[#0e1319] text-white py-24">
      <div className="max-w-7xl mx-auto px-8">

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {services.map((service) => (
            <Link key={service.slug} to={`/services/${service.slug}`}>

              <div className="relative group rounded-xl overflow-hidden border border-white/10 transition duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(249,115,22,0.25)]">

                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-72 object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                {/* Title */}
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-xl font-semibold tracking-wide">
                    {service.title}
                  </h3>
                </div>

              </div>

            </Link>
          ))}

          {/* Industrial Fabrication Full Width */}
          <Link
            to="/services/industrial-fabrication"
            className="md:col-span-3"
          >

            <div className="relative group rounded-xl overflow-hidden border border-orange-500/30 transition duration-500 hover:shadow-[0_10px_50px_rgba(249,115,22,0.35)]">

              <img
                src={industry}
                alt="Industrial Fabrication"
                className="w-full h-60 md:h-64 object-cover transition duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

              {/* Text */}
              <div className="absolute bottom-8 left-8 max-w-lg">

                <h3 className="text-2xl md:text-3xl font-bold">
                  Industrial Fabrication
                </h3>

                <p className="text-gray-300 mt-2 text-sm md:text-base">
                  Heavy-duty fabrication solutions for factories, warehouses,
                  and large-scale industrial structures.
                </p>

              </div>

            </div>

          </Link>

        </div>

      </div>
    </section>
  );
};

export default Services;
// import penthouse from "../../assets/images/services/penthouse.png";
// import elevation from "../../assets/images/services/elevation.png";

import { Link } from "react-router-dom";

const CustomSteel = () => {
  return (
    <section className="bg-[#0e1319] text-white py-24">
      <div className="max-w-6xl mx-auto px-8">

        <h2 className="text-3xl font-bold mb-10 text-center">
          Custom Steel Designs
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Penthouse */}
          <Link to="/services/custom-steel/penthouse">

            <div className="relative group rounded-xl overflow-hidden border border-white/10 hover:shadow-[0_10px_40px_rgba(249,115,22,0.25)] transition">

              <img
                src={penthouse}
                alt="Penthouse"
                className="w-full h-72 object-cover group-hover:scale-110 transition"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

              <div className="absolute bottom-6 left-6">
                <h3 className="text-xl font-semibold">Penthouse Designs</h3>
              </div>

            </div>

          </Link>

          {/* Elevation */}
          <Link to="/services/custom-steel/elevation">

            <div className="relative group rounded-xl overflow-hidden border border-white/10 hover:shadow-[0_10px_40px_rgba(249,115,22,0.25)] transition">

              <img
                src={elevation}
                alt="Elevation"
                className="w-full h-72 object-cover group-hover:scale-110 transition"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

              <div className="absolute bottom-6 left-6">
                <h3 className="text-xl font-semibold">Elevation Designs</h3>
              </div>

            </div>

          </Link>

        </div>

      </div>
    </section>
  );
};

export default CustomSteel;
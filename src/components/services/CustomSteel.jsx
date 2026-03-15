// import penthouse from "../../assets/images/services/penthouse.webp";
// import elevation from "../../assets/images/services/elevation.webp";

import { Link } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

const CustomSteel = () => {
  return (
    <>
      <Navbar />

      <section className="bg-[#0e1319] text-white py-24 min-h-screen">

        <div className="max-w-7xl mx-auto px-8">

          <h2 className="text-3xl font-bold mb-12 text-center">
            Custom Steel Designs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Penthouse */}
            <Link to="/services/custom-steel/penthouse">

              <div className="relative group rounded-xl overflow-hidden border border-white/10 transition duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(249,115,22,0.25)]">

                <img
                  src={penthouse}
                  alt="Penthouse Fabrication"
                  className="w-full h-72 object-cover group-hover:scale-110 transition"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

                <div className="absolute bottom-6 left-6">
                  <h3 className="text-xl font-semibold">
                    Penthouse Fabrication
                  </h3>
                </div>

              </div>

            </Link>

            {/* Elevation */}
            <Link to="/services/custom-steel/elevation">

              <div className="relative group rounded-xl overflow-hidden border border-white/10 transition duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(249,115,22,0.25)]">

                <img
                  src={elevation}
                  alt="Elevation Steel Designs"
                  className="w-full h-72 object-cover group-hover:scale-110 transition"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

                <div className="absolute bottom-6 left-6">
                  <h3 className="text-xl font-semibold">
                    Elevation Steel Designs
                  </h3>
                </div>

              </div>

            </Link>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
};

export default CustomSteel;
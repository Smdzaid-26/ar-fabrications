import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {

    // If user is not on home page
    if (location.pathname !== "/") {

      navigate("/");

      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      }, 200);

    } else {

      const section = document.getElementById(id);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }

    }
  };

  return (
    <footer id="contact" className="bg-[#0b1119] text-gray-300 pt-20 pb-12">

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Business Info */}
        <div>
          <h3 className="text-white text-2xl font-bold mb-4">
            AR Fabrications
          </h3>

          <p className="text-sm leading-relaxed text-gray-400">
            Premium steel gates, window grills, balcony railings and
            structural fabrication services in Hindupur.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            Quick Links
          </h4>

          <ul className="space-y-3 text-sm">

            <li>
              <button onClick={() => scrollToSection("home")}
              className="hover:text-orange-400">
                Home
              </button>
            </li>

            <li>
              <button onClick={() => scrollToSection("services")}
              className="hover:text-orange-400">
                Services
              </button>
            </li>

            <li>
              <button onClick={() => scrollToSection("industries")}
              className="hover:text-orange-400">
                Industries
              </button>
            </li>

            <li>
              <button onClick={() => scrollToSection("contact")}
              className="hover:text-orange-400">
                Contact
              </button>
            </li>

          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            Contact Info
          </h4>

          <div className="space-y-3 text-sm text-gray-400">
            <p>📞 +91 93910 93490</p>
            <p>📍 Hindupur, Andhra Pradesh</p>
            <p>✉️ arfabrications@email.com</p>
          </div>
        </div>

      </div>

      <div className="border-t border-white/10 mt-12"></div>

      <div className="text-center text-sm text-gray-500 mt-6">
        © {new Date().getFullYear()} AR Fabrications. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
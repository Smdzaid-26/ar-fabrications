const Footer = () => {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
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
              <button
                onClick={() => scrollToSection("home")}
                className="hover:text-orange-400 transition relative
                after:absolute after:left-0 after:-bottom-1 after:h-[1px]
                after:w-0 after:bg-orange-400 after:transition-all
                hover:after:w-full"
              >
                Home
              </button>
            </li>

            <li>
              <button
                onClick={() => scrollToSection("services")}
                className="hover:text-orange-400 transition relative
                after:absolute after:left-0 after:-bottom-1 after:h-[1px]
                after:w-0 after:bg-orange-400 after:transition-all
                hover:after:w-full"
              >
                Services
              </button>
            </li>

            <li>
              <button
                onClick={() => scrollToSection("industries")}
                className="hover:text-orange-400 transition relative
                after:absolute after:left-0 after:-bottom-1 after:h-[1px]
                after:w-0 after:bg-orange-400 after:transition-all
                hover:after:w-full"
              >
                Industries
              </button>
            </li>

            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-orange-400 transition relative
                after:absolute after:left-0 after:-bottom-1 after:h-[1px]
                after:w-0 after:bg-orange-400 after:transition-all
                hover:after:w-full"
              >
                Contact
              </button>
            </li>

          </ul>

        </div>


        {/* Contact Info */}
        <div>

          <h4 className="text-white font-semibold mb-4">
            Contact Info
          </h4>

          <div className="space-y-3 text-sm text-gray-400">

            <p className="flex items-center gap-2">
              📞 +91 93910 93490
            </p>

            <p className="flex items-center gap-2">
              📍 Hindupur, Andhra Pradesh
            </p>

            <p className="flex items-center gap-2">
              ✉️ arfabrications@email.com
            </p>

          </div>

        </div>

      </div>


      {/* Divider */}
      <div className="border-t border-white/10 mt-12"></div>


      {/* Bottom Line */}
      <div className="text-center text-sm text-gray-500 mt-6">
        © {new Date().getFullYear()} AR Fabrications. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
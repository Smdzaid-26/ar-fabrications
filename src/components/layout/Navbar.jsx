import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = ({ openQuote }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    const sections = ["home", "about", "services", "industries", "contact"];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          if (
            scrollPosition >= section.offsetTop &&
            scrollPosition < section.offsetTop + section.offsetHeight
          ) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (id) =>
    `pb-1 border-b-2 ${
      active === id
        ? "text-white border-primary"
        : "text-gray-500 border-transparent hover:text-gray-200"
    }`;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0e1116] border-b border-white/5">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-16 py-4">

        {/* Logo */}
        <h1
          onClick={() => scrollToSection("home")}
          className="text-2xl font-bold tracking-wide text-gray-100 cursor-pointer"
        >
          <span className="text-primary text-3xl font-extrabold">AR</span>
          <span className="ml-2 text-gray-200 tracking-wider">
            FABRICATIONS
          </span>
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">

          <button onClick={() => scrollToSection("home")} className={linkClass("home")}>
            Home
          </button>

          <button onClick={() => scrollToSection("about")} className={linkClass("about")}>
            About Us
          </button>

          <button onClick={() => scrollToSection("services")} className={linkClass("services")}>
            Services
          </button>

          <button onClick={() => scrollToSection("industries")} className={linkClass("industries")}>
            Industries
          </button>

          <button onClick={() => scrollToSection("contact")} className={linkClass("contact")}>
            Contact
          </button>

        </nav>

        {/* Desktop CTA */}
        {/* <button
          onClick={openQuote}
          className="hidden md:block px-7 py-2 rounded-sm font-semibold text-white
          bg-gradient-to-b from-[#f97316] to-[#d9480f]"
        >
          Get a Quote
        </button> */}

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0e1116] border-t border-white/10">
          <div className="flex flex-col px-6 py-4 gap-4 text-sm font-medium">

            <button onClick={() => scrollToSection("home")} className="text-left text-white">
              Home
            </button>

            <button onClick={() => scrollToSection("about")} className="text-left text-gray-300">
              About Us
            </button>

            <button onClick={() => scrollToSection("services")} className="text-left text-gray-300">
              Services
            </button>

            <button onClick={() => scrollToSection("industries")} className="text-left text-gray-300">
              Industries
            </button>

            <button onClick={() => scrollToSection("contact")} className="text-left text-gray-300">
              Contact
            </button>

            {/* Mobile CTA */}
            {/* <button
              onClick={openQuote}
              className="mt-2 w-full py-3 rounded-md font-semibold text-white
              bg-gradient-to-b from-[#f97316] to-[#d9480f]"
            >
              Get a Quote
            </button> */}

          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
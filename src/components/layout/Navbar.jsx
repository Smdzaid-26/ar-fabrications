import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const SECTIONS = ["home", "about", "services", "industries", "contact"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setMenuOpen(false);
    }
  };

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY + 140;

          for (let id of SECTIONS) {
            const section = document.getElementById(id);

            if (section) {
              const top = section.offsetTop;
              const height = section.offsetHeight;

              if (scrollPosition >= top && scrollPosition < top + height) {
                setActive((prev) => (prev === id ? prev : id));
              }
            }
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const linkClass = (id) =>
    `pb-1 border-b-2 transition-colors duration-200 ${
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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0e1116] border-t border-white/10">
          <div className="flex flex-col px-6 py-4 gap-4 text-sm font-medium">

            {SECTIONS.map((id) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`text-left ${
                  active === id ? "text-white" : "text-gray-300"
                }`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}

          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
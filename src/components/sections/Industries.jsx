const industries = [
  {
    title: "Residential Homes",
    desc: "Custom gates, balcony railings, window grills and staircase railings for modern homes.",
    icon: "🏠"
  },
  {
    title: "Apartments & Villas",
    desc: "Durable steel fabrication solutions for apartments, villas and residential complexes.",
    icon: "🏢"
  },
  {
    title: "Commercial Buildings",
    desc: "Steel structures, safety railings and decorative metal fabrication for offices and shops.",
    icon: "🏬"
  },
  {
    title: "Factories & Warehouses",
    desc: "Heavy-duty industrial fabrication for factories, warehouses and industrial facilities.",
    icon: "🏭"
  },
  {
    title: "Gated Communities",
    desc: "Large entrance gates, fencing and security grills for gated communities.",
    icon: "🚪"
  },
  {
    title: "Construction Projects",
    desc: "Structural steel work and fabrication support for construction sites.",
    icon: "🏗"
  }
];

const Industries = () => {
  return (
    <section id="industries" className="bg-[#0e1319] text-white py-24">

      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Industries We Serve
          </h2>
          <p className="text-gray-400 mt-3">
            We provide fabrication solutions for residential, commercial and industrial projects.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {industries.map((item, index) => (
            <div
              key={index}
              className="bg-[#111827] border border-white/10 rounded-xl p-6 hover:border-orange-500 transition duration-300"
            >
              <div className="text-4xl mb-4">{item.icon}</div>

              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Industries;
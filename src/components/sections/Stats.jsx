const Stats = () => {
  return (
    <section className="relative bg-[#0b0f14] text-white py-24 overflow-hidden">

      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-16">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-wide">
            Crafting Strength with Style
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            AR Fabrications specializes in high quality steel grills, gates,
            and railings for your home.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          {/* Card */}
          <div className="bg-[#11161d] border border-white/5 rounded-sm py-12 text-center hover:border-primary/40 transition duration-300">
            <h3 className="text-5xl font-extrabold text-primary">500+</h3>
            <p className="mt-3 text-gray-400">Completed Projects</p>
          </div>

          <div className="bg-[#11161d] border border-white/5 rounded-sm py-12 text-center hover:border-primary/40 transition duration-300">
            <h3 className="text-5xl font-extrabold text-primary">10+</h3>
            <p className="mt-3 text-gray-400">Years Experience</p>
          </div>

          <div className="bg-[#11161d] border border-white/5 rounded-sm py-12 text-center hover:border-primary/40 transition duration-300">
            <h3 className="text-5xl font-extrabold text-primary">100%</h3>
            <p className="mt-3 text-gray-400">Quality Commitment</p>
          </div>

          <div className="bg-[#11161d] border border-white/5 rounded-sm py-12 text-center hover:border-primary/40 transition duration-300">
            <h3 className="text-5xl font-extrabold text-primary">100%</h3>
            <p className="mt-3 text-gray-400">Customer Satisfaction</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stats;
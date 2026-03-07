const features = [
  "Premium Quality Steel",
  "Modern Designs",
  "Affordable Pricing",
  "On-Time Delivery",
  "Skilled Craftsmanship",
];

const WhyChoose = () => {
  return (
    <section className="bg-[#0b1118] py-24 text-white">
      <div className="max-w-7xl mx-auto px-12 text-center">

        <h2 className="text-5xl font-bold mb-6 tracking-tight">
          Why Choose Us
        </h2>
        <p className="text-gray-400 mb-16 text-lg">
          Trusted by homeowners for quality, durability, and timely delivery.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm 
              border border-white/10 
              rounded-xl p-8 
              hover:border-orange-500/40 
              hover:shadow-[0_0_30px_rgba(249,115,22,0.25)] 
              transition-all duration-500"
            >
              <div className="w-12 h-12 mx-auto mb-4 
              rounded-full bg-orange-500/20 
              flex items-center justify-center 
              text-orange-400 text-xl">
                ★
              </div>

              <h3 className="text-lg font-semibold">
                {item}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChoose;
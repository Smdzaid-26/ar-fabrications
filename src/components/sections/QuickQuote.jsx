import { useState } from "react";

const QuickQuote = () => {

  const [form, setForm] = useState({
    type: "",
    width: "",
    height: "",
    location: "",
    phone: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendWhatsApp = () => {

    const message = `Hello, I want a fabrication quote.

Gate Type: ${form.type}
Width: ${form.width}
Height: ${form.height}
Location: ${form.location}
Phone: ${form.phone}`;

    const phoneNumber = "91XXXXXXXXXX"; // replace with your whatsapp number

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="bg-[#0b1119] text-white py-24">

      <div className="max-w-5xl mx-auto px-8">

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Get Instant Quote
          </h2>
          <p className="text-gray-400 mt-3">
            Fill details and send your request directly on WhatsApp.
          </p>
        </div>

        <div className="bg-[#111827] border border-white/10 rounded-xl p-8 grid md:grid-cols-2 gap-6">

          {/* Gate Type */}
          <select
            name="type"
            onChange={handleChange}
            className="p-3 rounded bg-[#0e1319] border border-white/10"
          >
            <option value="">Select Gate Type</option>
            <option>Main Gate</option>
            <option>Sliding Gate</option>
            <option>Window Grill</option>
            <option>Balcony Railing</option>
            <option>Staircase Railing</option>
          </select>

          {/* Width */}
          <select
            name="width"
            onChange={handleChange}
            className="p-3 rounded bg-[#0e1319] border border-white/10"
          >
            <option value="">Select Width</option>
            <option>4 ft</option>
            <option>6 ft</option>
            <option>8 ft</option>
            <option>10 ft</option>
            <option>12 ft</option>
          </select>

          {/* Height */}
          <select
            name="height"
            onChange={handleChange}
            className="p-3 rounded bg-[#0e1319] border border-white/10"
          >
            <option value="">Select Height</option>
            <option>4 ft</option>
            <option>5 ft</option>
            <option>6 ft</option>
            <option>7 ft</option>
          </select>

          {/* Location */}
          <input
            name="location"
            onChange={handleChange}
            placeholder="Your Location"
            className="p-3 rounded bg-[#0e1319] border border-white/10"
          />

          {/* Phone */}
          <input
            name="phone"
            onChange={handleChange}
            placeholder="Phone Number"
            className="p-3 rounded bg-[#0e1319] border border-white/10 md:col-span-2"
          />

          {/* Button */}
          <button
            onClick={sendWhatsApp}
            className="md:col-span-2 bg-gradient-to-b from-[#f97316] to-[#ea580c]
            py-3 rounded font-semibold hover:brightness-110 transition"
          >
            Send Quote Request on WhatsApp
          </button>

        </div>

      </div>

    </section>
  );
};

export default QuickQuote;
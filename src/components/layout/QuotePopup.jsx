import { useState } from "react";

import mainGate from "../../assets/images/services/main-gate.png";
import windowGrill from "../../assets/images/services/window-grill.png";
import balcony from "../../assets/images/services/balcony.png";
import staircase from "../../assets/images/services/staircase.png";
import custom from "../../assets/images/services/custom.png";

const designs = [
  { name: "Main Gate", img: mainGate },
  { name: "Window Grill", img: windowGrill },
  { name: "Balcony Railing", img: balcony },
  { name: "Staircase Railing", img: staircase },
  { name: "Custom Fabrication", img: custom }
];

const QuotePopup = ({ isOpen, onClose }) => {

  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    type: "",
    customType: "",
    otherCustom: "",
    width: "",
    height: "",
    location: "",
    phone: "",
    details: ""
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const selectDesign = (type) => {
    setForm({ ...form, type });
    setStep(2);
  };

  const sendWhatsApp = () => {

    const customValue =
      form.customType === "Other" ? form.otherCustom : form.customType;

    const message = `Hello, I want a fabrication quote.

Type: ${form.type}
Custom Work: ${customValue}
Width: ${form.width}
Height: ${form.height}
Location: ${form.location}
Phone: ${form.phone}
Details: ${form.details}`;

    const phone = "919391093490";

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[100] p-4">

      <div className="bg-[#0e1319] text-white rounded-xl p-5 md:p-8 w-full max-w-xl relative max-h-[90vh] overflow-y-auto">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-lg"
        >
          ✕
        </button>

        <h2 className="text-xl md:text-2xl font-bold mb-6 text-center">
          Get Instant Quote
        </h2>

        {/* STEP 1 */}
        {step === 1 && (
          <div>

            <p className="text-gray-400 mb-4 text-sm">
              Step 1: Select the type of fabrication work
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">

              {designs.map((item) => (
                <div
                  key={item.name}
                  onClick={() => selectDesign(item.name)}
                  className="cursor-pointer border border-white/10 rounded-lg overflow-hidden hover:border-orange-500 transition hover:scale-[1.03]"
                >

                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-20 sm:h-24 md:h-28 w-full object-cover"
                  />

                  <div className="text-center py-2 text-xs sm:text-sm">
                    {item.name}
                  </div>

                </div>
              ))}

            </div>

          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="grid gap-4">

            <p className="text-gray-400 text-sm">
              Step 2: Provide dimensions and fabrication type
            </p>

            {form.type === "Custom Fabrication" && (
              <>
                <select
                  name="customType"
                  onChange={handleChange}
                  className="p-3 rounded bg-[#111827] w-full text-sm"
                >
                  <option value="">Select Custom Work</option>
                  <option>Industrial Fabrication</option>
                  <option>Steel Shed</option>
                  <option>Warehouse Structure</option>
                  <option>Custom Gate Design</option>
                  <option>Other</option>
                </select>

                {form.customType === "Other" && (
                  <input
                    name="otherCustom"
                    placeholder="Describe your custom work"
                    onChange={handleChange}
                    className="p-3 rounded bg-[#111827] w-full text-sm"
                  />
                )}
              </>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                name="width"
                placeholder="Width (ft)"
                onChange={handleChange}
                className="p-3 rounded bg-[#111827] w-full text-sm"
              />

              <input
                name="height"
                placeholder="Height (ft)"
                onChange={handleChange}
                className="p-3 rounded bg-[#111827] w-full text-sm"
              />
            </div>

            <div className="flex justify-between gap-3 mt-2">

              <button
                onClick={() => setStep(1)}
                className="px-4 py-3 rounded bg-gray-700 text-sm"
              >
                Back
              </button>

              <button
                onClick={() => setStep(3)}
                className="flex-1 bg-orange-500 py-3 rounded font-semibold"
              >
                Next
              </button>

            </div>

          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div className="grid gap-4">

            <p className="text-gray-400 text-sm">
              Step 3: Enter contact details
            </p>

            <input
              name="location"
              placeholder="Your Location"
              onChange={handleChange}
              className="p-3 rounded bg-[#111827] w-full text-sm"
            />

            <input
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              className="p-3 rounded bg-[#111827] w-full text-sm"
            />

            <textarea
              name="details"
              placeholder="Additional details (optional)"
              onChange={handleChange}
              className="p-3 rounded bg-[#111827] w-full text-sm"
            />

            <div className="flex justify-between gap-3">

              <button
                onClick={() => setStep(2)}
                className="px-4 py-3 rounded bg-gray-700 text-sm"
              >
                Back
              </button>

              <button
                onClick={sendWhatsApp}
                className="flex-1 bg-gradient-to-b from-[#f97316] to-[#ea580c] py-3 rounded font-semibold"
              >
                Send Quote on WhatsApp
              </button>

            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default QuotePopup;
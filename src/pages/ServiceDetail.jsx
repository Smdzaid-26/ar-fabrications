import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const folderMap = {
  "main-gates": "ar-fabrications-main-gates",
  "window-grills": "ar-fabrications-window-grills",
  "balcony-railings": "ar-fabrications-balcony-railing",
  "staircase-railings": "ar-fabrications-staircase-railings",
  "custom-steel": "ar-fabrications-custom-steel",
  "structural-fabrication": "ar-fabrications-structural-fabrication",
  "industrial-fabrication": "ar-fabrications-industry",
};

const ServiceDetail = () => {
  const { slug } = useParams();

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedDesign, setSelectedDesign] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [material, setMaterial] = useState("High Quality");

  const folder = folderMap[slug];

  useEffect(() => {
    if (!folder) {
      setError("No folder mapped for this service");
      setLoading(false);
      return;
    }

    const fetchImages = async () => {
      try {
        const response = await fetch(
          `https://ar-fabrications-api.vercel.app/images/${folder}`
        );

        const data = await response.json();

        const imageUrls = data.map((img) =>
          img.secure_url.replace("/upload/", "/upload/f_auto,q_auto,w_1000/")
        );

        setImages(imageUrls);
      } catch (err) {
        setError("Failed to load images.");
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [slug, folder]);

  const openQuote = (designCode, image) => {
    setSelectedDesign(designCode);
    setSelectedImage(image);
    setShowModal(true);
  };

  const sendWhatsApp = () => {
    const message = `Hello AR Fabrications,

I liked this design from your website.

Design: ${selectedDesign}
Material Quality: ${material}
Service: ${slug}

Image: ${selectedImage}

Please provide a quotation.`;

    const url = `https://wa.me/919391093490?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <>
      <Navbar />

      <section className="bg-[#0b1119] text-white py-24 px-6 min-h-screen">
        <div className="max-w-7xl mx-auto">

          <h1 className="text-4xl font-bold capitalize mb-12">
            {slug.replaceAll("-", " ")}
          </h1>

          {loading && <p className="text-gray-400">Loading images...</p>}
          {error && <p className="text-red-400">{error}</p>}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {images.map((img, index) => {
              const designCode = `AR-${index + 1}`;

              return (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-xl"
                >

                  <img
                    src={img}
                    alt={`${slug} fabrication ${index + 1}`}
                    className="w-full h-72 object-cover transition duration-300 group-hover:scale-110"
                  />

                  {/* Design Code */}
                  <div className="absolute top-3 left-3 bg-black/70 px-3 py-1 text-sm rounded">
                    {designCode}
                  </div>

                  {/* Hover Buttons */}
                  <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition">

                    <button
                      className="bg-white text-black px-4 py-2 rounded font-semibold"
                      onClick={() => openQuote(designCode, img)}
                    >
                      Request Quote
                    </button>

                  </div>

                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* Quote Modal */}

      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

          <div className="bg-white text-black p-8 rounded-xl w-[90%] max-w-lg">

            <h2 className="text-2xl font-bold mb-4">
              Request Quote
            </h2>

            <img
              src={selectedImage}
              className="rounded mb-4"
            />

            <p className="mb-4 font-semibold">
              Design: {selectedDesign}
            </p>

            <label className="block mb-2 font-semibold">
              Select Material Quality
            </label>

            <select
              className="w-full border p-2 mb-6"
              value={material}
              onChange={(e) => setMaterial(e.target.value)}
            >
              <option>Best Quality (Jindal / MS)</option>
              <option>High Quality (JSW / Jindal Panther)</option>
              <option>Premium Quality (Tata Steel / SS)</option>
            </select>

            <div className="flex gap-4">

              <button
                onClick={sendWhatsApp}
                className="bg-green-500 text-white px-6 py-2 rounded"
              >
                Send on WhatsApp
              </button>

              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 px-6 py-2 rounded"
              >
                Cancel
              </button>

            </div>

          </div>

        </div>
      )}

      <Footer />
    </>
  );
};

export default ServiceDetail;
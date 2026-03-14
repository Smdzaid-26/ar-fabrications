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
  const [material, setMaterial] = useState("High Quality");
  const [showModal, setShowModal] = useState(false);

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

        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }

        const data = await response.json();

        const imageUrls = data.map((img) =>
          img.secure_url.replace(
            "/upload/",
            "/upload/f_auto,q_auto,w_1000/"
          )
        );

        setImages(imageUrls);
        setError(null);

      } catch (err) {

        console.error("Fetch error:", err);
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

Design Code: ${selectedDesign}
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

      <section className="bg-[#0b1119] text-white py-20 px-4 sm:px-6 min-h-screen">

        <div className="max-w-7xl mx-auto">

          <h1 className="text-3xl sm:text-4xl font-bold capitalize mb-12">
            {slug.replaceAll("-", " ")}
          </h1>


          {loading && (
            <p className="text-gray-400">Loading images...</p>
          )}

          {error && (
            <p className="text-red-400">{error}</p>
          )}

          {!loading && !error && images.length === 0 && (
            <p className="text-gray-400">
              No images found in this folder yet.
            </p>
          )}



          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

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
                    className="w-full h-64 sm:h-72 object-cover transition duration-300 group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Design Code */}
                  <div className="absolute top-3 left-3 bg-black/70 px-3 py-1 text-xs sm:text-sm rounded">
                    {designCode}
                  </div>


                  {/* Hover / Mobile Buttons */}
                  <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-3 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition">

                    <button
                      onClick={() => openQuote(designCode, img)}
                      className="bg-white text-black px-4 py-2 rounded font-semibold"
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

        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">

          <div className="bg-white text-black rounded-xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">

            <h2 className="text-xl sm:text-2xl font-bold mb-4">
              Request Quote
            </h2>


            <img
              src={selectedImage}
              alt="Selected Design"
              className="w-full h-48 object-cover rounded mb-4"
            />


            <p className="font-semibold mb-4">
              Design Code: {selectedDesign}
            </p>



            <label className="block font-semibold mb-2">
              Select Material Quality
            </label>

            <select
              value={material}
              onChange={(e) => setMaterial(e.target.value)}
              className="w-full border p-2 rounded mb-6"
            >
              <option>Best Quality (Jindal / MS Steel)</option>
              <option>High Quality (JSW / Jindal Panther / SAIL)</option>
              <option>Premium Quality (Tata Steel / Stainless Steel)</option>
            </select>



            <div className="flex flex-col sm:flex-row gap-3">

              <button
                onClick={sendWhatsApp}
                className="w-full sm:w-auto bg-green-500 text-white px-6 py-3 rounded"
              >
                Send on WhatsApp
              </button>

              <button
                onClick={() => setShowModal(false)}
                className="w-full sm:w-auto bg-gray-300 px-6 py-3 rounded"
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
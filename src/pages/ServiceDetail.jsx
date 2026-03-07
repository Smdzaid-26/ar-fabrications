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
          `https://ar-fabrications-api.onrender.com/images/${folder}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }

        const data = await response.json();

        console.log("Images received:", data);

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
        setError("Failed to load images. Check console.");
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [slug, folder]);

  return (
    <>
      <Navbar />

      <section className="bg-[#0b1119] text-white py-24 px-6 min-h-screen">
        <div className="max-w-7xl mx-auto">

          <h1 className="text-4xl font-bold capitalize mb-12">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${slug} fabrication ${index + 1}`}
                className="rounded-xl w-full h-72 object-cover hover:scale-105 transition duration-300"
                loading="lazy"
              />
            ))}

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default ServiceDetail;
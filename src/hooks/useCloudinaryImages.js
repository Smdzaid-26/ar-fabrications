import { useEffect, useState } from "react";
import axios from "axios";
import { CLOUD_NAME } from "../config/cloudinary";

const useCloudinaryImages = (folder) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get(
          `https://res.cloudinary.com/${CLOUD_NAME}/image/list/${folder}.json`
        );

        const urls = res.data.resources.map(
          (img) =>
            `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${img.public_id}.jpg`
        );

        setImages(urls);
      } catch (err) {
        console.error("Error loading images", err);
      }
    };

    fetchImages();
  }, [folder]);

  return images;
};

export default useCloudinaryImages;
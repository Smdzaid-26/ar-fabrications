import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();

const app = express();
app.use(cors());

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.get("/images/:folder", async (req, res) => {
  try {
    const folder = req.params.folder;

    const result = await cloudinary.search
      .expression(`folder:${folder}`)
      .sort_by("created_at", "desc")
      .max_results(30)
      .execute();

    res.json(result.resources);
  } catch (error) {
    console.error("Cloudinary error:", error);
    res.status(500).json({ error });
  }
});

app.listen(5000, () => {
  console.log("Backend proxy running on http://localhost:5000");
});
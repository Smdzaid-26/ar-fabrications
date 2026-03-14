import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Test route
app.get("/", (req, res) => {
  res.json({ status: "AR Fabrications API running 🚀" });
});

// 🔹 Keep-alive route for Render (cron job will call this)
app.get("/ping", (req, res) => {
  res.status(200).send("pong");
});

// Get images from cloudinary folder
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
    res.status(500).json({ error: "Failed to fetch images" });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Backend proxy running on port ${PORT}`);
});
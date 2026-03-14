import express from "express";
import cors from "cors";
import { v2 as cloudinary } from "cloudinary";

const app = express();

app.use(cors());
app.use(express.json());

/* ===============================
   Cloudinary Config
================================ */

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

/* ===============================
   Health Check Route
================================ */

app.get("/ping", (req, res) => {
  res.status(200).send("pong");
});

/* ===============================
   Root Route
================================ */

app.get("/", (req, res) => {
  res.json({
    status: "AR Fabrications API running 🚀",
  });
});

/* ===============================
   Fetch Images from Cloudinary
================================ */

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
    res.status(500).json({
      error: "Failed to fetch images",
    });
  }
});

/* ===============================
   Export for Vercel
================================ */

export default app;
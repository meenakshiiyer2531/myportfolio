import { app } from "./app.js";
import dotenv from "dotenv";
import { connectDatabase } from "./config/database.js";
import cloudinary from "cloudinary";

dotenv.config({ path: "./backend/config/config.env" });

connectDatabase();

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const PORT = process.env.PORT || 4000; // Default to port 4000 if PORT is not specified in the .env file

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

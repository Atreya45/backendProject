import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    // console.log("file uploaded successfully ", response.url);
    fs.unlinkSync(localFilePath); //remove the locally saved file after uploading on cloudinary
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); //remove the locally saved file if it fails to upload on cloudinary
    return null;
  }
};
export { uploadOnCloudinary };

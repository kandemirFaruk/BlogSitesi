import Photo from "../models/Photo.js";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

const createPhoto = async (req, res) => {
  const result = await cloudinary.uploader.upload(
    req.files.image.tempFilePath,
    {
      use_filename: true,
      folder: "blogSitesi",
    }
  );
  try {
    await Photo.create({
      title: req.body.title,
      description: req.body.description,
      userId: req.body.userId,
      imgUrl: result.secure_url,
      image_id: result.public_id,
    });
    fs.unlinkSync(req.files.image.tempFilePath);
    res.status(201).redirect('/users/dashboard')
  } catch (error) {
    res.status(500).json({
      succeded: false,
      error,
    });
  }
};

export { createPhoto };

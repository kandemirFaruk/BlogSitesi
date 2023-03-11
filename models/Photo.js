import mongoose from "mongoose";

const { Schema } = mongoose;

const photoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    trim: true,
    required: true,
  },
  uploadedAt: {
    type: Date,
    default: Date.now,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  imgUrl: {
    type: String,
    trim: true,
  },
  image_id: {
    type: String,
  },
});

const Photo = mongoose.Model("Photo", photoSchema);

export default Photo;

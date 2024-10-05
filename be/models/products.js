import mongoose, { version } from "mongoose";

const ProductSchema = mongoose.Schema(
  {
    name: { type: String, require: true },
    price: { type: Number, require: true },
    stock: Number,
    description: String,
    imageUrl: String,
  },
  { timestamps: true, versionKey: false }
);
export default mongoose.model("Product", ProductSchema);

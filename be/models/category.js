import mongoose from "mongoose";
import validator from "validator";

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("Category", CategorySchema);

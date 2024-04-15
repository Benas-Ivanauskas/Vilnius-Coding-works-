import mongoose from "mongoose";
const Schema = mongoose.Schema;

const BlogSchema = new Schema(
  {
    title: { type: String, required: true },
    text: { type: String, required: true },
    image: { type: String, required: true },
    autorius: { type: String, required: true },
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", BlogSchema);

export default Blog;

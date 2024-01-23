// schema to use?
import mongoose from "mongoose";
import { Schema } from "mongoose";

// typescript type (can also be an interface)
type Bloginfo = {
    title: string;
    date: string;
    image: string;
    para: string;
    aut: string;
  };

// mongoose schema 
const blogSchema = new Schema<Bloginfo>({
    title: { type: String, required: true },
    date: { type: String, required: true },
    image: { type: String, required: true },
    para: { type: String, required: true },
    aut: { type: String, required: true },
});

// defining the collection and model
// const ScBlog = mongoose.models['Blogs'] || mongoose.model('Blogs', blogSchema);
const ScBlog = mongoose.model('Blog', blogSchema);

export default ScBlog;
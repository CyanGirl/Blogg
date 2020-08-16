const mongoose = require("mongoose");
const schema = mongoose.Schema;

//creating schema
const BlogPage = new schema({
  title: { type: String, required: true },
  article: { type: String, required: true },
  date: { type: Date, required: true },
  author: { type: String, required: true },
  open: { type: Number, required: true },
});

//creating database in Atlas
const Blogs = mongoose.model("Blogs", BlogPage);

module.exports = Blogs;

const mongoose = require("mongoose");
require("dotenv").config();

const url = process.env.MONGODB_URL;

mongoose.connect(url);

const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const Blog = mongoose.model("blog", blogSchema);

module.exports = Blog;

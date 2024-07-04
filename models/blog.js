const mongoose = require("mongoose");
require("dotenv").config();

const url = process.env.MONGODB_URL;

mongoose.connect(url);

const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
});

blogSchema.set("toJSON", {
  transform: (document, returnedDocument, options) => {
    returnedDocument.id = document._id;
    delete returnedDocument._id;
    delete returnedDocument.__v;
    return returnedDocument;
  },
});

const Blog = mongoose.model("blog", blogSchema);

module.exports = Blog;

const blogRouter = require("express").Router();
const Blog = require("../models/blog");

blogRouter.get("/", (request, response) => response.send("<h1>Blogs</h1>"));

blogRouter.get("/blogs", async (request, response) => {
  const blogs = await Blog.find();
  response.json(blogs);
});

blogRouter.post("/blogs", async (request, response) => {
  const newBlog = new Blog(request.body);
  await newBlog.save();
  response.status(201).end();
});

module.exports = blogRouter;

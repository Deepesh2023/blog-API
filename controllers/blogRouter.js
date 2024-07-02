const blogRouter = require("express").Router();
const Blog = require("../models/blog");

blogRouter.get("/", (request, response) => response.send("<h1>Blogs</h1>"));

blogRouter.get("/blogs", async (request, response) => {
  const blogs = await Blog.find();
  response.json(blogs);
});

blogRouter.get("/blogs/:id", async (request, response) => {
  const id = request.params.id;
  const blog = await Blog.find({ _id: id });
  response.json(blog);
});

blogRouter.post("/blogs", async (request, response) => {
  const newBlog = new Blog(request.body);
  const blog = await newBlog.save();
  response.status(201).send(blog);
});

blogRouter.put("/blogs/:id", async (request, response) => {
  const updatedBlog = request.body;
  const id = request.params.id;
  const blog = await Blog.findOneAndUpdate({ _id: id }, updatedBlog);
  response.send(blog);
});

blogRouter.delete("/blogs/:id", async (request, response) => {
  const id = request.params.id;
  const deletedBlog = await Blog.findOneAndDelete({ _id: id });
  response.status(200).send(deletedBlog);
});

module.exports = blogRouter;

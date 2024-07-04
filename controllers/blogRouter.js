const blogRouter = require("express").Router();
const Blog = require("../models/blog");

blogRouter.get("/index.html", (request, response) =>
  response.status(200).end()
);

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

  try {
    const blog = await Blog.findByIdAndUpdate({ _id: id }, updatedBlog, {
      new: true,
    });

    response.send(blog);
  } catch (error) {
    response.status(400).end();
  }
});

blogRouter.delete("/blogs/:id", async (request, response) => {
  const id = request.params.id;
  try {
    const deletedBlog = await Blog.findByIdAndDelete({ _id: id });
    response.status(200).send(deletedBlog);
  } catch (error) {
    response.status(400).end();
  }
});

module.exports = blogRouter;

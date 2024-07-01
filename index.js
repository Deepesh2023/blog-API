const express = require("express");

const Blog = require("./blog");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (request, response) => {
  response.send("<h1>Blog-API</h1>");
});

// app.get("/api/blogs", (request, response) => {
//   response.json(initialBlogs);
// });

// app.get("/api/blogs/:id", (request, response) => {
//   const id = request.params.id;
// });

app.post("/api/blogs", async (request, response) => {
  const newBlog = new Blog(request.body);
  await newBlog.save();
  response.status(201).end();
});

// app.put("/api/blogs", (request, response) => {});

// app.delete("/api/blogs/:id", (request, response) => {
//   const id = request.params.id;
// });

app.listen(port, () => console.log("server started"));

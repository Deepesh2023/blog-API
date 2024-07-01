const express = require("express");
const blogRouter = require("./controllers/blogRouter");

const app = express();

app.use(express.json());
app.use("/api", blogRouter);

module.exports = app;

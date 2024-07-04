const express = require("express");
const cors = require("cors");

const blogRouter = require("./controllers/blogRouter");
const invalidUrl = require("./config/middleware").invalidUrl;

const app = express();

// app.use(cors());
app.use(express.static("dist"));
app.use(express.json());
app.use("/api", blogRouter);
app.use(invalidUrl);

module.exports = app;

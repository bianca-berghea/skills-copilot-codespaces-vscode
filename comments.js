// Create web server
// npm install express
// npm install body-parser
// npm install nodemon
// npm install mongoose
// npm install cors

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const Comment = require("./models/comment");

mongoose.connect("mongodb://localhost:27017/comments", { useNewUrlParser: true });

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/comments", async (req, res) => {
  const comments = await Comment.find();
  res.json(comments);
});

app.post("/comments", async (req, res) => {
  const comment = new Comment(req.body);
  await comment.save();
  res.json(comment);
});

app.listen(4001, () => {
  console.log("Server has started");
});
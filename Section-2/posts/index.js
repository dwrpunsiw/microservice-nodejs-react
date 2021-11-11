const express = require("express");
const { randomBytes } = require("crypto");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const posts = {
  c669d20e: {
    id: "c669d20e",
    title: "New Posts",
  },
  a8dffcec: {
    id: "a8dffcec",
    title: "The big bang",
  },
};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;

  posts[id] = {
    id,
    title,
  };
  res.status(201).send(posts[id]);
});

app.listen(4000, () => {
  console.log(`this server is running on port 4000`);
});

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

const Author = require("./models/author");

// Use body-parser middleware to parse JSON data
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// Leaving for ease & sanity checking
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/api/authors", async (req, res) => {
  Author.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
  });
  res.send({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
  });
});

app.post("/api/books", (req, res) => {
  createBooks(req.body);
  res.send({});
});

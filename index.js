const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());
const category = require("./data/category.json");
const courses = require("./data/courses.json");

app.get("/", (req, res) => {
  res.send("Data running");
});

app.get("/category", (req, res) => {
  res.send(category);
});


app.get("/courses/:id", (req, res) => {
    const id = req.params.id;
  const course = courses.filter((n) => n.category_id === id);
  res.send(course);
});

app.listen(port, () => {
  console.log("Digital Learning server running on port", port);
});

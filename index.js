const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());
const category = require("./data/category.json");

app.get("/", (req, res) => {
  res.send("Data running");
});

app.get("/category", (req, res) => {
  res.send(category);
});


app.get("/category/:id", (req, res) => {
    const id = req.params.id;
  const categoryById = category.filter((n) => n.id === id);
  res.send(categoryById);
});
{
}
app.listen(port, () => {
  console.log("Digital Learning server running on port", port);
});

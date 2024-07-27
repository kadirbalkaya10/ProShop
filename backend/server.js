import products from "./data/products.js";
import express from "express";

const port = 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/product/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(port, () =>
  console.log(`Server running on PORT http://localhost:${port}`)
);

import express from "express";
const router = express.Router();
import products from "../data/products.js";

// Setting up a route to get all products
// api/products
router.get("/", (req, res) => {
  res.json(products); // Sending the products data as a JSON response
});

// Setting up a route to get a single product by its ID
//api/products/
router.get("/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

export default router;

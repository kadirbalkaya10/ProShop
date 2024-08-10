import express from "express";
const router = express.Router();
import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";
// Setting up a route to get all products
// api/products
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products); // Sending the products data as a JSON response
  })
);

// Setting up a route to get a single product by its ID
//api/products/
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    }
    res.status(404).json({ message: "Product not found" });
  })
);

export default router;

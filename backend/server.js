import products from "./data/products.js";
// Import the 'express' module to create the server
import express from "express";
import connectDB from "./config/db.js";

import dotenv from "dotenv";
dotenv.config();

// / Define the port number the server will listen on
const port = process.env.PORT || 3000;

connectDB();

// Initialize the Express application
const app = express();

// Setting up a route for the home page respond with a simple message
app.get("/", (req, res) => {
  res.send("API is running");
});

// Setting up a route to get all products
app.get("/api/products", (req, res) => {
  res.json(products); // Sending the products data as a JSON response
});

// Setting up a route to get a single product by its ID
app.get("/api/product/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

// Starting the server and having it listen on the specified port
app.listen(port, () =>
  console.log(`Server running on PORT http://localhost:${port}`)
);

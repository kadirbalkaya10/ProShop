// Import the 'express' module to create the server
import express from "express";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import productRoutes from "./routes/productRoutes.js";

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

app.use("/api/products", productRoutes);

app.use(notFound);
app.use(errorHandler);

// Starting the server and having it listen on the specified port
app.listen(port, () =>
  console.log(`Server running on PORT http://localhost:${port}`)
);

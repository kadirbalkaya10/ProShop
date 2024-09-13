// Import the 'express' module to create the server
import path from "path";
import express from "express";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import cookieParser from "cookie-parser";

import dotenv from "dotenv";
dotenv.config();

// / Define the port number the server will listen on
const port = process.env.PORT || 3000;

connectDB();

// Initialize the Express application
const app = express();

//  Body parser middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookie parser middleware

app.use(cookieParser());

// Setting up a route for the home page respond with a simple message
app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);

app.get("/api/config/paypal", (req, res) =>
  res.send({ clientId: process.env.PAYPAL_CLIENT_ID })
);

const __dirname = path.resolve(); // Set __dirname to current directory
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

app.use(notFound);
app.use(errorHandler);

// Starting the server and having it listen on the specified port
app.listen(port, () =>
  console.log(`Server running on PORT http://localhost:${port}`)
);

import asyncHandler from "../middleware/asyncHandler.js";
import Order from "../models/orderModel.js";

// @desc Create a new order
// @route POST api/orders
// @access Private

const addOrderItems = asyncHandler(async (req, res) => {
  res.send("Add order items");
});

// @desc Get logged in user orders
// @route GET api/orders/myorders
// @access Private

const getMyOrders = asyncHandler(async (req, res) => {
  res.send("Get my orders");
});

// @desc Get order by ID
// @route GET api/orders/:id
// @access Private

const getOrderById = asyncHandler(async (req, res) => {
  res.send("Get Order ById");
});

// @desc Update order to paid
// @route GET api/orders/:id/pay
// @access Private

const updateOrderToPaid = asyncHandler(async (req, res) => {
  res.send("Update order to paid");
});

// @desc Update order to delivered
// @route GET api/orders/:id/deliver
// @access Private/Admin

const updateOrderToDelivered = asyncHandler(async (req, res) => {
  res.send("Update order to delivered");
});

// @desc Get all orders
// @route GET api/orders
// @access Private/Admin

const getOrders = asyncHandler(async (req, res) => {
  res.send("Get all orders");
});

export {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders,
};

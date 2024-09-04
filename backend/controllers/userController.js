import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";

// @desc Auth user & get token
// @route POST /api/users/login
// @access Public

const authUser = asyncHandler(async (req, res) => {
  res.send("Auth user");
});

// @desc Register User
// @route POST /api/users
// @access Public

const registerUser = asyncHandler(async (req, res) => {
  res.send("Register user");
});

// @desc Logout User / clear cookie
// @route POST /api/users/logout
// @access Private

const logoutUser = asyncHandler(async (req, res) => {
  res.send("Logout user");
});

// @desc Get User Profile
// @route Get /api/users/profile
// @access Private

const getUserProfile = asyncHandler(async (req, res) => {
  res.send("Get user profile");
});

// @desc Update User Profile
// @route PUT /api/users/profile
// @access Private

const updateUserProfile = asyncHandler(async (req, res) => {
  res.send("Update user profile");
});

// @desc Get Users
// @route PUT /api/users
// @access Private/admin

const getUsers = asyncHandler(async (req, res) => {
  res.send("Get users!!!! Admin Only");
});

// @desc Get User by ID
// @route PUT /api/users/:id
// @access Private/admin

const getUserByID = asyncHandler(async (req, res) => {
  res.send("Get user by ID !!!! Admin Only");
});

// @desc Delete Users
// @route DELETE /api/users/:id
// @access Private/admin

const deleteUser = asyncHandler(async (req, res) => {
  res.send("Delete user!!!! Admin Only");
});

// @desc Update User
// @route Put /api/users/:id
// @access Private/admin

const updateUser = asyncHandler(async (req, res) => {
  res.send("Update user!!!! Admin Only");
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserByID,
  deleteUser,
  updateUser,
};

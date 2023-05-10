const express = require("express");
const router = express.Router();

// Require Controller Folder
const userController = require("../controllers/user");

// Api
router.post("/register", userController.registerController);
router.post("/login", userController.loginController);

module.exports = router;

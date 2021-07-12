const router = require("express").Router();
const userController = require("../controllers/userControllers/user.controller");

router.post("/register", userController.findUser);

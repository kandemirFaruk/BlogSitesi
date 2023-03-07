const express = require("express");
const AuthController = require("../controllers/AuthController");

const router = express.Router();

router.route("/signup").post(AuthController.userCreated)

module.exports=router;
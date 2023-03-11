import express  from "express";
import * as AuthControllers from"../controllers/AuthControllers.js";

const router = express.Router();

router.route("/signup").post(AuthControllers.userCreated)
router.route("/login").post(AuthControllers.loginUser)
router.route("/settings/changepassword").post(AuthControllers.passwordChange)

export default router;
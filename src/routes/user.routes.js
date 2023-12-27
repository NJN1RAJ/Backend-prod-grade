import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";

const router = Router();

router.route("/register").post(registerUser); //on route register it will post(method of uploading the data on api) the info of register through our method registerUser

export default router;

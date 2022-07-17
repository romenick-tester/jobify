import express from "express";
import auth from "../middlewares/auth.js";
import { signin, signup } from "../server-controllers/auths.js";

const router = express.Router();

router
    .route("/signin")
    .post(signin);

router
    .route("/signup")
    .post(signup);

export default router;
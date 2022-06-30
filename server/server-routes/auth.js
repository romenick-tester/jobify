import express from "express";
import { signin, signup, updateUser } from "../server-controllers/auths.js";

const router = express.Router();

router
    .route("/signin")
    .post(signin);

router
    .route("/signup")
    .post(signup);

router
    .route("/user/:id")
    .patch(updateUser);

export default router;
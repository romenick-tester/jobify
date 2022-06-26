import express from "express";
import { signin, signup, updateUser } from "../server-controllers/auths.js";

const router = express.Router();

router
    .route("/signin")
    .get((req, res) => res.status(200).json("signin route"))
    .post(signin);

router
    .route("/signup")
    .get((req, res) => res.status(200).json("signup route"))
    .post(signup);

router
    .route("/user/update")
    .get((req, res) => res.status(200).json("update user route"))
    .patch(updateUser);

export default router;
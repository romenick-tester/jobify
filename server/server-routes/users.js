import express from "express";
import auth from "../middlewares/auth.js";
import { updateUser } from "../server-controllers/users.js";

const router = express.Router();

router
    .route("/")
    .patch(auth, updateUser);

export default router;
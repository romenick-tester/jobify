import express from "express";
import auth from "../middlewares/auth.js";
import {
    createJob,
    updateJob,
    deleteJob,
    getAllJobs,
    showStat
} from "../server-controllers/jobs.js";

const router = express.Router();

router.route("/")
    .post(auth, createJob)
    .get(auth, getAllJobs)

router.route("/stats")
    .get(auth, showStat)

router.route("/:id")
    .delete(auth, deleteJob)
    .patch(auth, updateJob);

export default router;
import express from "express";
import {
    createJob,
    updateJob,
    deleteJob,
    getAllJobs,
    showStat
} from "../server-controllers/jobs.js";

const router = express.Router();

router.route("/")
    .post(createJob)
    .get(getAllJobs)

router.route("/stat")
    .get(showStat)

router.route("/:id")
    .delete(deleteJob)
    .put(updateJob);

export default router;
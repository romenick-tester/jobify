import { StatusCodes } from "http-status-codes";
import Job from "../models/Job.js";
import { BadRequestError, NotFoundError } from "../errors/index.js";

const createJob = async (req, res) => {
    const { position, company } = req.body;

    if (!position || !company) {
        throw new BadRequestError("Please provide all values")
    }

    req.body.createdBy = req.user._id;

    const job = await Job.create(req.body);

    res.status(StatusCodes.CREATED).json({ job });
};

const updateJob = async (req, res) => {
    const { id } = req.params;
    try {
        res.status(200).json(`update job: ${id}`);
    } catch (err) {
        console.error(err.message);
    }
};

const deleteJob = async (req, res) => {
    const { id } = req.params;
    try {
        res.status(200).json(`delete job: ${id}`);
    } catch (err) {
        console.error(err.message);
    }
};

const getAllJobs = async (req, res) => {
    try {
        res.status(200).json("get all jobs");
    } catch (err) {
        console.error(err.message);
    }
};

const showStat = async (req, res) => {
    try {
        res.status(200).json("show stat");
    } catch (err) {
        console.error(err.message);
    }
};

export { createJob, updateJob, deleteJob, getAllJobs, showStat }
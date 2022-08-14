import { StatusCodes } from "http-status-codes";
import Job from "../models/Job.js";
import { BadRequestError, NotFoundError } from "../errors/index.js";
import checkPermissions from "../utils/checkPermissions.js";

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
    const { id: jobId } = req.params;

    const { company, position } = req.body;

    if (!company || !position) {
        throw new BadRequestError("Please provide all values");
    }

    const job = await Job.findOne({ _id: jobId });

    if (!job) {
        throw new NotFoundError(`no job with id ${jobId}`);
    }

    checkPermissions(req.user._id, job.createdBy);

    await Job.findOneAndUpdate({ _id: jobId }, req.body, {
        new: true,
        runValidators: true,
    });

    res.status(StatusCodes.OK).json({ msg: "Job has been updated!" });
};

const deleteJob = async (req, res) => {
    const { id: jobId } = req.params;

    const job = await Job.findOne({ _id: jobId });

    if (!job) {
        throw new NotFoundError(`no job with id ${jobId}`);
    }

    checkPermissions(req.user._id, job.createdBy);

    await job.remove();

    res.status(StatusCodes.OK).json({ msg: "Job has been removed!" });
};

const getAllJobs = async (req, res) => {
    try {
        const jobs = await Job.find({ createdBy: req.user._id });

        if (jobs.length === 0) {
            res.status(404).json({ msg: "No jobs were found for this user" });
            throw new NotFoundError("No jobs were found for this user");
        }

        res.status(StatusCodes.OK).json({ jobs, total: jobs.length, numOfPages: 1 });
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
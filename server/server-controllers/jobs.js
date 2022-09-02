import { StatusCodes } from "http-status-codes";
import mongoose from "mongoose";
import moment from "moment";
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
    const jobs = await Job.find({ createdBy: req.user._id });

    if (jobs.length === 0) {
        res.status(404).json({ msg: "No jobs were found for this user" });
        throw new NotFoundError("No jobs were found for this user");
    }

    res.status(StatusCodes.OK).json({ jobs, total: jobs.length, numOfPages: 1 });
};

const showStat = async (req, res) => {
    let stats = await Job.aggregate([
        { $match: { createdBy: mongoose.Types.ObjectId(req.user._id) } },
        { $group: { _id: "$status", count: { $sum: 1 } } }
    ]);

    stats = stats.reduce((acc, item) => {
        const { _id: title, count } = item;
        acc[title] = count;
        return acc;
    }, {});

    const defaultStats = {
        pending: stats.pending || 0,
        interview: stats.interview || 0,
        declined: stats.declined || 0
    };

    let monthlyApplications = await Job.aggregate([
        { $match: { createdBy: mongoose.Types.ObjectId(req.user._id) } },
        {
            $group: {
                _id: {
                    year: { $year: "$createdAt" },
                    month: { $month: "$createdAt" }
                },
                count: { $sum: 1 }
            }
        },
        { $sort: { "_id.year": -1, "_id.month": -1 } },
        { $limit: 6 }
    ]);

    monthlyApplications = monthlyApplications.map(item => {
        const { _id: { year, month }, count } = item;

        const date = moment().month(month - 1).year(year).format("MMM Y")

        return { date, count };
    }).reverse();

    res.status(StatusCodes.OK).json({ stats: defaultStats, monthlyApplications });
};

export { createJob, updateJob, deleteJob, getAllJobs, showStat }
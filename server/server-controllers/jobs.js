

const createJob = async (req, res) => {
    const data = req.body;
    try {
        console.log(data);
        res.status(201).json("create job");
    } catch (err) {
        console.error(err.message);
    }
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
import {
    CREATE_JOB_REQUEST,
    CREATE_JOB_SUCCESS,
    CREATE_JOB_FAIL,
    GET_JOBS_REQUEST,
    GET_JOBS_SUCCESS,
    GET_JOBS_FAIL,
    SET_EDIT_JOB
} from "../constants";

const jobInitialState = {
    creating: false,
    editJobId: "",
    position: "",
    company: "",
    jobLocation: "",
    jobTypeOptions: ["full-time", "part-time", "remote", "internship"],
    jobType: "full-time",
    statusOptions: ["pending", "interview", "declined"],
    status: "pending",
    fail: false
};

const jobReducer = (state = jobInitialState, action) => {
    switch (action.type) {
        case CREATE_JOB_REQUEST:
            return { ...state, creating: true };

        case CREATE_JOB_SUCCESS:
            return { ...state, ...action.payload, creating: false, fail: false };

        case CREATE_JOB_FAIL:
            return { ...state, ...jobInitialState, creating: false, fail: true };

        default:
            return state;
    }
};

const jobListInitialState = {
    loading: false,
    jobs: [],
    totalJobs: 0,
    page: 1,
    numOfPages: 1,
    fail: false
};

const jobListReducer = (state = jobListInitialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_JOBS_REQUEST:
            return { ...state, loading: true };

        case GET_JOBS_SUCCESS:
            return {
                ...state,
                loading: false,
                jobs: payload.jobs,
                totalJobs: payload.total,
                page: payload.page,
                numOfPages: payload.numOfPages,
                fail: false,
            };

        case GET_JOBS_FAIL:
            return { ...state, ...jobListInitialState, fail: true };

        case SET_EDIT_JOB:
            const job = state.jobs.find(job => job._id === payload.id);
            const { _id, position, company, jobLocation, jobType, status } = job;

            return {
                ...state,
                isEditing: true,
                editJobId: _id,
                position, company, jobLocation, jobType, status
            }

        default:
            return state;
    }
};

export { jobReducer, jobListReducer };
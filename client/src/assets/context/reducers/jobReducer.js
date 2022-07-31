import {
    CREATE_JOB_REQUEST,
    CREATE_JOB_SUCCESS,
    CREATE_JOB_FAIL,
    GET_JOBS_REQUEST,
    GET_JOBS_SUCCESS,
    GET_JOBS_FAIL
} from "../constants";

const initialState = {
    creating: false,
    isEditing: false,
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

const jobReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_JOB_REQUEST:
            return { ...state, creating: true };

        case CREATE_JOB_SUCCESS:
            return { ...state, ...action.payload, creating: false, fail: false };

        case CREATE_JOB_FAIL:
            return { ...state, ...initialState, creating: false, fail: true };

        default:
            return state;
    }
};

const jobListInitialState = {
    getting: false,
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
            return { ...state, getting: true };

        case GET_JOBS_SUCCESS:
            return {
                ...state,
                jobs: payload.jobs,
                totalJobs: payload.total,
                page: payload.page,
                numOfPages: payload.numOfPages,
                getting: false,
                fail: false,
            };

        case GET_JOBS_FAIL:
            return { ...state, ...jobListInitialState, fail: true };

        default:
            return state;
    }
};

export { jobReducer, jobListReducer };
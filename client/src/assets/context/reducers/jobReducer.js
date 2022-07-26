import {
    CREATE_JOB_REQUEST,
    CREATE_JOB_SUCCESS,
    CREATE_JOB_FAIL,
    GET_JOBS_REQUEST,
    GET_JOBS_SUCCESS,
    GET_JOBS_FAIL
} from "../constants";

const initialState = {
    isEditing: false,
    editJobId: "",
    position: "",
    company: "",
    // jobLocation
    jobTypeOptions: ["full-time", "part-time", "remote", "internship"],
    jobType: "full-time",
    statusOptions: ["pending", "interview", "declined"],
    status: "pending",
};

const jobReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_JOB_REQUEST:
            return { ...state };

        case CREATE_JOB_SUCCESS:
            return { ...state, ...action.payload };

        case CREATE_JOB_FAIL:
            return { ...initialState };

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
    switch (action.type) {
        case GET_JOBS_REQUEST:
            return { ...state, loading: true };

        case GET_JOBS_SUCCESS:
            return { ...jobListInitialState, ...action.payload };

        case GET_JOBS_FAIL:
            return { ...jobListInitialState, fail: true };

        default:
            return state;
    }
};

export { jobReducer, jobListReducer };
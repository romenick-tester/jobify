import {
    CREATE_JOB_REQUEST,
    CREATE_JOB_SUCCESS,
    CREATE_JOB_FAIL,
    GET_JOBS_REQUEST,
    GET_JOBS_SUCCESS,
    GET_JOBS_FAIL,
    SET_EDIT_JOB,
    DELETE_JOB_REQUEST,
    DELETE_JOB_SUCCESS,
    DELETE_JOB_FAIL,
    UPDATE_JOB_REQUEST,
    UPDATE_JOB_SUCCESS,
    UPDATE_JOB_FAIL,
    SHOW_STATS_REQUEST,
    SHOW_STATS_SUCCESS,
    SHOW_STATS_FAIL,
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

        case DELETE_JOB_REQUEST:
            return { ...state, loading: true };

        case DELETE_JOB_SUCCESS:
            return { ...state, loading: false };

        case DELETE_JOB_FAIL:
            return { ...state, loading: false, fail: true }

        case UPDATE_JOB_REQUEST:
            return { ...state, loading: true };

        case UPDATE_JOB_SUCCESS:
            return { ...state, loading: false };

        case UPDATE_JOB_FAIL:
            return { ...state, loading: false, fail: true }

        default:
            return state;
    }
};

// remove fail boolean

const statsInitialState = {
    loading: false,
    stats: {},
    monthlyApplications: []
};

const statsReducer = (state = statsInitialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case SHOW_STATS_REQUEST:
            return { ...state, loading: true };

        case SHOW_STATS_SUCCESS:
            return { ...state, ...payload, loading: false };

        case SHOW_STATS_FAIL:
            return { ...state, loading: false };

        default:
            return state;
    }
}

export { jobReducer, jobListReducer, statsReducer };
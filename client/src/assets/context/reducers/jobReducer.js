import {
    CREATE_JOB_REQUEST,
    CREATE_JOB_SUCCESS,
    CREATE_JOB_FAIL
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
}

export default jobReducer;
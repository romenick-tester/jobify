import axios from "axios";
import { showAlert, logoutUser } from ".";
import {
    CREATE_JOB_REQUEST,
    CREATE_JOB_SUCCESS,
    CREATE_JOB_FAIL,
    GET_JOBS_REQUEST,
    GET_JOBS_SUCCESS,
    GET_JOBS_FAIL,
    SET_EDIT_JOB
} from "../constants";


const createJob = (formData, edit = false) => async (dispatch, getState) => {
    dispatch({ type: CREATE_JOB_REQUEST });

    try {
        const { token } = getState().auth;

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        };

        if (edit) {
            await axios.patch("/api/v1/jobs", formData, config);
            dispatch(showAlert("success", "Job has been updated!"));
            return;
        }

        const req = await axios.post("/api/v1/jobs", formData, config);

        dispatch({ type: CREATE_JOB_SUCCESS, payload: req.data });
        dispatch(showAlert("success", "Job created!"));
    } catch (err) {
        if (err.response.status === 401) {
            dispatch(logoutUser());
            return;
        }
        dispatch(showAlert("danger", err.response.data.msg));
        dispatch({ type: CREATE_JOB_FAIL });
    }
};

const getJobs = () => async (dispatch, getState) => {
    dispatch({ type: GET_JOBS_REQUEST });
    try {
        const { token } = getState().auth;

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        const { data } = await axios.get("/api/v1/jobs", config);

        dispatch({ type: GET_JOBS_SUCCESS, payload: data });
    } catch (err) {
        if (err.response.status === 401) {
            dispatch(logoutUser());
            return;
        }
        dispatch(showAlert("danger", err.response.data.msg));
        dispatch({ type: GET_JOBS_FAIL });
    }
};

const setEditJob = id => dispatch => {
    dispatch({ type: SET_EDIT_JOB, payload: { id } });
};

const deleteJob = id => dispatch => {
    console.log(`delete: ${id}`);
};

export { createJob, getJobs, setEditJob, deleteJob };
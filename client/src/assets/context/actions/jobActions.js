import axios from "axios";
import { showAlert, logoutUser } from ".";
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
    SHOW_STATS_FAIL,
    SHOW_STATS_SUCCESS
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

const deleteJob = id => async (dispatch, getState) => {
    dispatch({ type: DELETE_JOB_REQUEST });

    try {
        const { token } = getState().auth;

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        await axios.delete(`/api/v1/jobs/${id}`, config);

        dispatch({ type: DELETE_JOB_SUCCESS });
        dispatch(getJobs());
    } catch (err) {
        console.log(err.message);
        dispatch({ type: DELETE_JOB_FAIL, payload: err.response.data.msg || err.message });
    }
};

const updateJob = ({ jobId, form }) => async (dispatch, getState) => {
    dispatch({ type: UPDATE_JOB_REQUEST });

    try {
        const { token } = getState().auth;

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            }
        };

        await axios.patch(`/api/v1/jobs/${jobId}`, form, config);

        dispatch({ type: UPDATE_JOB_SUCCESS });
        dispatch(getJobs());
        dispatch(showAlert("success", "Job updated!"));
    } catch (err) {
        dispatch({ type: UPDATE_JOB_FAIL });
    }
};

const getStats = () => async (dispatch, getState) => {
    dispatch({ type: SHOW_STATS_REQUEST });
    try {
        const { token } = getState().auth;

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        const { data } = await axios.get("/api/v1/jobs/stats", config);

        console.log(data);

        dispatch({ type: SHOW_STATS_SUCCESS, payload: data });
    } catch (err) {
        console.error(err.message);
        dispatch({ type: SHOW_STATS_FAIL });
    }
};

export { createJob, getJobs, setEditJob, deleteJob, updateJob, getStats };
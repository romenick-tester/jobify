import axios from "axios";
import { showAlert, logoutUser } from ".";
import {
    CREATE_JOB_REQUEST,
    CREATE_JOB_SUCCESS,
    CREATE_JOB_FAIL
} from "../constants";


const createJob = (formData, edit = false) => async (dispatch, getState) => {
    dispatch({ type: CREATE_JOB_REQUEST });

    try {
        const { token } = getState().auth;

        const authFetch = axios.create({
            baseURL: "/api/v1"
        });

        authFetch.interceptors.request.use((config) => {
            config.headers.common["Content-Type"] = "application/json";
            config.headers.common["Authorization"] = `Bearer ${token}`;
            return config;
        }, error => {
            return Promise.reject(error)
        });

        authFetch.interceptors.response.use((response) => {
            return response;
        }, error => {

            if (error.response.status === 401) {
                dispatch(logoutUser());
            }

            return Promise.reject(error)
        });

        if (edit) {
            await authFetch.patch("/jobs", formData);
            dispatch(showAlert("success", "Job has been updated!"));
            return;
        }

        const req = await authFetch.post("/jobs", formData);

        console.log(req);
        dispatch({ type: CREATE_JOB_SUCCESS, payload: req.data });
        dispatch(showAlert("success", "Job created!"));
    } catch (err) {
        console.log(err.response.data.msg);
        dispatch({ type: CREATE_JOB_FAIL });
    }
};

export { createJob };
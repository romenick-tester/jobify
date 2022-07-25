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

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        };

        // const authFetch = axios.create({
        //     baseURL: "/api/v1"
        // });

        // authFetch.interceptors.request.use((config) => {
        //     config.headers.common["Content-Type"] = "application/json";
        //     config.headers.common["Authorization"] = `Bearer ${token}`;
        //     return config;
        // }, error => {
        //     return Promise.reject(error)
        // });

        // authFetch.interceptors.response.use((response) => {
        //     return response;
        // }, error => {

        //     if (error.response.status === 401) {
        //         dispatch(logoutUser());
        //     }

        //     return Promise.reject(error)
        // });

        if (edit) {
            await axios.patch("/api/v1/jobs", formData, config);
            dispatch(showAlert("success", "Job has been updated!"));
            return;
        }

        const req = await axios.post("/api/v1/jobs", formData, config);

        console.log(req);
        dispatch({ type: CREATE_JOB_SUCCESS, payload: req.data });
        dispatch(showAlert("success", "Job created!"));
    } catch (err) {
        if (err.response.status === 401) {
            dispatch(showAlert("danger", "Not authorized!"));
            dispatch(logoutUser());
            return;
        }
        console.log(err.response.data.msg);
        dispatch({ type: CREATE_JOB_FAIL });
    }
};

export { createJob };
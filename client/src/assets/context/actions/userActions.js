import axios from "axios";
import showAlert from "./alertActions";
import { logoutUser } from "./authActions";
import {
    UPDATE_CURRENT_USER_REQUEST,
    UPDATE_CURRENT_USER_SUCCESS,
    UPDATE_CURRENT_USER_FAIL,
    USER_AUTH_SUCCESS
} from "../constants";

const addUserToLocalStorage = (user, token, location) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("location", JSON.stringify(location));
};

const updateUser = (formData) => async (dispatch, getState) => {
    dispatch({ type: UPDATE_CURRENT_USER_REQUEST });

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

        const res = await authFetch.patch("/users", formData);
        const { user, location, token: token2 } = res.data;

        addUserToLocalStorage(user, token2, location);

        dispatch({ type: UPDATE_CURRENT_USER_SUCCESS });
        dispatch({ type: USER_AUTH_SUCCESS, payload: { user, location, token: token2 } });
        dispatch(showAlert("success", "Profile successfully updated!"))
    } catch (err) {
        dispatch({ type: UPDATE_CURRENT_USER_FAIL });
        if (err.response.status === 401) {
            dispatch(showAlert("danger", "Not authorized!"));
            return;
        }
        dispatch(showAlert("danger", err.response.data.msg || err.message));
    }
}

export { updateUser };
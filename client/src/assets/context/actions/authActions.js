import { AUTH_SIGNUP_REQUEST, AUTH_SIGNUP_SUCCESS, AUTH_SIGNUP_FAIL } from "../constants";
import showAlert from "./alertActions";
import axios from "axios";

const addUserToLocalStorage = (user, token, location) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("location", JSON.stringify(location));
}

const removeUserFromLocalStorage = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("location");
}

const signin = (formData) => async (dispatch) => {
    // try {
    //     dispatch({ type: AUTH_SIGNIN_REQUEST });

    //     const config = {
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     };

    //     const { data } = await axios.post("/api/v1/auth/signin", formData, config);

    //     if (data) {
    //         console.log(data);
    //     };

    //     dispatch({ type: AUTH_SIGNIN_SUCCESS, payload: data });
    // } catch (err) {
    //     dispatch({ type: AUTH_SIGNIN_FAIL, payload: { type: "danger", msg: err.message } });
    // }
};

const signup = (formData) => async (dispatch) => {
    dispatch({ type: AUTH_SIGNUP_REQUEST });
    try {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        };

        const { data } = await axios.post("/api/v1/auth/signup", formData, config);
        const { user, token, location } = data;

        dispatch({ type: AUTH_SIGNUP_SUCCESS, payload: { user, location, token } });

        addUserToLocalStorage(user, token, location);

        dispatch(showAlert("success", "New user created! Redirecting..."))
    } catch (err) {
        dispatch({
            type: AUTH_SIGNUP_FAIL,
            payload: {
                type: "danger",
                msg: err.response && err.response.data ? err.response.data.msg : err.message
            }
        });
    }
};

export { signin, signup };
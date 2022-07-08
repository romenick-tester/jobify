import { AUTH_SIGNUP_REQUEST, AUTH_SIGNUP_SUCCESS, AUTH_SIGNUP_FAIL } from "../constants";
import axios from "axios";

const signin = async (dispatch, formData) => {
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

const signup = async (dispatch, formData) => {
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
    } catch (err) {
        console.error(err.response);
        dispatch({
            type: AUTH_SIGNUP_FAIL,
            payload: {
                type: err.response ? err.response.data.type : "danger",
                msg: err.response ? err.response.data.msg : err.message
            }
        });
    }
};

export { signin, signup };
import axios from "axios";
import showAlert from "./alertActions";
import {
    USER_AUTH_REQUEST,
    USER_AUTH_SUCCESS,
    USER_AUTH_FAIL,
    USER_LOGOUT
} from "../constants";

const addUserToLocalStorage = (user, token, location) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("location", JSON.stringify(location));
};

const removeUserFromLocalStorage = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("location");
};

const authUser = ({ formData, endpoint, alertText }) => async (dispatch) => {
    dispatch({ type: USER_AUTH_REQUEST });
    try {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        };

        const { data } = await axios.post(`/api/v1/auth/${endpoint}`, formData, config);
        const { user, token, location } = data;

        dispatch({ type: USER_AUTH_SUCCESS, payload: { user, location, token } });

        addUserToLocalStorage(user, token, location);

        dispatch(showAlert("success", alertText));
    } catch (err) {
        removeUserFromLocalStorage();
        dispatch({
            type: USER_AUTH_FAIL,
            payload: {
                type: "danger",
                msg: err.response && err.response.data ? err.response.data.msg : err.message
            }
        });
    }
};

const logoutUser = () => (dispatch) => {
    dispatch({ type: USER_LOGOUT });

    removeUserFromLocalStorage();
}

export { authUser, logoutUser };
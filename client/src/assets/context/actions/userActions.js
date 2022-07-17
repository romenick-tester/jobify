import axios from "axios";
import showAlert from "./alertActions";
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

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        };

        const { data } = await axios.patch("/api/v1/users", formData, config);
        const { user, location, token: token2 } = data;

        addUserToLocalStorage(user, token2, location);

        dispatch({ type: UPDATE_CURRENT_USER_SUCCESS });
        dispatch({ type: USER_AUTH_SUCCESS, payload: { user, location, token: token2 } });
        dispatch(showAlert("success", "Profile successfully updated!"))
    } catch (err) {
        console.log(err.response.data.msg);
        dispatch({ type: UPDATE_CURRENT_USER_FAIL });
    }
}

export { updateUser };
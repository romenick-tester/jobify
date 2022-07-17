import axios from "axios";
import {
    UPDATE_CURRENT_USER_REQUEST,
    UPDATE_CURRENT_USER_SUCCESS,
    UPDATE_CURRENT_USER_FAIL
} from "../constants";


const updateUser = (formData) => async (dispatch, getState) => {
    dispatch({ type: UPDATE_CURRENT_USER_REQUEST });

    try {
        const { token } = getState().auth;

        const config = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        };

        const { data } = await axios.patch("/api/v1/user", formData, config);

        dispatch({ type: UPDATE_CURRENT_USER_SUCCESS, payload: data });
    } catch (err) {
        console.log(err.response.data.msg);
        dispatch({ type: UPDATE_CURRENT_USER_FAIL });
    }
}

export { updateUser };
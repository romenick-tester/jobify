import {
    UPDATE_CURRENT_USER_REQUEST,
    UPDATE_CURRENT_USER_SUCCESS,
    UPDATE_CURRENT_USER_FAIL
} from "../constants";

const userInitialState = {
    updating: false,
    success: false,
    error: null
}

const userReducer = (state = userInitialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case UPDATE_CURRENT_USER_REQUEST:
            return { ...state, updating: true };

        case UPDATE_CURRENT_USER_SUCCESS:
            return { ...state, updating: false, success: true, error: null };

        case UPDATE_CURRENT_USER_FAIL:
            return { ...userInitialState, error: payload };

        default:
            return state;
    }
};

export default userReducer;
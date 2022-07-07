import { AUTH_SIGNUP_REQUEST, AUTH_SIGNUP_SUCCESS, AUTH_SIGNUP_FAIL } from "../constants";

const authReducer = (state, action) => {
    const { payload, type } = action;
    switch (type) {
        case AUTH_SIGNUP_REQUEST:
            return {};

        case AUTH_SIGNUP_SUCCESS:
            return {};

        case AUTH_SIGNUP_FAIL:
            return {};

        default:
            return state;
    }
};

export default authReducer;
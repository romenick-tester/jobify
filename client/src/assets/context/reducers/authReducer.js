import { AUTH_SIGNUP_REQUEST, AUTH_SIGNUP_SUCCESS, AUTH_SIGNUP_FAIL } from "../constants";

const authReducer = (state, action) => {
    const { payload, type } = action;
    switch (type) {
        case AUTH_SIGNUP_REQUEST:
            return {
                ...state,
                isLoading: true
            };

        case AUTH_SIGNUP_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: payload.user,
                userLocation: payload.location,
                jobLocation: payload.location,
                token: payload.token
            };

        case AUTH_SIGNUP_FAIL:
            return {
                ...state,
                isLoading: false,
                ...payload,
            };

        default:
            return state;
    }
};

export default authReducer;
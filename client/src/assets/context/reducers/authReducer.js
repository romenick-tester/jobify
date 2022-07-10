import { AUTH_SIGNUP_REQUEST, AUTH_SIGNUP_SUCCESS, AUTH_SIGNUP_FAIL } from "../constants";


const authInitialState = {
    loading: false,
    user: null,
    userLocation: "",
    jobLocation: "",
    token: null,
    error: null
};

const authReducer = (state = authInitialState, action) => {
    const { payload, type } = action;
    switch (type) {
        case AUTH_SIGNUP_REQUEST:
            return {
                ...state,
                loading: true
            };

        case AUTH_SIGNUP_SUCCESS:
            return {
                ...state,
                loading: false,
                user: payload.user,
                userLocation: payload.location,
                jobLocation: payload.location,
                token: payload.token
            };

        case AUTH_SIGNUP_FAIL:
            return {
                ...state,
                loading: false,
                error: payload
            };

        default:
            return state;
    }
};

export default authReducer;
import { AUTH_SIGNUP_REQUEST, AUTH_SIGNUP_SUCCESS, AUTH_SIGNUP_FAIL } from "../constants";


const authInitialState = {
    isLoading: false,
    user: {},
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
                error: payload
            };

        default:
            return state;
    }
};

export default authReducer;
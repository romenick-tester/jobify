import {
    USER_AUTH_REQUEST,
    USER_AUTH_SUCCESS,
    USER_AUTH_FAIL,
    USER_LOGOUT
} from "../constants";


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
        case USER_AUTH_REQUEST:
            return {
                ...state,
                loading: true
            };

        case USER_AUTH_SUCCESS:
            return {
                ...state,
                loading: false,
                user: payload.user,
                userLocation: payload.location,
                jobLocation: payload.location,
                token: payload.token,
                error: null
            };

        case USER_AUTH_FAIL:
            return {
                ...state,
                loading: false,
                user: null,
                userLocation: "",
                jobLocation: "",
                token: null,
                error: payload
            };

        case USER_LOGOUT:
            return { ...authInitialState };

        default:
            return state;
    }
};

export default authReducer;
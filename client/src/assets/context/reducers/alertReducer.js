import { SHOW_ALERT, CLEAR_ALERT } from "../constants";


const alertInitialState = {
    alertOn: false,
    alertText: "Ooops",
    alertType: "danger",
};

const alertReducer = (state = alertInitialState, action) => {
    const { payload, type } = action;
    switch (type) {
        case SHOW_ALERT:
            return {
                ...state,
                alertOn: true,
                alertType: payload.type,
                alertText: payload.msg
            };

        case CLEAR_ALERT:
            return {
                ...state,
                alertOn: false,
                alertType: "",
                alertText: ""
            }

        default:
            return state;
    }
};

export default alertReducer;
import { SHOW_ALERT, CLEAR_ALERT } from "../constants";

const reducer = (state, action) => {
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

export default reducer;
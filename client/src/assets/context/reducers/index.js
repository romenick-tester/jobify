import { SHOW_ALERT } from "../constants";

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

        default:
            return state;
    }
};

export default reducer;
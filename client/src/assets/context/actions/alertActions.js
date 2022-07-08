import { SHOW_ALERT, CLEAR_ALERT } from "../constants";

const displayAlert = (dispatch, { type, msg }) => {
    dispatch({ type: SHOW_ALERT, payload: { type, msg } });
    clearAlert(dispatch);
};

const clearAlert = (dispatch) => {
    setTimeout(() => {
        dispatch({ type: CLEAR_ALERT });
    }, 3000);
};

export default displayAlert;
import { SHOW_ALERT, CLEAR_ALERT } from "../constants";

const displayAlert = (dispatch, { type = "danger", msg }) => {
    dispatch({ type: SHOW_ALERT, payload: { type, msg } });
    clearAlert(dispatch);
};

const clearAlert = (dispatch) => {
    setTimeout(() => {
        dispatch({ type: CLEAR_ALERT });
    }, 3000);
};

export default displayAlert;
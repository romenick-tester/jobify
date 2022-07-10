import { SHOW_ALERT, CLEAR_ALERT } from "../constants";

const displayAlert = (alertType, alertText) => (dispatch) => {
    dispatch({ type: SHOW_ALERT, payload: { type: alertType, msg: alertText } });

    setTimeout(() => {
        dispatch({ type: CLEAR_ALERT });
    }, 3000);
};

export default displayAlert;
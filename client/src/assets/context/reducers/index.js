import { combineReducers } from "redux";
import alertReducer from "./alertReducer";
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import { jobReducer, jobListReducer, statsReducer } from "./jobReducer";


const reducers = combineReducers({
    alert: alertReducer,
    auth: authReducer,
    user: userReducer,
    job: jobReducer,
    jobList: jobListReducer,
    stats: statsReducer
});

export default reducers;
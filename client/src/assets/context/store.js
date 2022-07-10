import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
    alertReducer,
    authReducer
} from "./reducers";

const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
const token = localStorage.getItem("token") || "";
const location = localStorage.getItem("location") || "";

const initialState = {
    auth: {
        user,
        token,
        userLocation: location,
        jobLocation: location
    }
};

const reducers = combineReducers({
    alert: alertReducer,
    auth: authReducer
})

const middlewares = [thunk];

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;
import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
    alertReducer,
    authReducer,
    userReducer
} from "./reducers";

const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
const token = localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null;
const location = localStorage.getItem("location") ? JSON.parse(localStorage.getItem("location")) : "";

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
    auth: authReducer,
    user: userReducer
})

const middlewares = [thunk];

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;
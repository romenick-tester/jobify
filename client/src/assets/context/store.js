import { configureStore, applyMiddleware, combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
    alertReducer,
    authReducer
} from "./reducers";

const initialState = {};

const reducers = {
    reducer: combineReducers({
        alert: alertReducer,
        auth: authReducer
    })
}

const middlewares = [thunk];

const store = configureStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;
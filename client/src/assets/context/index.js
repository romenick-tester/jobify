import { useState, useReducer, useContext, createContext } from "react";
import reducer from "./reducers";

const initialState = {
    isLoading: false,
    alertOn: false,
    alertText: "Ooops",
    alertType: "danger"
}

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const displayAlert = (type, msg) => {
        dispatch({ type: "SHOW_ALERT", payload: { type, msg } });
        clearAlert();
    };

    const clearAlert = () => {
        setTimeout(() => {
            dispatch({ type: "CLEAR_ALERT" });
        }, 3000);
    };

    return <AppContext.Provider value={{ ...state, displayAlert }}> {children} </AppContext.Provider>
};

const useAppContext = () => {
    return useContext(AppContext);
};

export { AppProvider, useAppContext }
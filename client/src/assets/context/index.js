import { useState, useReducer, useContext, createContext } from "react";
import { alertReducer, authReducer } from "./reducers";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [alertState, alertDispatch] = useReducer(alertReducer, {});
    const [authState, authDispatch] = useReducer(authReducer, {});

    const displayAlert = (type, msg) => {
        alertDispatch({ type: "SHOW_ALERT", payload: { type, msg } });
        clearAlert();
    };

    const clearAlert = () => {
        setTimeout(() => {
            alertDispatch({ type: "CLEAR_ALERT" });
        }, 3000);
    };

    const signinUser = (currentUser) => {
        console.log(currentUser);
    };

    const signupUser = (currentUser) => {
        console.log(currentUser);
    };

    const values = {
        ...alertState,
        displayAlert,
        signupUser,
        signinUser
    };

    return <AppContext.Provider value={{ ...values }}> {children} </AppContext.Provider>
};

const useAppContext = () => {
    return useContext(AppContext);
};

export { AppProvider, useAppContext }
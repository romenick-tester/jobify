import React, { useReducer, useContext, createContext } from "react";
import { alertReducer, authReducer } from "./reducers";
import { showAlert, signin, signup } from "./actions";

const AppContext = createContext();

const authInitialState = {
    isLoading: false,
    user: {},
    userLocation: "",
    jobLocation: "",
    token: null
};

const alertInitialState = {
    alertOn: false,
    alertText: "Ooops",
    alertType: "danger",
};

const AppProvider = ({ children }) => {
    const [alertState, alertDispatch] = useReducer(alertReducer, alertInitialState);
    const [authState, authDispatch] = useReducer(authReducer, authInitialState);

    const displayAlert = (type, msg) => {
        showAlert(alertDispatch, { type, msg });
    };

    const signinUser = (formData) => {
        signin(authDispatch, formData);
    };

    const signupUser = (formData) => {
        signup(authDispatch, formData);
    };

    const values = {
        ...alertState,
        ...authState,
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
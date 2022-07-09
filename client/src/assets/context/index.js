import React, { useContext, createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showAlert, signin, signup } from "./actions";


const AppContext = createContext();

const AppProvider = ({ children }) => {

    const dispatch = useDispatch();

    const auths = useSelector(state => state.auths);
    const alert = useSelector(state => state.alert);

    const userSignin = (signinData) => {
        dispatch(signin(signinData))
    };

    const userSignup = (signupData) => {
        dispatch(signup(signupData))
    };

    const displayAlert = (type, msg) => {
        dispatch(showAlert(type, msg));
    };

    const values = {
        alert,
        auths,
        displayAlert,
        userSignin,
        userSignup
    };

    return <AppContext.Provider value={{ ...values }}> {children} </AppContext.Provider>
};

const useAppContext = () => {
    return useContext(AppContext);
};

export { AppProvider, useAppContext }
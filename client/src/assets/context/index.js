import React, { useContext, createContext } from "react";


const AppContext = createContext();

const AppProvider = ({ children }) => {


    const values = {};

    return <AppContext.Provider value={{ ...values }}> {children} </AppContext.Provider>
};

const useAppContext = () => {
    return useContext(AppContext);
};

export { AppProvider, useAppContext }
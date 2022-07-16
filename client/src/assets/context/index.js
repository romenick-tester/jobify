import React, { useContext, createContext, useState } from "react";


const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [sidebar, setSidebar] = useState(true);


    const toggleSidebar = () => {
        setSidebar(!sidebar);
    };


    const values = { sidebar, toggleSidebar };

    return <AppContext.Provider value={{ ...values }}> {children} </AppContext.Provider>
};

const useAppContext = () => {
    return useContext(AppContext);
};

export { AppProvider, useAppContext }
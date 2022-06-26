import { useState, useReducer, useContext, createContext } from "react";

const initialState = {
    isLoading: false,
    alertOn: false,
    alertText: "Ooops",
    alertType: "danger"
}

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [state, setState] = useState(initialState);

    return <AppContext.Provider value={{ ...state }}> {children} </AppContext.Provider>
};

const useAppContext = () => {
    return useContext(AppContext);
};

export { AppProvider, useAppContext }
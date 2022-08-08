import React, { useContext, createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [sidebar, setSidebar] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [job, setJob] = useState({
        position: "",
        company: "",
        jobType: "full-time",
        jobTypeOptions: ["full-time", "part-time", "intern", "remote", "temporary"],
        status: "pending",
        statusOptions: ["pending", "interview", "declined"],
        jobLocation: ""
    });

    const toggleSidebar = () => {
        setSidebar(!sidebar);
    };

    const editJob = () => {
        setIsEditing(!isEditing);
    };

    const values = {
        sidebar, isEditing, ...job,
        editJob, toggleSidebar, setJob
    };

    return <AppContext.Provider value={{ ...values }}> {children} </AppContext.Provider>
};

const useAppContext = () => {
    return useContext(AppContext);
};

export { AppProvider, useAppContext }
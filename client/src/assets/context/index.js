import React, { useContext, createContext, useState } from "react";
import { useSelector } from "react-redux";


const AppContext = createContext();

const initialState = {
    editJobId: "",
    position: "",
    company: "",
    jobType: "full-time",
    jobTypeOptions: ["full-time", "part-time", "intern", "remote", "temporary"],
    status: "pending",
    statusOptions: ["pending", "interview", "declined"],
    jobLocation: ""
};

const AppProvider = ({ children }) => {
    const [sidebar, setSidebar] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [job, setJob] = useState(initialState);

    const { jobs } = useSelector(state => state.jobList);

    const toggleSidebar = () => {
        setSidebar(!sidebar);
    };

    const clearValues = () => {
        setJob(currentState => {
            return { ...currentState, ...initialState }
        });
        setIsEditing(false);
    };

    const editJob = (id) => {
        const job = jobs.find(x => x._id === id);
        setJob(state => {
            return { ...state, editJobId: id, ...job }
        });
        setIsEditing(true);
    };

    const values = {
        sidebar, isEditing, ...job, clearValues,
        editJob, setIsEditing, toggleSidebar, setJob
    };

    return <AppContext.Provider value={{ ...values }}> {children} </AppContext.Provider>
};

const useAppContext = () => {
    return useContext(AppContext);
};

export { AppProvider, useAppContext }
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getJobs } from "../../assets/context/actions";
import { SearchContainer, JobsContainer } from "../../components";


const AllJobs = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getJobs());
    }, [dispatch]);

    return (
        <>
            <SearchContainer />
            <JobsContainer />
        </>
    )
}

export default AllJobs;
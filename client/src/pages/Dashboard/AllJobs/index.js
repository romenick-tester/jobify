import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJobs } from "../../../assets/context/actions";
import JobsContainer from "./JobsContainer";
import SearchContainer from "./SearchContainer";


const AllJobs = () => {
    const dispatch = useDispatch();
    const { loading, jobs, totalJobs } = useSelector(state => state.jobList);

    useEffect(() => {
        dispatch(getJobs());
    }, [dispatch]);

    return (
        <>
            <SearchContainer />
            <JobsContainer list={jobs} total={totalJobs} loading={loading} />
        </>
    )
}

export default AllJobs;
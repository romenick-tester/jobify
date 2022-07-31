import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJobs } from "../../assets/context/actions";
import { SearchContainer, JobsContainer } from "../../components";


const AllJobs = () => {
    const dispatch = useDispatch();
    const jobs = useSelector(state => state.jobList);

    useEffect(() => {
        dispatch(getJobs());
    }, [dispatch]);

    return (
        <>
            <SearchContainer />
            <JobsContainer list={jobs.jobs} total={jobs.totalJobs} loading={jobs.getting} />
        </>
    )
}

export default AllJobs;
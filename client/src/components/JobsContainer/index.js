import React, { useState } from "react";
import Wrapper from "../../assets/wrappers/JobsContainer";
import { Loading } from "..";


const JobsContainer = () => {
    const [loading, setLoading] = useState(false);
    const [jobs, setJobs] = useState([1]);
    const [totalJobs, setTotalJobs] = useState(jobs.length);

    if (loading) {
        return <Loading center />
    }

    if (jobs.length === 0) {
        return <NoJobsFound />
    }

    return (
        <Wrapper>
            <h4> JobsContainer component  </h4>
            <h5>{totalJobs} job{jobs.length > 1 && "s"} found</h5>

            <div className="jobs">
                {jobs.map((job, index) => {
                    return <h4 key={index}>{job}</h4>
                })}
            </div>
        </Wrapper>
    )
};

const NoJobsFound = () => {
    return <Wrapper>
        <h2>No jobs to display...</h2>
    </Wrapper>
};

export default JobsContainer;
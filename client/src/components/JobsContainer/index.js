import React from "react";
import Wrapper from "../../assets/wrappers/JobsContainer";
import { Loading } from "..";


const JobsContainer = ({ list, loading, total }) => {

    if (loading) {
        return <Loading center />
    }

    if (list.length === 0) {
        return <NoJobsFound />
    }

    return (
        <Wrapper>
            <h4> JobsContainer component  </h4>
            <h5>{total} job{list.length > 1 && "s"} found</h5>

            <div className="jobs">
                {list.map((job) => {
                    return <h4 key={job._id}>{job.company}</h4>
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
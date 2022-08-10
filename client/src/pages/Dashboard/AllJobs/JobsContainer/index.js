import React from "react";
import Wrapper from "../../../../assets/wrappers/JobsContainer";
import Job from "./Job";
import { Loading } from "../../../../components";


const JobsContainer = ({ list, loading, total }) => {

    if (loading) {
        return <Loading center />
    }

    if (list.length === 0) {
        return <NoJobsFound />
    }

    return (
        <Wrapper>
            <h5>{total} job{list.length > 1 && "s"} found</h5>

            <div className="jobs">
                {list.map((job) => {
                    return <Job key={job._id} {...job} />
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
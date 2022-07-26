import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getJobs } from "../../assets/context/actions";


const AllJobs = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getJobs());
    }, [dispatch]);

    return (
        <>
            <h4>AllJob component</h4>
        </>
    )
}

export default AllJobs;
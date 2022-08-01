import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deleteJob, editJob } from "../../assets/context/actions";


const Job = ({ _id, company, createdAt }) => {
    const dispatch = useDispatch();

    let date = moment(createdAt);
    date = date.format("MMM Do, YYYY");

    return <>
        <h5>{company}</h5>
        <h5>{date}</h5>
        <button type="button" onClick={() => dispatch(deleteJob(_id))}>delete</button>
        <button type="button" onClick={() => dispatch(editJob(_id))}>edit</button>
    </>
};

export default Job;
import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Wrapper from "../../../../assets/wrappers/Job";
import { useAppContext } from "../../../../assets/context";
import JobInfo from "./JobInfo";
import { deleteJob } from "../../../../assets/context/actions";

const Job = ({ _id, position, jobLocation, jobType, status, company, createdAt }) => {
    let date = moment(createdAt);
    date = date.format("MMM Do, YYYY");

    const dispatch = useDispatch();

    const { editJob } = useAppContext();

    return (
        <Wrapper>
            <header>
                <div className="main-icon">{company.charAt(0)}</div>
                <div className="info">
                    <h5>{position}</h5>
                    <p>{company}</p>
                </div>
            </header>
            <div className="content">
                <div className='content-center'>
                    <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
                    <JobInfo icon={<FaCalendarAlt />} text={date} />
                    <JobInfo icon={<FaBriefcase />} text={jobType} />
                    <div className={`status ${status}`}>{status}</div>
                </div>
                <footer>
                    <div className="actions">
                        <Link
                            to="/addjob"
                            className="btn edit-btn"
                            onClick={() => editJob(_id)}>edit</Link>
                        <button
                            type="button"
                            className="btn delete-btn"
                            onClick={() => dispatch(deleteJob(_id))}>delete</button>
                    </div>
                </footer>
            </div>
        </Wrapper>
    )
};

export default Job;
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { showAlert } from "../../assets/context/actions";
import { FormRow, Alert } from "../../components";

const AddJob = () => {
    const [job, setJob] = useState({
        isEditing: false,
        position: "",
        company: "",
        jobType,
        jobTypeOptions,
        status,
        statusOptions,
    });

    const { jobLocation: location } = useSelector(state => state.job);
    const dispatch = useDispatch();

    job.jobLocation = location;

    const { alertOn } = useSelector(state => state.alert);

    const {
        isEditing,
        position,
        company,
        jobType,
        jobLocation,
        jobTypeOptions,
        statusOptions,
        status } = job;

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!company || !position || !jobLocation) {
            dispatch(showAlert("danger", "Please review all fields!"));
            return;
        }

        console.log(job);
    };

    const handleJobInput = (e) => {
        const name = e.target.name
        const value = e.target.value
        setJob(prev => {
            return { ...prev, [name]: value }
        });
    }

    return (
        <Wrapper>
            <form className="form">
                <h3>{isEditing ? "edit job" : "add job"} </h3>
                {alertOn && <Alert />}

                {/* position */}
                <div className="form-center">
                    <FormRow
                        type="text"
                        name="position"
                        value={position}
                        handleChange={handleJobInput}
                    />
                    {/* company */}
                    <FormRow
                        type="text"
                        name="company"
                        value={company}
                        handleChange={handleJobInput}
                    />
                    {/* location */}
                    <FormRow
                        type="text"
                        labelText="location"
                        name="jobLocation"
                        value={jobLocation}
                        handleChange={handleJobInput}
                    />
                    {/* job type */}

                    {/* job status */}

                    <div className="btn-container">
                        <button
                            className="btn btn-block submit-btn"
                            type="submit"
                            onClick={handleSubmit}
                        >
                            submit
                        </button>
                    </div>
                </div>
            </form>
        </Wrapper>
    )
};

export default AddJob;
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { showAlert, createJob, updateJob } from "../../assets/context/actions";
import { FormRow, Alert, FormRowSelect } from "../../components";
import { useAppContext } from "../../assets/context";

const AddJob = () => {
    const {
        editJobId,
        isEditing,
        position,
        company,
        jobType,
        jobTypeOptions,
        status,
        statusOptions,
        jobLocation,
        setJob,
        setIsEditing,
        clearValues,
    } = useAppContext();

    const dispatch = useDispatch();

    const { alertOn } = useSelector(state => state.alert);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!company || !position || !jobLocation) {
            dispatch(showAlert("danger", "Please review all fields!"));
            return;
        }

        if (isEditing) {
            dispatch(updateJob({ jobId: editJobId, form: { company, position, jobLocation, jobType, status } }))
            setJob(state => ({ ...state, editJobId: "", position: "", company: "", jobType: jobTypeOptions[0], status: statusOptions[0], jobLocation: "" }));
            setIsEditing(false);
            return
        }

        dispatch(createJob({ position, company, jobType, status, jobLocation }, undefined));
        setJob(state => {
            return {
                ...state,
                isEditing: false,
                position: "",
                company: "",
                jobType: "full-time",
                status: "pending",
                jobLocation: ""
            }
        });
    };

    const clearHandler = e => {
        e.preventDefault();
        clearValues();
    }

    const handleJobInput = (e) => {
        const name = e.target.name
        const value = e.target.value
        setJob(prev => {
            return { ...prev, [name]: value }
        });
    };

    return (
        <Wrapper>
            <form className="form">
                <h3>{isEditing ? "edit job" : "add job"} </h3>
                {alertOn && <Alert />}

                <div className="form-center">
                    <FormRow
                        type="text"
                        name="position"
                        value={position}
                        handleChange={handleJobInput}
                    />

                    <FormRow
                        type="text"
                        name="company"
                        value={company}
                        handleChange={handleJobInput}
                    />

                    <FormRow
                        type="text"
                        labelText="location"
                        name="jobLocation"
                        placeHolder="job location"
                        value={jobLocation}
                        handleChange={handleJobInput}
                    />

                    <FormRowSelect
                        labelText="job type"
                        name="jobType"
                        value={jobType}
                        handleChange={handleJobInput}
                        list={jobTypeOptions}
                    />

                    <FormRowSelect
                        name="status"
                        value={status}
                        handleChange={handleJobInput}
                        list={statusOptions}
                    />
                    <div className="btn-container">
                        <button
                            className="btn btn-block submit-btn"
                            type="submit"
                            onClick={handleSubmit}
                        >
                            submit
                        </button>
                        <button
                            className="btn btn-block clear-btn"
                            type="submit"
                            onClick={clearHandler}
                        >
                            clear
                        </button>
                    </div>
                </div>
            </form>
        </Wrapper>
    )
};

export default AddJob;
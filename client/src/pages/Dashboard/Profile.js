import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FormRow, Alert } from "../../components";
import { showAlert, updateUser } from "../../assets/context/actions";
import Wrapper from "../../assets/wrappers/DashboardFormPage";

const Profile = () => {
    const { alertOn } = useSelector(state => state.alert);
    const { loading, user, userLocation } = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const [name, setName] = useState(user.name.split(" ")[0]);
    const [lastName, setLastName] = useState(user.name.split(" ")[1]);
    const [email, setEmail] = useState(user.email);
    const [location, setLocation] = useState(userLocation);

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name || !email || !lastName || !location) {
            // test and remove temporary
            dispatch(showAlert("danger", "Please provide required fields!"));
            return
        }

        dispatch(updateUser({ name, email, lastName, location }));
    }
    return (
        <Wrapper>
            <form className="form" onSubmit={handleSubmit}>
                <h3>profile </h3>
                {alertOn && <Alert />}

                {/* name */}
                <div className="form-center">
                    <FormRow
                        type="text"
                        name="name"
                        value={name}
                        handleChange={(e) => setName(e.target.value)}
                    />
                    <FormRow
                        labelText="last name"
                        type="text"
                        name="lastName"
                        value={lastName}
                        handleChange={(e) => setLastName(e.target.value)}
                    />
                    <FormRow
                        type="email"
                        name="email"
                        value={email}
                        handleChange={(e) => setEmail(e.target.value)}
                    />

                    <FormRow
                        type="text"
                        name="location"
                        value={location}
                        handleChange={(e) => setLocation(e.target.value)}
                    />
                    <button className="btn btn-block" type="submit" disabled={loading}>
                        {loading ? "Please Wait..." : "save changes"}
                    </button>
                </div>
            </form>
        </Wrapper>
    )
}

export default Profile;
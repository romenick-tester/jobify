import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FormRow, Alert } from "../../components";
import { showAlert, updateUser } from "../../assets/context/actions";
import Wrapper from "../../assets/wrappers/DashboardFormPage";

const Profile = () => {
    const { alertOn } = useSelector(state => state.alert);
    const { user, userLocation } = useSelector(state => state.auth);
    const { updating } = useSelector(state => state.user);

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
                        placeHolder={user.name.split(" ")[0]}
                        value={name}
                        handleChange={(e) => setName(e.target.value)}
                    />
                    <FormRow
                        labelText="last name"
                        type="text"
                        name="lastName"
                        placeHolder={user.name.split(" ")[1]}
                        value={lastName}
                        handleChange={(e) => setLastName(e.target.value)}
                    />
                    <FormRow
                        type="email"
                        name="email"
                        placeHolder={user.email}
                        value={email}
                        handleChange={(e) => setEmail(e.target.value)}
                    />

                    <FormRow
                        type="text"
                        name="location"
                        placeHolder="City, Country"
                        value={location}
                        handleChange={(e) => setLocation(e.target.value)}
                    />
                    <button className="btn btn-block" type="submit" disabled={updating}>
                        {updating ? "Please Wait..." : "save changes"}
                    </button>
                </div>
            </form>
        </Wrapper>
    )
}

export default Profile;
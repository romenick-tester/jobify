import React, { useState } from "react";
import { Logo } from "../../components";
import Wrapper from "../../assets/wrappers/RegisterPage";
import { FormRow, Alert } from "../../components";
import { useAppContext } from "../../assets/context";

const initialState = {
    name: "",
    email: "",
    password: "",
    isMember: null
};

const Signup = () => {
    const [values, setValues] = useState(initialState);
    const { name, email, password, isMember } = values;

    const { isLoading, alertOn, alertType, alertText, displayAlert, signinUser, signupUser } = useAppContext();

    const toggleForm = () => {
        setValues({ ...values, name: "", isMember: !values.isMember });
    };

    const handleChange = e => {
        setValues({ ...values, [e.target.name]: e.target.value })
    };

    const onSubmit = e => {
        e.preventDefault();

        if (!email || !password || (!isMember && !name)) {
            displayAlert("danger", "Field is empty!")
            return
        } else {
            if (!name) {
                signinUser({ email, password });
                displayAlert("success", "Signin success!")
            } else {
                signupUser({ name, email, password });
                displayAlert("success", "Signup success!")
            }
        }
    };

    return (
        <Wrapper className="full-page">
            <form className="form" onSubmit={onSubmit}>
                <Logo />
                <h3>{values.isMember ? "Sign In" : "Sign Up"}</h3>
                {alertOn && <Alert type={alertType} msg={alertText} />}
                {!isMember && (
                    <FormRow
                        name="name"
                        type="text"
                        value={name}
                        handleChange={handleChange}
                        labelText="enter your name"
                    />
                )}
                <FormRow
                    name="email"
                    type="text"
                    value={email}
                    handleChange={handleChange}
                    labelText="enter your email"
                />
                <FormRow
                    name="password"
                    type="password"
                    value={password}
                    handleChange={handleChange}
                    labelText="enter a password"
                />
                <button type="submit" className="btn btn-block" disabled={isLoading}>submit</button>
                <p>
                    {isMember ? "Not a member yet?" : "Already a member?"}
                    <button type="button" onClick={toggleForm} className="member-btn">
                        {isMember ? "Sign-up" : "Sign-in"}
                    </button>
                </p>
            </form>
        </Wrapper>
    )
}

export default Signup;
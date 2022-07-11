import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../../components";
import Wrapper from "../../assets/wrappers/RegisterPage";
import { FormRow, Alert } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { showAlert, signin, signup } from "../../assets/context/actions";

const initialState = {
    name: "",
    email: "",
    password: "",
    isMember: null
};

const Auth = () => {
    const [values, setValues] = useState(initialState);
    const { name, email, password, isMember } = values;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const alert = useSelector(state => state.alert);
    const { alertOn, alertType, alertText } = alert;

    const auth = useSelector(state => state.auth);
    const { loading, error, user } = auth;

    useEffect(() => {
        if (error) {
            dispatch(showAlert(error.type, error.msg));
        }
    }, [dispatch, error]);

    useEffect(() => {
        if (user) {
            setTimeout(() => {
                navigate("/");
            }, 3100)
        }
    }, [user, navigate]);

    const toggleForm = () => {
        setValues({ ...values, name: "", isMember: !values.isMember });
    };

    const handleChange = e => {
        setValues({ ...values, [e.target.name]: e.target.value })
    };

    const onSubmit = e => {
        e.preventDefault();

        if (!email || !password || (!isMember && !name)) {
            dispatch(showAlert("danger", "field is missing!"))
        } else {
            if (!name) {
                dispatch(signin({ email, password }));
            } else {
                dispatch(signup({ name, email, password }));
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
                <button type="submit" className="btn btn-block" disabled={loading}>submit</button>
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

export default Auth;
import { useState, useEffect } from "react";
import { Logo } from "../../components";
import Wrapper from "../../assets/wrappers/RegisterPage";
import { FormRow, Alert } from "../../components";

const initialState = {
    name: "",
    email: "",
    password: "",
    isMember: null
};

const Signup = () => {
    const [values, setValues] = useState(initialState);
    const [showAlert, setShowAlert] = useState({ isOn: false, type: "", msg: "" });
    // use global state and useNavigate

    const alertHandler = ({ isOn = false, type = "success", msg = "" }) => {
        setShowAlert({ isOn, type, msg });
        setTimeout(() => {
            setShowAlert({ isOn: false, type: "", msg: "" })
        }, 3500);
    };

    const toggleForm = () => {
        setValues({ ...values, name: "", isMember: !values.isMember });
    };

    const handleChange = e => {
        setValues({ ...values, [e.target.name]: e.target.value })
    };

    const onSubmit = e => {
        e.preventDefault();
        if (!values.name) {
            alertHandler({ isOn: true, type: "success", msg: "You are signed in!" });
        } else {
            alertHandler({ isOn: true, type: "success", msg: "signup success!" });
        }
    };

    return (
        <Wrapper className="full-page">
            <form className="form" onSubmit={onSubmit}>
                <Logo />
                <h3>{values.isMember ? "Sign In" : "Sign Up"}</h3>
                {showAlert.isOn && <Alert type={showAlert.type} msg={showAlert.msg} />}
                {!values.isMember && (
                    <FormRow
                        name="name"
                        type="text"
                        value={values.name}
                        handleChange={handleChange}
                        labelText="enter your name"
                    />
                )}
                <FormRow
                    name="email"
                    type="text"
                    value={values.email}
                    handleChange={handleChange}
                    labelText="enter your email"
                />
                <FormRow
                    name="password"
                    type="password"
                    value={values.password}
                    handleChange={handleChange}
                    labelText="enter a password"
                />
                <button type="submit" className="btn btn-block">submit</button>
                <p>
                    {values.isMember ? "Not a member yet?" : "Already a member?"}
                    <button type="button" onClick={toggleForm} className="member-btn">
                        {values.isMember ? "Sign-up" : "Sign-in"}
                    </button>
                </p>
            </form>
        </Wrapper>
    )
}

export default Signup;
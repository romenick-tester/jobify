import { useState, useEffect } from "react";
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
    // use global state and useNavigate

    const { isLoading, alertOn, alertType, alertText, displayAlert } = useAppContext();

    const toggleForm = () => {
        setValues({ ...values, name: "", isMember: !values.isMember });
    };

    const handleChange = e => {
        setValues({ ...values, [e.target.name]: e.target.value })
    };

    const onSubmit = e => {
        e.preventDefault();
        const { name, email, password, isMember } = values;

        if (!email || !password || (!isMember && !name)) {
            displayAlert("danger", "Field is empty!")
            return
        } else {
            displayAlert("success", "Signup success!")
            if (!name) {
                console.log({ email: values.email, password: values.password });
            } else {
                console.log({ name: values.name, email: values.email, password: values.password });
            }
        }

    };

    return (
        <Wrapper className="full-page">
            <form className="form" onSubmit={onSubmit}>
                <Logo />
                <h3>{values.isMember ? "Sign In" : "Sign Up"}</h3>
                {alertOn && <Alert type={alertType} msg={alertText} />}
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
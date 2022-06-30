import User from "../models/User.js";


// METHOD:      POST
// ENDPOINT:    http://localhost:5000/api/v1/auth/signup
const signup = async (req, res) => {
    const { name, email, password, lastName } = req.body;

    const firstName = name.split(" ")[0];
    const surname = name.split(" ")[1];

    const user = await User.create({
        name: firstName || name,
        lastName: surname || lastName,
        email,
        password
    });

    res.status(201).json({ user });
};


// METHOD:      POST
// ENDPOINT:    http://localhost:5000/api/v1/auth/signup
const signin = (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    res.status(200).json("signin route");
};


// METHOD:      PUT
// ENDPOINT:    http://localhost:5000/api/v1/auth/user/:id
const updateUser = (req, res) => {
    res.status(200).json("update user route");
};


export { signup, signin, updateUser };
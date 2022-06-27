
// METHOD:      POST
// ENDPOINT:    http://localhost:5000/api/v1/auth/signin
const signup = (req, res) => {
    const { name, email, password } = req.body;
    console.log(name, email, password);
    res.status(200).json("signup route");
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
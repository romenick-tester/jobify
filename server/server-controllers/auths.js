

const signup = (req, res) => {
    const { name, email, password } = req.body;
    res.status(200).json("signup route");
};


const signin = (req, res) => {
    const { email, password } = req.body;
    res.status(200).json("signin route");
};


const updateUser = (req, res) => {
    res.status(200).json("update user route");
};


export { signup, signin, updateUser };
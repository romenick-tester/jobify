import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, AuthError } from "../errors/index.js";

// METHOD:      POST
// ENDPOINT:    http://localhost:5000/api/v1/auth/signup
const signup = async (req, res) => {
    const { name, email, password, lastName } = req.body;

    if (!name || !email || !password) {
        throw new BadRequestError("Missing value or values, please review all fields")
    }

    const emailExist = await User.findOne({ email });

    if (emailExist) {
        throw new BadRequestError("Email is already in use!");
    }

    const firstName = name.split(" ")[0];
    const surname = name.split(" ")[1];

    const user = await User.create({
        name: firstName || name,
        lastName: surname || lastName,
        email,
        password
    });

    const payload = {
        id: user._id,
        user: {
            name: user.name + " " + user.lastName,
            email: user.email,
        },
        location: user.location,
        token: user.createJWT()
    };

    res.status(StatusCodes.CREATED).json(payload);
};


// METHOD:      POST
// ENDPOINT:    http://localhost:5000/api/v1/auth/signin
const signin = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        throw new BadRequestError("Please provide all values");
    }

    const user = await User.findOne({ email });

    if (!user) {
        throw new AuthError("Invalid credentials");
    }

    const passwordMatched = await user.comparePassword(String(password));

    if (!passwordMatched) {
        throw new AuthError("Invalid credentials!");
    }

    const payload = {
        user: {
            name: user.name + " " + user.lastName,
            email: user.email
        },
        location: user.location,
        token: user.createJWT()
    }
    res.status(StatusCodes.OK).json(payload);
};


// METHOD:      PUT
// ENDPOINT:    http://localhost:5000/api/v1/auth/user/:id
const updateUser = async (req, res) => {
    const { email, name, lastName, location } = req.body;

    if (!email || !name || !lastName || !location) {
        throw new Error("Please provide required values!");
    }

    const checkEmail = await User.findOne({ email });

    if (checkEmail) {
        throw new BadRequestError("Email already exist!");
    }

    const user = await User.findOne({ _id: req.user._id }).select("-password");

    user.email = req.body.email || user.email;
    user.name = req.body.name || user.name;
    user.lastName = req.body.lastName || user.lastName;
    user.location = req.body.location || user.location;

    await user.save();

    console.log(user);

    res.status(200).json("update user route");
};


export { signup, signin, updateUser };
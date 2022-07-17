import { StatusCodes } from "http-status-codes";
import User from "../models/User.js";

// METHOD:      PUT
// ENDPOINT:    http://localhost:5000/api/v1/user
const updateUser = async (req, res) => {
    const { email, name, lastName, location } = req.body;

    if (!email || !name || !lastName || !location) {
        throw new Error("Please provide required values!");
    }

    const user = await User.findOne({ _id: req.user._id }).select("-password");

    user.email = email || user.email;
    user.name = name || user.name;
    user.lastName = lastName || user.lastName;
    user.location = location || user.location;

    const updatedUser = await user.save();

    const payload = {
        user: {
            name: updatedUser.name + " " + updatedUser.lastName,
            email: updatedUser.email
        },
        location: updatedUser.location,
        token: updatedUser.createJWT()
    }

    res.status(StatusCodes.OK).json(payload);
};

export { updateUser };
import mongoose from "mongoose";
import validator from "validator";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "NAME is missing"],
        minlength: 3,
        maxlength: 20,
        trim: true
    },
    email: {
        type: String,
        required: [true, "EMAIL is missing"],
        validate: {
            validator: validator.isEmail,
            message: 'EMAIL is not valid'
        },
        unique: true
    },
    password: {
        type: String,
        required: [true, "PASSWORD is missing"],
        minlength: 6,
        maxlength: 20
    },
    lastName: {
        type: String,
        maxlength: 20,
        trim: true,
        default: "Surname"
    },
    location: {
        type: String,
        maxlength: 20,
        trim: true,
        default: "My Location"
    }
})

export default mongoose.model("User", UserSchema);
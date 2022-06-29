import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide name"],
        minlength: 3,
        maxlength: 20,
        trim: true
    },
    email: {
        type: String,
        required: [true, "Please provide email"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please provide password"],
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
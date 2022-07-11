import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";

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

UserSchema.pre("save", async function () {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.createJWT = function () {
    return JWT.sign({ userID: this._id }, process.env.JWT_SECRET, { expiresIn: "1d" })
};

UserSchema.methods.comparePassword = async function (inputPassword) {
    return await bcrypt.compare(inputPassword, this.password);
}

export default mongoose.model("User", UserSchema);
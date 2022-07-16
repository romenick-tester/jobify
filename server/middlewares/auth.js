import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import AuthError from "../errors/auth-error.js";

dotenv.config();

const auth = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer")) {
        throw new AuthError("Authentication failed!")
    }

    try {
        const decoded = jwt.verify(authHeader.split(" ")[1], process.env.JWT_SECRET);

        req.user = { _id: decoded.userID };

        next();
    } catch (err) {
        throw new AuthError("Authentication failed!")
    }
}

export default auth;
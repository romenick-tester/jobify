import jwt from "jsonwebtoken";
import AuthError from "../errors/auth-error.js";


const auth = async (req, res, next) => {
    const authHeaders = req.headers.authorization;

    if (!authHeaders) {
        throw new AuthError("Unauthorized access!")
    }

    const reqToken = authHeaders.split(" ")[1];

    console.log(reqToken);
    // req.user = { id: decodedToken.id };

    next();
}

export default auth;
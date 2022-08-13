import * as CustomError from "../errors/index.js";

const checkPermissions = (userId, resourceUserId) => {

    if (userId === resourceUserId.toString()) return

    throw new CustomError.AuthError("Not authorised for this action!")
};

export default checkPermissions;
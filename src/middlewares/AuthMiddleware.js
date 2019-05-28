import jwt from 'jsonwebtoken'
import { promisify } from 'util'
import { APP_SECRET } from '../config/app'
import UserService from '../services/UserService'
function sendError(res, message) {
    return res.status(401).json({
        status: "error",
        message
    })
}
const checkToken = async (req, res, next) => {
    const { authorization } = req.headers
    if (!authorization) {
        return sendError(res, "Token not provided")
    }
    const [, token] = authorization.split(" ")
    try {
        const decoded = await promisify(jwt.verify)(token, APP_SECRET)
        const user = await UserService.findById(decoded.id)
        if (!user) {
            return sendError(res, "Invalid User")
        }
        req.loggedUser = user
        return next()
    } catch (err) {
        return sendError(res, "Token not valid")
    }
}
export default checkToken
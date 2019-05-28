import UserService from '../services/UserService'
class SessionController {
    static async login(req, res) {
        try {
            const { email, password } = req.body
            const user = await UserService.findByEmail(email)
            if (!user || !(await user.checkPassword(password))) {
                return res.status(401).json({
                    status: 'error',
                    message: 'Invalid user or password'
                })
            }
            return res.status(200).json({
                status: 'success',
                message: 'User authorized',
                token: user.generateToken()
            })
        } catch (error) {
            return res.status(400).json({
                status: 'error',
                message: error
            })
        }
    }
}
export default SessionController
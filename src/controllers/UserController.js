import UserService from '../services/UserService'

class UserController {



    static async addUser(req, res) {
        if (!req.body.name || !req.body.email || !req.body.password) {
            return res.status(400).json({
                status: 'error',
                message: 'Please provide complete information'
            })
        }
        const newUser = req.body
        try {
            const createdUser = await UserService.addUser(newUser)
            return res.status(201).json({
                status: 'success',
                message: 'User created',
                data: createdUser
            })
        } catch (error) {
            return res.status(400).json({
                status: 'error',
                message: error
            })
        }
    }



    static async getUser(req, res) {
        const { email } = req.params
        if (!email) {
            return res.status(400).json({
                status: 'error',
                message: 'Please input a valid e-mail'
            })
        }
        try {
            const theUser = await UserService.findByEmail(email)
            if (!theUser) {
                return res.status(404).json({
                    status: 'error',
                    message: `Cannot find user with email: ${email}`
                })
            } else {
                return res.status(200).json({
                    status: 'success',
                    message: 'User found',
                    data: theUser
                })
            }
        } catch (error) {
            return res.status(400).json({
                status: 'error',
                message: error
            })
        }
    }
}

export default UserController
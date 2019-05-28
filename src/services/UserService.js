import database from '../models'
class UserService {
    static async addUser(newUser) {
        try {
            return await database.User.create(newUser)
        } catch (error) {
            throw error
        }
    }
    static async findByEmail(email) {
        try {
            const theUser = await database.User.findOne({ where: { email: email } })
            return theUser
        } catch (error) {
            throw error
        }
    }
    static async findById(id) {
        try {
            const theUser = await database.User.findOne({ where: { id: id } })
            return theUser
        } catch (error) {
            throw error
        }
    }
}
export default UserService
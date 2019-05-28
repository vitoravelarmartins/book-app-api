import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { APP_SECRET } from '../config/app'
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password_hash: DataTypes.STRING,
    password: DataTypes.VIRTUAL
  }, {
      hooks: {
        beforeSave: async (user) => {
          if (user.password) {
            user.password_hash = await bcrypt.hash(user.password, 8)
          }
        }
      }
    },
    sequelize)
  User.prototype.checkPassword = function (password) {
    return bcrypt.compare(password, this.password_hash)
  }
  User.prototype.generateToken = function () {
    return jwt.sign({ id: this.id }, APP_SECRET)
  }
  return User
}
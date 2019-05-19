import database from '../models'

class AuthorService {
  static async getAll() {
    try {
      return await database.Author.findAll()
    } catch (error) {
      throw error
    }
  }

  static async addNew(newAuthor) {
    try {
      return await database.Author.create(newAuthor)
    } catch (error) {
      throw error
    }
  }

  static async update(id, updateAuthor) {
    try {
      const AuthorToUpdate = await database.Author.findOne({
        where: { id: Number(id) }
      })

      if (AuthorToUpdate) {
        await database.Author.update(updateAuthor, { where: { id: Number(id) } })

        return updateAuthor
      }
      return null
    } catch (error) {
      throw error
    }
  }

  static async getOne(id) {
    try {
      const theAuthor = await database.Author.findOne({
        where: { id: Number(id) }
      })

      return theAuthor
    } catch (error) {
      throw error
    }
  }

  static async delete(id) {
    try {
      const AuthorToDelete = await database.Author.findOne({ where: { id: Number(id) } })

      if (AuthorToDelete) {
        const deletedAuthor = await database.Author.destroy({
          where: { id: Number(id) }
        })
        return deletedAuthor
      }
      return null
    } catch (error) {
      throw error
    }
  }
}

export default AuthorService
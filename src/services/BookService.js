import database from '../models'

class BookService {
  static async getAll() {
    try {
      return await database.Book.findAll({
        include: [
          {
            model: database.Author,
            as: 'authors',
            through: { attributes: [] }
          }
        ]
      })
    } catch (error) {
      throw error
    }
  }

  static async addNew(book) {
    try {

      const { authors, ...newBook } = book

      const createdBook = await database.Book.create(newBook)

      if (authors && authors.length > 0) {
        createdBook.setAuthors(authors)
      }

      return createdBook
    } catch (error) {
      throw error
    }
  }

  static async update(id, alteredBook) {
    try {

      const { authors, ...updateBook } = alteredBook

      const bookToUpdate = await database.Book.findOne({
        where: { id: Number(id) }
      })

      if (bookToUpdate) {
        bookToUpdate.update(updateBook)

        if (authors && authors.length > 0) {
          bookToUpdate.setAuthors(authors)
        }
  
        return bookToUpdate
      }

      return null
    } catch (error) {
      throw error
    }
  }

  static async getOne(id) {
    try {
      const theBook = await database.Book.findOne({
        where: { id: Number(id) }
      })

      return theBook
    } catch (error) {
      throw error
    }
  }

  static async delete(id) {
    try {
      const bookToDelete = await database.Book.findOne({ where: { id: Number(id) } })

      if (bookToDelete) {
        const deletedBook = await database.Book.destroy({
          where: { id: Number(id) }
        })
        return deletedBook
      }
      return null
    } catch (error) {
      throw error
    }
  }
}

export default BookService
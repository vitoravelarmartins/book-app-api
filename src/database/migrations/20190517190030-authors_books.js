module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('authors_books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      author_id: {
        type: Sequelize.INTEGER,
        references: { model: 'authors', key: 'id' },
        onDelete: 'CASCADE',
        allowNull: false,
      },
      book_id: {
        type: Sequelize.INTEGER,
        references: { model: 'books', key: 'id' },
        onDelete: 'CASCADE',
        allowNull: false,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('authors_books')
  }
}
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  })

  Book.associate = (models) => {
    Book.belongsToMany(models.Author, {
      through: 'authors_books',
      as: 'authors',
      foreignKey: 'book_id'
    })
  }

  return Book
}
module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define('Author', {
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  })

  Author.associate = (models) => {
    Author.belongsToMany(models.Book, {
      through: 'authors_books',
      as: 'books',
      foreignKey: 'author_id'
    })
  }
  
  return Author
}
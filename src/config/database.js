module.exports = {
  host: '127.0.0.1',
  username: 'root',
  password: '',
  database: 'books_api',
  dialect: 'mysql',
  //logging: false,
  define: {
    timestamps: true, //habilitar os campos created_at e update_at nas tabelas
    underscored: true, //nome das tabelas no padrão snake. Exemplo: user_groups
    underscoredAll: true, //nome dos campos no padrão snake. Exemplo: first_name
  } 
}
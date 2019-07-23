const Sequelize = require('sequelize')
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
});
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })

module.exports = sequelize
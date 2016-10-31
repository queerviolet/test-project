const db = require('APP/db')
const Sequelize = require('sequelize')

module.exports = db.define('products', {
  name: Sequelize.STRING,
  price: Sequelize.FLOAT,
})
'use strict'

const db = require('APP/db')
const User = require('./user')
const {expect} = require('chai')
const Product = require('./product')

// Sequelize also gives you this way
// of accessing a model, so we could do:
// const Product = db.model('product')

describe('Product', () => {
  before('wait for the db', () => db.didSync)

  it('has a name and price', () =>
    Product.create({
      name: 'Waterfall',
      price: 22.00
    }).then(product =>
      expect(product).to.contain({
        name: 'Waterfall',
        price: 22.00
      })
    )
  )
})
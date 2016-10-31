const request = require('supertest-as-promised')
const {expect} = require('chai')
const db = require('APP/db')
const Product = require('APP/db/models/product')
const app = require('./start')

describe('/api/products', () => {
  const products = [
          {
            name: 'Waterfall',
            price: 100.0
          },
          {
            name: 'Puzzle box',
            price: 50.0
          },
          {
            name: 'Ominous Cavern',
            price: 12.99
          }    
  ]
  const [waterfall, puzzleBox, cavern]
    = products

  before('sync database & make products', () =>
    db.didSync
      .then(() => Product.destroy({truncate: true}))
      .then(() => products.map(
        product => Product.create(product)))
  )


  it('GET / lists all products', () =>
    request(app)
      .get(`/api/products`)
      .expect(200)
      .then(res => {
        expect(res.body).to.have.length(products.length)
        const [
          gotWaterfall,
          gotPuzzleBox,
          gotCavern ] = res.body
        expect(gotWaterfall).to.contain(waterfall)
      })
  )

  xit('POST / creates a product', () =>
      request(app)
        .post('/api/products')
        .send({
          name: 'Curious Staircase',
          price: 1e6
        })
        .expect(201)
  )
})
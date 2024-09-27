const {server} = require('../index')
const request = require('supertest')

describe('GET/api/diastranscurridos',()=>{
  const id = 5
  test(']The status code should be 200',async()=>{
    const response = await request(server).get(`//api/diastranscurridos/${id}`).send()
    expect(response.statusCode).toBe(200)
  })

})
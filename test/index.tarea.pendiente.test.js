const {server} = require('../index')
const request = require('supertest')

describe('GET/api/tarea/pendiente',()=>{
  test(']The status code should be 200',async()=>{
    const response = await request(server).get('/api/tarea/pendiente').send()
    expect(response.statusCode).toBe(200)
  })

})
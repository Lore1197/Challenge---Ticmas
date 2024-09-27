const {server} = require('../index')
const request = require('supertest')

describe('GET/api/estado',()=>{
  const id = 5
  test(']The status code should be 200',async()=>{
    const response = await request(server).get(`/api/estado/${id}`).send({
      "estado": "Finalizado"
    })
    expect(response.statusCode).toBe(200)
  })

})
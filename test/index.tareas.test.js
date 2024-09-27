const {server} = require('../index')
const request = require('supertest')

describe('GET/api/tareas',()=>{

  test(']The status code should be 200',async()=>{
    const response = await request(server).get('/api/tareas').send()
    expect(response.statusCode).toBe(200)
  })

  test('The output should be an object',async()=>{
    const response = await request(server).get('/api/tareas').send()
    expect(response.body).toBeInstanceOf(Object)
  })

})

describe('POST/api/tareas',()=>{

  test('The status code should be 200',async()=>{
    const response = await request(server).post('/api/tareas').send({
      "titulo": "Test",
      "descripcion": "Comprobar que las rutas funcionen",
      "estado": "En curso"
    })
    expect(response.statusCode).toBe(200)
  })

  test('The output should be an object',async()=>{
    const response = await request(server).post('/api/tareas').send({
      "titulo": "Test",
      "descripcion": "Comprobar que las rutas funcionen",
      "estado": "En curso"
    })
    expect(response.body).toBeInstanceOf(Object)
  })

})

describe('PUT/api/tareas',()=>{

  test('The status code should be 200',async()=>{
    const id = 2
    const response = await request(server).put(`/api/tareas/${id}`).send({
      "titulo": "Test",
      "descripcion": "Comprobar que las rutas funcionen"
    })
    expect(response.statusCode).toBe(200)
  })

  test('The response should return the expected message',async()=>{
    const id = 2
    const response = await request(server).put(`/api/tareas/${id}`).send({
      "titulo": "Test",
      "descripcion": "Comprobar que las rutas funcionen"
    })
    expect(response.body.message).toBe('Update complete')
  })

})



describe('DELETE/api/tareas',()=>{

  test('The status code should be 200',async()=>{
    const id = 2
    const response = await request(server).delete(`/api/tareas/${id}`).send()
    expect(response.statusCode).toBe(200)
  })

})

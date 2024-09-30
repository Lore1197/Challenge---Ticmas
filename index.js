const express = require('express')
const server = express()
const {serverConnection} = require('./config/pg')
const {router} = require('./routes/tareas')
const {router2} = require('./routes/pendiente')
const {router3} = require('./routes/estado')
const {router4} = require('./routes/diastranscurridos')

server.use(express.json());

server.use('/api/tareas', router);
server.use('/api/tarea', router2);
server.use('/api/estado', router3);
server.use('/api/diastranscurridos', router4);

server.get('/', (req, res) => {
  res.send('Server is on');
});

serverConnection();

const port = 8080;
server.listen(port, () => {
  console.log(`The server is running on port: ${port}`);
});

module.exports = {
  server
}

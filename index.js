const express = require('express')
const server = express()
const {serverConnection} = require('./config/pg')
const {router} = require('./routes/tareas')
const {router2} = require('./routes/pendiente')
const {router3} = require('./routes/estado')
const {router4} = require('./routes/diastranscurridos')

// 1. Middleware setup
server.use(express.json());

// 2. Register routes
server.use('/api/tareas', router);
server.use('/api/tarea', router2);
server.use('/api/estado', router3);
server.use('/api/diastranscurridos', router4);

// 3. Route handler
server.get('/', (req, res) => {
  res.send('Server is on');
});

// 4. Server connection initialization (e.g., database connection)
serverConnection();

// 5. Start server and listen on port
const port = 8080;
server.listen(port, () => {
  console.log(`The server is running on port: ${port}`);
});

module.exports = {
  server
}
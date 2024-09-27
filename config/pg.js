const {Pool} = require('pg')
const pool = new Pool ({
  user: 'postgres',           
  host: 'localhost',             
  database: 'postgres', 
  password: 'lore1234',    
  port: 5432,                   
})


function serverConnection() {
  pool.connect((err, client, release) => {
    if (err) {
      console.error('Error al conectar a la base de datos:', err.stack);
    } else {
      console.log('Conexión exitosa a PostgreSQL');
    }
    release(); 
  });  
}



module.exports = {
  pool,
  serverConnection
}
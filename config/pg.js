// Se realiza el "pool" a la base de datos, pero no se deja esta parte del código porque contiene información de usuario y contraseña
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

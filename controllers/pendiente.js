const {pool} = require('../config/pg')

const tareasPendientes = async (req,res) => {
  const estado = 'Pendiente'
  console.log(typeof(estado))
  try {
    const tarea = await pool.query(
      'SELECT * FROM "Gestión de Tareas"."Tareas" WHERE estado = $1',
      [estado]
    )
    console.log(tarea)
    if (tarea.rows.length > 0) {
      res.status(200).json({
        "data": tarea.rows
      })  
    } else {
      res.status(404).json({
        "message": "Not found"
      })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({
      "message": 'Error'
    }) 
  }
}

module.exports = {
  tareasPendientes
}
const {pool} = require('../config/pg')

const diasTranscurridos = async (req,res) => {
  const id = req.params.id
  try {
    const dias = await pool.query(
    `SELECT (CURRENT_DATE - fecha_creacion) AS diff FROM "Gestión de Tareas"."Tareas" WHERE id = $1`,
      [id]
    )
    res.status(200).json({
      "data": dias.rows[0]
      //.diff.days
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      "message": "Error"
    })
  }
}

module.exports = {
  diasTranscurridos
}
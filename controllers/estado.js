const {pool} = require('../config/pg')

const cambiarEstado = async (req,res) => {
  const id = req.params.id
  const {estado} = req.body
  try {
    const tareaActualizada = await pool.query(
    'UPDATE "Gestión de Tareas"."Tareas" SET estado = $1 WHERE id = $2',
  [estado,id]
    )
    return res.status(200).json({
      "message": "Updated complete"
    })
  } catch (err) {
    console.log(err)
    return res.status(500).json({
      "message": err
    })
  }
}

module.exports = {
  cambiarEstado
}
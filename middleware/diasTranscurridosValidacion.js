const {pool} = require('../config/pg')

const idExists = async (req,res,next) => {
  const id = req.params.id
  console.log(id)
  try {
    const searchId = await pool.query(
      'SELECT * FROM "Gestión de Tareas"."Tareas" WHERE id = $1',
        [id]
    )
    console.log(searchId.rows)
    if (searchId.rows.length > 0) {
      console.log("ID found")
      next()
    } else {
      return res.status(404).json({
        "message": "ID not found"
      })
    }
  } catch (error) {
    res.status(500).json({
      "message": "Error"
    })
  }
  
}

module.exports = {
  idExists
}
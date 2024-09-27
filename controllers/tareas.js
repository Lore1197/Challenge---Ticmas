const {pool} = require('../config/pg')

const listaDeTareas = async (req,res) => {
  try {
    const tareas = await pool.query(
      'SELECT * FROM "Gestión de Tareas"."Tareas"'
    )
    return res.status(200).json({
      "data": tareas.rows
    })
  } catch (error) {
    return res.status(500).json({
      "message": "Error"
    })
  }
}

const tareaSegunId = async (req,res) => {
  const id = req.params.id
  try {
    const tarea = await pool.query(
      'SELECT * FROM "Gestión de Tareas"."Tareas" WHERE id = $1',
      [id]
    )
    if (tarea.rows.length > 0) {
      return res.status(200).json({
        "data": tarea.rows
      })  
    } else {
      res.status(404).json({
        "message": "Not found"
      })
    }
  } catch (error) {
    res.status(500).json({
      "message": 'Error'
    }) 
  }
}

const nuevaTarea = async (req,res) => {
  const {titulo,descripcion,estado} = req.body;
  try {
    const tarea = await pool.query(
      'INSERT INTO "Gestión de Tareas"."Tareas"(titulo,descripcion,estado) VALUES ($1, $2, $3)',
      [titulo,descripcion,estado]
    )
    res.status(200).json({
      "message": "New task succesfully added"
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      "message": 'Error'
    }) 
  }
  
}

const actualizarTarea = async (req,res) => {
  const id = req.params.id
  const {titulo,descripcion} = req.body;
  try {
    const tareaActualizada = await pool.query(
    'UPDATE "Gestión de Tareas"."Tareas" SET titulo = $1,descripcion = $2 WHERE id = $3',
  [titulo,descripcion,id]
    )
    return res.status(200).json({
      "message": "Update complete"
    })
  } catch (err) {
    console.log(err)
    return res.status(500).json({
      "message": err
    })
  }
}

const eliminarTarea = async (req,res) => {
  const id = req.params.id
  try {
    const tarea = await pool.query(
      'DELETE FROM "Gestión de Tareas"."Tareas" WHERE id = $1',
      [id]
    )
    res.status(200).json({
      "message": "Row succesfully deleted"
    })
  
  } catch (error) {
    res.status(500).json({
      "message": 'Error'
    }) 
  }
}

module.exports = {
  listaDeTareas,
  tareaSegunId,
  nuevaTarea,
  actualizarTarea,
  eliminarTarea
}
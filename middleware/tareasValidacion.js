const {pool} = require('../config/pg')
const inputRegex = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._\- ]+$/

const inputValidation = (req,res,next) => {
  const {titulo,descripcion,estado} = req.body

  if (!titulo) {
    return res.status(400).json({
      "message": "Title is required"
    })
  } 

  if (!inputRegex.test(titulo)) {
    return res.status(400).json({
      "message": "Invalid title"
    })
  }

  if (!descripcion) {
    return res.status(400).json({
      "message": "Description is required"
    })
  } 

  if (!inputRegex.test(descripcion)) {
    return res.status(400).json({
      "message": "Invalid description"
    })
  }

  if (!estado) {
    return res.status(400).json({
      "message": "Status is required"
    })
  } 

  if (!inputRegex.test(estado)) {
    return res.status(400).json({
      "message": "Invalid status"
    })
  }

  next()

}

const updateValidation = (req,res,next) => {
  const {titulo,descripcion,estado} = req.body

  if (!titulo) {
    return res.status(400).json({
      "message": "Title is required"
    })
  } 

  if (!inputRegex.test(titulo)) {
    return res.status(400).json({
      "message": "Invalid title"
    })
  }

  if (!descripcion) {
    return res.status(400).json({
      "message": "Description is required"
    })
  } 

  if (!inputRegex.test(descripcion)) {
    return res.status(400).json({
      "message": "Invalid description"
    })
  }

  next()

}


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
  inputValidation,
  updateValidation,
  idExists
}

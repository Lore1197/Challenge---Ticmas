const express = require('express')
const router = express.Router()
const {listaDeTareas,tareaSegunId,nuevaTarea,actualizarTarea,eliminarTarea} = require('../controllers/tareas')
const {inputValidation,updateValidation,idExists} = require('../middleware/tareasValidacion')

router.get('/',listaDeTareas)

router.get('/:id',idExists,tareaSegunId)

router.post('/',inputValidation,nuevaTarea)

router.put('/:id',idExists,updateValidation,actualizarTarea)

router.delete('/:id',idExists,eliminarTarea)

module.exports = {
  router
}


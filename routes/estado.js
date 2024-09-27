const express = require('express')
const router3 = express.Router()
const {cambiarEstado} = require('../controllers/estado')
const {idExists,statusValidation} = require('../middleware/estadoValidacion')

router3.put('/:id',idExists,statusValidation,cambiarEstado)

module.exports = {
  router3
}

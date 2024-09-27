const {Router} = require('express')
const router4 = Router()
const {diasTranscurridos} = require('../controllers/diastranscurridos')
const {idExists} = require('../middleware/diasTranscurridosValidacion')

router4.get('/:id',idExists,diasTranscurridos)

module.exports = {
  router4
}

const express = require('express')
const router2 = express.Router()
const {tareasPendientes} = require('../controllers/pendiente')

router2.get('/pendiente',tareasPendientes)

module.exports = {
  router2
}
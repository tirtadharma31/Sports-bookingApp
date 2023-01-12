const courtRoute = require('express').Router()
const { CourtController } = require('../controllers')

courtRoute.get('/', CourtController.getCourt)
courtRoute.post('/add', CourtController.addCourt)
courtRoute.delete('/delete/:courtId', CourtController.deleteCourt)
courtRoute.put('/edit/:courtId', CourtController.editCourt)

module.exports = courtRoute
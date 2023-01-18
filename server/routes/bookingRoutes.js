const bookingRoute = require('express').Router()
const { BookingController } = require('../controllers')

bookingRoute.get('/:courtId/:date', BookingController.getBooking)
bookingRoute.post('/add', BookingController.addBooking)
// bookingRoute.delete('/delete/:id', null)
// bookingRoute.put('/edit/:id', null)

module.exports = bookingRoute
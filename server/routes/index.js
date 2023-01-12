const route = require('express').Router()

route.get('/', (req, res) => {
    res.json({ msg: 'Route connection success' })
})

const courtRoutes = require('./courtRoutes')
const bookingRoutes = require('./bookingRoutes')
const memberRoutes = require('./memberRoutes')

route.use('/courts', courtRoutes)
route.use('/bookings', bookingRoutes)
route.use('/members', memberRoutes)

module.exports = route
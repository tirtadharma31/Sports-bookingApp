const { Booking, Member } = require('../models')

class BookingController {
    static async getBooking(req, res) {
        try {
            let courtId = +req.params.courtId

            let date = new Date(req.params.date)
            date = date.toJSON().slice(0, 10)

            let bookings = await Booking.findAll({
                where: {
                    CourtId: courtId,
                    dateSchedule: date
                }, include: Member
            })

            res.json(bookings)
        } catch (err) {
            res.json({ msg: err })
        }
    }

    static async addBooking(req, res) {
        try {
            // const dateSchedule = new Date(req.body.date)
            // let startTime = req.body.startTime
            // let parts = startTime.split(':')
            // let minutes = parts[0]*60+parts[1]
            // startTime = new Date(minutes * 60 * 1000)

            let d = new Date(2023, 1, 12)
            // let hahaha = String(startTime).split('')
            // // startTime = startTime.split('')
            // let tes = hahaha.splice(16, 8).join('')

            // const { date, startTime, finishTime, usageTotal, payTotal, CourtId, MemberId } = req.body
            // let response = await Court.create({
            //     dateSchedule: dateSchedule,
            //     startTime: startTime,
            //     finishTime: finishTime || null,
            //     usageTotal: usageTotal,
            //     payTotal: payTotal,
            //     CourtId: CourtId,
            //     MemberId: MemberId
            // })
            res.send(d)
        } catch (err) {
            res.json({ msg: err })
        }
    }
}

module.exports = BookingController
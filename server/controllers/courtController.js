const { Court } = require('../models')

class CourtController {
    static async getCourt(req, res) {
        try {
            let courts = await Court.findAll()
            res.json(courts)
        } catch (err) {
            res.json({ msg: err })
        }
    }

    static async addCourt(req, res) {
        try {
            const { courtName, type, image, price } = req.body
            let response = await Court.create({
                courtName: courtName,
                type: type,
                image: image || null,
                price: price
            })
            res.json(response)
        } catch (err) {
            res.json({ msg: err })
        }
    }

    static async deleteCourt(req, res) {
        try {
            const id = +req.params.courtId
            let response = await Court.destroy({ where: { id: id } })
            res.json({ msg: Boolean(response) })
        } catch (err) {
            res.json({ msg: err })
        }
    }

    static async editCourt(req, res) {
        try {
            const id = +req.params.courtId
            const { courtName, type, image, price } = req.body

            let response = await Court.update({
                courtName: courtName,
                type: type,
                image: image || null,
                price: price
            }, { where: { id: id } })
            res.json(response)
        } catch (err) {
            res.json({ msg: err })
        }
    }
}

module.exports = CourtController
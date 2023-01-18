const { Court } = require('../models')
const { Op } = require('sequelize')

class CourtController {
    static async getCourt(req, res) {
        try {
            let courts = await Court.findAll({
                order: [['courtName', 'ASC']]
            })
            res.json(courts)
        } catch (err) {
            res.json({ msg: err })
        }
    }

    static async infoCourt(req, res) {
        try {
            let id = +req.params.courtId
            let courtData = await Court.findByPk(id)
            res.json(courtData)
        } catch (err) {
            res.json({ msg: err })
        }
    }

    static async searchCourt(req, res) {
        try {
            let type = req.params.courtType
            let courts = await Court.findAll({ where: { type: { [Op.substring]: type } } })
            res.json(courts)
        } catch (err) {
            res.json({ msg: err })
        }
    }

    static async addCourt(req, res) {
        try {
            const imageName = req.file.filename
            const { courtName, type, price } = req.body
            let response = await Court.create({
                courtName: courtName,
                type: type,
                image: imageName || null,
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
            // const imageName = req.file.filename
            const { courtName, type, price } = req.body
            let response = ''

            if (req.file === undefined) {
                response = await Court.update({ courtName, type, price }, { where: { id: id } })
            } else {
                const image = req.file.filename
                response = await Court.update({ courtName, type, image, price }, { where: { id: id } })
            }

            res.json(response)
        } catch (err) {
            res.json({ msg: err })
        }
    }
}

module.exports = CourtController
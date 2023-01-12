const { Member } = require('../models')

class MemberController {
    static async getMember(req, res) {
        try {
            let members = await Member.findAll()
            res.json(members)
        } catch (err) {
            res.json({ msg: err })
        }
    }

    static async addMember(req, res) {
        try {
            const { name, phone, profilImage, userName, password } = req.body
            let response = await Member.create({
                name: name,
                phone: phone,
                profilImage: profilImage || null,
                userName: userName,
                password: password
            })
            res.json(response)
        } catch (err) {
            res.json({ msg: err })
        }
    }

    static async deleteMember(req, res) {
        try {
            const id = +req.params.memberId
            let response = await Member.destroy({ where: { id: id } })
            res.json({ msg: Boolean(response) })
        } catch (err) {
            res.json({ msg: err })
        }
    }

    static async editMember(req, res) {
        try {
            const id = +req.params.memberId
            const { name, phone, profilImage, userName, password } = req.body

            let response = await Member.update({
                name: name,
                phone: phone,
                profilImage: profilImage || null,
                userName: userName,
                password: password
            }, { where: { id: id } })
            res.json(response)
        } catch (err) {
            res.json({ msg: err })
        }
    }
}

module.exports = MemberController
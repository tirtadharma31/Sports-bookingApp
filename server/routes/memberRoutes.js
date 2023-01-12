const memberRoute = require('express').Router()
const { MemberController } = require('../controllers')

memberRoute.get('/', MemberController.getMember)
memberRoute.post('/add', MemberController.addMember)
memberRoute.delete('/delete/:memberId', MemberController.deleteMember)
memberRoute.put('/edit/:memberId', MemberController.editMember)

module.exports = memberRoute
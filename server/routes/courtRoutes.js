const courtRoute = require('express').Router()
const multer = require('multer')
const { CourtController } = require('../controllers')

const uploadImage = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, './public/courtImage/')
        },
        filename: function (req, file, cb) {
            cb(null, new Date().valueOf() + '_' + file.originalname)
        }
    })
})

courtRoute.get('/', CourtController.getCourt)
courtRoute.get('/info/:courtId', CourtController.infoCourt)
courtRoute.get('/search/:courtType', CourtController.searchCourt)

courtRoute.post('/add', uploadImage.single('imageFile'), CourtController.addCourt)
courtRoute.put('/upload', uploadImage.single('myImage'))

courtRoute.delete('/delete/:courtId', CourtController.deleteCourt)
courtRoute.put('/edit/:courtId', uploadImage.single('image'), CourtController.editCourt)

module.exports = courtRoute
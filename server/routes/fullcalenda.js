const express = require('express')
const router = express.Router();
const {createEvent , listEvent , updateEvent, currentMonth ,updateImage , removeEvent , query} = require('../controllers/fullcalenda')

/* Multer  */
const multer = require('multer')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, 'file-' + Date.now() + '.' +
            file.originalname.split('.')[file.originalname.split('.').length - 1])
    }
})

const upload = multer({ storage: storage }).single('file')
/* Multer  */


//@Endpoint localhost:5000/api/event
//@Method   POST
//@Access   PUBLIC
router.post('/event',createEvent)

//@Endpoint localhost:5000/api/event
//@Method   GET
//@Access   PUBLIC
router.get('/event', listEvent)

//@Endpoint localhost:5000/api/event
//@Method   PUT
//@Access   PUBLIC
router.put('/event', updateEvent)

//@Endpoint localhost:5000/api/event
//@Method   DELETE
//@Access   PUBLIC
router.delete('/event/:id', removeEvent)

//@Endpoint localhost:5000/api/current-month
//@Method   POST
//@Access   PUBLIC
router.post('/current-month', currentMonth)

//@Endpoint localhost:5000/api/current-date
//@Method   GET
//@Access   PUBLIC
// router.get('/current-date', currentEvening)

//@Endpoint     localhost:5000/api/update-image
//@Method       POST
//@Acesss       Public
router.post('/update-image', upload, updateImage)

/*------------------- WorkShop -------------------- */
//@Endpoint     localhost:5000/api/query
//@Method       POST
//@Acesss       Public
router.post('/query', query)

module.exports = router;
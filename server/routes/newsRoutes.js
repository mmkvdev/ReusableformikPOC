const express = require('express')

const NewsCtrl = require('../controllers/newsControllers')

const router = express.Router()

router.post('/news', NewsCtrl.createMovie)
router.put('/news/:id', NewsCtrl.updateMovie)
router.delete('/news/:id', NewsCtrl.deleteMovie)
router.get('/news/:id', NewsCtrl.getMovieById)
router.get('/news', NewsCtrl.getMovies)

module.exports = router
const NewsLetter = require('../models/newsLetterModel')

const createMovie = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide credentials',
        })
    }

    const news = new NewsLetter(body)

    if (!news) {
        return res.status(400).json({ success: false, error: 'Error in News' })
    }

    news
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: news._id,
                message: 'Credentials created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Credentials not created!',
            })
        })
}

const updateMovie = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    NewsLetter.findOne({ _id: req.params.id }, (err, news) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'User not found!',
            })
        }
        news.name = body.name
        news.time = body.time
        news.rating = body.rating
        news
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: news._id,
                    message: 'User updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'User not updated!',
                })
            })
    })
}

const deleteMovie = async (req, res) => {
    await NewsLetter.findOneAndDelete({ _id: req.params.id }, (err, news) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!news) {
            return res
                .status(404)
                .json({ success: false, error: `User not found` })
        }

        return res.status(200).json({ success: true, data: news })
    }).catch(err => console.log(err))
}

const getMovieById = async (req, res) => {
    await NewsLetter.findOne({ _id: req.params.id }, (err, news) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!news) {
            return res
                .status(404)
                .json({ success: false, error: `User not found` })
        }
        return res.status(200).json({ success: true, data: news })
    }).catch(err => console.log(err))
}

const getMovies = async (req, res) => {
    await NewsLetter.find({}, (err, news) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!news.length) {
            return res
                .status(404)
                .json({ success: false, error: `User not found` })
        }
        return res.status(200).json({ success: true, data: news })
    }).catch(err => console.log(err))
}

module.exports = {
    createMovie,
    updateMovie,
    deleteMovie,
    getMovies,
    getMovieById,
}
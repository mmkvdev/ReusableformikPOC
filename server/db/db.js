const mongoose = require('mongoose');

mongoose
    .connect('mongodb+srv://MMK:MMK@7997@cluster0.icslf.mongodb.net/newsletter?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(e => {
        console.error('Connection Error', e.message)
    })

const db = mongoose.connection

module.exports = db
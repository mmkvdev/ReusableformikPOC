const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const apiPort = 3001

const app = express()

const db = require('./db/db')


const NewsRouter = require('./routes/newsRoutes')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())


db.on('error', console.error.bind(console, 'MongoDB Connection Error: '))

app.get('/', (req,res) => {
    res.send('Hello World');
});

app.use('/api', NewsRouter)

app.listen(apiPort, () => console.log(`The server is running on port ${apiPort}`))
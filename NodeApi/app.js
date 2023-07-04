const express = require('express')
const app = express()
const mongoose = require("mongoose")
const morgan = require('morgan')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
const dotenv = require('dotenv')
dotenv.config()

// db
// MONGO_URI=mongodb://localhost/nodeapi
mongoose.connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true }
)
.then(() => console.log('DB connected'))

mongoose.connection.on("error", err => {
    console.log(`DB connection error: ${err.message}`)
})

// Bring routes
const postRoutes = require('./routes/routes')

// Middleware
app.use(morgan('dev'))
app.use(bodyParser.json()) 
app.use('/', postRoutes)

const port = 3000
app.listen(port, () => {
    console.log(`A Node JS is listening on port ${port}`)}
    )
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const itemRoutes = require('./routes/routes')
const cors = require('cors');

// create app
const app = express()

// Allow CORS for requests from the frontend
app.use(cors({
  origin: 'http://localhost:3000', // Specify the frontend URL here
  methods: ['GET', 'POST', 'PATCH', 'DELETE'], // Allow necessary HTTP methods
  credentials: true
}));

// access body
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/items', itemRoutes)

// connect db
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(process.env.PORT, () => {
    console.log(`listening on PORT ${process.env.PORT}`)
})
})
.catch((error) => {
    console.log(error)
})


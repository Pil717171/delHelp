require('dotenv').config()
const express = require('express')
const PORT = process.env.PORT || 5000
const app = express()
const cookieParser = require('cookie-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const router = require('./router/index')

app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use('/api', router)

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => console.log(`Server is enabled on ${PORT} port`))
    } catch (e) {
        console.log(e, 'Something went wrong')
    }
}

start()

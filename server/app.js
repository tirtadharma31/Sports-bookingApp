const express = require('express')
const path = require('path')
require('dotenv').config({ path: path.resolve('./.env') })

const app = express()
const port = process.env.PORT || 3000

//config request for front-end
const cors = require('cors')
app.use(cors())

// config for request json
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + "/public"))

const routes = require('./routes')
app.use(routes)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
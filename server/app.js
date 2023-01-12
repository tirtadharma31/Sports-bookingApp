const express = require('express')
const path = require('path')
require('dotenv').config({ path: path.resolve('./.env') })

const app = express()
const port = process.env.PORT || 3000

// config for request json
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const routes = require('./routes')
app.use(routes)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes')

const app = express()

app.use(bodyParser.json())

app.use('/', routes)

app.listen(process.env.PORT || 3000, () => {
  console.log('Server started')
})



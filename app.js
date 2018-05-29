const express = require('express')
const swig = require('swig')

const app = express()

app.get('/', (req, res, next) => {
  res.end('<h1>hello</h1>')
})

app.listen(8081)
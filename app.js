/* global process */
/* global __dirname */

var express = require('express')
var request = require('request')
var path = require('path')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')

var app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'dist')))

if (!process.env.BITBUCKET_USER) {
  throw new Error('Environment variable "BITBUCKET_USER" is not defined')
}

if (!process.env.BITBUCKET_PASS) {
  throw new Error('Environment variable "BITBUCKET_PASS" is not defined')
}

app.get('/resources/:name', function (req, res, next) {
  var name = req.params.name
  var gitUrl = 'https://bitbucket.ciena.com/projects/NMS_FROST/repos/'
  var raw = '/browse/README.md?at=master&raw'
  request(gitUrl + name + raw, {
    auth: {
      user: process.env.BITBUCKET_USER,
      pass: process.env.BITBUCKET_PASS,
      sendImmediately: true
    }
  }, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      res.send(body)
    } else {
      res.status(404).send('Cannot GET ' + req.originalUrl)
    }
  })
})

app.get(/^(?!.*(\/docs\/))/, function (req, res, next) {
  res.sendFile(path.join(__dirname, '/dist/index.html'))
})
  // catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.status(404).send('Cannot GET ' + req.originalUrl)
})

app.use(function (err, req, res, next) {
  res.status(err.status || 500)
  res.render('error', {
    message: err.message,
    error: {}
  })
})

module.exports = app

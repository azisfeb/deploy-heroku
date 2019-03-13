'use strict'

const path       = require('path')
const express    = require('express')
const mongoose   = require('mongoose')
const bodyParser = require('body-parser')
const logger     = require('morgan')
const CONFIG     = require('../config')

const app = express()

mongoose.connect(`mongodb://${CONFIG.DB_USER}:${CONFIG.DB_PASSWORD}@ds249623.mlab.com:49623/${CONFIG.DB_NAME}`, {
    useNewUrlParser: true
})

app.set('views', path.join(__dirname))
app.set('view engine', 'twig')

app.use(logger('common'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/assets', express.static(path.join(__dirname, '../assets')))

app.get('/backend', (req, res) => res.render('layout-backend', {
    grettings: 'Welcome guyssssss....'
}))

//init and add app so that the middleware function run..
require('./user').init(app)
require('./category').init(app)

module.exports = app
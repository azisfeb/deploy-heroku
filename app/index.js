'use strict'

const path       = require('path')
const express    = require('express')
const mongoose   = require('mongoose')
const bodyParser = require('body-parser')
const logger     = require('morgan')

const app = express()

app.set('views', path.join(__dirname))
app.set('view engine', 'twig')

app.use(logger('common'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/assets', express.static(path.join(__dirname, '../assets')))

app.use('/', (req, res) => res.render('layout-backend', {
    grettings: 'Welcome guyssssss....'
}))

//init and add app so that the middleware function run..
require('./user').init(app)

module.exports = app
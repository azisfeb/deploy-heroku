'use strict'

const path     = require('path')
const express  = require('express')
const mongoose = require('mongoose')

const app = express()

app.set('views', path.join(__dirname))
app.set('view engine', 'twig')

module.exports = app
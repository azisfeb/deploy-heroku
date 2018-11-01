'use strict'

const express  = require('express')
const mongoose = require('mongoose')
const twig     = require('twig')

const app = express()

app.get('/', (req, res) => {
    res.send('hi... this is cool!')
})

module.exports = app
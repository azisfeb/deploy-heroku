'use strict'

const User   = require('../model')
const moment = require('moment')

const create_form = (req, res) => {
    res.render('user/view/create')
}

const create = (req, res) => {
    let currentTime = moment().format('YYYY-MM-DD hh:mm:ss')
    
    let user = new User({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password,
        address: req.body.address,
        created_at: currentTime
    })

    user
     .save()
     .then(() => {
         res.redirect('/backend/user')
     })
     .catch(errors => {
         console.log(errors)
     })
}

module.exports = { create, create_form }
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
        photo: req.body.photo,
        address: req.body.photo,
        create_at: currentTime
    })

    user
     .save()
     .then(() => {
         res.render('user/view/list_user')
     })
     .catch(errors => {
         console.log(errors)
     })
}

module.exports = { create, create_form }
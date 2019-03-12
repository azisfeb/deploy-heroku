'use strict'

const User = require('../model')

const edit_form = (req, res) => {
    let id = req.params.id
    User.findById(id)
    .then(user => {
        res.render('user/view/edit', { user })
    })
    .catch(errors => res.send(errors))
}

const update = (req, res) => {
    let data = {
        name: req.body.name,
        username: req.body.username,
        address: req.body.address
    }

    let id = req.body.id

    if(req.body.password != ''){
        data.password = req.body.password
    }
    
    User.findByIdAndUpdate(id, data)
    .then(data => {
        res.redirect('/backend/user')
    })
    .catch(errors => res.send(errors))
}

module.exports = { edit_form, update }
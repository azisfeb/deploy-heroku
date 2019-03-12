'use strict';

const User = require('../model')

const delete_user = (req, res) => {
    let id = req.params.id

    User.findByIdAndDelete(id)
    .then(user => {
        res.redirect('/backend/user')
    })
    .catch(errors => res.send(errors))
}

module.exports = { delete_user }
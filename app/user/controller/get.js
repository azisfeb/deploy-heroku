'use strict'

const User = require('../model')

const get = (req, res) => {
    User
     .find()
     .then((user) => {
         res.render('user/view/user_list', {
             user
         })
     })
     .catch(errors => {
         console.error(errors)
     })
}

module.exports = get
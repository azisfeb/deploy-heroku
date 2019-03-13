'use strict'

const Category = require('../model')

const openCreate = (req, res) => {
    res.render('category/view/create')
}

const create = (req, res) => {
    let categories = new Category({
        name: req.body.name,
        description: req.body.description
    })

    categories.save()
    .then(data => {
        res.redirect('/backend/category')
    })
    .catch(errors => res.send(errors))
}

module.exports = { openCreate, create }
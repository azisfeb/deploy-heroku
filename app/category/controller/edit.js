'use strict';

const Category = require('../model')

const openEdit = (req, res) => {
    let id = req.params.id
    Category.findById(id)
    .then(categories => {
        res.render('category/view/edit', {
            categories
        })
    })
    .catch(errors => res.send(errors))
}

const update = (req, res) => {
    let id = req.body.id
    let update = {
        name: req.body.name,
        description: req.body.description
    }
    Category.findByIdAndUpdate(id, update)
    .then(data => {
        res.redirect('/backend/category')
    })
    .catch(errors => res.send(errors))
}

module.exports = { openEdit, update }
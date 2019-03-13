'use strict';

const Category = require('../model')

const deleteCategory = (req, res) => {
    let id = req.params.id
    Category.findByIdAndDelete(id)
    .then(data => {
        res.redirect('/backend/category')
    })
    .catch(errors => res.send(errors))
}

module.exports = deleteCategory
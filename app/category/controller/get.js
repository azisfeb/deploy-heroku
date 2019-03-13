'use strict';

const Category = require('../model')

const getCategory = (req, res) => {
    Category.find()
    .then(categories => {
        res.render('category/view/index', {
            categories
        })
    })
    .catch(errors => res.send(errors))
}

module.exports = getCategory
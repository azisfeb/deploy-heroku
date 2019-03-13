'use strict';

const controller = require('./controller')

const initCategory = (app) => {
    app.get('/backend/category', controller._get)
    app.get('/backend/category/create', controller._openCreate)
    app.post('/backend/category/create', controller._create)
    app.get('/backend/category/edit/(:id)', controller._openEdit)
    app.post('/backend/category/update', controller._update)
    app.get('/backend/category/delete/(:id)', controller._delete)
}

module.exports = initCategory
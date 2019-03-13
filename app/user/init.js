'use strict'

const controller = require('./controller')

const initUser = (app) => {
    //set router
    app.get('/backend/user', controller._get)
    app.get('/backend/user/create', controller._openCreate)
    app.post('/backend/user/create', controller._create)
    app.get('/backend/user/edit/(:id)', controller._openEdit)
    app.post('/backend/user/update', controller._update)
    app.get('/backend/user/delete/(:id)', controller._deleteUser)
}

module.exports = initUser
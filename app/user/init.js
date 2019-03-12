'use strict'

const controller = require('./controller')

const initUser = (app) => {
    //set router
    app.get('/backend/user', controller._get)
    app.get('/backend/user/create', controller._openCreate)
    app.post('/backend/user/create', controller._create)
}

module.exports = initUser
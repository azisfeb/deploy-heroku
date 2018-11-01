'use strict'

const controller = require('./controller')

const initUser = (app) => {
    //set router
    app.get('/backend/user', controller._get)
}

module.exports = initUser
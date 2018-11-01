'use strict'

const controller = require('./controller')

initUser = (app) => {
    //set router
    app.get('/backend/user', controller._get)
}
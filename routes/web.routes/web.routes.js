//acesible routes on frontend
const webRoutes = require('express').Router()

const dashboardRoutes = require('./dashboard.routes')
const loginRoutes = require('./login.routes')
const searchRoutes = require('./search.routes')

webRoutes.use(dashboardRoutes)
webRoutes.use(searchRoutes)
webRoutes.use(loginRoutes)

module.exports = webRoutes
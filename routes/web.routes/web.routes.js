//acesible routes on frontend
const webRoutes = require('express').Router()

const dashboardRoutes = require('./dashboard.routes')
const filmRoutes = require('./film.routes')
const loginRoutes = require('./login.routes')
const paswordRoutes = require('./pasword.routes')

webRoutes.use(dashboardRoutes)
webRoutes.use(filmRoutes)
webRoutes.use(loginRoutes)
webRoutes.use(paswordRoutes)

module.exports = webRoutes
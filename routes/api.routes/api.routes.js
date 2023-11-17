// internal api routes
const apiRoutes = require('express').Router()

const userRoutes = require('./user.routes')
const favouritesRoutes = require('./favourites.routes')

apiRoutes.use(userRoutes)
apiRoutes.use(favouritesRoutes)

module.exports = apiRoutes
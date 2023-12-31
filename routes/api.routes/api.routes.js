// internal api routes
const apiRoutes = require('express').Router()

const userRoutes = require('./user.routes')
const moviesRoutes = require('./mispeliculas.routes')
const AdminMoviesRoutes = require('./adminMovies.routes')


apiRoutes.use(userRoutes)
apiRoutes.use(moviesRoutes)
apiRoutes.use(AdminMoviesRoutes)

module.exports = apiRoutes
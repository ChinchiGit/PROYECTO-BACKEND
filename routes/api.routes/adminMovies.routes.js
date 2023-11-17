// CRUD adminMovies
const adminMoviesRoutes = require('express').Router()
const adminMoviesController = require('../../controllers/adminMovies.controllers')

//para recibir el trabajo delegado de la busqueda en mongo
adminMoviesRoutes.get('/adminMovies/:title',adminMoviesController.searchAdminMovie)

//crud mongo
adminMoviesRoutes.get('/adminMovies',adminMoviesController.readAdminMovies)

adminMoviesRoutes.post('/adminMovies',adminMoviesController.createAdminMovies)

adminMoviesRoutes.put('/adminMovies',adminMoviesController.updateAdminMovies)

adminMoviesRoutes.delete('/adminMovies',adminMoviesController.deleteAdminMovies)



module.exports = adminMoviesRoutes
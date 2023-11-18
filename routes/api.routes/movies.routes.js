// CRUD movies
const moviesRouter = require('express').Router()
const moviesController = require('../../controllers/movies.controllers')


//[GET]/readMovies - SQL
moviesRouter.get('/movies',moviesController.readMovies)

//[POST] /createMovies - SQL 
moviesRouter.post('/movies',moviesController.createMovies)

//[PUT] /editMovies - SQL 
moviesRouter.put('/movies',moviesController.updateMovies) // no se si se va a usar

//[DELETE] /removeMovies - SQL 
moviesRouter.delete('/movies',moviesController.deleteMovies)


module.exports = moviesRouter
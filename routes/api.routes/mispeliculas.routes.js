// CRUD USERS
const userRoutes = require('express').Router()

const misPeliculasController = require('../../controllers/mispeliculas.controller')

//[GET] /api/mispeliculas
userRoutes.get('/mispeliculas', misPeliculasController.readMovies)
//misPeliculasController.readMovies

//[POST] /createFavMovie - SQL 
userRoutes.post('/mispeliculas/createFavMovie', misPeliculasController.createFavMovie)

//[DELETE] /deleteFavMovie - SQL 
userRoutes.delete('/mispeliculas/delete',misPeliculasController.deleteFavMovie)

module.exports = userRoutes
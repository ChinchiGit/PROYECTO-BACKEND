// CRUD USERS
const userRoutes = require('express').Router()

const misPeliculasController = require('../../controllers/mispeliculas.controller')

//[GET] /readMovies
// userRoutes.get('/mispeliculas/all', misPeliculasController.getAllUsers)

//[POST] /createFavMovie - SQL 
userRoutes.post('/mispeliculas/createFavMovie', misPeliculasController.createFavMovie)

//[DELETE] /deleteFavMovie - SQL 
// userRoutes.delete('/user/deleteFavMovie',usersController.deleteUser)



module.exports = userRoutes
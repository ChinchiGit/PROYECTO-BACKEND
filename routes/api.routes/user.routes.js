// CRUD USERS
const userRoutes = require('express').Router()

const usersController = require('../../controllers/users.controller')

//[GET] /getAllUsers
userRoutes.get('/user/all', usersController.getAllUsers)

//[GET]/readUser - SQL
userRoutes.get('/user/:id',usersController.readUser)

//[POST] /createUser - SQL 
userRoutes.post('/user/createUser',usersController.createUser)

 //[PUT] /editUser - SQL 
 userRoutes.put('/user/updateUser',usersController.updateUser) // no se si se va a usar

//[DELETE] /removeUser - SQL 
userRoutes.delete('/user/deleteUser',usersController.deleteUser)



module.exports = userRoutes
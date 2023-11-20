// CRUD USERS
const userRoutes = require('express').Router()

const usersController = require('../../controllers/user.controller')


//[GET]/readUser - SQL
userRoutes.get('/user',usersController.readUser)

//[POST] /createUser - SQL 
userRoutes.post('/user',usersController.createUser)

//[PUT] /editUser - SQL 
userRoutes.put('/user',usersController.updateUser) // no se si se va a usar

//[DELETE] /removeUser - SQL 
userRoutes.delete('/user',usersController.deleteUser)



module.exports = userRoutes
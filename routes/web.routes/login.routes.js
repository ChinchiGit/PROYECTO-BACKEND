const loginRouter = require('express').Router()

const loginController = require('../../controllers/login.controller')

loginRouter.get('/login',loginController.displayLogin)

loginRouter.post('/login',loginController.login)

loginRouter.get('/singup',loginController.displaySingUp)

loginRouter.post('/singup',loginController.singUp)

loginRouter.post('/logout',loginController.logout)


module.exports = loginRouter
const loginRouter = require('express').Router()

const loginController = require('../../controllers/login.controller')

loginRouter.get('/login',loginController.displayLogin)

loginRouter.post('/login',loginController.login)

loginRouter.get('/signup',loginController.displaySignUp)

loginRouter.post('/signup',loginController.signUp)

loginRouter.post('/logout',loginController.logout)


module.exports = loginRouter
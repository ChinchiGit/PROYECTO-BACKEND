const loginRouter = require('express').Router()
const passport = require("passport");

require("../../config/auth");

const loginController = require('../../controllers/login.controller');

loginRouter.get('/login', loginController.displayLogin)

loginRouter.get('/signup', loginController.displaySignUp)

loginRouter.get("/auth/google", passport.authenticate("google", { scope: ['email', 'profile'], prompt: "select_account" }));

loginRouter.get("/google/callBack?",
    //middleware pasport con funcion fallo
    passport.authenticate('google', { failureRedirect: '/auth/failure' }),
    //Función exitosa
    loginController.signUp
);

//for development
loginRouter.get("/dashboard", (req, res) => {
    res.send("Welcome to your dashboard! You are now authenticated with google! <br><br> <a href='/logout'>Click here to logout!</a>");
})

//Definimos una ruta en caso de que la autenticación falle.
loginRouter.get('/auth/failure', (req, res) => {
    res.send('Something went wrong..')
});

//Definimos la ruta de logout, donde eliminamos la sesión y limpiamos el token de las cookies.
loginRouter.get('/logout', loginController.logout);

loginRouter.get('/middleViewLogin',(req,res)=>{
    res.render('middleViewLogin')
})


module.exports = loginRouter
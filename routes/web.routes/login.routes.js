const loginRouter = require('express').Router()
const jwt = require("jsonwebtoken");
const passport = require("passport");
const session = require("express-session");
const usersModel = require("../../models/users.model");
require("../../config/auth");

const loginController = require('../../controllers/login.controller')

loginRouter.get('/login', loginController.displayLogin)

loginRouter.post('/login', loginController.login)

loginRouter.get('/signup', loginController.displaySignUp)

loginRouter.post('/signup', loginController.signUp)

loginRouter.post('/logout', loginController.logout)
//

loginRouter.get("/auth/google", passport.authenticate("google", { scope: ['email', 'profile'], prompt: "select_account" }));
loginRouter.get("/google/callBack?",
    //Función de fallo
    passport.authenticate('google', { failureRedirect: '/auth/failure' }),
    //Función exitosa
    async (req, res) => {
        //En el cuerpo de esta función podemos almacenar usuarios en nuestra bbdd con el objeto que nos proporciona req.user (Para ello es necesario hacer la función asíncrona)
        try {
            //console.log(req.user._json)
            console.log(req.user._json.email,req.user._json.sub,true)
            const data = {email:req.user._json.email,id:req.user._json.sub,admin:false}
            let answer = await usersModel.create(data);
            
        } catch (error) {
            console.log(`ERROR: ${error.stack}`);
            res.status(400).json({ msj: `ERROR: ${error.stack}` });
        }
        //Estos son los pasos para crear un token si la autenticación es exitosa
        const payload = {
            //save here data
            check: true
        };
        const token = jwt.sign(payload, `secret_key`, {
            expiresIn: "25m"
        });

        console.log(token);
        //Almacenamos el token en las cookies
        res.cookie("access-token", token, {
            httpOnly: true,
            sameSite: "strict",
        }).redirect("/dashboard");
    });


loginRouter.get("/dashboard", (req, res) => {
    res.send("Welcome to your dashboard! You are now authenticated with google! <br><br> <a href='/logout'>Click here to logout!</a>");

})

//Definimos una ruta en caso de que la autenticación falle.
loginRouter.get('/auth/failure', (req, res) => {
    res.send('Something went wrong..')
});

//Definimos la ruta de logout, donde eliminamos la sesión y limpiamos el token de las cookies.
loginRouter.get('/logout', (req, res) => {
    req.logout(function (err) {
        if (err) { return next(err); }
        req.session.destroy();
        res.clearCookie("access-token").render("logout")
    });

});


module.exports = loginRouter
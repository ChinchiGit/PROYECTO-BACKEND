const loginRouter = require('express').Router()
const passport = require("passport");
const jwt = require("jsonwebtoken");
const usersModel = require('../../models/users.model')

require("../../config/auth");

const loginController = require('../../controllers/login.controller');

loginRouter.get('/login', loginController.displayLogin)

loginRouter.get('/signup', loginController.displaySignUp)

loginRouter.get("/auth/google", passport.authenticate("google", { scope: ['email', 'profile'], prompt: "select_account" }));

loginRouter.get("/google/callBack?",
    //middleware pasport con funcion fallo
    passport.authenticate('google', { failureRedirect: '/auth/failure' }),
    //Función exitosa
    async (req, res) => {

        //Estos son los pasos para crear un token si la autenticación es exitosa
        const payload = {
            //save here data
            id_user:req.user._json.sub,
            check: true
        };
        const token = jwt.sign(payload, `secret_key`, {
            expiresIn: "20m"
        });

        // console.log(token);
        //Almacenamos el token en las cookies
        res.cookie("access-token", token, {
            httpOnly: true,
            sameSite: "strict",
        })

        //En el cuerpo de esta función podemos almacenar usuarios en nuestra bbdd con el objeto que nos proporciona req.user (Para ello es necesario hacer la función asíncrona)
        try {
            // console.log(req.user._json.email,req.user._json.sub,true)
            const data = {email:req.user._json.email,id:req.user._json.sub,admin:true}
            const tmpuser = await usersModel.findOne({ where: { email:data.email } })
            //buscamos si existe el usuario
            if(tmpuser){
                //si exsite comprobamos si es admin o no
                if(tmpuser.admin){
                    res.redirect("/middleViewLogin");
                }else{
                    res.redirect("/dashboardUser");
                }
            }else{
                //si no existe creamos user
                //console.log('creacion user sql');
                let answer = await usersModel.create(data);
                res.redirect("/dashboardUser");
            }
        } catch (error) {
            console.log(`ERROR: ${error.stack}`);
            res.status(400).json({ msj: `ERROR: ${error.stack}` });
        }        
    });


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
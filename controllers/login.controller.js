const usersModel = require("../models/users.model");
const jwt = require("jsonwebtoken");

const displayLogin = (req, res) => {
    res.render('login.pug')
}

const displaySignUp = (req, res) => {
    //console.log('llega a display singUP');
    res.render('user_registro.pug')
}

const signUp = async (req, res) => {
    //En el cuerpo de esta función podemos almacenar usuarios en nuestra bbdd con el objeto que nos proporciona req.user (Para ello es necesario hacer la función asíncrona)
    try {
        //console.log(req.user._json)
        //console.log(req.user._json.email,req.user._json.sub,true)
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

    //console.log(token);
    //Almacenamos el token en las cookies
    res.cookie("access-token", token, {
        httpOnly: true,
        sameSite: "strict",
    })

    //En el cuerpo de esta función podemos almacenar usuarios en nuestra bbdd con el objeto que nos proporciona req.user (Para ello es necesario hacer la función asíncrona)
    try {
        //console.log(req.user._json.email,req.user._json.sub,true)
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
            res.redirect("/api/mispeliculas");
        }
    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({ msj: `ERROR: ${error.stack}` });
    }        
}

const logout = (req, res) => {
    req.logout(function (err) {
        if (err) { return next(err); }
        req.session.destroy();
        res.clearCookie("access-token").render("logout")
    }
)};


module.exports = {
    displayLogin,
    displaySignUp,
    signUp,
    logout
}
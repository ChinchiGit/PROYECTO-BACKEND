const express = require('express')
const app = express()
const port = 3000

const jwt = require("jsonwebtoken");
const passport = require("passport");
const session = require("express-session");
require("./config/auth.js");

//Inicializamos passport y la session de passport
app.use(session({ secret: 'SECRET' }));
app.use(passport.initialize());
app.use(passport.session());


// Configuración motor plantilla PUG
app.set('view engine', 'pug');
app.set('views','./views');

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mainRouter = require('./routes/main.routes')

app.use(mainRouter)

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})

module.exports = app
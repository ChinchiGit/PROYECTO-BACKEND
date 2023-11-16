const checkApiKey = function (req, res, next) {
    // Comprobar OAUTH
    // ...
    if ('cokie oauth') {
        next(); // Pasa a la siguiente tarea
    } else {
        //redirect al login
        res.status(401).redirect('/login');
    }
}

module.exports = checkApiKey;
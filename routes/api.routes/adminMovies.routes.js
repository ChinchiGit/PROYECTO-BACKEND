// CRUD adminMovies
const adminMoviesRoutes = require('express').Router()

const adminMoviesController = require('../../controllers/adminMovies.controller')

//crud mongo
adminMoviesRoutes.get('/adminMovies',async (req,res)=>{
    try {
        let resultados = await adminMoviesController.readAdminMovies()
        if (resultados !== null) {
            //console.log(resultados);
            res.render("lista_peliculas_admin",{resultados});
        } else {
            console.log('error pelisadmin'); 
            res.status(404).json({ message: "Film not found" })
        }
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({msj:`ERROR: ${error.stack}`});
    }
})

adminMoviesRoutes.post('/adminMovies',adminMoviesController.createAdminMovies)


//html forms dont like put and delete

adminMoviesRoutes.post('/adminMovies/put',adminMoviesController.updateAdminMovies)

adminMoviesRoutes.post('/adminMovies/delete',adminMoviesController.deleteAdminMovies)

//adminMoviesRoutes.put('/adminMovies',adminMoviesController.updateAdminMovies)

//adminMoviesRoutes.delete('/adminMovies',adminMoviesController.deleteAdminMovies)


module.exports = adminMoviesRoutes
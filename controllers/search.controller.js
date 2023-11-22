const { getFetch, getDetailsFetch } = require('../utils/fetchFilms');

const displaySearchScreen = (req,res)=>{
        res.render('buscador.pug')
}

const searchMovieBytitle = async (req, res) => {
    try {
        let resultados = await getFetch(req.params.title)
        //console.log(peliObtenida);
        if (resultados !== null) {
            //limpiar videojuegos y demas del array de resultados
            let arrsearch = resultados['Search']
            console.log('antes',arrsearch);
            let pelis = arrsearch.filter((peli)=> peli.Type == 'movie')
            resultados['Search'] = pelis
            console.log('despues',arrsearch);
            res.render("lista_peliculas", {resultados});
        } else {
            
            //introducir aqui busqueda en la BBDD MONGO creadas por el admin 
            // res.status(404).json({ message: "Film not found" })
        }
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({msj:`ERROR: ${error.stack}`});
    }
};

const userPost = (req, res)=>{
    res.redirect(`/search/${req.body.title}`);
};

const displayFilDetails = async (req, res) => {
    try{ 
        let peliSeleccionada = await getDetailsFetch(req.params.id)
        // console.log(peliObtenida);
        if (peliSeleccionada !== null) {
            res.render("elegida_pelicula", {peliSeleccionada});

        } else {
            //introducir aqui busqueda en la BBDD MONGO creadas por el admin 
            res.status(404).json({ message: "Film not found" })
        }
    } 
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({msj:`ERROR: ${error.stack}`});
    }
};

module.exports = {
    displaySearchScreen,
    searchMovieBytitle,
    userPost,
    displayFilDetails
}
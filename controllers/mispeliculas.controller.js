const cookieParser = require("cookie-parser");
const jwt = require('jsonwebtoken');
const misPeliculasModel = require("../models/mispeliculas.model");
const { getFetch , getDetailsFetch} = require('../utils/fetchFilms')


const readMovies = async (req, res) => {
  
  const token = req.cookies["access-token"];

  const decoded = jwt.decode(token); // ID user

  console.log(res);
  
  try {
    let movies = await misPeliculasModel.findAll({ where: { idUser: decoded.id_user } });
    console.log(movies);
    let peliSeleccionada = []
    for (let i=0; i<movies.length; i++){
      let fetchFavoritos = await getDetailsFetch(movies[i].idFavMovie);
      peliSeleccionada.push(fetchFavoritos);
    }
    
    res.render("user_mispeliculas", {peliSeleccionada});
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(400).json({ msj: `ERROR: ${error.stack}` });
  }
};

const createFavMovie = async (req, res) => {
  try {
    const token = req.cookies["access-token"];

    const decoded = jwt.decode(token); // ID user

    const data = req.body;  
    
    const fav = {
      "idUser" : decoded.id_user,
      "idFavMovie" : data.idFavMovie
    }

    let answer = await misPeliculasModel.create(fav);
    //console.log("favoritos answer -> ",answer);

    res.status(200).json({message:'created'});
    
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(400).json({ msj: `ERROR: ${error.stack}` });
  }
};

const deleteFavMovie = async (req, res) => {
  try {
    let data = req.body;  
    data = data.idFavMovie;

    const token = req.cookies["access-token"];

    const decoded = jwt.decode(token); // ID user

    let borrar = await misPeliculasModel.destroy({where: { idUser: decoded.id_user, idFavMovie: data}});

    //http redirect (da problemas porque viene de un https SSL y no puede hacer el cambio a inseguro)
    // afrontar redirect en front
    res.status(200).json({message:'deleted'});
   
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(400).json({ msj: `ERROR: ${error.stack}` });
  }
};

module.exports = {
    createFavMovie,
    readMovies,
    deleteFavMovie 
  };
  
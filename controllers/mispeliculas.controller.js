const cookieParser = require("cookie-parser");
const jwt = require('jsonwebtoken');
const misPeliculasModel = require("../models/mispeliculas.model");
const { getFetch , getDetailsFetch} = require('../utils/fetchFilms')


const readMovies = async (req, res) => {
  //const id = req.params.id;
  //console.log(req.cookies["access-token"]);
  const token = req.cookies["access-token"];

  console.log("token--> ",token);

/*     {
    id_user: '111033985184608234477',
    check: true,
    iat: 1700740375,
    exp: 1700741575
  }
*/
  const decoded = jwt.decode(token); // ID user
  console.log(decoded);
  try {
    let movies = await misPeliculasModel.findAll({ where: { idUser: decoded.id_user } });
    console.log(movies);
    let peliSeleccionada = []
    for (let i=0; i<movies.length; i++){
      let fetchFavoritos = await getDetailsFetch(movies[i].idFavMovie);
      peliSeleccionada.push(fetchFavoritos);
    }
    console.log(peliSeleccionada);
    res.render("user_mispeliculas", {peliSeleccionada});
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(400).json({ msj: `ERROR: ${error.stack}` });
  }
};

const createFavMovie = async (req, res) => {
  try {
    console.log(req.cookies["access-token"]);
    const token = req.cookies["access-token"];

/*     {
      id_user: '111033985184608234477',
      check: true,
      iat: 1700740375,
      exp: 1700741575
    }
 */
    const decoded = jwt.decode(token); // ID user
    console.log(decoded);


    /*     {
      'idFavMovie': '40f81110-87ba-11ee-84fa-91e9f718b7c4'
  } */
 
    const data = req.body;  
    console.log(data);


/*     {
      'idUser': ???????, //borrar
      'idFavMovie': '40f81110-87ba-11ee-84fa-91e9f718b7c4'
  } */

    const fav = {
      "idUser" : decoded.id_user,
      "idFavMovie" : data.idFavMovie
    }

    console.log(fav);

    let answer = await misPeliculasModel.create(fav);
    res.status(201).json(answer);
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

    // const id = data.id_user;
    // if (id) {
    let borrar = await misPeliculasModel.destroy({where: { idUser: decoded.id_user, idFavMovie: data}});
    //   if (result.deletedCount == 0)
    //     res.status(400).json({ message: `User con ID ${id} no encontrado` });
    //   else
    //     res
    //       .status(200)
    //       .json({ message: "AdminMovie BORRADO", AdminMovie: { data } });
    // } else {
    //   res.status(400).json({ message: "formato de User erroneo" });
    // }
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
  
const misPeliculasModel = require("../models/mispeliculas.model");

const readMovies = async (req, res) => {
  const id = req.params.id;
  try {
    let movies = await moviesModel.findOne({ where: { id_user: id } });
    res.status(200).json(movies);
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(400).json({ msj: `ERROR: ${error.stack}` });
  }
};

const createFavMovie = async (req, res) => {
  try {
    const data = req.body;
    let answer = await misPeliculasModel.create(data);
    res.status(201).json(answer);
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(400).json({ msj: `ERROR: ${error.stack}` });
  }
};

const deleteFavMovie = async (req, res) => {
  try {
    const data = req.body;
    const id = data.id_user;
    if (id) {
      let result = await usersModel.destroy({ where: { id_user: id } });
      if (result.deletedCount == 0)
        res.status(400).json({ message: `User con ID ${id} no encontrado` });
      else
        res
          .status(200)
          .json({ message: "AdminMovie BORRADO", AdminMovie: { data } });
    } else {
      res.status(400).json({ message: "formato de User erroneo" });
    }
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(400).json({ msj: `ERROR: ${error.stack}` });
  }
};

module.exports = {
    createFavMovie 
  };
  
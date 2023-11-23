// const readMovies = async (req, res) => {
//   const id = req.params.id;
//   try {
//     let user = await usersModel.findOne({ where: { id_user: id } });
//     res.status(200).json(user);
//   } catch (error) {
//     console.log(`ERROR: ${error.stack}`);
//     res.status(400).json({ msj: `ERROR: ${error.stack}` });
//   }
// };

// const createMovies = (req, res) => {};

// const deleteMovies = (req, res) => {};

// module.exports = {
//   // readMovies,
//   // createMovies,
//   // deleteMovies
// };

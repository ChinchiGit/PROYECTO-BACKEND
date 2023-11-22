//const usersModel = require("../models/users.model");

const getAllUsers = async (req, res) => {
  try {
    let user = await usersModel.findAll();
    res.status(200).json(user);
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(400).json({ msj: `ERROR: ${error.stack}` });
  }
};

const readUser = async (req, res) => {
  const id = req.params.id;
  try {
    let user = await usersModel.findOne({ where: { id_user: id } });
    res.status(200).json(user);
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(400).json({ msj: `ERROR: ${error.stack}` });
  }
};

const createUser = async (req, res) => {
  try {
    const data = req.body;
    let answer = await usersModel.create(data);
    res.status(201).json(answer);
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(400).json({ msj: `ERROR: ${error.stack}` });
  }
};

const updateUser = async (req, res) => {
  try {
    const data = req.body;
    const id = data.id_user;
    if (id) {
      let result = await usersModel.update(data,{ where: { id_user: id } });
      res
          .status(201)
          .json({ message: "User actualizado", updatedUser: { data } });
      if (result.matchedCount == 0)
        res.status(400).json({ message: `User con ID ${id} no encontrado` });
      else if (result.modifiedCount == 0)
        res.status(400).json({ message: `User con ID ${id} no modificado` });
      else if (result.acknowledged && result.modifiedCount > 0)
        res
          .status(201)
          .json({ message: "User actualizado", updatedUser: { data } });
    } else {
      res.status(400).json({ message: "formato de User erroneo" });
    }
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(400).json({ msj: `ERROR: ${error.stack}` });
  }
};

const deleteUser = async (req, res) => {
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
  readUser,
  createUser,
  getAllUsers,
  updateUser,
  deleteUser,
};

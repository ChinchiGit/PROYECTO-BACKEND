const adminMoviesModel = require('../models/filmAdmin.model');

const searchAdminMovie = async(req,res)=>{
    try {
        const data = req.params;
        if(data.title){
            obj = {Title:data.title}
            let adminMovie = await adminMoviesModel.find(obj)
            res.status(200).json(adminMovie);
        }else{
            res.status(400).json({message: "formato de AdminMovie erroneo"});
        }
       
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({msj:`ERROR: ${error.stack}`});
    }
}

const readAdminMovies = async (req,res)=>{
    try {
        let adminMovies = await adminMoviesModel.find({})
        res.status(200).json(adminMovies);
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({msj:`ERROR: ${error.stack}`});
    }
}

const createAdminMovies = async (req,res)=>{
    try {
        const data = req.body;
        let answer = await new adminMoviesModel(data).save();
        res.status(201).json({message: 'AdminMovie creado', AdminMovie: answer});
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({msj:`ERROR: ${error.stack}`});
    }
}

const updateAdminMovies = async (req,res)=>{
    try {
        const data = req.body
        const id = data._id;
        if(id){
            let result = await adminMoviesModel.updateOne({_id:id},{$set :data})
            if(result.matchedCount == 0)
                res.status(400).json({message: `AdminMovie ${id} no encontrado`});
            else if(result.modifiedCount == 0)
                res.status(400).json({message: `AdminMovie ${id} no modificado`});
            else if(result.acknowledged && result.modifiedCount > 0)
                res.status(201).json({message: "AdminMovie actualizado",AdminMovie:{data}}); 
        }else{
            res.status(400).json({message: "formato de AdminMovie erroneo"});
        }
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({msj:`ERROR: ${error.stack}`});
    }
}

const deleteAdminMovies = async (req,res)=>{
    try {
        const data = req.body
        const id = data._id;
        if(id){
            let result = await adminMoviesModel.deleteOne({company_name:id})
            if(result.deletedCount == 0)
                res.status(400).json({message: `AdminMovie ${id} no encontrado`});
            else
                res.status(200).json({message: "AdminMovie BORRADO", AdminMovie:{data}})
        }else{
            res.status(400).json({message: "formato de AdminMovie erroneo"});
        }
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({msj:`ERROR: ${error.stack}`});
    }
}

module.exports = {
    searchAdminMovie,
    readAdminMovies,
    createAdminMovies,
    updateAdminMovies,
    deleteAdminMovies    
}
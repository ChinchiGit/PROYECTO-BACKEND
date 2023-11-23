const adminMoviesModel = require('../models/filmAdmin.model');

const searchAdminMovie = async(title)=>{
    // atiende peticion de busqueda de peli admin si no existe peli en fetch
    try {
        if(title){
            let pelisAdmin = await adminMoviesModel.find({Title:title})
            //console.log(pelisAdmin);
            return pelisAdmin
        }else{
            return []
        }
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
    }
}

const readAdminMovies = async ()=>{
    try {
        let resultado = {}
        let adminMovies = await adminMoviesModel.find({})
        //console.log('readadminvomvies' ,adminMovies);
        if(adminMovies){
            resultado['Search'] = adminMovies
        }else{
            resultado['Search'] = []
        }
        return resultado
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
    }
}

const createAdminMovies = async (req,res)=>{
    try {
        const data = req.body;
        try {
            let answer = await new adminMoviesModel(data).save();
            if(answer){
                if(answer._id){
                    console.log('string answer -> ',answer);
                    res.status(201).render('redirectOnMs',{texto:'Creada',pelicula:answer})
                }else{
                    let msg = 'error en creacion'
                    res.status(400).render('400',{message:msg,lugar:'creacion peli'})
                }
            }else{
                let msg = 'error en creacion'
                res.status(400).render('400',{message: msg,lugar:'creacion peli'})
            }
        } catch (error) {
            let msg = 'error en creacion titulo de pelicula duplicado intentalo de nuevo'
            res.status(400).render('400',{message: msg,lugar:'creacion peli'})
        }
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
    }
}

const updateAdminMovies = async (req,res)=>{
    //console.log('updateAdminMovies ?');
    try {
        const data = req.body
        let peli = null
        //console.log(data);
        try{
            peli = await adminMoviesModel.findOne({Title:data.Title})
        }catch(error){
            console.log(`internal mongo error on find new title: ${error.stack}`);
        }
        if(peli){
            res.render('redirectOnMs',{texto:'NO editada , no existe o el tiitulo nuevo esta utilizado por otra pelicula',pelicula:null});
        }else{
            if(data.oldTitle){
                let {oldTitle,...newData}=data
                let result = await adminMoviesModel.updateOne({Title:oldTitle},{$set :newData})
                if(result.matchedCount == 0)
                    res.render('redirectOnMs',{texto:'No encontrada',pelicula:null});
                else if(result.modifiedCount == 0)
                    res.render('redirectOnMs',{texto:'No modificada',pelicula:null});
                else if(result.acknowledged && result.modifiedCount > 0)
                    res.render('redirectOnMs',{texto:'Editada',pelicula:newData}); 
            }else{
                res.render('redirectOnMs',{texto:'Formato incorrecto',pelicula:null});
            }
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
        //console.log(data);
        if(data.Title){
            let peli = await adminMoviesModel.findOne({Title:data.Title})
            let result = await adminMoviesModel.deleteOne({Title:data.Title})
            if(result.deletedCount == 0)
                res.render('redirectOnMs',{texto:'No encontrada',pelicula:null});
            else
                res.render('redirectOnMs',{texto:'Borrada',pelicula:peli});
        }else{
            res.render('redirectOnMs',{texto:'Formato incorrecto',pelicula:null});
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
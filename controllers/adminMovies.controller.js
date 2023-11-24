const adminMoviesModel = require('../models/filmAdmin.model');

/** 
* @async 
* @method searchAdminMovie
* @description method for finding admin created movies by title
* @param {String} title alphanumeric string
* @returns array of matched movies 
* @example searchAdminMovie('Batman')
*/
const searchAdminMovie = async(title)=>{
    // atiende peticion de busqueda de peli admin si no existe peli en fetch
    try {
        if(title){
            let pelisAdmin = await adminMoviesModel.find({Title:title})
            return pelisAdmin
        }else{
            return []
        }
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
    }
}

/** 
* @async 
* @method readAdminMovies
* @description method read all admin created movies
* @returns objet with property 'Search' with an array of movies
* @example searchAdminMovie('Batman')
*/
const readAdminMovies = async ()=>{
    try {
        let resultado = {}
        let adminMovies = await adminMoviesModel.find({})

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
/** 
* @async 
* @method createAdminMovies
* @description calback method for create admin movie entry
* @params
* @param {request} req request form http , must contain a body with certain atributes : "Title":String,"Poster"URLString,"Year":Number,"Director":String,"Genre":String,"Runtime":Number,"Plot":String,"Actors":String"
* @param {response} res response form http
*/
const createAdminMovies = async (req,res)=>{
    try {
        const data = req.body;
        try {
            let answer = await new adminMoviesModel(data).save();
            if(answer){
                if(answer._id){
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

/** 
* @async
* @method updateAdminMovies
* @description calback for update admin movie entry
* @params
* @param {request} req request form http , must contain a body with certain atributes : "oldTitle":String,"Title":String,"Poster"URLString,"Year":Number,"Director":String,"Genre":String,"Runtime":Number,"Plot":String,"Actors":String"
* @param {response} res response form http
*/
const updateAdminMovies = async (req,res)=>{
    try {
        const data = req.body
        let peli = null
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
/** 
* @async 
* @method deleteAdminMovies
* @description calback for delete admin movie entry
* @params
* @param {request} req request form http , must contain a body with certain atributes : "Title":String
* @param {response} res response 
*/
const deleteAdminMovies = async (req,res)=>{
    try {
        const data = req.body

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
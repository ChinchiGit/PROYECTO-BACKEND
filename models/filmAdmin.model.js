const mongoose = require('mongoose');
//require('../config/db_mongo') // Conexión a BBDD MongoDB

const objectSchema = {
    Title: { 
        type: String, 
        required: true,
        unique: true, 

    },
    Poster: { 
        type: String, 
        required: true 
    },
    Year: { 
        type: Number, 
        required: true 
    },
    Director: {
        type: String,
        required: true
    },
    Genre: {
        type: String,
        required: true
    },
    Runtime: {
        type: String,
        required: true
    },
    Plot: {
        type: String,
        required: true
    }, 
    Actors: {
        type: String,
        required: true
    }
};
// Crear el esquema
const filmAdminSchema = mongoose.Schema(objectSchema);


// Crear el modelo --> Colección
const FilmAdmin = mongoose.model('Peliculas ADMIN', filmAdminSchema);



// Insertar una pelicula

// const p = new FilmAdmin({
//     Title: "Croquetas",
//     Poster: "https://www.consumer.es/app/uploads/fly-images/121792/croquetas-precocinadas-elegir-1200x550-cc.jpg",
//     Year: "2023",
//     Director: "Tu madre",
//     Genre: "Cocina casera",
//     Runtime: "45 min",
//     Plot: "Una rica bechamel, un rebozado crujiente y unos trocitos de jamon. Nadie puede resistirse.",
//     Actors: "Leche, harina, sal, nuez moscada, jamón",
//     imdbID: 3
    // Ratings: [
    //     {
    //         Value: "9/10"
    //     }
    // ],



// });

// // Guardar en la BBDD
// p.save()
// .then((data)=>console.log(data))
// .catch(err=>console.log(err))

// FilmsAdmin.find({}).then(data=>console.log(data)); 



module.exports = FilmAdmin;
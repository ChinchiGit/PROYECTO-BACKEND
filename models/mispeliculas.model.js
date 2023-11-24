

// Requires the object that represents our database
const { db } = require('../config/db_pgsql');

// Requires an object that contains the different data types in Sequelize
const { DataTypes } = require('sequelize');

// Defines the schema using the define method on our db object. Define has as first argument the name of the model and as second argument an object containing the name of the fields and their features. 

const Movies = db.define("Movies", {
    idMovie: {
        field: 'id_movie',
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
    },
    idUser: {
        field: 'id_user',
        type: DataTypes.STRING,
        allowNull: false
    },
    idFavMovie: {
        field: 'id_fav_movie',
        type: DataTypes.STRING,
        allowNull: false
    },

},
    {
        db,
        modelName: 'Movies',
        tableName: 'movies',
        timestamps: 'true',
    }
);

// This syncs our model with our database.
Movies.sync({alter:true});

module.exports = Movies;

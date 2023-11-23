// schemas/autores.js

// Requires the object that represents our database
const { db } = require('../config/db_pgsql');

// Requires an object that contains the different data types in Sequelize
const { DataTypes } = require('sequelize');

// Defines the schema using the define method on our db object. Define has as first argument the name of the model and as second argument an object containing the name of the fields and their features. 

const Users = db.define("Users", {
    idUser: {
        field: 'id_user',
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
    },
    email: {
        field: 'email',
        type: DataTypes.STRING(50),
    },
    admin: {
        field: 'admin',
        type: DataTypes.BOOLEAN,
    },
},
    {
        db,
        modelName: 'Users',
        tableName: 'users',
        timestamps: 'true', 
    }
);

// This syncs our model with our database.
Users.sync({alter:true});

module.exports = Users;

// require('../models/association.model')

const { Sequelize } = require('sequelize');

require('dotenv').config()

// ?sslmode=require esto estaba al final de la URI 

const dbURI = `postgres://${process.env.SQL_USER}:${process.env.SQL_PASSWORD}@${process.env.SQL_HOST}/${process.env.SQL_NAME}`

const db = new Sequelize(dbURI);

const connectSQL = async () => {
    try {
        await db.authenticate();
        console.log('PostgreSQL database connected...');
    } catch (error) {
        console.error('Unable to connect to SQL database:', error);
    }
};

connectSQL();


module.exports = {
    connectSQL,
    db
}


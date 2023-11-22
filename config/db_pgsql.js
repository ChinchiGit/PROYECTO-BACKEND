const { Sequelize } = require('sequelize');

require('dotenv').config()
//?sslmode=rquire
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


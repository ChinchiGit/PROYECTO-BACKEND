const Users = require('./users.model');
const Movies = require('./movies.model');

Users.hasMany(Movies, { foreignKey: 'idUser' });//{foreignKey:'id_user'} works as well 
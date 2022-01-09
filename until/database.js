const Sequelize = require('sequelize');

const sequelize = new Sequelize('bookingdatabase','root','9740532080',{
    dialect : 'mysql',
    host: 'localhost'
});

module.exports= sequelize;
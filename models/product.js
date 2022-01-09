const Sequelize = require('sequelize');

const sequelize = require('../until/database');

const Product = sequelize.define('booking',{
    id: {
        type :Sequelize.INTEGER,
        autoInctrement: true,
        allownull: false,
        primaryKey : true
    },
    name: Sequelize.STRING,
    phonenumber : {
        type: Sequelize.DOUBLE,
        allownull : false
    }
});

module.exports = Product;


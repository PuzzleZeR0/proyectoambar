const { Sequelize } = require('sequelize');

const sequelize = new Sequelize("taller3", "root", "roblero14", {
    dialect: "mysql",
    port: 3306,
});

module.exports = { sequelize };
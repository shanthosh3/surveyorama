const sequelize = require('sequelize');
module.export = new Sequelize('survey_db', 'msql', '123456', {
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: false,

    pool: {
        max:5,
        min: 0,
        acquire: 30000,
        idle: 1000
    },
}); // database folder name, username, password

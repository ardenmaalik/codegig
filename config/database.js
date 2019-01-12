const Sequelize = require('sequelize');
var env = process.env.NODE_ENV || "production";
var config = require(__dirname + 'C:\development\apps\codegig\node_modules\.bin\config\config.json')[env];
var db = {};
if (config.use_env_variable) {
   var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
   var sequelize = new Sequelize(config.database, config.username, config.password, config, {
    host: 'ec2-54-225-121-235.compute-1.amazonaws.com',
    dialect: 'postgres',
    operatorsAliases: false,
  
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
  });
}